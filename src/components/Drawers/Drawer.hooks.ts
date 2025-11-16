"use client";

import React from "react";

import { TRANSITION_STATUS_MAP, useTransitionState } from "@/components/Transition";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { DRAWER_PLACEMENT_MAP, type DrawerProps } from "./Drawer.types";

export function useDrawerStyles({ open = false, placement = "left" }: Partial<DrawerProps>) {
  const { TextColors, BackgroundColors, ShadowStyles } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Drawer });

  const transitionStatus = useTransitionState({ visible: open, duration: 225 });

  const DynamicTransitionStyles = React.useMemo<React.CSSProperties>(() => {
    const isVisible: boolean =
      transitionStatus === TRANSITION_STATUS_MAP.ENTERING || transitionStatus === TRANSITION_STATUS_MAP.ENTERED;
    const baseTransition: React.CSSProperties = {
      transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease-in-out",
      willChange: transitionStatus === TRANSITION_STATUS_MAP.ENTERED ? "auto" : "transform, opacity",
    };
    let transform: string;
    switch (placement) {
      case DRAWER_PLACEMENT_MAP.TOP:
        transform = isVisible ? "translateY(0)" : "translateY(-100%)";
        break;
      case DRAWER_PLACEMENT_MAP.BOTTOM:
        transform = isVisible ? "translateY(0)" : "translateY(100%)";
        break;
      case DRAWER_PLACEMENT_MAP.LEFT:
        transform = isVisible ? "translateX(0)" : "translateX(-100%)";
        break;
      case DRAWER_PLACEMENT_MAP.RIGHT:
        transform = isVisible ? "translateX(0)" : "translateX(100%)";
        break;
      default:
        transform = "translate(0, 0)";
    }
    if (transitionStatus === TRANSITION_STATUS_MAP.EXITED) {
      return {
        ...baseTransition,
        transform,
        opacity: 0,
        visibility: "hidden",
        pointerEvents: "none",
        willChange: "auto",
      };
    }
    return {
      ...baseTransition,
      transform,
      opacity: 1,
      visibility: "visible",
      pointerEvents: "auto",
    };
  }, [transitionStatus, placement]);

  const DynamicPlacementStyles = React.useMemo<React.CSSProperties>(() => {
    switch (placement) {
      case DRAWER_PLACEMENT_MAP.TOP:
        return {
          position: "fixed",
          left: 0,
          right: 0,
          width: "100vw",
          height: "50vh",
          maxHeight: "80vh",
        };
      case DRAWER_PLACEMENT_MAP.BOTTOM:
        return {
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100vw",
          height: "50vh",
          maxHeight: "80vh",
        };
      case DRAWER_PLACEMENT_MAP.LEFT:
        return {
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          height: "100vh",
          width: 400,
          maxWidth: "85vw",
        };
      case DRAWER_PLACEMENT_MAP.RIGHT:
        return {
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          height: "100vh",
          width: 400,
          maxWidth: "85vw",
        };
      default:
        return {
          position: "fixed",
        };
    }
  }, [placement]);

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      // -- default style --
      userSelect: "text",
      overflowY: "auto",
      padding: 16,
      color: TextColors[1],
      backgroundColor: BackgroundColors[1],
      boxShadow: ShadowStyles[2],
      ...DynamicPlacementStyles,
      ...DynamicTransitionStyles,

      // -- custom style override --
      ...customStyle,
    }),
    [TextColors, BackgroundColors, ShadowStyles, DynamicPlacementStyles, DynamicTransitionStyles, customStyle],
  );

  return {
    componentStyle,
    __: {
      DynamicPlacementStyles,
      DynamicTransitionStyles,
      transitionStatus,
    },
  };
}

export function useDrawerActions({ autoCloseOnClickBackdrop, onClickBackdrop }: Partial<DrawerProps>) {
  const handleBackdropClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target !== event.currentTarget) return;
      if (!autoCloseOnClickBackdrop) return;
      onClickBackdrop?.(event);
    },
    [autoCloseOnClickBackdrop, onClickBackdrop],
  );

  return {
    handleBackdropClick,
  };
}
