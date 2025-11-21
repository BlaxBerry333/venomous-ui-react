import type { IconProps } from "../../components/Icon";
import { type ButtonProps, type ButtonRef } from "./Button.types";
export declare const ICON_BUTTON_SHAPE_MAP: {
    readonly CIRCLE: "circle";
    readonly SQUARE: "square";
};
export type IconButtonRef = ButtonRef;
export interface IconButtonProps extends Omit<ButtonProps, "text"> {
    /**
     * The iconify icon name to display.
     * @required
     */
    icon: IconProps["icon"];
    /**
     * The shape of the button.
     * @default "square"
     */
    shape?: (typeof ICON_BUTTON_SHAPE_MAP)[keyof typeof ICON_BUTTON_SHAPE_MAP];
}
//# sourceMappingURL=IconButton.types.d.ts.map