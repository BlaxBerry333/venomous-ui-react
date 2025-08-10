"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

import { Buttons } from "../Button";
import { useLayoutContext } from "./context/hooks";
import type { LayoutCollapseSideProps } from "./index.types";

const LayoutCollapseSide = React.memo<LayoutCollapseSideProps>(
  ({ className, style, collapsedSideWidth = 0, renderContent }) => {
    const { headerHeight, sideWidth } = useLayoutContext();

    const [isCollapsed, setIsCollapsed] = React.useState<boolean>(__getCollapseStateFromStorage);
    const toggleCollapsed = React.useCallback(() => {
      const newState = !isCollapsed;
      __setCollapseStateToStorage(newState);
      React.startTransition(() => setIsCollapsed(newState));
    }, [isCollapsed]);

    return (
      <motion.aside
        className={clsx("Venomous-UI-React--Layout.CollapseSide", className)}
        initial={false}
        animate={{ width: isCollapsed ? collapsedSideWidth : sideWidth }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          boxSizing: "border-box",
          height: `calc(100svh - ${headerHeight}px)`,
          position: "sticky",
          top: `${headerHeight}px`,
          left: 0,
          zIndex: 1,
          ...style,
        }}
      >
        <Buttons.Icon
          className="Venomous-UI-React--Layout.CollapseSide--Toggler"
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
          className: "Venomous-UI-React--Layout.CollapseSide--Content",
          baseStyles: { height: "100%", width: "100%", overflowX: "hidden", overflowY: "scroll" },
        })}
      </motion.aside>
    );
  },
);

LayoutCollapseSide.displayName = "Layout.CollapseSide";
export default LayoutCollapseSide;

const STORAGE_KEY = "VENOMOUS_UI__LAYOUT_COLLAPSE_SIDE" as const;

function __getCollapseStateFromStorage(): boolean {
  return localStorage.getItem(STORAGE_KEY) === "true";
}

function __setCollapseStateToStorage(value: boolean): void {
  localStorage.setItem(STORAGE_KEY, String(value));
}
