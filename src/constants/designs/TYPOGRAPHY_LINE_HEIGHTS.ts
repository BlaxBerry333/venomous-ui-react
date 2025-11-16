export const TYPOGRAPHY_LINE_HEIGHTS = {
  TITLE: {
    H1: 1.55,
    H2: 1.5,
    H3: 1.45,
    H4: 1.4,
    H5: 1.3,
    H6: 1.2,
  },
  TEXT: {
    LARGE: 1.5, // 偏大正文/引用
    BASE: 1.5, // 标准正文 (基线)
    SMALL: 1.5, // 小号正文/列表项
    CAPTION: 1.5, // 辅助信息/脚注/时间戳
  },
} as const;

export type TypographyLineHeights = typeof TYPOGRAPHY_LINE_HEIGHTS;
