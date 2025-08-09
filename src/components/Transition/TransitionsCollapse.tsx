"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

import type { TransitionsCollapseProps } from "./index.types";

const TransitionsCollapse = React.memo<TransitionsCollapseProps>(({ className, style, children, isOpen }) => {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          className={clsx("Venomous-UI-React--Transitions.Collapse", className)}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          style={{ overflow: "hidden", ...style }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
});

TransitionsCollapse.displayName = "Transitions.Collapse";
export default TransitionsCollapse;
