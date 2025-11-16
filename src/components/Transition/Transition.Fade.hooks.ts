"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { TransitionFadeProps } from "./Transition.Fade.types";
import { useTransitionState, useTransitionStateStyles } from "./useTransitionState";

export function useTransitionFadeStyles({ visible = false, duration = 200, onFinish }: Partial<TransitionFadeProps>) {
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.TransitionFade });

  const status = useTransitionState({ visible, duration, onFinish });

  const getBaseStyle = React.useCallback(
    () => ({
      transition: `opacity ${duration}ms ease-in-out`,
    }),
    [duration],
  );

  const DynamicTransitionStatusStyles = useTransitionStateStyles({
    status,
    duration,
    getBaseStyle,
  });

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // -- default style --
      width: "100%",
      height: "100%",
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
