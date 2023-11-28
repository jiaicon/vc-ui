import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./packages/components/index.js",
      name: "vc-components",
    },
    outDir: "packages/components/lib",
  },
});
