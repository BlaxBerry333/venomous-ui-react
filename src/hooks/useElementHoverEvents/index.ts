"use client";

import React from "react";

export default function useElementHoverEvents<T = HTMLElement>({
  disabled = false,
  onMouseEnter,
  onMouseLeave,
  onLeaveCallback,
}: {
  disabled?: boolean;
  onMouseEnter?: React.MouseEventHandler<T>;
  onMouseLeave?: React.MouseEventHandler<T>;
  onLeaveCallback?: () => void;
}): {
  isHovered: boolean;
  MouseEnterEvent: React.MouseEventHandler<T>;
  MouseLeaveEvent: React.MouseEventHandler<T>;
} {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  // ✅ 当 disabled 变为 true 时，重置 hover 状态
  React.useEffect(() => {
    if (disabled && isHovered) {
      setIsHovered(false);
    }
  }, [disabled, isHovered]);

  const handleMouseEnter: React.MouseEventHandler<T> = React.useCallback(
    (e) => {
      if (!disabled) {
        setIsHovered(true);
      }
      if (onMouseEnter) {
        onMouseEnter(e);
      }
    },
    [disabled, onMouseEnter],
  );

  const handleMouseLeave: React.MouseEventHandler<T> = React.useCallback(
    (e) => {
      if (!disabled) {
        setIsHovered(false);
        if (onLeaveCallback) {
          onLeaveCallback();
        }
      }
      if (onMouseLeave) {
        onMouseLeave(e);
      }
    },
    [disabled, onMouseLeave, onLeaveCallback],
  );

  return {
    isHovered,
    MouseEnterEvent: handleMouseEnter,
    MouseLeaveEvent: handleMouseLeave,
  };
}
