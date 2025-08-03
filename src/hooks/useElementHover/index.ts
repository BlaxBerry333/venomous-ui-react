"use client";

import React from "react";

type Props = {
  isDisabled: boolean;
};

export default function useElementHover<T>({ isDisabled }: Props) {
  const [isHovering, setIsHovering] = React.useState<boolean>(false);

  const handleMouseDown: React.MouseEventHandler<T> = React.useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseUp: React.MouseEventHandler<T> = React.useCallback(() => {
    setIsHovering(false);
  }, []);

  const handleMouseLeave: React.MouseEventHandler<T> = React.useCallback(() => {
    setIsHovering(false);
  }, []);

  React.useEffect(() => {
    if (isDisabled) {
      setIsHovering(false);
    }
  }, [isDisabled]);

  return {
    isHovering,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
  };
}
