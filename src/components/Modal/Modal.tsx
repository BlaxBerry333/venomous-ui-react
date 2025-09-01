"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

import { useDesign } from "@/hooks";
import { BREAK_POINT_NAMES, getOpacityHex, THEME_BREAKPOINTS } from "@/utils";
import { Card } from "../Card";
import type { ModalProps } from "./index.types";

const Modal = React.memo<ModalProps>(
  ({ children, className, style, isOpen, onClose, maskClosable = true, maxBreakpoint = BREAK_POINT_NAMES.xs }) => {
    const design = useDesign();

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={maskClosable ? onClose : undefined}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={clsx("Venomous-UI-React--Modal", className)}
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
              backgroundColor: getOpacityHex(design.BackgroundColors.primary, 0.5),
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
                width: THEME_BREAKPOINTS[maxBreakpoint],
                maxWidth: THEME_BREAKPOINTS[maxBreakpoint],
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
