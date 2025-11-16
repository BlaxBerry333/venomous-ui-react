"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useTransitionFadeStyles } from "./Transition.Fade.hooks";
import type { TransitionFadeProps, TransitionFadeRef } from "./Transition.Fade.types";

const TransitionFade = React.memo(
  React.forwardRef<TransitionFadeRef, TransitionFadeProps>(
    ({ className, style, children, visible, duration = 200, onFinish }, ref) => {
      const { componentStyle } = useTransitionFadeStyles({
        visible,
        duration,
        onFinish,
      });

      return (
        <Box
          as="div"
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.TransitionFade, className)}
          style={{ ...componentStyle, ...style }}
        >
          {children}
        </Box>
      );
    },
  ),
);

TransitionFade.displayName = COMPONENT_DISPLAY_NAMES.TransitionFade;
export default TransitionFade;
