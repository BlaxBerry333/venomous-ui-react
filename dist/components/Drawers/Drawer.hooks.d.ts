import React from "react";
import { type DrawerProps } from "./Drawer.types";
export declare function useDrawerStyles({ open, placement }: Partial<DrawerProps>): {
    componentStyle: React.CSSProperties;
    __: {
        DynamicPlacementStyles: React.CSSProperties;
        DynamicTransitionStyles: React.CSSProperties;
        transitionStatus: "entering" | "entered" | "exiting" | "exited";
    };
};
export declare function useDrawerActions({ autoCloseOnClickBackdrop, onClickBackdrop }: Partial<DrawerProps>): {
    handleBackdropClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};
//# sourceMappingURL=Drawer.hooks.d.ts.map