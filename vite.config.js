import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/kahfi-fortress/', // your repo name
  plugins: [react()],
});
