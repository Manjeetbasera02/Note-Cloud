// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',            // Bind to 0.0.0.0 for external access
    port: process.env.FRONTEND_PORT || 5173  // Change the frontend port, 5173 is default for Vite
  }
})
