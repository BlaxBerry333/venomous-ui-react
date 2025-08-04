"use client";

import React from "react";

import type { LayoutContentProps } from "./index.types";

const LayoutContent = React.memo<LayoutContentProps>(({ children, style, ...props }) => {
  return (
    <main
      style={{
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

LayoutContent.displayName = "Layout.Footer";
export default LayoutContent;
