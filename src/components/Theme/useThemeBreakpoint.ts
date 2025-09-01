"use client";

import React from "react";

import { BREAK_POINT_NAMES, THEME_BREAKPOINTS, type BreakPointName } from "@/utils";

const breakpointIndexMap: Map<BreakPointName, number> = new Map(
  Object.values(BREAK_POINT_NAMES).map((bp, index) => [bp, index]),
);

export default function useThemeBreakpoint() {
  const [mounted, setMounted] = React.useState<boolean>(false);

  const [screenSize, setScreenSize] = React.useState<BreakPointName>(() => _getSmartDefaultBreakpoint());

  // 标记是否已经获取到真实的屏幕尺寸
  const [isRealSize, setIsRealSize] = React.useState<boolean>(false);

  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const getScreenSize = (): BreakPointName => {
      const width = window.innerWidth;
      if (width >= THEME_BREAKPOINTS.xxl) return BREAK_POINT_NAMES.xxl;
      if (width >= THEME_BREAKPOINTS.xl) return BREAK_POINT_NAMES.xl;
      if (width >= THEME_BREAKPOINTS.lg) return BREAK_POINT_NAMES.lg;
      if (width >= THEME_BREAKPOINTS.md) return BREAK_POINT_NAMES.md;
      if (width >= THEME_BREAKPOINTS.sm) return BREAK_POINT_NAMES.sm;
      return BREAK_POINT_NAMES.xs;
    };
    // 使用防抖优化，避免 resize 事件过于频繁触发
    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        const newScreenSize = getScreenSize();
        setScreenSize((current) => (current !== newScreenSize ? newScreenSize : current));
      }, 100);
    };
    // 初始设置 - 获取真实的屏幕尺寸
    const realScreenSize = getScreenSize();
    setScreenSize(realScreenSize);
    setIsRealSize(true);
    setMounted(true);
    // 使用 passive 事件监听器提高性能
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isLargerThanOrEqual = React.useCallback(
    (targetBreakpoint: BreakPointName): boolean => {
      if (!mounted) return false;
      const currentIndex = breakpointIndexMap.get(screenSize);
      const targetIndex = breakpointIndexMap.get(targetBreakpoint);
      if (currentIndex === undefined || targetIndex === undefined) return false;
      return currentIndex >= targetIndex;
    },
    [screenSize, mounted],
  );

  // 使用 useMemo 缓存返回对象
  return React.useMemo(
    () => ({
      screenSize,
      isLargerThanOrEqual,
      isMounted: mounted,
      isSSRHydrated: mounted && isRealSize, // 是否已完成水合且获取真实尺寸
    }),
    [screenSize, mounted, isRealSize, isLargerThanOrEqual],
  );
}

/**
 * 智能默认断点检测
 */
export function _getSmartDefaultBreakpoint(): BreakPointName {
  // SSR 环境：返回移动端优先的断点
  if (typeof window === "undefined") {
    return BREAK_POINT_NAMES.xs;
  }

  // 客户端环境：尝试从用户代理等线索推断
  const userAgent = navigator.userAgent;
  const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);
  const isTablet = /iPad|Android(?!.*Mobile)|Kindle|Silk/i.test(userAgent);

  if (isMobile && !isTablet) {
    return BREAK_POINT_NAMES.xs;
  } else if (isTablet) {
    return BREAK_POINT_NAMES.md;
  } else {
    // 桌面端，使用一个相对安全的默认值
    return BREAK_POINT_NAMES.lg;
  }
}
