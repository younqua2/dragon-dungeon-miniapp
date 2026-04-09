import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 3456,
        strictPort: true,
        host: true
    }
});
