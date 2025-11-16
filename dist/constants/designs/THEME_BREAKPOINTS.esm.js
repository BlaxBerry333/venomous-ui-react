const X = {
  XS: "XS",
  // 超小屏 - 手机竖屏
  SM: "SM",
  // 小屏 - 手机横屏/小平板
  MD: "MD",
  // 中屏 - 平板
  LG: "LG",
  // 大屏 - 笔记本/小桌面
  XL: "XL",
  // 超大屏 - 桌面显示器
  XXL: "XXL"
  // 超超大屏 - 4K显示器
}, L = {
  [X.XS]: [0, 575],
  // 0 ~ 575px
  [X.SM]: [576, 767],
  // 576 ~ 767px
  [X.MD]: [768, 1023],
  // 768 ~ 1023px
  [X.LG]: [1024, 1365],
  // 1024 ~ 1365px
  [X.XL]: [1366, 1919],
  // 1366 ~ 1919px
  [X.XXL]: [1920, 1 / 0]
  // 1920px+
};
export {
  X as THEME_BREAKPOINTS,
  L as THEME_BREAKPOINT_RANGES
};
