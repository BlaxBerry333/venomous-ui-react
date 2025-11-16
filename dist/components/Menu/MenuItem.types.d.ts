import type { SpaceFlexProps } from "../../components/Space";
import type { TypographyParagraphProps } from "../../components/Typographies";
export declare const MENU_ITEM_ELEMENT_MAP: {
    readonly LI: "li";
    readonly DT: "dt";
    readonly DD: "dd";
};
export type MenuItemRef = HTMLLIElement | HTMLElement;
export interface MenuItemProps extends Omit<React.HTMLAttributes<MenuItemRef>, "as"> {
    /**
     * The element Tag to be rendered.
     * @default "li"
     */
    as?: (typeof MENU_ITEM_ELEMENT_MAP)[keyof typeof MENU_ITEM_ELEMENT_MAP];
    /**
     * Custom elements to be rendered inside.
     */
    children?: React.ReactNode;
    /**
     * Gap between icon and label (in pixels). Ignored if `children` is provided.
     * @default 8
     */
    spacing?: SpaceFlexProps["spacing"];
    /**
     * Icon element (displayed before label). Ignored if `children` is provided.
     */
    Icon?: React.ReactNode;
    /**
     * Label Text content. Ignored if `children` is provided.
     */
    label?: TypographyParagraphProps["text"];
    /**
     * Text ellipsis rows. Ignored if `children` is provided.
     * - `0`: no ellipsis
     * - `>= 1`: max rows before ellipsis
     * @default 1
     */
    labelEllipsis?: TypographyParagraphProps["ellipsis"];
    /**
     * Label style. Ignored if `children` is provided.
     */
    LabelStyle?: TypographyParagraphProps["style"];
    /**
     * Selected state. Ignored if `children` is provided.
     */
    selected?: boolean;
    /**
     * Disabled state. Ignored if `children` is provided.
     */
    disabled?: boolean;
}
//# sourceMappingURL=MenuItem.types.d.ts.map