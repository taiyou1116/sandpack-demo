import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

const rawFilePlugin = {
  name: 'raw-file-loader',
  enforce: 'pre' as const,
  load(id) {
    if (id.endsWith('.view.tsx')) {
      const contents = fs.readFileSync(id, 'utf-8');
      return `export default ${JSON.stringify(contents)}`;
    }
  }
};

export default defineConfig({
  plugins: [
    react(),
    // rawFilePlugin
  ]
});
