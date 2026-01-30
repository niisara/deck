import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_IS_PROD': JSON.stringify(process.env.VITE_IS_PROD || 'false')
  },
  build: {
    cssCodeSplit: false,
    minify: false,
    sourcemap: mode === 'development' ? true : false,
    assetsInlineLimit: 0, // Don't inline assets, copy them to dist
  },
}))
