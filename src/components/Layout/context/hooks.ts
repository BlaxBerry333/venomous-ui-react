"use client";

import React from "react";

import { LayoutContext, type LayoutContextValue } from "./context";

export function useLayoutContext(): LayoutContextValue {
  // eslint-disable-next-line react-x/no-use-context
  const context = React.useContext<LayoutContextValue>(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayoutContext must be used within a LayoutProvider");
  }
  return context;
}
