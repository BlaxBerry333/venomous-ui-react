"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";

// ============================
// useTableHeadStyles - 表头样式
// ============================
export function useTableHeadStyles() {
  const { BackgroundColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.TableHead });

  // ========== 最终样式 ==========
  const tableHeadStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",

      // -- default styles --
      width: "100%", // 充满父元素（table）宽度
      position: "sticky",
      top: 0,
      zIndex: 1,
      backgroundColor: BackgroundColors[1],

      // -- custom styles --
      ...customStyle,
    }),
    [BackgroundColors, customStyle],
  );

  return {
    tableHeadStyle,
  };
}
