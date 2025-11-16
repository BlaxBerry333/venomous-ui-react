"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomStyle from "@/hooks/useCustomStyle";

export function useTabsContainerStyles() {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.TabsContainer });

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default styles --
      width: "100%",
      height: "100%", // ✅ 保持 100%，让用户可以通过父容器控制高度

      // -- custom styles --
      ...customStyle,
    }),
    [customStyle],
  );

  return {
    componentStyle,
  };
}
