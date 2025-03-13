import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    build: {
      outDir: mode === 'dev' ? 'dev.windmar.com' : 'windmar.com',
      emptyOutDir: true,
      commonjsOptions: {
        include: [/node_modules/],
        extensions: ['.js', '.jsx'],
        strictRequires: true,
        cache: true,
      },
      target: 'esnext',
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
    esbuild: {
      logLevel: 'error',
      target: 'esnext',
      treeShaking: true,
    }
  }
})
