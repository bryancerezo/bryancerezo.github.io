import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If your site is at username.github.io/repo-name/, 
  // set base to '/repo-name/'. If using a custom domain, use '/'
  base: '/https://bryancerezo.github.io/', 
})