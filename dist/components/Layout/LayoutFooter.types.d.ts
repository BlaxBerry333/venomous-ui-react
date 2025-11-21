import type { BoxProps, BoxRef } from "../../components/Box/Box.types";
export type LayoutFooterRef = BoxRef;
export interface LayoutFooterProps extends Omit<BoxProps, "as" | "children"> {
    /**
     * Copyright element.
     */
    Copyright?: React.ReactNode;
    /**
     * Links element.
     */
    Links?: React.ReactNode;
    /**
     * Custom children (overrides copyright and links).
     */
    children?: React.ReactNode;
}
//# sourceMappingURL=LayoutFooter.types.d.ts.map