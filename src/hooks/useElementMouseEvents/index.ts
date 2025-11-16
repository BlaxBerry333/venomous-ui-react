"use client";

import React from "react";

export default function useElementMouseEvents<T = HTMLElement>({
  disabled = false,
  onMouseDown,
  onMouseUp,
}: {
  disabled?: boolean;
  onMouseDown?: React.MouseEventHandler<T>;
  onMouseUp?: React.MouseEventHandler<T>;
}): {
  isClicked: boolean;
  MouseDownEvent: React.MouseEventHandler<T>;
  MouseUpEvent: React.MouseEventHandler<T>;
} {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);

  // ✅ 当 disabled 变为 true 时，重置 active 状态
  React.useEffect(() => {
    if (disabled && isClicked) {
      setIsClicked(false);
    }
  }, [disabled, isClicked]);

  const handleMouseDown: React.MouseEventHandler<T> = React.useCallback(
    (e) => {
      if (!disabled) {
        setIsClicked(true);
      }
      if (onMouseDown) {
        onMouseDown(e);
      }
    },
    [disabled, onMouseDown],
  );

  const handleMouseUp: React.MouseEventHandler<T> = React.useCallback(
    (e) => {
      if (!disabled) {
        setIsClicked(false);
      }
      if (onMouseUp) {
        onMouseUp(e);
      }
    },
    [disabled, onMouseUp],
  );

  return {
    isClicked,
    MouseDownEvent: handleMouseDown,
    MouseUpEvent: handleMouseUp,
  };
}
