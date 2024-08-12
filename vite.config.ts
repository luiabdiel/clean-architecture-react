import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

import path from 'path'

const SETUP_TESTS_DIR = path.resolve(
  __dirname,
  './src/setupTests.ts'
)

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react(), tsconfigPaths()],
    test: {
      setupFiles: [SETUP_TESTS_DIR],
      environment: 'jsdom',
      globals: true,
      cache: false,
    },
  }
})