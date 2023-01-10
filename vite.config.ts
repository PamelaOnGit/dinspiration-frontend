import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import React from 'react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })

//! copied code below for proxy 
// ! from w15 04-movie-frontend


// ? add this and then '/api/foods' in the component
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // with options
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
    }
  }
})