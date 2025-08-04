"use client";

import React from "react";

export interface LayoutContextValue {
  headerHeight: number;
  footerHeight: number;
  sideWidth: number;
}

export const LAYOUT_CONTEXT_DEFAULT_VALUE: LayoutContextValue = {
  headerHeight: 60,
  footerHeight: 80,
  sideWidth: 300,
};

export const LayoutContext = React.createContext<LayoutContextValue>(LAYOUT_CONTEXT_DEFAULT_VALUE);
