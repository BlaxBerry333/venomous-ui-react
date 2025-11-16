"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useSpaceFlexStyles } from "./SpaceFlex.hooks";
import type { SpaceFlexProps, SpaceFlexRef } from "./SpaceFlex.types";

const SpaceFlex = React.memo(
  React.forwardRef<SpaceFlexRef, SpaceFlexProps>(
    ({ className, style, column = false, spacing = 0, as: __as = "div", maxWidth = undefined, ...props }, ref) => {
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
