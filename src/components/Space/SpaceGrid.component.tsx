"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants/names";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useSpaceGridStyles } from "./SpaceGrid.hooks";
import type { SpaceGridProps, SpaceGridRef } from "./SpaceGrid.types";

const SpaceGrid = React.memo(
  React.forwardRef<SpaceGridRef, SpaceGridProps>(
    (
      { className, style, columns: propColumns, spacing: propSpacing, as: propAs, maxWidth: propMaxWidth, ...props },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<SpaceGridProps>({
        displayName: COMPONENT_DISPLAY_NAMES.SpaceGrid,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const columns = propColumns ?? customComponentProps.columns ?? 1;
      const spacing = propSpacing ?? customComponentProps.spacing ?? 0;
      const __as = propAs ?? customComponentProps.as ?? "div";
      const maxWidth = propMaxWidth ?? customComponentProps.maxWidth;

      const { componentStyle } = useSpaceGridStyles({ columns, spacing });

      return (
        <Box
          as={__as}
          maxWidth={maxWidth}
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.SpaceGrid, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        />
      );
    },
  ),
);

SpaceGrid.displayName = COMPONENT_DISPLAY_NAMES.SpaceGrid;
export default SpaceGrid;
