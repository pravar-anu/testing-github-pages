import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      ignoreEmptyLines: true,
      reporter: ['text', 'json-summary', 'json'],
      reportOnFailure: true,
      thresholds: {
        lines: 80,
        statements: 80,
        functions: 80,
        branches: 80,
      }
    }
  }
})
