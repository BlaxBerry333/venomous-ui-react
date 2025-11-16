"use client";

import React from "react";

import { useSpaceFlexStyles } from "@/components/Space/SpaceFlex.hooks";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { MenuListProps } from "./MenuList.types";

export function useMenuListStyles({ column = true, spacing = 0 }: Partial<MenuListProps>) {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.MenuList });

  const { componentStyle: __SpaceFlexStyle } = useSpaceFlexStyles({ column, spacing });

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // -- default style --
      ...__SpaceFlexStyle,
      listStyle: "none",
      padding: 0,
      margin: 0,

      // -- custom style --
      ...customStyle,
    }),
    [__SpaceFlexStyle, customStyle],
  );

  return {
    componentStyle,
  };
}
