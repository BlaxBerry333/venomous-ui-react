import React from "react";
import { type AvatarProps } from "./Avatar.types";
export declare function useAvatarStyles({ shape, width }: Partial<AvatarProps>): {
    componentStyle: React.CSSProperties;
    insideImageStyle: React.CSSProperties;
    insideIconStyle: React.CSSProperties;
    insideTextStyle: React.CSSProperties;
    __: {
        DynamicVariantStyles: React.CSSProperties;
        DynamicSizeStyles: React.CSSProperties;
    };
};
export declare function useAvatarActions({ src }: Partial<AvatarProps>): {
    isImageLoadError: boolean;
    setIsImageError: React.Dispatch<React.SetStateAction<boolean>>;
};
//# sourceMappingURL=Avatar.hooks.d.ts.map