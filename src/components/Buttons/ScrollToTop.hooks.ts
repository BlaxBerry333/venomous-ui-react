"use client";

import React from "react";

import type { ScrollToTopProps } from "./ScrollToTop.types";

// ============================
// useScrollToTopActions - 滚动状态和事件
// ============================
export function useScrollToTopActions({ distance = 300, onClick }: Pick<ScrollToTopProps, "distance" | "onClick">) {
  const [isVisible, setIsVisible] = React.useState(false);

  // 监听滚动
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > distance);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // 初始检查

    return () => window.removeEventListener("scroll", handleScroll);
  }, [distance]);

  // 滚动到顶部（固定使用 smooth）
  const scrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // 点击事件处理
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      scrollToTop();
      onClick?.(e);
    },
    [scrollToTop, onClick],
  );

  return React.useMemo(
    () => ({
      isVisible,
      handleClick,
    }),
    [isVisible, handleClick],
  );
}
