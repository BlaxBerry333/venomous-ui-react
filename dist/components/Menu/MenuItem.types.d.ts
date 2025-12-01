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
     * Element displayed before label. Ignored if `children` is provided.
     */
    StartIcon?: React.ReactNode;
    /**
     * Element displayed after label. Ignored if `children` is provided.
     */
    EndIcon?: React.ReactNode;
    /**
     * Selected state. Ignored if `children` is provided.
     */
    selected?: boolean;
    /**
     * Disabled state. Ignored if `children` is provided.
     */
    disabled?: boolean;
    /**
     * Sub label text content. Ignored if `children` is provided.
     */
    subLabel?: TypographyParagraphProps["text"];
    /**
     * Sub label text content props. Ignored if `children` is provided.
     */
    SubLabelProps?: Omit<TypographyParagraphProps, "text">;
    /**
     * Label Text content. Ignored if `children` is provided.
     */
    label?: TypographyParagraphProps["text"];
    /**
     * Label Text content props. Ignored if `children` is provided.
     */
    LabelProps?: Omit<TypographyParagraphProps, "text">;
}
//# sourceMappingURL=MenuItem.types.d.ts.map