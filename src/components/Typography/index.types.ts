export interface TypographyTitleProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "children"> {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // <h1~h6>
  ellipsis?: number; // 省略行数
}

export interface TypographyTextProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  text: string;
  as?: "span" | "small" | "strong";
}

export interface TypographyCodeProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
  text: string;
}

export interface TypographyParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  ellipsis?: number; // 省略行数
}
