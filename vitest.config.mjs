import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@reach/router": "@gatsbyjs/reach-router",
    },
  },
  esbuild: {
    loader: "jsx",
    include: /.*\.[jt]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".jsx": "jsx",
      },
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.js"],
    exclude: ["tests/e2e/**", "node_modules/**", "dist/**", "public/**"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary", "html"],
      include: ["src/components/**/*.js"],
      exclude: ["**/index.js", "**/*.test.*"],
      thresholds: {
        lines: 80,
        functions: 80,
        statements: 80,
      },
    },
  },
})
