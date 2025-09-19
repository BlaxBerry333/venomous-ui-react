import React from "react";
import { type SemanticColorName } from "../../utils";
type Props = Partial<{
    ellipsis: number;
    semanticColor?: SemanticColorName;
}>;
export declare function useTypographyStyle({ ellipsis, semanticColor }: Props): {
    fontColor: import("csstype").Property.Color | undefined;
    ellipsisStyles: React.CSSProperties;
};
export {};
//# sourceMappingURL=_useTypographyStyle.d.ts.map