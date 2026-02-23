import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    cssCodeSplit: false,
    minify: false,
    sourcemap: mode === 'development' ? true : false,
    assetsInlineLimit: 0, // Don't inline assets, copy them to dist
  },
}))
