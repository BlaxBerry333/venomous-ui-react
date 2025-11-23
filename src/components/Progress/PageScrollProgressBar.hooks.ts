"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { PageScrollProgressBarProps } from "./PageScrollProgressBar.types";
import { useProgressBarStyles } from "./ProgressBar.hooks";

export function usePageScrollProgressBarStyles({ color, disablePortal = false }: Partial<PageScrollProgressBarProps>) {
  const { containerStyle: __progressBarContainerStyle } = useProgressBarStyles({ height: 4, color });
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.PageScrollProgressBar });

  const containerStyle = React.useMemo<React.CSSProperties>(() => {
    // 如果禁用 Portal（在 Header 内部），使用 absolute 定位到 Header 顶部
    if (disablePortal) {
      return {
        // -- default style --
        ...__progressBarContainerStyle,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        pointerEvents: "none",
        transition: "width 0s ease",

        // Custom style override
        ...customStyle,
      };
    }

    // 默认使用 fixed 定位（Portal 到 body 顶部）
    return {
      // -- default style --
      ...__progressBarContainerStyle,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      zIndex: 9999,
      pointerEvents: "none",
      transition: "width 0s ease",

      // Custom style override
      ...customStyle,
    };
  }, [customStyle, __progressBarContainerStyle, disablePortal]);

  return {
    containerStyle,
  };
}

export function usePageScrollProgressActions() {
  const [displayValue, setDisplayValue] = React.useState<number>(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setDisplayValue(progress);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    displayValue,
  };
}
