export enum TypographySizeName {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  text = "text",
  strong = "strong",
  small = "small",
}

export const TypographySize = {
  [TypographySizeName.h1]: "4rem", // 64px
  [TypographySizeName.h2]: "3rem", // 48px
  [TypographySizeName.h3]: "2.25rem", // 36px
  [TypographySizeName.h4]: "1.875rem", // 30px
  [TypographySizeName.h5]: "1.5rem", // 24px
  [TypographySizeName.h6]: "1.25rem", // 20px
  [TypographySizeName.text]: "1rem", // 16px
  [TypographySizeName.strong]: "1rem", // 16px
  [TypographySizeName.small]: "0.75rem", // 14px
} as const;
