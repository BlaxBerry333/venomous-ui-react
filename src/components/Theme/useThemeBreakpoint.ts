"use client";

import React from "react";

import { BreakPointName, ThemeBreakPoint } from "@/utils";

export default function useThemeBreakpoint() {
  const [screenSize, setScreenSize] = React.useState<BreakPointName>(BreakPointName.xs);

  React.useEffect(() => {
    const getScreenSize = (): BreakPointName => {
      const width = window.innerWidth;
      if (width >= ThemeBreakPoint.xxl) return BreakPointName.xxl;
      if (width >= ThemeBreakPoint.xl) return BreakPointName.xl;
      if (width >= ThemeBreakPoint.lg) return BreakPointName.lg;
      if (width >= ThemeBreakPoint.md) return BreakPointName.md;
      if (width >= ThemeBreakPoint.sm) return BreakPointName.sm;
      return BreakPointName.xs;
    };
    const handleResize = () => {
      setScreenSize(getScreenSize());
    };
    // 初始化屏幕尺寸
    handleResize();
    // 添加事件监听器
    window.addEventListener("resize", handleResize);
    // 清理事件监听器
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    screenSize,
  };
}
