export const THEME_MODES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type TThemeMode = (typeof THEME_MODES)[keyof typeof THEME_MODES];
