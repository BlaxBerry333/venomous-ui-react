"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useTransitionScaleStyles } from "./Transition.Scale.hooks";
import type { TransitionScaleProps, TransitionScaleRef } from "./Transition.Scale.types";

const TransitionScale = React.memo(
  React.forwardRef<TransitionScaleRef, TransitionScaleProps>(
    ({ className, style, children, visible, duration = 200, onFinish }, ref) => {
      const { componentStyle } = useTransitionScaleStyles({
        visible,
        duration,
        onFinish,
      });

      return (
        <Box
          as="div"
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.TransitionScale, className)}
          style={{ ...componentStyle, ...style }}
        >
          {children}
        </Box>
      );
    },
  ),
);

TransitionScale.displayName = COMPONENT_DISPLAY_NAMES.TransitionScale;
export default TransitionScale;
