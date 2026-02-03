import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For Cloudflare Pages deployment (custom domain)
  base: '/',
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@hooks': '/src/hooks',
      '@data': '/src/data',
      '@locales': '/src/locales',
      '@assets': '/src/assets'
    }
  }
})
