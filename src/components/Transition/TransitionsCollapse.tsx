"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

import type { TransitionsCollapseProps } from "./index.types";

const TransitionsCollapse = React.memo<TransitionsCollapseProps>(
  ({ className, style, children, isOpen, direction = "down" }) => {
    const motionStyles = React.useMemo(() => {
      switch (direction) {
        case "left":
          return {
            initial: { opacity: 0, scaleX: 0, originX: 1 },
            animate: { opacity: 1, scaleX: 1, originX: 1 },
            exit: { opacity: 0, scaleX: 0, originX: 1 },
          };
        case "right":
          return {
            initial: { opacity: 0, scaleX: 0, originX: 0 },
            animate: { opacity: 1, scaleX: 1, originX: 0 },
            exit: { opacity: 0, scaleX: 0, originX: 0 },
          };
        case "up":
          return {
            initial: { opacity: 0, scaleY: 0, originY: 1 },
            animate: { opacity: 1, scaleY: 1, originY: 1 },
            exit: { opacity: 0, scaleY: 0, originY: 1 },
          };
        case "down":
        default:
          return {
            initial: { opacity: 0, scaleY: 0, originY: 0 },
            animate: { opacity: 1, scaleY: 1, originY: 0 },
            exit: { opacity: 0, scaleY: 0, originY: 0 },
          };
      }
    }, [direction]);

    return (
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={clsx("Venomous-UI-React--Transitions.Collapse", className)}
            initial={motionStyles.initial}
            animate={motionStyles.animate}
            exit={motionStyles.exit}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden", ...style }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

TransitionsCollapse.displayName = "Transitions.Collapse";
export default TransitionsCollapse;
