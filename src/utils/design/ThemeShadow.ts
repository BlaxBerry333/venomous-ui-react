export const ThemeShadow = {
  dark: {
    // 基础阴影 - 按钮、小卡片
    sm: `0 1px 2px 0 rgba(255, 255, 255, 0.8)`,

    // 标准阴影 - 卡片、面板
    base: `
      0 1px 3px 0 rgba(255, 255, 255, 0.9),
      0 0px 2px -1px rgba(255, 255, 255, 0.7)
    `,

    // 内阴影
    inset: `inset 0 2px 4px 0 rgba(255, 255, 255, 0.7)`,
  },

  light: {
    // 基础阴影 - 按钮、小卡片
    sm: `0 1px 2px 0 rgba(0, 0, 0, 0.3)`,

    // 标准阴影 - 卡片、面板
    base: `
      0 1px 3px 0 rgba(0, 0, 0, 0.4),
      0 0px 2px -1px rgba(0, 0, 0, 0.25)
    `,

    // 内阴影
    inset: `inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)`,
  },
} as const;
