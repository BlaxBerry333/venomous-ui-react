import type { BackdropProps } from "../../components/Backdrop";
import type { BoxProps, BoxRef } from "../../components/Box";
export declare const DRAWER_PLACEMENT_MAP: {
    readonly TOP: "top";
    readonly BOTTOM: "bottom";
    readonly LEFT: "left";
    readonly RIGHT: "right";
};
export type DrawerRef = BoxRef;
export interface DrawerProps extends Omit<BoxProps, "open" | "as" | "maxWidth"> {
    /**
     * The element Tag to be rendered.
     * @default "div"
     */
    as?: Extract<BoxProps["as"], "div" | "section" | "nav">;
    /**
     * Whether the drawer is open/visible.
     * @default false
     */
    open?: boolean;
    /**
     * The placement of the drawer.
     * @default "left"
     */
    placement?: (typeof DRAWER_PLACEMENT_MAP)[keyof typeof DRAWER_PLACEMENT_MAP];
    /**
     * Callback fired when the backdrop is clicked.
     */
    onClickBackdrop?: BackdropProps["onClick"];
    /**
     * Whether clicking the backdrop triggers the onClickBackdrop callback.
     * @default true
     */
    autoCloseOnClickBackdrop?: boolean;
}
//# sourceMappingURL=Drawer.types.d.ts.map