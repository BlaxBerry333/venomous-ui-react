"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useBackdropStyles } from "./Backdrop.hooks";
import type { BackdropProps, BackdropRef } from "./Backdrop.types";

const Backdrop = React.memo(
  React.forwardRef<BackdropRef, BackdropProps>(
    ({ className, style, children, open = false, opacity, ...props }, ref) => {
      const { componentStyle } = useBackdropStyles({ open, opacity });

      return (
        <Box
          as="div"
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.Backdrop, className)}
          style={{ ...componentStyle, ...style }}
          {...props}
        >
          {children}
        </Box>
      );
    },
  ),
);

Backdrop.displayName = COMPONENT_DISPLAY_NAMES.Backdrop;

export default Backdrop;
