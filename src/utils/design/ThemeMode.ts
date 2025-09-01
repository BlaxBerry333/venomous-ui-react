export const THEME_MODES = {
  Light: "light",
  Dark: "dark",
} as const;

export type ThemeMode = (typeof THEME_MODES)[keyof typeof THEME_MODES];
