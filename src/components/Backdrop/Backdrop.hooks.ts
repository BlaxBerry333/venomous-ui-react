"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { BackdropProps } from "./Backdrop.types";

export function useBackdropStyles({ open, opacity }: Partial<BackdropProps>) {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Backdrop });

  const DynamicBackgroundStyles = React.useMemo<React.CSSProperties>(() => {
    const backdropOpacity = opacity !== undefined ? opacity : 0.5;
    return {
      backgroundColor: `rgba(0, 0, 0, ${backdropOpacity})`,
    };
  }, [opacity]);

  const DynamicVisibilityStyles = React.useMemo<React.CSSProperties>(() => {
    return {
      opacity: open ? 1 : 0,
      visibility: open ? "visible" : "hidden",
      transition: "opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  }, [open]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default style --
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1299,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none", // 防止双击时选择文本
      ...DynamicBackgroundStyles,
      ...DynamicVisibilityStyles,

      // -- custom style --
      ...customStyle,
    }),
    [DynamicBackgroundStyles, DynamicVisibilityStyles, customStyle],
  );

  return {
    componentStyle,
    __: {
      DynamicBackgroundStyles,
      DynamicVisibilityStyles,
    },
  };
}
