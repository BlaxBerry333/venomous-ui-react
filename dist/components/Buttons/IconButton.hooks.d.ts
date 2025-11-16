import React from "react";
import { type IconButtonProps } from "./IconButton.types";
export declare function useIconButtonStyles({ disabled, loading, variant, color, shape, isHovered, isClicked, }: Partial<IconButtonProps> & {
    isHovered?: boolean;
    isClicked?: boolean;
}): {
    componentStyle: React.CSSProperties;
    __: {
        DynamicShapeStyles: React.CSSProperties;
        DynamicSizeStyles: React.CSSProperties;
        DynamicVariantStyles: React.CSSProperties;
        DynamicStateStyles: React.CSSProperties;
        DynamicFullWidthStyles: React.CSSProperties;
        DynamicHoverStyles: React.CSSProperties;
        DynamicPressedStyles: React.CSSProperties;
    };
};
//# sourceMappingURL=IconButton.hooks.d.ts.map