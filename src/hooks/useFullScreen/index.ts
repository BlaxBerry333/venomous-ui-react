"use client";

import React from "react";

// 扩展 Document 和 HTMLElement 类型以支持浏览器前缀
interface DocumentWithFullscreen extends Document {
  webkitFullscreenEnabled?: boolean;
  mozFullScreenEnabled?: boolean;
  msFullscreenEnabled?: boolean;
  webkitFullscreenElement?: Element;
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitExitFullscreen?: () => Promise<void>;
  mozCancelFullScreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
}

interface HTMLElementWithFullscreen extends HTMLElement {
  webkitRequestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

export default function useFullScreen(
  elementRef?: React.RefObject<HTMLElement | null>,
  options?: {
    onEnter?: () => void;
    onExit?: () => void;
    onError?: (error: Error) => void;
  },
): {
  isFullscreen: boolean;
  isSupported: boolean;
  enterFullscreen: () => Promise<void>;
  exitFullscreen: () => Promise<void>;
  toggleFullscreen: () => Promise<void>;
} {
  const { onEnter, onExit, onError } = options || {};

  const [isFullscreen, setIsFullscreen] = React.useState<boolean>(false);

  // 检查浏览器是否支持全屏 API
  const isSupported = React.useMemo(() => {
    if (typeof document === "undefined") return false;
    const doc = document as DocumentWithFullscreen;
    return !!(
      document.fullscreenEnabled ||
      doc.webkitFullscreenEnabled ||
      doc.mozFullScreenEnabled ||
      doc.msFullscreenEnabled
    );
  }, []);

  // 获取目标元素（优先使用 ref，否则使用 document.documentElement）
  const getTargetElement = React.useCallback(() => {
    return elementRef?.current || document.documentElement;
  }, [elementRef]);

  // 进入全屏
  const enterFullscreen = React.useCallback(async () => {
    if (!isSupported) {
      const error = new Error("Fullscreen API is not supported in this browser");
      onError?.(error);
      return;
    }

    try {
      const element = getTargetElement() as HTMLElementWithFullscreen;

      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        await element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        await element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        await element.msRequestFullscreen();
      }
    } catch (error) {
      onError?.(error as Error);
    }
  }, [isSupported, getTargetElement, onError]);

  // 退出全屏
  const exitFullscreen = React.useCallback(async () => {
    if (!isSupported) {
      const error = new Error("Fullscreen API is not supported in this browser");
      onError?.(error);
      return;
    }

    try {
      const doc = document as DocumentWithFullscreen;

      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        await doc.webkitExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        await doc.mozCancelFullScreen();
      } else if (doc.msExitFullscreen) {
        await doc.msExitFullscreen();
      }
    } catch (error) {
      onError?.(error as Error);
    }
  }, [isSupported, onError]);

  // 切换全屏
  const toggleFullscreen = React.useCallback(async () => {
    if (isFullscreen) {
      await exitFullscreen();
    } else {
      await enterFullscreen();
    }
  }, [isFullscreen, enterFullscreen, exitFullscreen]);

  // 监听全屏状态变化
  React.useEffect(() => {
    if (!isSupported || typeof document === "undefined") return;

    const handleFullscreenChange = () => {
      const doc = document as DocumentWithFullscreen;
      const isCurrentlyFullscreen = !!(
        document.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement
      );

      setIsFullscreen(isCurrentlyFullscreen);

      if (isCurrentlyFullscreen) {
        onEnter?.();
      } else {
        onExit?.();
      }
    };

    // 添加事件监听器（兼容不同浏览器）
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, [isSupported, onEnter, onExit]);

  return React.useMemo(
    () => ({
      isFullscreen,
      isSupported,
      enterFullscreen,
      exitFullscreen,
      toggleFullscreen,
    }),
    [isFullscreen, isSupported, enterFullscreen, exitFullscreen, toggleFullscreen],
  );
}
