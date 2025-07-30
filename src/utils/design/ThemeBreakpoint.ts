export enum BreakPointName {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",
}

export const ThemeBreakPoint = {
  [BreakPointName.xs]: 444,
  [BreakPointName.sm]: 600,
  [BreakPointName.md]: 960,
  [BreakPointName.lg]: 1280,
  [BreakPointName.xl]: 1920,
  [BreakPointName.xxl]: 2560,
} as const;
