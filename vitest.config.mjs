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
    include: /.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.js"],
  },
})
