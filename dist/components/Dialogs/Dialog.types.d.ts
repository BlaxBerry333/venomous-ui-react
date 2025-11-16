import type { BackdropProps } from "../../components/Backdrop";
import type { BoxProps, BoxRef } from "../../components/Box";
export type DialogRef = BoxRef;
export interface DialogProps extends Omit<BoxProps, "open" | "as"> {
    /**
     * The element Tag to be rendered.
     * @default "div"
     */
    as?: Extract<BoxProps["as"], "div" | "section">;
    /**
     * Whether the dialog is open/visible.
     * @default false
     */
    open?: boolean;
    /**
     * Callback fired when the backdrop is clicked.
     */
    onClickBackdrop?: BackdropProps["onClick"];
    /**
     * Whether clicking the backdrop closes the dialog automatically.
     * @default true
     */
    autoCloseOnClickBackdrop?: boolean;
    /**
     * The maximum width of the dialog.
     * @default "XS"
     */
    maxWidth?: BoxProps["maxWidth"];
}
//# sourceMappingURL=Dialog.types.d.ts.map