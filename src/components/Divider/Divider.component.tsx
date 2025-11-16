"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useDividerStyles } from "./Divider.hooks";
import type { DividerProps, DividerRef } from "./Divider.types";

const Divider = React.memo(
  React.forwardRef<DividerRef, DividerProps>(({ className, style, column = false, ...props }, ref) => {
    const { componentStyle } = useDividerStyles({ column });

    return (
      <hr
        ref={ref}
        className={clsx(COMPONENT_CLASSNAME_NAMES.Divider, className)}
        style={{ ...componentStyle, ...style }}
        {...props}
      />
    );
  }),
);

Divider.displayName = COMPONENT_DISPLAY_NAMES.Divider;
export default Divider;
