import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages (project site) でも動くよう相対パスにしておく
  base: './',
  plugins: [react(), tailwindcss()],
})
