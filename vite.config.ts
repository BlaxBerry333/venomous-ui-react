import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: false,
      filename: ".debugs/_BUNDLE_ANALYZER.html",
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },

  build: {
    copyPublicDir: false,
    cssCodeSplit: true,
    lib: {
      name: "venomous-ui-react",
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // 不打包的依赖
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react-hook-form",
        "motion",
        "motion-dom",
        "motion-utils",
        "framer-motion",
        "sonner",
        "@iconify/react",
      ],
      output: [
        // dist/[name]/[name].esm.js
        {
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          dir: "dist",
          entryFileNames: "[name].esm.js",
          chunkFileNames: (chunkInfo) => {
            const name = chunkInfo.name || "chunk";
            if (name.includes("__")) return "internal/[name].esm.js";
            return "[name].esm.js";
          },
        },
        // dist/[name]/[name].js
        {
          format: "cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          dir: "dist",
          entryFileNames: "[name].js",
          chunkFileNames: (chunkInfo) => {
            const name = chunkInfo.name || "chunk";
            if (name.includes("__")) return "internal/[name].js";
            return "[name].js";
          },
          exports: "named",
        },
        // dist/components/index.esm.js
        {
          format: "es",
          preserveModules: false,
          dir: "dist/components",
          entryFileNames: "index.esm.js",
          chunkFileNames: "index.chunk.js",
        },
        // dist/components/index.js
        {
          format: "cjs",
          preserveModules: false,
          dir: "dist/components",
          entryFileNames: "index.js",
          chunkFileNames: "index.chunk.js",
          exports: "named",
        },
        // dist/hooks/index.esm.js
        {
          format: "es",
          preserveModules: false,
          dir: "dist/hooks",
          entryFileNames: "index.esm.js",
          chunkFileNames: "index.chunk.js",
        },
        // dist/hooks/index.js
        {
          format: "cjs",
          preserveModules: false,
          dir: "dist/hooks",
          entryFileNames: "index.js",
          chunkFileNames: "index.chunk.js",
          exports: "named",
        },
        // dist/utils/index.esm.js
        {
          format: "es",
          preserveModules: false,
          dir: "dist/utils",
          entryFileNames: "index.esm.js",
          chunkFileNames: "index.chunk.js",
        },
        // dist/utils/index.js
        {
          format: "cjs",
          preserveModules: false,
          dir: "dist/utils",
          entryFileNames: "index.js",
          chunkFileNames: "index.chunk.js",
          exports: "named",
        },
      ],
    },
  },
});
