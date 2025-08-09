export const CardTagMap = {
  div: "div",
  section: "section",
  article: "article",
} as const;

export const CardVariantMap = {
  elevated: "elevated",
  outlined: "outlined",
  transparent: "transparent",
  frostedGlass: "frostedGlass",
} as const;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: (typeof CardTagMap)[keyof typeof CardTagMap];
  variant?: keyof typeof CardVariantMap;
}

export interface CardsBookProps extends React.PropsWithChildren {
  className?: string;
  height: number;
  width: number;
  coverImage: null | string;
  title: string;
}

export interface CardsProductProps extends React.PropsWithChildren {
  className?: string;
  title?: string;
  description?: string;
  onCloseMenu: () => void;
  renderMenu: () => React.ReactNode;
}

export interface CardsTitleBlockProps extends React.PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  titleStyle?: React.CSSProperties;
}
