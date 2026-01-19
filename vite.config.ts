import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// File contains vite's configuration for the project.
export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
