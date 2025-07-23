"use client";

import React from "react";

import { BreakPoint, BreakPointWidth } from "@/utils";

export default function useThemeBreakpoint() {
  const [screenSize, setScreenSize] = React.useState<BreakPoint>(BreakPoint.xs);

  React.useEffect(() => {
    const getScreenSize = (): BreakPoint => {
      const width = window.innerWidth;
      if (width >= BreakPointWidth.xxl) return BreakPoint.xxl;
      if (width >= BreakPointWidth.xl) return BreakPoint.xl;
      if (width >= BreakPointWidth.lg) return BreakPoint.lg;
      if (width >= BreakPointWidth.md) return BreakPoint.md;
      if (width >= BreakPointWidth.sm) return BreakPoint.sm;
      return BreakPoint.xs;
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
