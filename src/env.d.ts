/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IS_PROD: string
  readonly VITE_GSAP_ANIMATION_DELAY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
