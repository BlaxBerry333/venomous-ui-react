import React from "react";
export default function useElementHoverEvents<T = HTMLElement>({ disabled, onMouseEnter, onMouseLeave, onLeaveCallback, }: {
    disabled?: boolean;
    onMouseEnter?: React.MouseEventHandler<T>;
    onMouseLeave?: React.MouseEventHandler<T>;
    onLeaveCallback?: () => void;
}): {
    isHovered: boolean;
    MouseEnterEvent: React.MouseEventHandler<T>;
    MouseLeaveEvent: React.MouseEventHandler<T>;
};
//# sourceMappingURL=index.d.ts.map