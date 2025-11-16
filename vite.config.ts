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
        ignore: ["src/**/*.stories.tsx", "src/**/*.mdx", "src/**/*.test.ts", "src/**/*.test.tsx"],
      }),
      // 不打包的依赖，由使用方安装
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@iconify/react", // peerDependencies
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
