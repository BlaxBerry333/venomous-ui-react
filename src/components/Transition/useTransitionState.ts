"use client";

import React from "react";

export const TRANSITION_STATUS_MAP = {
  ENTERING: "entering", // 进入中
  ENTERED: "entered", // 已进入 (完成)
  EXITING: "exiting", // 退出中
  EXITED: "exited", // 已退出 (完成)
} as const;

type __TransitionStatus = (typeof TRANSITION_STATUS_MAP)[keyof typeof TRANSITION_STATUS_MAP];

export function useTransitionState({
  visible,
  duration = 200,
  onFinish,
}: {
  visible: boolean; // 是否显示
  duration?: number; // 动画时长
  onFinish?: VoidFunction; // 动画结束回调
}): __TransitionStatus {
  const [status, setStatus] = React.useState<__TransitionStatus>(
    visible ? TRANSITION_STATUS_MAP.ENTERED : TRANSITION_STATUS_MAP.EXITED,
  );

  const onFinishRef = React.useRef(onFinish);
  React.useEffect(() => {
    onFinishRef.current = onFinish;
  });

  React.useEffect(() => {
    if (visible) {
      // 进入流程：exited -> entering -> entered
      setStatus("entering");

      const timer = setTimeout(() => {
        setStatus("entered");
        onFinishRef.current?.();
      }, duration);

      return () => clearTimeout(timer);
    } else {
      // 退出流程：entered -> exiting -> exited
      setStatus("exiting");

      const timer = setTimeout(() => {
        setStatus("exited");
        onFinishRef.current?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration]);

  return status;
}

export function useTransitionStateStyles({
  status,
  duration,
  getBaseStyle,
  getEnteringStyle,
  getEnteredStyle,
  getExitingStyle,
  getExitedStyle,
}: {
  status: __TransitionStatus;
  duration: number;
  getBaseStyle?: () => React.CSSProperties;
  getEnteringStyle?: () => React.CSSProperties;
  getEnteredStyle?: () => React.CSSProperties;
  getExitingStyle?: () => React.CSSProperties;
  getExitedStyle?: () => React.CSSProperties;
}): React.CSSProperties {
  return React.useMemo<React.CSSProperties>(() => {
    const baseStyle = getBaseStyle?.() || {};

    switch (status) {
      case TRANSITION_STATUS_MAP.ENTERING:
        return {
          ...baseStyle,
          opacity: 1,
          ...getEnteringStyle?.(),
        };
      case TRANSITION_STATUS_MAP.ENTERED:
        return {
          ...baseStyle,
          opacity: 1,
          ...getEnteredStyle?.(),
        };
      case TRANSITION_STATUS_MAP.EXITING:
        return {
          ...baseStyle,
          opacity: 0,
          ...getExitingStyle?.(),
        };
      case TRANSITION_STATUS_MAP.EXITED:
        return {
          ...baseStyle,
          opacity: 0,
          pointerEvents: "none",
          ...getExitedStyle?.(),
        };
    }
  }, [status, duration, getBaseStyle, getEnteringStyle, getEnteredStyle, getExitingStyle, getExitedStyle]);
}
