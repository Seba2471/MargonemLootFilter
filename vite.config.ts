import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/starter.ts',
      userscript: {
        namespace: 'npm/vite-plugin-monkey',
        match: ['https://*.margonem.pl/'],
        grant: 'none',
      },
    }),
  ],
});
