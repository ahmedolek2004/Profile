import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Deployed at https://ahmedolek2004.github.io/Portfolio_project/
export default defineConfig({
  base: '/Portfolio_project/',
  plugins: [react()],
});
