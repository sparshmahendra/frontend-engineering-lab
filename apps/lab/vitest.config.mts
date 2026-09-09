import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

const configFile = fileURLToPath(import.meta.url);
const appRoot = path.dirname(configFile);
const repoRoot = path.resolve(appRoot, "../..");

export default defineConfig({
  root: repoRoot,

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(appRoot, "src"),
      "@repo": repoRoot,
    },
  },

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: path.resolve(appRoot, "vitest.setup.ts"),

    include: [
      "./components/**/*.test.ts",
      "./components/**/*.test.tsx",
    ],
  },
});
