import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/api': 'http://localhost:3000',
		},
	},
});
