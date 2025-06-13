import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',         // Tentukan direktori root
  build: {
    outDir: '../dist'    // Folder build output
  },
  server: {
    port: 5173           // Tentukan port server
  }
});

