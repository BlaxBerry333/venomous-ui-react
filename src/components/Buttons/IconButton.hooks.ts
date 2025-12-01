"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomStyle from "@/hooks/useCustomStyle";
import { useButtonStyles } from "./Button.hooks";
import { BUTTON_VARIANT_MAP } from "./Button.types";
import type { IconButtonProps } from "./IconButton.types";

export function useIconButtonStyles({
  disabled,
  loading,
  variant = BUTTON_VARIANT_MAP.CONTAINED,
  circle = false,
  color,
  isHovered,
  isClicked,
}: Partial<IconButtonProps> & { isHovered?: boolean; isClicked?: boolean }) {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.IconButton });

  const { componentStyle: buttonStyle } = useButtonStyles({
    disabled,
    loading,
    variant,
    color,
    isHovered,
    isClicked,
  });

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // -- default style --
      ...buttonStyle,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      minWidth: 40,
      minHeight: 40,
      padding: 0,
      borderRadius: circle ? "50%" : 8,

      // -- custom style --
      ...customStyle,
    }),
    [buttonStyle, circle, customStyle],
  );

  return {
    componentStyle,
  };
}
