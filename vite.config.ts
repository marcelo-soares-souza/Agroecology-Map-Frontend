import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 5173
  },
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src")
    }
  }
});
