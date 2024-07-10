import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        '@emotion/react',
        '@emotion/react/jsx-runtime'
      ]
    }
  }
})
