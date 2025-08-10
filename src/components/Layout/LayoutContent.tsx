"use client";

import clsx from "clsx";
import React from "react";

import type { LayoutContentProps } from "./index.types";

const LayoutContent = React.memo<LayoutContentProps>(({ children, className, style, ...props }) => {
  return (
    <main
      className={clsx("Venomous-UI-React--Layout.Content", className)}
      style={{
        boxSizing: "border-box",
        width: "100%",
        flexGrow: 1,
        ...style,
      }}
      {...props}
    >
      {children}
    </main>
  );
});

LayoutContent.displayName = "Layout.Content";
export default LayoutContent;
