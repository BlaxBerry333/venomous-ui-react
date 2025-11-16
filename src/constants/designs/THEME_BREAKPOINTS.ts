export const THEME_BREAKPOINTS = {
  XS: "XS", // 超小屏 - 手机竖屏
  SM: "SM", // 小屏 - 手机横屏/小平板
  MD: "MD", // 中屏 - 平板
  LG: "LG", // 大屏 - 笔记本/小桌面
  XL: "XL", // 超大屏 - 桌面显示器
  XXL: "XXL", // 超超大屏 - 4K显示器
} as const;

export const THEME_BREAKPOINT_RANGES = {
  [THEME_BREAKPOINTS.XS]: [0, 575], // 0 ~ 575px
  [THEME_BREAKPOINTS.SM]: [576, 767], // 576 ~ 767px
  [THEME_BREAKPOINTS.MD]: [768, 1023], // 768 ~ 1023px
  [THEME_BREAKPOINTS.LG]: [1024, 1365], // 1024 ~ 1365px
  [THEME_BREAKPOINTS.XL]: [1366, 1919], // 1366 ~ 1919px
  [THEME_BREAKPOINTS.XXL]: [1920, Infinity], // 1920px+
} as const;

export type TThemeBreakpoint = (typeof THEME_BREAKPOINTS)[keyof typeof THEME_BREAKPOINTS];
export type TThemeBreakpointRange = (typeof THEME_BREAKPOINT_RANGES)[keyof typeof THEME_BREAKPOINT_RANGES];
