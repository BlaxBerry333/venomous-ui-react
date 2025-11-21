import React from "react";
import { type ButtonProps } from "./Button.types";
export declare function useButtonStyles({ disabled, loading, variant, color, fullWidth, isHovered, isClicked, }: Partial<ButtonProps> & {
    isHovered?: boolean;
    isClicked?: boolean;
}): {
    componentStyle: React.CSSProperties;
    __: {
        DynamicVariantStyles: React.CSSProperties;
        DynamicStateStyles: React.CSSProperties;
        DynamicFullWidthStyles: React.CSSProperties;
        DynamicHoverStyles: React.CSSProperties;
        DynamicPressedStyles: React.CSSProperties;
    };
};
export declare function useButtonActions({ disabled, loading, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, }: Partial<ButtonProps>): {
    isHovered: boolean;
    isClicked: boolean;
    ElementEvents: {
        onMouseEnter: React.MouseEventHandler<HTMLButtonElement>;
        onMouseLeave: React.MouseEventHandler<HTMLButtonElement>;
        onMouseDown: React.MouseEventHandler<HTMLButtonElement>;
        onMouseUp: React.MouseEventHandler<HTMLButtonElement>;
    };
};
//# sourceMappingURL=Button.hooks.d.ts.map