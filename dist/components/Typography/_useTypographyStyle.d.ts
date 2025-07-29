import React from "react";
import { SemanticColors } from "@/utils";
type Props = Partial<{
    ellipsis: number;
    semanticColor?: keyof typeof SemanticColors;
}>;
export declare function useTypographyStyle({ ellipsis, semanticColor }: Props): {
    fontColor: import("csstype").Property.Color | undefined;
    ellipsisStyles: React.CSSProperties;
};
export {};
//# sourceMappingURL=_useTypographyStyle.d.ts.map