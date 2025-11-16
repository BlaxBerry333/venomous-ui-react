"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomStyle from "@/hooks/useCustomStyle";

export function useTabsTabListStyles() {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.TabsTabList });

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default styles --
      flexShrink: 0,

      // -- custom styles --
      ...customStyle,
    }),
    [customStyle],
  );

  return {
    componentStyle,
  };
}
