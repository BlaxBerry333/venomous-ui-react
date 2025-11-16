"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomStyle from "@/hooks/useCustomStyle";
import { TRANSITION_SLIDE_DIRECTION_MAP, type TransitionSlideProps } from "./Transition.Slide.types";
import { useTransitionState, useTransitionStateStyles } from "./useTransitionState";

export function useTransitionSlideStyles({
  visible = false,
  duration = 200,
  direction = "right",
  distance = 100,
  onFinish,
}: Partial<TransitionSlideProps>) {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.TransitionFade });

  const status = useTransitionState({ visible, duration, onFinish });

  const getTransform = React.useCallback(
    (isVisible: boolean): string => {
      if (isVisible) {
        return "translate(0, 0)";
      }
      switch (direction) {
        case TRANSITION_SLIDE_DIRECTION_MAP.LEFT:
          return `translate(-${distance}px, 0)`;
        case TRANSITION_SLIDE_DIRECTION_MAP.RIGHT:
          return `translate(${distance}px, 0)`;
        case TRANSITION_SLIDE_DIRECTION_MAP.UP:
          return `translate(0, -${distance}px)`;
        case TRANSITION_SLIDE_DIRECTION_MAP.DOWN:
          return `translate(0, ${distance}px)`;
        default:
          return "translate(0, 0)";
      }
    },
    [direction, distance],
  );

  const getBaseStyle = React.useCallback(
    () => ({
      transition: `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
      willChange: "transform, opacity",
    }),
    [duration],
  );

  const getEnteringStyle = React.useCallback(
    () => ({
      transform: getTransform(true),
    }),
    [getTransform],
  );

  const getEnteredStyle = React.useCallback(
    () => ({
      transform: getTransform(true),
      willChange: "auto",
    }),
    [getTransform],
  );

  const getExitingStyle = React.useCallback(
    () => ({
      transform: getTransform(false),
    }),
    [getTransform],
  );

  const getExitedStyle = React.useCallback(
    () => ({
      transform: getTransform(false),
      willChange: "auto",
    }),
    [getTransform],
  );

  const DynamicTransitionStatusStyles = useTransitionStateStyles({
    status,
    duration,
    getBaseStyle,
    getEnteringStyle,
    getEnteredStyle,
    getExitingStyle,
    getExitedStyle,
  });

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // -- default style --
      ...DynamicTransitionStatusStyles,

      // -- custom style --
      ...customStyle,
    }),
    [DynamicTransitionStatusStyles, customStyle],
  );

  return {
    componentStyle,
    __: {
      DynamicTransitionStatusStyles,
    },
  };
}
