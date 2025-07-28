"use client";

import { AnimatePresence, motion } from "motion/react";
import React from "react";

import { BackgroundColors, BreakPointName, getOpacityHex, ThemeBreakPoint } from "@/utils";
import { Card } from "../Card";
import { Theme } from "../Theme";
import type { ModalProps } from "./index.types";

const Modal = React.memo<ModalProps>(
  ({ children, style, isOpen, onClose, maskClosable = true, maxBreakpoint = BreakPointName.xs }) => {
    const { themeMode } = Theme.useThemeMode();

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={maskClosable ? onClose : undefined}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 1000,
              width: "100svw",
              height: "100svh",
              backgroundColor: getOpacityHex(BackgroundColors[themeMode].primary, 0.5),
              backdropFilter: "blur(2px)",
              opacity: isOpen ? 1 : 0,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "max-content",
                maxHeight: "90%",
                width: ThemeBreakPoint[maxBreakpoint],
                maxWidth: ThemeBreakPoint[maxBreakpoint],
              }}
            >
              <Card style={{ width: "100%", ...style }}>{children}</Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

Modal.displayName = "Modal";
export default Modal;
