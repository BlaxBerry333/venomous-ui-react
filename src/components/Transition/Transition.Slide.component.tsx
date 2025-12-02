"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
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
        duration: propDuration,
        direction: propDirection,
        distance: propDistance,
        onFinish,
        className,
        style,
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<TransitionSlideProps>({
        displayName: COMPONENT_DISPLAY_NAMES.TransitionSlide,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const duration = propDuration ?? customComponentProps.duration ?? 200;
      const direction = propDirection ?? customComponentProps.direction ?? TRANSITION_SLIDE_DIRECTION_MAP.RIGHT;
      const distance = propDistance ?? customComponentProps.distance ?? 100;

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
