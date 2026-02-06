import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Made_by_Mothers-frontend/",
  server: {
    port: 3001,
  },
});
