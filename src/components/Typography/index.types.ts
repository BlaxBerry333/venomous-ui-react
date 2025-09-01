import type { SemanticColorName } from "@/utils";

export const TypographyTitleTagMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
} as const;

export const TypographyTextTagMap = {
  span: "span",
  small: "small",
  strong: "strong",
} as const;

export interface TypographyTitleProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "children"> {
  text: string;
  as?: (typeof TypographyTitleTagMap)[keyof typeof TypographyTitleTagMap];
  ellipsis?: number; // 省略行数

  semanticColor?: SemanticColorName;
}

export interface TypographyTextProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  text: string;
  as?: (typeof TypographyTextTagMap)[keyof typeof TypographyTextTagMap];
  isEllipsis?: boolean; // 因为是内联元素所以省略行数固定为 1 or 0

  semanticColor?: SemanticColorName;
}

export interface TypographyCodeProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  text: string;
}

export interface TypographyParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  ellipsis?: number; // 省略行数

  semanticColor?: SemanticColorName;
}
