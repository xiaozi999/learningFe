import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@monorepo/header': path.resolve(__dirname, '../header/index.js'),
      '@monorepo/footer': path.resolve(__dirname, '../footer/index.js'),
      '@monorepo/ui': path.resolve(__dirname, '../ui/index.js'),
      '@monorepo/utils': path.resolve(__dirname, '../utils/index.js'),
    },
  },
  optimizeDeps: {
    include: ['@monorepo/ui', '@monorepo/utils', '@monorepo/header', '@monorepo/footer'],
  },
  build: {
    commonjsOptions: {
      include: [/@monorepo\/.*/, /node_modules/],
    },
  },
})
