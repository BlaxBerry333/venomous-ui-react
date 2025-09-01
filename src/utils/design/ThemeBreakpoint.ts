export const BREAK_POINT_NAMES = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  xxl: "xxl",
} as const;

export const THEME_BREAKPOINTS = {
  [BREAK_POINT_NAMES.xs]: 444,
  [BREAK_POINT_NAMES.sm]: 600,
  [BREAK_POINT_NAMES.md]: 960,
  [BREAK_POINT_NAMES.lg]: 1280,
  [BREAK_POINT_NAMES.xl]: 1920,
  [BREAK_POINT_NAMES.xxl]: 2560,
} as const;

export type BreakPointName = (typeof BREAK_POINT_NAMES)[keyof typeof BREAK_POINT_NAMES];

export type ThemeBreakPoint = (typeof THEME_BREAKPOINTS)[keyof typeof THEME_BREAKPOINTS];
