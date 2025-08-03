"use client";

import React from "react";

import type { SpaceFlexProps } from "./index.types";

const SpaceFlex = React.memo<SpaceFlexProps>(
  ({ children, style, row = true, column = false, gap = "8px", ...props }) => {
    return (
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          width: "100%",
          flexDirection: column ? "column" : row ? "row" : "row",
          alignItems: row ? "flex-start" : style?.alignItems,
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
