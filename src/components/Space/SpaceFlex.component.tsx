"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useSpaceFlexStyles } from "./SpaceFlex.hooks";
import type { SpaceFlexProps, SpaceFlexRef } from "./SpaceFlex.types";

const SpaceFlex = React.memo(
  React.forwardRef<SpaceFlexRef, SpaceFlexProps>(
    (
      { className, style, column: propColumn, spacing: propSpacing, as: propAs, maxWidth: propMaxWidth, ...props },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<SpaceFlexProps>({
        displayName: COMPONENT_DISPLAY_NAMES.SpaceFlex,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const column = propColumn ?? customComponentProps.column ?? false;
      const spacing = propSpacing ?? customComponentProps.spacing ?? 0;
      const __as = propAs ?? customComponentProps.as ?? "div";
      const maxWidth = propMaxWidth ?? customComponentProps.maxWidth;

      const { componentStyle } = useSpaceFlexStyles({ column, spacing });

      return (
        <Box
          as={__as}
          maxWidth={maxWidth}
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.SpaceFlex, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        />
      );
    },
  ),
);

SpaceFlex.displayName = COMPONENT_DISPLAY_NAMES.SpaceFlex;
export default SpaceFlex;
