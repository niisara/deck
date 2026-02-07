/**
 * Generate Azure Storage Account-level SAS tokens at runtime
 * using the account key + Web Crypto API (HMAC-SHA256).
 *
 * This avoids managing/renewing static SAS tokens — the key in .env
 * is used to mint short-lived tokens on the fly.
 */

const SAS_VERSION = '2022-11-02';

/** Base64 → ArrayBuffer */
function base64ToArrayBuffer(b64: string): ArrayBuffer {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

/** ArrayBuffer → Base64 */
function arrayBufferToBase64(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/** HMAC-SHA256 sign using Web Crypto */
async function hmacSha256(keyBase64: string, message: string): Promise<string> {
  const keyData = base64ToArrayBuffer(keyBase64);
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const encoded = new TextEncoder().encode(message);
  const signature = await crypto.subtle.sign('HMAC', cryptoKey, encoded);
  return arrayBufferToBase64(signature);
}

/** Format a Date as ISO 8601 UTC string (YYYY-MM-DDTHH:mm:ssZ) */
function formatUTC(d: Date): string {
  return d.toISOString().replace(/\.\d{3}Z$/, 'Z');
}

/**
 * Generate a short-lived Account SAS query string for Azure Blob Storage.
 * Token is valid for 1 hour from now.
 */
export async function generateAccountSAS(accountName: string, accountKey: string): Promise<string> {
  const now = new Date();
  const expiry = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour

  const signedPermissions = 'rwlc';       // read, write, list, create
  const signedService = 'b';              // blob only
  const signedResourceType = 'co';        // container + object
  const signedStart = formatUTC(now);
  const signedExpiry = formatUTC(expiry);
  const signedIP = '';
  const signedProtocol = 'https';
  const signedVersion = SAS_VERSION;
  const signedEncryptionScope = '';

  // String-to-sign for Account SAS
  // https://learn.microsoft.com/en-us/rest/api/storageservices/create-account-sas#constructing-the-signature-string
  const stringToSign = [
    accountName,
    signedPermissions,
    signedService,
    signedResourceType,
    signedStart,
    signedExpiry,
    signedIP,
    signedProtocol,
    signedVersion,
    signedEncryptionScope,
    '', // trailing newline
  ].join('\n');

  const sig = await hmacSha256(accountKey, stringToSign);

  const params = new URLSearchParams({
    sv: signedVersion,
    ss: signedService,
    srt: signedResourceType,
    sp: signedPermissions,
    se: signedExpiry,
    st: signedStart,
    spr: signedProtocol,
    sig: sig,
  });

  return params.toString();
}
