"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";

export function useLayoutFooterStyles() {
  const { BackgroundColors, BorderColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.LayoutFooter });

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default styles --
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
      backgroundColor: BackgroundColors[2],
      borderTop: `1px solid ${BorderColors[1]}`,

      // -- custom styles --
      ...customStyle,
    }),
    [BackgroundColors, BorderColors, customStyle],
  );

  return {
    componentStyle,
  };
}
