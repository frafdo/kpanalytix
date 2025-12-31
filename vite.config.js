import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment - change 'kpanalytix' to your repo name if different
  // Remove or comment this line for custom domain or Vercel/Netlify deployment
  base: '/kpanalytix/',
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
