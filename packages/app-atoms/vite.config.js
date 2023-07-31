import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/exportable.js",
      name: "Exportable",
      fileName: "exportable",
    },
    rollupOptions: {
      output: {
        format: "iife",
      },
    },
  },
});
