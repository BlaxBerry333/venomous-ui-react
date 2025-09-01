export const TYPOGRAPHY_SIZE_NAME = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  text: "text",
  strong: "strong",
  small: "small",
} as const;

export const TYPOGRAPHY_SIZES = {
  [TYPOGRAPHY_SIZE_NAME.h1]: "4rem", // 64px
  [TYPOGRAPHY_SIZE_NAME.h2]: "3rem", // 48px
  [TYPOGRAPHY_SIZE_NAME.h3]: "2.25rem", // 36px
  [TYPOGRAPHY_SIZE_NAME.h4]: "1.875rem", // 30px
  [TYPOGRAPHY_SIZE_NAME.h5]: "1.5rem", // 24px
  [TYPOGRAPHY_SIZE_NAME.h6]: "1.25rem", // 20px
  [TYPOGRAPHY_SIZE_NAME.text]: "1rem", // 16px
  [TYPOGRAPHY_SIZE_NAME.strong]: "1rem", // 16px
  [TYPOGRAPHY_SIZE_NAME.small]: "0.75rem", // 14px
} as const;

export type TypographySizeName = (typeof TYPOGRAPHY_SIZE_NAME)[keyof typeof TYPOGRAPHY_SIZE_NAME];

export type TypographySize = (typeof TYPOGRAPHY_SIZES)[keyof typeof TYPOGRAPHY_SIZES];
