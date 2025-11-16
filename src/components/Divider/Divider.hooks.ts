"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { DividerProps } from "./Divider.types";

export function useDividerStyles({ column }: Partial<DividerProps>) {
  const { BorderColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Divider });

  const DynamicOrientationStyles = React.useMemo<React.CSSProperties>(() => {
    if (column) {
      return {
        border: "none",
        borderLeft: `1px solid ${BorderColors[2]}`,
        margin: "0 8px",
        alignSelf: "stretch",
        width: "1px",
        writingMode: "vertical-lr",
      };
    } else {
      return {
        border: "none",
        borderTop: `1px solid ${BorderColors[2]}`,
        margin: "8px 0",
        width: "100%",
      };
    }
  }, [column, BorderColors]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default style --
      ...DynamicOrientationStyles,

      // -- custom style --
      ...customStyle,
    }),
    [DynamicOrientationStyles, customStyle],
  );

  return {
    componentStyle,
    __: {
      DynamicOrientationStyles,
    },
  };
}
