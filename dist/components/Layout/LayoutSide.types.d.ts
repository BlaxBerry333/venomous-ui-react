import type { BoxProps, BoxRef } from "../../components/Box/Box.types";
export type LayoutSideRef = BoxRef;
export interface LayoutSideProps extends Omit<BoxProps, "as" | "children"> {
    /**
     * Width when expanded (px).
     * @default 280
     */
    expandedWidth?: number;
    /**
     * Width when collapsed (px).
     * @default 80
     */
    collapsedWidth?: number;
    /**
     * Whether collapsible.
     * @default false
     */
    collapsible?: boolean;
    /**
     * Controlled: collapsed state.
     */
    collapsed?: boolean;
    /**
     * Callback when collapsed state changes.
     */
    onCollapsedChange?: (collapsed: boolean) => void;
    /**
     * Render custom collapse button.
     */
    renderCollapseButton?: (collapsed: boolean, toggle: () => void) => React.ReactNode;
    /**
     * Render header content (e.g., logo, title).
     */
    renderHeader?: (collapsed: boolean) => React.ReactNode;
    /**
     * Render menu content.
     */
    renderMenu?: (collapsed: boolean) => React.ReactNode;
    /**
     * Render bottom content (fixed at bottom, e.g., settings, user profile).
     */
    renderBottom?: (collapsed: boolean) => React.ReactNode;
    /**
     * Content children (alternative to renderMenu).
     */
    children?: React.ReactNode | ((collapsed: boolean) => React.ReactNode);
}
//# sourceMappingURL=LayoutSide.types.d.ts.map