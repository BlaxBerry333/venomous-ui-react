"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { TransitionScaleProps } from "./Transition.Scale.types";
import { useTransitionState, useTransitionStateStyles } from "./useTransitionState";

export function useTransitionScaleStyles({ visible = false, duration = 200, onFinish }: Partial<TransitionScaleProps>) {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.TransitionScale });

  const status = useTransitionState({ visible, duration, onFinish });

  const getBaseStyle = React.useCallback(
    () => ({
      transformOrigin: "center",
      transition: `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
      willChange: "transform, opacity",
    }),
    [duration],
  );

  const getEnteringStyle = React.useCallback(
    () => ({
      transform: "scale(1)",
    }),
    [],
  );

  const getEnteredStyle = React.useCallback(
    () => ({
      transform: "scale(1)",
      willChange: "auto",
    }),
    [],
  );

  const getExitingStyle = React.useCallback(
    () => ({
      transform: "scale(0)",
    }),
    [],
  );

  const getExitedStyle = React.useCallback(
    () => ({
      transform: "scale(0)",
      willChange: "auto",
    }),
    [],
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
