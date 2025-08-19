import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: If you deploy to GitHub Pages at https://<user>.github.io/<repo>/
// set base: '/<repo>/' below. For local/dev/Netlify/Render keep '/'.
export default defineConfig({
  plugins: [react()],
  base: '/'
})
