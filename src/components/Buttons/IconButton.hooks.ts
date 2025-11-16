"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomStyle from "@/hooks/useCustomStyle";
import { useButtonStyles } from "./Button.hooks";
import { ICON_BUTTON_SHAPE_MAP, type IconButtonProps } from "./IconButton.types";

export function useIconButtonStyles({
  disabled,
  loading,
  variant,
  color,
  shape,
  isHovered,
  isClicked,
}: Partial<IconButtonProps> & { isHovered?: boolean; isClicked?: boolean }) {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.IconButton });

  const { componentStyle: buttonStyle, __ } = useButtonStyles({
    disabled,
    loading,
    variant,
    color,
    isHovered,
    isClicked,
  });

  const DynamicShapeStyles = React.useMemo<React.CSSProperties>(() => {
    const isCircle = shape === ICON_BUTTON_SHAPE_MAP.CIRCLE;
    return {
      borderRadius: isCircle ? "50%" : 8,
    };
  }, [shape]);

  const DynamicSizeStyles = React.useMemo<React.CSSProperties>(
    () => ({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      minWidth: 40,
      minHeight: 40,
      padding: 0,
    }),
    [],
  );

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // -- default style --
      ...buttonStyle,
      ...DynamicShapeStyles,
      ...DynamicSizeStyles,

      // -- custom style --
      ...customStyle,
    }),
    [buttonStyle, DynamicShapeStyles, DynamicSizeStyles, customStyle],
  );

  return {
    componentStyle,
    __: {
      ...__,
      DynamicShapeStyles,
      DynamicSizeStyles,
    },
  };
}
