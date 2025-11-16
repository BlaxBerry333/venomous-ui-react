"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants/names";
import { useSpaceGridStyles } from "./SpaceGrid.hooks";
import type { SpaceGridProps, SpaceGridRef } from "./SpaceGrid.types";

const SpaceGrid = React.memo(
  React.forwardRef<SpaceGridRef, SpaceGridProps>(
    ({ className, style, columns = 1, spacing = 0, as: __as = "div", maxWidth = undefined, ...props }, ref) => {
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
