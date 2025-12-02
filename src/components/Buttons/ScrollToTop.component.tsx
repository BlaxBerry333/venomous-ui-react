"use client";

import React from "react";

import clsx from "clsx";

import { Transition } from "@/components/Transition";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import IconButton from "./IconButton.component";
import { useScrollToTopActions } from "./ScrollToTop.hooks";
import type { ScrollToTopProps, ScrollToTopRef } from "./ScrollToTop.types";

const ScrollToTop = React.memo(
  React.forwardRef<ScrollToTopRef, ScrollToTopProps>(
    (
      {
        className,
        style,
        children,

        distance: propDistance,

        onClick,
        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<ScrollToTopProps>({
        displayName: COMPONENT_DISPLAY_NAMES.ScrollToTop,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const distance = propDistance ?? customComponentProps.distance ?? 300;

      // ========== Actions Hook ==========
      const { isVisible, handleClick } = useScrollToTopActions({
        distance,
        onClick,
      });

      // ========== 如果有自定义 children，使用原生 button ==========
      if (children) {
        return (
          <Transition.Fade visible={isVisible} duration={200}>
            <button
              ref={ref}
              type="button"
              className={clsx(COMPONENT_CLASSNAME_NAMES.ScrollToTop, className)}
              style={{
                ...__CUSTOM_BUTTON_BASE_STYLE,
                ...__FIXED_POSITION_STYLE,
                ...style,
              }}
              onClick={handleClick}
              aria-label="Scroll to top"
              {...props}
            >
              {children}
            </button>
          </Transition.Fade>
        );
      }

      // ========== 默认使用 IconButton ==========
      return (
        <Transition.Fade visible={isVisible} duration={200}>
          <IconButton
            ref={ref}
            icon="solar:alt-arrow-up-bold"
            circle
            className={clsx(COMPONENT_CLASSNAME_NAMES.ScrollToTop, className)}
            style={{
              ...__FIXED_POSITION_STYLE,
              ...style,
            }}
            onClick={handleClick}
            aria-label="Scroll to top"
            {...props}
          />
        </Transition.Fade>
      );
    },
  ),
);

ScrollToTop.displayName = COMPONENT_DISPLAY_NAMES.ScrollToTop;
export default ScrollToTop;

// ========== 私有常量 ==========
const __FIXED_POSITION_STYLE: React.CSSProperties = {
  position: "fixed",
  bottom: 24,
  right: 24,
  zIndex: 1000,
};

const __CUSTOM_BUTTON_BASE_STYLE: React.CSSProperties = {
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 12,
  borderWidth: 0,
  borderStyle: "none",
  borderRadius: 4,
  cursor: "pointer",
  transition: "all 0.25s ease",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
};
