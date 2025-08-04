"use client";

import React from "react";

import { useLayoutContext } from "./context/hooks";
import type { LayoutFooterProps } from "./index.types";

const LayoutFooter = React.memo<LayoutFooterProps>(({ children, style, ...props }) => {
  const { footerHeight } = useLayoutContext();

  return (
    <footer
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
