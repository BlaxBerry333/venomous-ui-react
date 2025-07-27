"use client";

import React from "react";

import { BreakPointName, ThemeBreakPoint } from "@/utils";
import type { ContainerProps } from "./Container.types";

const Container = React.memo<ContainerProps>(({ children, breakpoint = BreakPointName.lg, style, ...props }) => {
  return (
    <div
      style={{
        margin: "0 auto",
        width: "100%",
        maxWidth: ThemeBreakPoint[breakpoint],
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = "Container";
export default Container;
