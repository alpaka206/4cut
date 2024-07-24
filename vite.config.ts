import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // 모든 코드가 하나의 번들로 합쳐지도록 설정
      },
    },
  },
});
