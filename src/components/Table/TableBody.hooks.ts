"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomStyle from "@/hooks/useCustomStyle";

export function useTableBodyStyles() {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.TableBody });

  const tableBodyStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",

      // -- default styles --
      width: "100%",

      // -- custom styles --
      ...customStyle,
    }),
    [customStyle],
  );

  return {
    tableBodyStyle,
  };
}
