import type { SemanticColors } from "@/utils";
export declare const TypographyTitleTagMap: {
    readonly h1: "h1";
    readonly h2: "h2";
    readonly h3: "h3";
    readonly h4: "h4";
    readonly h5: "h5";
    readonly h6: "h6";
};
export declare const TypographyTextTagMap: {
    readonly span: "span";
    readonly small: "small";
    readonly strong: "strong";
};
export interface TypographyTitleProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "children"> {
    text: string;
    as?: (typeof TypographyTitleTagMap)[keyof typeof TypographyTitleTagMap];
    ellipsis?: number;
    semanticColor?: keyof typeof SemanticColors;
}
export interface TypographyTextProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
    text: string;
    as?: (typeof TypographyTextTagMap)[keyof typeof TypographyTextTagMap];
    semanticColor?: keyof typeof SemanticColors;
}
export interface TypographyCodeProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
    text: string;
}
export interface TypographyParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
    ellipsis?: number;
    semanticColor?: keyof typeof SemanticColors;
}
//# sourceMappingURL=index.types.d.ts.map