import React from "react";
import { type CardProps } from "./index.types";
export default function useCardStyle({ variant }: Pick<CardProps, "variant">): {
    backgroundColor: import("csstype").Property.BackgroundColor | undefined;
    borderColor: import("csstype").Property.BorderColor | undefined;
    boxShadow: import("csstype").Property.BoxShadow | undefined;
    commonStyles: React.CSSProperties;
};
//# sourceMappingURL=_useCardStyle.d.ts.map