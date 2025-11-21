import type { BoxProps, BoxRef } from "../Box";
export type BackdropRef = BoxRef;
export interface BackdropProps extends Omit<BoxProps, "as" | "maxWidth"> {
    /**
     * Whether the backdrop is open/visible.
     * @default false
     */
    open?: boolean;
    /**
     * The opacity of the backdrop.
     * @default 0.5
     */
    opacity?: number;
}
//# sourceMappingURL=Backdrop.types.d.ts.map