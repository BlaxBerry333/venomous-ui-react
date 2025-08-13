"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

import { Buttons } from "../Button";
import type { TransitionsCollapseSideProps } from "./index.types";

const TransitionCollapseSide = React.memo<TransitionsCollapseSideProps>(
  ({
    className,
    style,
    expandSideWidth = 200,
    collapsedSideWidth = 60,
    renderContent,
    storageKey = "VENOMOUS_UI__TRANSITION_COLLAPSE_SIDE",
  }) => {
    const [isCollapsed, setIsCollapsed] = React.useState<boolean>(__getCollapseStateFromStorage(storageKey));
    const toggleCollapsed = React.useCallback(() => {
      const newState = !isCollapsed;
      __setCollapseStateToStorage(storageKey, newState);
      React.startTransition(() => setIsCollapsed(newState));
    }, [isCollapsed, storageKey]);

    return (
      <motion.aside
        className={clsx("Venomous-UI-React--Transition.CollapseSide", className)}
        initial={false}
        animate={{ width: isCollapsed ? collapsedSideWidth : expandSideWidth }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          boxSizing: "border-box",
          height: `calc(100svh - 0px)`,
          position: "sticky",
          top: 0,
          left: 0,
          zIndex: 1,
          ...style,
        }}
      >
        <Buttons.Icon
          className="Venomous-UI-React--Transition.CollapseSide--Toggler"
          icon={isCollapsed ? "solar:arrow-right-bold" : "solar:arrow-left-bold"}
          iconWidth={24}
          variant="outlined"
          onClick={toggleCollapsed}
          style={{
            position: "absolute",
            top: 8,
            right: 0,
            transform: "translateX(50%)",
            zIndex: 1,
            borderRadius: "50%",
            borderWidth: 0,
            height: 32,
            minWidth: 32,
            padding: 0,
          }}
        />

        {renderContent({
          isCollapsed,
          className: "Venomous-UI-React--Transition.CollapseSide--Content",
          baseStyles: { height: "100%", width: "100%", overflowX: "hidden", overflowY: "scroll" },
        })}
      </motion.aside>
    );
  },
);

TransitionCollapseSide.displayName = "Transition.CollapseSide";
export default TransitionCollapseSide;

function __getCollapseStateFromStorage(storageKey: string): boolean {
  return localStorage.getItem(storageKey) === "true";
}

function __setCollapseStateToStorage(storageKey: string, value: boolean): void {
  localStorage.setItem(storageKey, String(value));
}
