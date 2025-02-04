import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  root: '.', // Garante que a raiz do projeto está correta
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist', // Define a saída do build
    emptyOutDir: true, // Garante que a pasta dist será limpa antes do build
  }
})

