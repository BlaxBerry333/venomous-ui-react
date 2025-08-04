"use client";

import React from "react";

import { useLayoutContext } from "./context/hooks";
import type { LayoutHeaderProps } from "./index.types";

const LayoutHeader = React.memo<LayoutHeaderProps>(({ children, style, ...props }) => {
  const { headerHeight } = useLayoutContext();

  return (
    <header
      style={{
        height: `${headerHeight}px`,
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1,
        ...style,
      }}
      {...props}
    >
      {children}
    </header>
  );
});

LayoutHeader.displayName = "Layout.Header";
export default LayoutHeader;
