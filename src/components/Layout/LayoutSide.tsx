"use client";

import React from "react";

import { useLayoutContext } from "./context/hooks";
import type { LayoutSideProps } from "./index.types";

const LayoutSide = React.memo<LayoutSideProps>(({ children, style, ...props }) => {
  const { headerHeight, sideWidth } = useLayoutContext();

  return (
    <aside
      style={{
        height: `calc(100svh - ${headerHeight}px)`,
        width: sideWidth,
        minWidth: sideWidth,
        position: "sticky",
        top: `${headerHeight}px`,
        left: 0,
        zIndex: 1,
        overflowX: "hidden",
        overflowY: "scroll",
        ...style,
      }}
      {...props}
    >
      {children}
    </aside>
  );
});

LayoutSide.displayName = "Layout.Side";
export default LayoutSide;
