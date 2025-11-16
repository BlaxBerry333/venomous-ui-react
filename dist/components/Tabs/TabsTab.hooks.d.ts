import React from "react";
import type { TabsTabProps } from "./TabsTab.types";
export declare function useTabsTabStyles({ color, selected, disabled, column, isHovered, isClicked, }: Pick<TabsTabProps, "color" | "selected" | "disabled" | "column"> & {
    isHovered: boolean;
    isClicked: boolean;
}): {
    componentStyle: React.CSSProperties;
    __: {
        DynamicVariantStyles: React.CSSProperties;
        DynamicStateStyles: React.CSSProperties;
        DynamicInteractionStyles: React.CSSProperties;
    };
};
export declare function useTabsTabActions({ value, selected, disabled, onClick, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, }: Pick<TabsTabProps, "value" | "selected" | "disabled" | "onClick" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp">): {
    isHovered: boolean;
    isClicked: boolean;
    handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
    ElementEvents: {
        onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
        onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
        onMouseDown: React.MouseEventHandler<HTMLDivElement>;
        onMouseUp: React.MouseEventHandler<HTMLDivElement>;
    };
};
//# sourceMappingURL=TabsTab.hooks.d.ts.map