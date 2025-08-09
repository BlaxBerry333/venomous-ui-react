"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

import { BackgroundColors, getOpacityHex } from "@/utils";
import { Card } from "../Card";
import { Theme } from "../Theme";
import type { DrawerProps } from "./index.types";

const Drawer = React.memo<DrawerProps>(
  ({ isOpen, onClose, children, position = "left", maskClosable = true, width = 300, height = 300, style }) => {
    const { themeMode } = Theme.useThemeMode();

    return (
      <>
        {/* Mask */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              onClick={maskClosable ? onClose : undefined}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={clsx("Venomous-UI-React--Drawer.Mask")}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 999,
                width: "100vw",
                height: "100svh",
                backgroundColor: getOpacityHex(BackgroundColors[themeMode].primary, 0.5),
                backdropFilter: "blur(2px)",
                pointerEvents: isOpen ? "auto" : "none",
              }}
            />
          )}
        </AnimatePresence>

        {/* Drawer Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
              initial={
                position === "left"
                  ? { x: "-100%" }
                  : position === "right"
                    ? { x: "100%" }
                    : position === "top"
                      ? { y: "-100%" }
                      : { y: "100%" }
              }
              exit={
                position === "left"
                  ? { x: "-100%" }
                  : position === "right"
                    ? { x: "100%" }
                    : position === "top"
                      ? { y: "-100%" }
                      : { y: "100%" }
              }
              className={clsx("Venomous-UI-React--Drawer.Panel")}
              style={{
                boxSizing: "border-box",
                position: "fixed",
                zIndex: 1000,
                ...(position === "left" && {
                  top: 0,
                  left: 0,
                  width,
                  height: "100svh",
                }),
                ...(position === "right" && {
                  top: 0,
                  right: 0,
                  width,
                  height: "100svh",
                }),
                ...(position === "top" && {
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height,
                }),
                ...(position === "bottom" && {
                  bottom: 0,
                  left: 0,
                  width: "100vw",
                  height,
                }),
              }}
            >
              <Card
                className={clsx("Venomous-UI-React--Drawer.Card")}
                style={{
                  width: "100%",
                  height: "100%",
                  ...(position === "left" && {
                    borderRight: "none",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }),
                  ...(position === "right" && {
                    borderLeft: "none",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }),
                  ...(position === "top" && {
                    borderBottom: "none",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  }),
                  ...(position === "bottom" && {
                    borderTop: "none",
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }),
                  ...style,
                }}
              >
                {children}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  },
);

Drawer.displayName = "Drawer";
export default Drawer;
