import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/start/plugin";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tanstackStart({
      target: "vercel"
    })
  ]
});
