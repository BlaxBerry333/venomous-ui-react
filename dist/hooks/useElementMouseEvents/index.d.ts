import React from "react";
export default function useElementMouseEvents<T = HTMLElement>({ disabled, onMouseDown, onMouseUp, }: {
    disabled?: boolean;
    onMouseDown?: React.MouseEventHandler<T>;
    onMouseUp?: React.MouseEventHandler<T>;
}): {
    isClicked: boolean;
    MouseDownEvent: React.MouseEventHandler<T>;
    MouseUpEvent: React.MouseEventHandler<T>;
};
//# sourceMappingURL=index.d.ts.map