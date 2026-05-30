import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/rangga-personweb/", // Sesuaikan dengan nama repository Anda di GitHub
})