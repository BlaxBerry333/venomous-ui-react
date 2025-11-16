"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useTransitionSlideStyles } from "./Transition.Slide.hooks";
import {
  TRANSITION_SLIDE_DIRECTION_MAP,
  type TransitionFadeRef,
  type TransitionSlideProps,
} from "./Transition.Slide.types";

const TransitionSlide = React.memo(
  React.forwardRef<TransitionFadeRef, TransitionSlideProps>(
    (
      {
        children,
        visible,
        duration = 200,
        direction = TRANSITION_SLIDE_DIRECTION_MAP.RIGHT,
        distance = 100,
        onFinish,
        className,
        style,
      },
      ref,
    ) => {
      const { componentStyle } = useTransitionSlideStyles({
        visible,
        duration,
        direction,
        distance,
        onFinish,
      });

      return (
        <Box
          as="div"
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.TransitionSlide, className)}
          style={{ ...componentStyle, ...style }}
        >
          {children}
        </Box>
      );
    },
  ),
);

TransitionSlide.displayName = COMPONENT_DISPLAY_NAMES.TransitionSlide;
export default TransitionSlide;
