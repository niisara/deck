/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IS_PROD: string
  readonly VITE_GSAP_ANIMATION_DELAY: string
  readonly VITE_AZURE_API_KEY: string
  readonly VITE_AZURE_ENDPOINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
