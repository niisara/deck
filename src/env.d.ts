/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IS_PROD: string
  readonly VITE_GSAP_ANIMATION_DELAY: string
  readonly VITE_AZURE_API_KEY: string
  readonly VITE_AZURE_ENDPOINT: string
  readonly VITE_TTS_PROVIDER: 'azure' | 'elevenlabs'
  readonly VITE_ELEVENLABS_API_KEY: string
  readonly VITE_ELEVENLABS_VOICE_ID: string
  readonly VITE_AZURE_STORAGE_ACCOUNT: string
  readonly VITE_AZURE_STORAGE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
