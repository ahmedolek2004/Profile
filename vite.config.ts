import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Deployed at https://ahmedolek2004.github.io/Profile/
export default defineConfig({
  base: '/Profile/',
  plugins: [react()],
});
