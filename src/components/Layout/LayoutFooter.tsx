"use client";

import clsx from "clsx";
import React from "react";

import { useLayoutContext } from "./context/hooks";
import type { LayoutFooterProps } from "./index.types";

const LayoutFooter = React.memo<LayoutFooterProps>(({ children, className, style, ...props }) => {
  const { footerHeight } = useLayoutContext();

  return (
    <footer
      className={clsx("Venomous-UI-React--Layout.Footer", className)}
      style={{
        height: `${footerHeight}px`,
        width: "100%",
        ...style,
      }}
      {...props}
    >
      {children}
    </footer>
  );
});

LayoutFooter.displayName = "Layout.Footer";
export default LayoutFooter;
