import type { BoxProps, BoxRef } from "../../components/Box/Box.types";
export type LayoutFooterRef = BoxRef;
export interface LayoutFooterProps extends Omit<BoxProps, "as" | "children"> {
    /**
     * Render copyright element (left side).
     */
    renderCopyright?: () => React.ReactNode;
    /**
     * Render links element (right side).
     */
    renderLinks?: () => React.ReactNode;
    /**
     * Custom children (overrides renderCopyright and renderLinks).
     */
    children?: React.ReactNode;
}
//# sourceMappingURL=LayoutFooter.types.d.ts.map