"use client";

import clsx from "clsx";
import React from "react";

import { useLayoutContext } from "./context/hooks";
import type { LayoutHeaderProps } from "./index.types";

const LayoutHeader = React.memo<LayoutHeaderProps>(({ children, className, style, ...props }) => {
  const { headerHeight } = useLayoutContext();

  return (
    <header
      className={clsx("Venomous-UI-React--Layout.Header", className)}
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
