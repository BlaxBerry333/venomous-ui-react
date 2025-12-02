import type { IconProps } from "../../components/Icon";
import { type ButtonProps, type ButtonRef } from "./Button.types";
export type IconButtonRef = ButtonRef;
export interface IconButtonProps extends Omit<ButtonProps, "text"> {
    /**
     * The iconify icon name to display.
     * @required
     */
    icon: IconProps["icon"];
    /**
     * Whether the icon button should be circular.
     * @default false
     */
    circle?: boolean;
}
//# sourceMappingURL=IconButton.types.d.ts.map