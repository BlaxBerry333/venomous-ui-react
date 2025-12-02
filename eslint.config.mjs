import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import unusedImports from 'eslint-plugin-unused-imports';
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config(
  {
    ignores: [
      "node_modules/",
      "dist",
      "public/",
      ".husky/",
      ".vscode/",
      ".cache/",
      "*.html",
      "*.lock",
      "storybook-static/",
      "coverage/",
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,'unused-imports': unusedImports,
      'react-x': reactX,
      'react-dom': reactDom,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
          disallowTypeAnnotations: true,
        },
      ],
      
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../../'],
              message: 'Please use relative imports instead',
            },
          ],
        },
      ],

      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      'react-hooks/exhaustive-deps': 'off',

      ...reactX.configs["recommended-typescript"].rules,
      "react-x/no-context-provider": "off",
      "react-x/no-forward-ref": "off",

      ...reactDom.configs.recommended.rules,
    },
  },
  {
    // .storybook/ 目录允许使用相对路径导入 src/
    files: [".storybook/**/*.{ts,tsx,js}"],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
  {
    // 测试文件允许使用 React.createRef 和其他测试特有的模式
    files: ["**/*.test.{ts,tsx}"],
    rules: {
      'react-x/no-create-ref': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'react-dom/no-missing-button-type': 'off',
    },
  }
);
