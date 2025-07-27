"use client";

import React from "react";

import { BackgroundColors, BorderColors, getOpacityHex, ThemeShadow } from "@/utils";
import { Theme } from "../Theme";
import type { DrawerProps } from "./index.types";

const Drawer = React.memo<DrawerProps>(
  ({ isOpen, onClose, children, position = "left", maskClosable = true, width = 300, height = 300, style }) => {
    const { themeMode } = Theme.useThemeMode();

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
            zIndex: 999,
            width: "100vw",
            height: "100svh",
            backgroundColor: getOpacityHex(BackgroundColors[themeMode].primary, 0.5),
            backdropFilter: "blur(2px)",
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Drawer Panel */}
        <div
          style={{
            boxSizing: "border-box",
            position: "fixed",
            backgroundColor: BackgroundColors[themeMode].secondary,
            boxShadow: ThemeShadow[themeMode].base,
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
            outlineStyle: "solid",
            outlineColor: BorderColors[themeMode].primary,
            outlineWidth: 0,
            ...{
              ...(position === "left" && {
                top: 0,
                left: 0,
                width,
                height: "100svh",
                outlineWidth: 1.5,
              }),
              ...(position === "right" && {
                top: 0,
                right: 0,
                width,
                height: "100svh",
                outlineLeftWidth: 1.5,
              }),
              ...(position === "top" && {
                top: 0,
                left: 0,
                width: "100svw",
                height,
                outlineBottomWidth: 1.5,
              }),
              ...(position === "bottom" && {
                bottom: 0,
                left: 0,
                width: "100svw",
                height,
                outlineTopWidth: 1.5,
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
