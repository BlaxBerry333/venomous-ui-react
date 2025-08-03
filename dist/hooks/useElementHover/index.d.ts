import React from "react";
type Props = {
    isDisabled: boolean;
};
export default function useElementHover<T>({ isDisabled }: Props): {
    isHovering: boolean;
    handleMouseDown: React.MouseEventHandler<T>;
    handleMouseUp: React.MouseEventHandler<T>;
    handleMouseLeave: React.MouseEventHandler<T>;
};
export {};
//# sourceMappingURL=index.d.ts.map