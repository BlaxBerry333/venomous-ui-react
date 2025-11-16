import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./vitest.setup.ts",
    include: ["src/**/*.test.{ts,tsx}"],
    exclude: ["node_modules", "dist", "storybook-static", ".storybook"],
    isolate: false, // 关闭隔离模式，减少内存和 CPU 开销
    fileParallelism: false, // 禁用文件并行，避免进程间通信错误
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      reportsDirectory: "./coverage",
      clean: true, // 每次运行前清理覆盖率报告
      include: [
        "src/components/**/*.{ts,tsx}",
        "src/hooks/**/*.{ts,tsx}",
        "src/tools/**/*.{ts,tsx}",
        "src/constants/**/*.{ts,tsx}",
      ],
      exclude: ["**/*.stories.tsx", "**/*.types.ts", "**/index.ts", "**/*.d.ts"],
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 70,
        statements: 70,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
