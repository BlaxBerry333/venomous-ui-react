"use client";

import React from "react";

import { BreakPointName } from "@/utils";
import { Container } from "../Container";
import { LAYOUT_CONTEXT_DEFAULT_VALUE, LayoutContext } from "./context/index.";
import type { LayoutProviderProps } from "./index.types";

const LayoutProvider = React.memo<LayoutProviderProps>(
  ({
    children,
    maxBreakpoint = BreakPointName.xl,
    headerHeight = LAYOUT_CONTEXT_DEFAULT_VALUE.headerHeight,
    footerHeight = LAYOUT_CONTEXT_DEFAULT_VALUE.footerHeight,
    sideWidth = LAYOUT_CONTEXT_DEFAULT_VALUE.sideWidth,
  }) => {
    const memorizedContextValue = React.useMemo(
      () => ({ headerHeight, footerHeight, sideWidth }),
      [headerHeight, footerHeight, sideWidth],
    );

    return (
      // eslint-disable-next-line react-x/no-context-provider
      <LayoutContext.Provider value={memorizedContextValue}>
        <Container maxBreakpoint={maxBreakpoint}>{children}</Container>
      </LayoutContext.Provider>
    );
  },
);

LayoutProvider.displayName = "Layout.Provider";
export default LayoutProvider;
