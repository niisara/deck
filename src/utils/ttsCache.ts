/**
 * TTS Audio Cache backed by Azure Blob Storage.
 *
 * Generates a SHA-256 hash of (provider + voice + text) to use as the blob name.
 * On speak, checks the cache first — only calls the TTS API on a cache miss,
 * then uploads the result for next time.
 *
 * Uses the storage account key to generate short-lived SAS tokens at runtime.
 */

import { generateAccountSAS } from './azureSAS';

const CONTAINER = 'tts-cache';

/** Cached SAS token + its expiry so we don't regenerate on every call */
let cachedSAS: { token: string; expiresAt: number } | null = null;

/** Build the base URL for a blob inside the tts-cache container */
function blobBaseUrl(): string {
  const account = import.meta.env.VITE_AZURE_STORAGE_ACCOUNT;
  if (!account) throw new Error('VITE_AZURE_STORAGE_ACCOUNT is not configured.');
  return `https://${account}.blob.core.windows.net/${CONTAINER}`;
}

/** Get a SAS token, generating a new one if expired or missing */
async function getSASToken(): Promise<string> {
  const account = import.meta.env.VITE_AZURE_STORAGE_ACCOUNT;
  const key = import.meta.env.VITE_AZURE_STORAGE_KEY;
  if (!account || !key) {
    throw new Error('VITE_AZURE_STORAGE_ACCOUNT and VITE_AZURE_STORAGE_KEY must be configured.');
  }

  // Reuse cached token if still valid (with 5 min buffer)
  if (cachedSAS && cachedSAS.expiresAt > Date.now() + 5 * 60 * 1000) {
    return cachedSAS.token;
  }

  const token = await generateAccountSAS(account, key);
  cachedSAS = { token, expiresAt: Date.now() + 55 * 60 * 1000 }; // ~55 min (token lasts 1h)
  return token;
}

/**
 * Create a deterministic cache key from the TTS parameters.
 * Uses SHA-256 so identical text+provider+voice always maps to the same blob.
 */
export async function ttsCacheKey(
  provider: string,
  voice: string,
  text: string
): Promise<string> {
  const raw = `${provider}::${voice}::${text}`;
  const encoded = new TextEncoder().encode(raw);
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoded);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  return `${provider}/${hex}.mp3`;
}

/**
 * Try to fetch a cached audio blob from Azure Blob Storage.
 * Returns the Blob on hit, or `null` on miss / error.
 */
export async function getCachedAudio(
  cacheKey: string,
  signal?: AbortSignal
): Promise<Blob | null> {
  try {
    const sas = await getSASToken();
    const url = `${blobBaseUrl()}/${cacheKey}?${sas}`;
    const res = await fetch(url, { method: 'GET', signal });

    if (res.ok) {
      console.debug('[TTS Cache] HIT:', cacheKey);
      return res.blob();
    }

    // 404 = cache miss, anything else is unexpected but non-fatal
    if (res.status !== 404) {
      console.warn('[TTS Cache] Unexpected status on GET:', res.status);
    }
    return null;
  } catch (err: any) {
    if (err.name === 'AbortError') throw err;
    console.warn('[TTS Cache] GET failed (non-fatal):', err.message);
    return null;
  }
}

/**
 * Upload an audio blob to Azure Blob Storage for future cache hits.
 * Fire-and-forget — errors are logged but never thrown.
 */
export async function putCachedAudio(
  cacheKey: string,
  audioBlob: Blob
): Promise<void> {
  try {
    const sas = await getSASToken();
    const url = `${blobBaseUrl()}/${cacheKey}?${sas}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'x-ms-blob-type': 'BlockBlob',
        'Content-Type': 'audio/mpeg',
      },
      body: audioBlob,
    });

    if (res.ok) {
      console.debug('[TTS Cache] Stored:', cacheKey);
    } else {
      const body = await res.text().catch(() => '');
      console.warn('[TTS Cache] PUT failed:', res.status, body);
    }
  } catch (err: any) {
    console.warn('[TTS Cache] PUT error (non-fatal):', err.message);
  }
}
