"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";

export function useLayoutHeaderStyles() {
  const { BackgroundColors, BorderColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.LayoutHeader });

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default styles --
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      height: 64,
      width: "100%",
      alignItems: "center",
      backgroundColor: BackgroundColors[2],
      borderBottom: `1px solid ${BorderColors[1]}`,

      // -- custom styles --
      ...customStyle,
    }),
    [BackgroundColors, BorderColors, customStyle],
  );

  return {
    componentStyle,
  };
}
