import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'lib/index.ts'),
			name: 'Animated-Fluent-Emojis',
			formats: ['es', 'umd'],
			fileName: (format) => `animated-fluent-emojis.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'react/jsx-runtime': 'jsxRuntime',
				},
			},
		},
		sourcemap: true,
		emptyOutDir: true,
	},
	plugins: [react(), dts({ include: ['lib'], insertTypesEntry: true })],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'lib'),
		},
	},
});
