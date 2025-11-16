import React from "react";

import { useGlobals } from "@storybook/preview-api";
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";

import { Theme } from "../src/components";
import { BACKGROUND_COLORS, PALETTE_COLORS, THEME_MODES } from "../src/constants";
import { useThemeMode } from "../src/hooks";
import { initDarkModeStyles, injectDocsStyles } from "./utils";

// ============================
// 初始化 Dark Mode 样式监听器
// ============================
initDarkModeStyles();

// ============================
// Storybook
// ============================
const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark, appBg: BACKGROUND_COLORS.dark[1] },
      light: { ...themes.normal, appBg: BACKGROUND_COLORS.light[1] },
    },
  },
  globalTypes: {
    themeColor: {
      description: "Global theme color",
      toolbar: {
        title: "Theme Color",
        icon: "paintbrush",
        items: Object.keys(PALETTE_COLORS).map((key) => ({
          value: key,
          title: key,
          right: { VIPER: "🔴", MAMBA: "🟢", DART_FROG: "🔵", WOLFSBANE: "🟣", OLEANDER: "🌸" }[key],
        })),
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story) => {
      const isDark = useDarkMode();
      const [globals] = useGlobals();
      const themeColor = PALETTE_COLORS[globals.themeColor as keyof typeof PALETTE_COLORS];

      return (
        <Theme.Provider customDesigns={{ PaletteColors: themeColor }}>
          <Theme.ResetCSSStyle />
          <CustomThemeSync isDark={isDark} />
          <Story />
        </Theme.Provider>
      );
    },
  ],
};

export default preview;

// ============================
// 自定义主题同步组件
// ============================
// eslint-disable-next-line react-refresh/only-export-components
const CustomThemeSync: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const { setThemeMode } = useThemeMode();

  React.useEffect(() => {
    setThemeMode(isDark ? THEME_MODES.DARK : THEME_MODES.LIGHT);
    injectDocsStyles(isDark);
  }, [isDark, setThemeMode]);

  return null;
};
