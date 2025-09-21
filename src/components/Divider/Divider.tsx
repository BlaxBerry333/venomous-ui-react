"use client";

import clsx from "clsx";
import React from "react";

import { useDesign } from "@/hooks";
import type { DividerProps } from "./index.types";

const Divider = React.memo<DividerProps>(({ className, style, column = false, ...props }) => {
  const design = useDesign();

  const dividerStyle = React.useMemo<React.CSSProperties>(() => {
    if (column) {
      return {
        border: "none",
        borderLeft: `1px solid ${design.BorderColors.tertiary}`,
        margin: "0 8px",
        height: "100%",
        width: "1px",
        writingMode: "vertical-lr",
      };
    } else {
      return {
        border: "none",
        borderTop: `1px solid ${design.BorderColors.tertiary}`,
        margin: "8px 0",
        width: "100%",
      };
    }
  }, [column, design]);

  return (
    <hr
      className={clsx("Venomous-UI-React--Divider", className)}
      style={{
        ...dividerStyle,
        ...style,
      }}
      {...props}
    />
  );
});

Divider.displayName = "Divider";
export default Divider;
