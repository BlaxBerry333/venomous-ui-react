"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomStyle from "@/hooks/useCustomStyle";
import { useButtonStyles } from "./Button.hooks";
import { BUTTON_VARIANT_MAP } from "./Button.types";
import { ICON_BUTTON_VARIANT_MAP, type IconButtonProps } from "./IconButton.types";

export function useIconButtonStyles({
  disabled,
  loading,
  variant,
  color,
  isHovered,
  isClicked,
}: Partial<IconButtonProps> & { isHovered?: boolean; isClicked?: boolean }) {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.IconButton });

  const { componentStyle: buttonStyle } = useButtonStyles({
    disabled,
    loading,
    variant: BUTTON_VARIANT_MAP.CONTAINED,
    color,
    isHovered,
    isClicked,
  });

  const DynamicVariantStyles = React.useMemo<React.CSSProperties>(() => {
    const isCircle = variant === ICON_BUTTON_VARIANT_MAP.CIRCLE;
    return {
      borderRadius: isCircle ? "50%" : 8,
    };
  }, [variant]);

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
      ...DynamicVariantStyles,
      ...DynamicSizeStyles,

      // -- custom style --
      ...customStyle,
    }),
    [buttonStyle, DynamicVariantStyles, DynamicSizeStyles, customStyle],
  );

  return {
    componentStyle,
  };
}
