import React from "react";
import type { MenuItemProps } from "./MenuItem.types";
export declare function useMenuItemStyles({ spacing, selected, disabled, clickable, isHovered, isClicked, }: Partial<MenuItemProps> & {
    clickable?: boolean;
    isHovered?: boolean;
    isClicked?: boolean;
}): {
    componentStyle: React.CSSProperties;
    __: {
        DynamicSelectedStyles: React.CSSProperties;
        DynamicClickableStyles: React.CSSProperties;
    };
};
//# sourceMappingURL=MenuItem.hooks.d.ts.map