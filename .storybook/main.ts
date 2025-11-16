import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {
      // ...
    },
  },

  stories: ["../src/**/*.stories.@(ts|tsx)", "../src/**/*.mdx"],

  staticDirs: [{ from: "../public", to: "/" }],

  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
        outline: false,
        measure: false,
        viewport: false,
      },
    },
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "storybook-dark-mode",
  ],
};

export default config;
