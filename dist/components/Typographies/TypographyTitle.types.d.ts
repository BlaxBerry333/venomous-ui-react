export declare const TYPOGRAPHY_TITLE_ELEMENT_MAP: {
    readonly H1: "h1";
    readonly H2: "h2";
    readonly H3: "h3";
    readonly H4: "h4";
    readonly H5: "h5";
    readonly H6: "h6";
};
export type TypographyTitleRef = HTMLHeadingElement;
export interface TypographyTitleProps extends Omit<React.HTMLAttributes<TypographyTitleRef>, "as" | "children"> {
    /**
     * The element Tag to be rendered.
     * @default "h3"
     */
    as?: (typeof TYPOGRAPHY_TITLE_ELEMENT_MAP)[keyof typeof TYPOGRAPHY_TITLE_ELEMENT_MAP];
    /**
     * The text to be rendered.
     * @required
     */
    text: string;
    /**
     * The color to be used as text color ( hex string ).
     * @default undefined
     */
    color?: React.CSSProperties["color"];
}
//# sourceMappingURL=TypographyTitle.types.d.ts.map