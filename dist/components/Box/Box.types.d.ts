import type { TThemeBreakpoint } from "../../constants";
export declare const BOX_ELEMENT_MAP: {
    readonly DIV: "div";
    readonly SECTION: "section";
    readonly ARTICLE: "article";
    readonly MAIN: "main";
    readonly ASIDE: "aside";
    readonly HEADER: "header";
    readonly FOOTER: "footer";
    readonly NAV: "nav";
};
export type BoxRef = HTMLDivElement | HTMLElement;
export interface BoxProps extends Omit<React.HTMLAttributes<BoxRef>, "as" | "color"> {
    /**
     * The element Tag to be rendered.
     * @default "div"
     */
    as?: (typeof BOX_ELEMENT_MAP)[keyof typeof BOX_ELEMENT_MAP];
    /**
     * The maximum width breakpoint of the box.
     * When set, the box will be centered with `margin: 0 auto`.
     * @default undefined (no max-width constraint)
     */
    maxWidth?: TThemeBreakpoint;
    /**
     * The content to display inside.
     */
    children?: React.ReactNode;
}
//# sourceMappingURL=Box.types.d.ts.map