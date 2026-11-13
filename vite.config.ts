import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // The site is served from the root of vhesports.com. Absolute asset paths are
  // required because every page gets its own folder (see scripts/prerender.mjs).
  base: "/",
  plugins: [react()],
});
