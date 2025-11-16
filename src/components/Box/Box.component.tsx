"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useBoxStyles } from "./Box.hooks";
import type { BoxProps, BoxRef } from "./Box.types";

const Box = React.memo(
  React.forwardRef<BoxRef, BoxProps>(({ className, style, as: __as = "div", maxWidth = undefined, ...props }, ref) => {
    const { componentStyle } = useBoxStyles({ maxWidth });

    const Tag = __as as React.ElementType;

    return (
      <Tag
        ref={ref}
        className={clsx(COMPONENT_CLASSNAME_NAMES.Box, className)}
        style={{ ...componentStyle, ...style }}
        {...props}
      />
    );
  }),
);

Box.displayName = COMPONENT_DISPLAY_NAMES.Box;
export default Box;
