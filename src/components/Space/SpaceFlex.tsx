"use client";

import React from "react";

import clsx from "clsx";
import type { SpaceFlexProps } from "./index.types";

const SpaceFlex = React.forwardRef<HTMLDivElement, SpaceFlexProps>(
  ({ children, className, style, column = false, gap = 0, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx("Venomous-UI-React--Space.Flex", className)}
        style={{
          boxSizing: "border-box",
          display: "flex",
          width: "100%",
          flexDirection: column ? "column" : "row",
          alignItems: column ? "flex-start" : style?.alignItems,
          ...(Array.isArray(gap) ? { rowGap: gap[0], columnGap: gap[1] } : { gap }),
          position: "relative",
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
);

SpaceFlex.displayName = "Space.Flex";
export default SpaceFlex;
