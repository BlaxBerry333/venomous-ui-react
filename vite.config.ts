import react from "@vitejs/plugin-react-swc";
import { globSync } from "glob";
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
      entry: "", // entry is ignored when rollupOptions.input is used
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      input: globSync("src/**/*.{ts,tsx}", {
        ignore: ["src/**/*.stories.tsx", "src/**/*.mdx"],
      }),
      // 不打包的依赖
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "framer-motion",
        "motion",
        "motion-dom",
        "motion-utils",
        "sonner",
        "@iconify/react",
        "clsx",
      ],
      output: [
        {
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          dir: "dist",
          entryFileNames: "[name].esm.js",
        },
        {
          format: "cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          dir: "dist",
          entryFileNames: "[name].js",
          exports: "named",
        },
      ],
    },
  },
});
