"use client";

import React from "react";

import { useThemeMode } from "@/hooks";
import { BackgroundColors, BorderColors, ShadowColors } from "@/utils";
import type { DrawerProps } from "./index.types";

const Drawer = React.memo<DrawerProps>(
  ({ isOpen, onClose, children, position = "left", maskClosable = true, width = 300, height = 300, style }) => {
    const { isDarkThemeMode } = useThemeMode();

    const borderColor = isDarkThemeMode ? BorderColors.darkMode : BorderColors.lightMode;
    const backgroundColor = isDarkThemeMode ? BackgroundColors.darkMode : BackgroundColors.lightMode;
    const shadowColor = isDarkThemeMode ? ShadowColors.darkMode : ShadowColors.lightMode;

    return (
      <>
        {/* Mask */}
        <div
          onClick={maskClosable ? onClose : undefined}
          style={{
            boxSizing: "border-box",
            display: isOpen ? "block" : "none",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100svh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
            transition: "opacity 0.3s ease",
            zIndex: 999,
          }}
        />

        {/* Drawer Panel */}
        <div
          style={{
            boxSizing: "border-box",
            position: "fixed",
            backgroundColor,
            boxShadow: `2px 0 8px ${shadowColor}`,
            transition: "transform 0.3s ease",
            zIndex: 1000,
            transform:
              position === "left"
                ? isOpen
                  ? "translateX(0)"
                  : "translateX(-100%)"
                : position === "right"
                  ? isOpen
                    ? "translateX(0)"
                    : "translateX(100%)"
                  : position === "top"
                    ? isOpen
                      ? "translateY(0)"
                      : "translateY(-100%)"
                    : isOpen
                      ? "translateY(0)"
                      : "translateY(100%)",

            ...{
              ...(position === "left" && {
                top: 0,
                left: 0,
                width,
                height: "100svh",
                borderRight: `1px solid ${borderColor}`,
              }),
              ...(position === "right" && {
                top: 0,
                right: 0,
                width,
                height: "100svh",
                borderLeft: `1px solid ${borderColor}`,
              }),
              ...(position === "top" && {
                top: 0,
                left: 0,
                width: "100svw",
                height,
                borderBottom: `1px solid ${borderColor}`,
              }),
              ...(position === "bottom" && {
                bottom: 0,
                left: 0,
                width: "100svw",
                height,
                borderTop: `1px solid ${borderColor}`,
              }),
            },
            ...style,
          }}
        >
          {children}
        </div>
      </>
    );
  },
);

Drawer.displayName = "Drawer";
export default Drawer;
