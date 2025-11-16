"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";

// ============================
// useTableRowStyles - 行样式
// ============================
export function useTableRowStyles() {
  const { TextColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.TableRow });

  // ========== 最终样式 ==========
  const tableRowStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",

      // -- default styles --
      color: TextColors[1],

      // -- custom styles --
      ...customStyle,
    }),
    [TextColors, customStyle],
  );

  return {
    tableRowStyle,
  };
}
