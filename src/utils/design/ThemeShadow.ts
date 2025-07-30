export const ThemeShadow = {
  dark: {
    // 标准阴影 - 卡片、面板
    primary: `
      0px 0px 4px 0px rgba(255, 255, 255, 0.9),
      0px 0px 2px -1px rgba(255, 255, 255, 0.7)
    `,
    // 基础阴影 - 按钮、小卡片
    secondary: `
      0px 0px 4px 0px rgba(255, 255, 255, 0.10)
    `,
    // 内阴影
    inset: `
      inset 0px 2px 4px 0px rgba(255, 255, 255, 0.7)
    `,
  },

  light: {
    // 标准阴影 - 卡片、面板
    primary: `
      0px 0px 4px 0px rgba(0, 0, 0, 0.4),
      0px 0px 2px -1px rgba(0, 0, 0, 0.25)
    `,
    // 基础阴影 - 按钮、小卡片
    secondary: `
      0px 0px 4px 0px rgba(0, 0, 0, 0.3)
    `,
    // 内阴影
    inset: `
      inset 0px 2px 4px 0px rgba(0, 0, 0, 0.3)
    `,
  },
} as const;
