import React from "react";
import type { ChipProps } from "./Chip.types";
export declare function useChipStyles({ clickable, color, isHovered, isClicked, }: Partial<ChipProps> & {
    clickable?: boolean;
    isHovered?: boolean;
    isClicked?: boolean;
}): {
    componentStyle: React.CSSProperties;
    __: {
        DynamicColorStyles: React.CSSProperties;
        DynamicClickableStyles: React.CSSProperties;
        DynamicInteractionStyles: React.CSSProperties;
    };
};
export declare function useChipActions({ clickable, onClick }: Partial<ChipProps> & {
    clickable?: boolean;
}): {
    isHovered: boolean;
    isClicked: boolean;
    ElementEvents: {
        onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
        onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
        onMouseDown: React.MouseEventHandler<HTMLDivElement>;
        onMouseUp: React.MouseEventHandler<HTMLDivElement>;
        onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    } | {
        onMouseEnter?: undefined;
        onMouseLeave?: undefined;
        onMouseDown?: undefined;
        onMouseUp?: undefined;
        onClick?: undefined;
    };
};
//# sourceMappingURL=Chip.hooks.d.ts.map