import React from "react";
type Props = {
    isDisabled: boolean;
};
export default function useElementHover({ isDisabled }: Props): {
    isHovering: boolean;
    handleMouseDown: React.MouseEventHandler<HTMLLIElement>;
    handleMouseUp: React.MouseEventHandler<HTMLLIElement>;
    handleMouseLeave: React.MouseEventHandler<HTMLLIElement>;
};
export {};
//# sourceMappingURL=index.d.ts.map