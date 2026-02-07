/**
 * Cache management utilities for clearing TTS audio cache.
 * Uses the Azure Blob Storage REST API to list and delete blobs.
 */

import { generateAccountSAS } from './azureSAS';

const CONTAINER = 'tts-cache';

interface BlobItem {
  name: string;
  provider: string;
}

/** Get storage account name and key from env */
function getStorageCredentials() {
  const account = import.meta.env.VITE_AZURE_STORAGE_ACCOUNT;
  const key = import.meta.env.VITE_AZURE_STORAGE_KEY;
  if (!account || !key) {
    throw new Error('Storage credentials not configured');
  }
  return { account, key };
}

/**
 * List all cached blobs for a specific provider (or all if provider is omitted).
 * Returns blob names that match the provider prefix.
 */
export async function listCachedBlobs(provider?: string): Promise<BlobItem[]> {
  const { account, key } = getStorageCredentials();
  const sas = await generateAccountSAS(account, key);
  
  const prefix = provider ? `${provider}/` : '';
  const url = `https://${account}.blob.core.windows.net/${CONTAINER}?restype=container&comp=list&prefix=${encodeURIComponent(prefix)}&${sas}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to list blobs: ${response.status}`);
  }
  
  const text = await response.text();
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, 'text/xml');
  
  const blobs: BlobItem[] = [];
  const blobElements = xml.querySelectorAll('Blob > Name');
  
  blobElements.forEach((el) => {
    const name = el.textContent || '';
    const match = name.match(/^([^/]+)\//);
    const blobProvider = match ? match[1] : 'unknown';
    blobs.push({ name, provider: blobProvider });
  });
  
  return blobs;
}

/**
 * Delete a specific blob by name.
 */
export async function deleteCachedBlob(blobName: string): Promise<void> {
  const { account, key } = getStorageCredentials();
  const sas = await generateAccountSAS(account, key);
  
  const url = `https://${account}.blob.core.windows.net/${CONTAINER}/${encodeURIComponent(blobName)}?${sas}`;
  
  const response = await fetch(url, { method: 'DELETE' });
  if (!response.ok && response.status !== 404) {
    throw new Error(`Failed to delete blob: ${response.status}`);
  }
}

/**
 * Clear all cached audio for a specific provider (or all if omitted).
 */
export async function clearCache(provider?: string): Promise<number> {
  const blobs = await listCachedBlobs(provider);
  
  await Promise.all(blobs.map((blob) => deleteCachedBlob(blob.name)));
  
  console.log(`[Cache] Cleared ${blobs.length} cached audio files`);
  return blobs.length;
}

/**
 * Get cache statistics (count and estimated size).
 */
export async function getCacheStats(): Promise<{ count: number; providers: Record<string, number> }> {
  const blobs = await listCachedBlobs();
  
  const providers: Record<string, number> = {};
  blobs.forEach((blob) => {
    providers[blob.provider] = (providers[blob.provider] || 0) + 1;
  });
  
  return {
    count: blobs.length,
    providers,
  };
}
