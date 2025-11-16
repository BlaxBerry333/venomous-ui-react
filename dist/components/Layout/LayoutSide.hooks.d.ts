import React from "react";
import type { LayoutSideProps } from "./LayoutSide.types";
export declare function useLayoutSideActions({ collapsed, onCollapsedChange, }: Pick<LayoutSideProps, "collapsed" | "onCollapsedChange">): {
    collapsed: boolean;
    toggle: () => void;
};
export declare function useLayoutSideStyles({ expandedWidth, collapsedWidth, collapsed, }: Pick<LayoutSideProps, "expandedWidth" | "collapsedWidth"> & {
    collapsed: boolean;
}): {
    componentStyle: React.CSSProperties;
    wrapperStyle: React.CSSProperties;
    collapseButtonStyle: React.CSSProperties;
};
//# sourceMappingURL=LayoutSide.hooks.d.ts.map