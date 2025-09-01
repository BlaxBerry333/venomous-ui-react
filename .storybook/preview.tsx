import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import React from "react";
import { useDarkMode } from "storybook-dark-mode";

import { Theme } from "../src/components";
import { BACKGROUND_COLORS, THEME_MODES } from "../src/utils";

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark, appBg: "#303030" },
      light: { ...themes.normal, appBg: "white" },
    },
  },
  globalTypes: {},
  initialGlobals: {},
  decorators: [
    (Story) => {
      const isDark = useDarkMode();
      return (
        <Theme.Provider>
          <ThemeModeObserver isDark={isDark} />
          <div
            style={{
              minHeight: "100svh",
              maxHeight: "90svh",
              maxWidth: "998px",
              height: "100svh",
              width: "90svw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
              backgroundColor: BACKGROUND_COLORS[isDark ? THEME_MODES.Dark : THEME_MODES.Light].primary,
              overflow: "scroll",
              position: "relative",
            }}
          >
            <Story />
          </div>
        </Theme.Provider>
      );
    },
  ],
};

export default preview;

// eslint-disable-next-line react-refresh/only-export-components
const ThemeModeObserver: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const { setThemeMode } = Theme.useThemeMode();
  React.useEffect(() => {
    setThemeMode(isDark ? THEME_MODES.Dark : THEME_MODES.Light);
  }, [isDark]);
  return null;
};
