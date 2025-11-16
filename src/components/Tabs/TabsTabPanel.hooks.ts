"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomStyle from "@/hooks/useCustomStyle";

export function useTabsTabPanelStyles() {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.TabsTabPanel });

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default styles --
      width: "100%",
      height: "100%", // ✅ 添加高度，确保可以填充父容器

      // -- custom styles --
      ...customStyle,
    }),
    [customStyle],
  );

  return {
    componentStyle,
  };
}
