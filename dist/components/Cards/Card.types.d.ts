import type { BoxProps, BoxRef } from "../../components/Box/Box.types";
export declare const CARD_VARIANT_MAP: {
    readonly CONTAINED: "contained";
    readonly OUTLINED: "outlined";
    readonly ELEVATED: "elevated";
};
export type CardRef = BoxRef;
export interface CardProps extends Omit<BoxProps, "as" | "maxWidth"> {
    /**
     * The element Tag to be rendered.
     * Only Allowed values: "div" | "section" | "article".
     * @default "div"
     */
    as?: Extract<BoxProps["as"], "div" | "section" | "article">;
    /**
     * Card variant style
     * @default "contained"
     */
    variant?: TCardVariant;
}
export type TCardVariant = (typeof CARD_VARIANT_MAP)[keyof typeof CARD_VARIANT_MAP];
//# sourceMappingURL=Card.types.d.ts.map