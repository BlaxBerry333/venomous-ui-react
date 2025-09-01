const x = {
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  xl: "xl",
  xxl: "xxl"
}, l = {
  [x.xs]: 444,
  [x.sm]: 600,
  [x.md]: 960,
  [x.lg]: 1280,
  [x.xl]: 1920,
  [x.xxl]: 2560
};
export {
  x as BREAK_POINT_NAMES,
  l as THEME_BREAKPOINTS
};
