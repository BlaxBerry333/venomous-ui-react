"use client";

import React from "react";

import { BreakPointName, ThemeBreakPoint } from "@/utils";

const breakpointIndexMap: Map<BreakPointName, number> = new Map(
  Object.values(BreakPointName).map((bp, index) => [bp, index]),
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
      if (width >= ThemeBreakPoint.xxl) return BreakPointName.xxl;
      if (width >= ThemeBreakPoint.xl) return BreakPointName.xl;
      if (width >= ThemeBreakPoint.lg) return BreakPointName.lg;
      if (width >= ThemeBreakPoint.md) return BreakPointName.md;
      if (width >= ThemeBreakPoint.sm) return BreakPointName.sm;
      return BreakPointName.xs;
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

      // 渲染策略辅助
      shouldUseGridLayout: isRealSize, // 是否应该使用复杂的网格布局
      shouldUseFallbackLayout: !isRealSize, // 是否应该使用降级布局
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
    return BreakPointName.xs;
  }

  // 客户端环境：尝试从用户代理等线索推断
  const userAgent = navigator.userAgent;
  const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);
  const isTablet = /iPad|Android(?!.*Mobile)|Kindle|Silk/i.test(userAgent);

  if (isMobile && !isTablet) {
    return BreakPointName.xs;
  } else if (isTablet) {
    return BreakPointName.md;
  } else {
    // 桌面端，使用一个相对安全的默认值
    return BreakPointName.lg;
  }
}
