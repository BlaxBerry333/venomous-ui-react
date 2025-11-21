import React from "react";
import { type BadgeProps } from "./Badge.types";
export declare function useBadgeStyles({ variant, placement, offset, color: badgeColor, isStandalone, }: Partial<BadgeProps> & {
    isStandalone?: boolean;
}): {
    componentStyle: React.CSSProperties;
    __: {
        DynamicPlacementStyle: React.CSSProperties;
        DynamicVariantStyles: React.CSSProperties;
    };
};
//# sourceMappingURL=Badge.hooks.d.ts.map