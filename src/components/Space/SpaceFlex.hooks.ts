"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { SpaceFlexProps } from "./SpaceFlex.types";

export function useSpaceFlexStyles({ column, spacing }: Partial<SpaceFlexProps>) {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.SpaceFlex });

  const DynamicFlexStyles = React.useMemo<React.CSSProperties>(
    () => ({
      flexDirection: column ? "column" : "row",
      alignItems: column ? "flex-start" : "center",
      gap: spacing,
    }),
    [column, spacing],
  );

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default style --
      display: "flex",
      width: "100%",
      // ❌ 移除 height: 100%，因为这会导致所有 Space.Flex 都强制 100% 高度
      // ✅ 让高度自适应内容，用户需要时可以通过 style 覆盖
      minWidth: 0,
      ...DynamicFlexStyles,

      // -- custom style --
      ...customStyle,
    }),
    [DynamicFlexStyles, customStyle],
  );

  return {
    componentStyle,
    __: {
      DynamicFlexStyles,
    },
  };
}
