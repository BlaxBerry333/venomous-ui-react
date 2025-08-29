"use client";

import clsx from "clsx";
import React from "react";

import { ThemeBreakPoint } from "@/utils";
import type { ContainerProps } from "./Container.types";

const Container = React.memo<ContainerProps>(({ children, maxBreakpoint, className, style, ...props }) => {
  return (
    <div
      className={clsx("Venomous-UI-React--Container", className)}
      style={{
        boxSizing: "border-box",
        margin: "0 auto",
        width: "100%",
        maxWidth: !maxBreakpoint ? "100%" : ThemeBreakPoint[maxBreakpoint],
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
