import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/3D-React-Fiber-Gallery/",
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
