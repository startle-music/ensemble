import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
      lib: {
        entry: 'src/index.jsx',
        name: 'Ensemble',
        fileName: (format) => `ensemble.${format}.js`
      },
    },
    plugins: [react()],
})
