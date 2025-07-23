import React from "react";
import { TextColors } from "@/utils";
type Props = Partial<{
    color: keyof typeof TextColors;
    ellipsis: number;
}>;
export declare const _defaultTypographyColor: keyof typeof TextColors;
export declare function useTypographyStyle({ color, ellipsis }: Props): {
    fontColor: import("csstype").Property.Color | undefined;
    ellipsisStyles: React.CSSProperties;
};
export {};
//# sourceMappingURL=_useTypographyStyle.d.ts.map