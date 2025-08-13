"use client";

import clsx from "clsx";
import React from "react";

import { Transitions } from "../Transition";
import { useLayoutContext } from "./context/hooks";
import type { LayoutCollapseSideProps } from "./index.types";

const LayoutCollapseSide = React.memo<LayoutCollapseSideProps>(
  ({ className, style, collapsedSideWidth = 0, renderContent }) => {
    const { headerHeight, sideWidth } = useLayoutContext();

    return (
      <Transitions.CollapseSide
        storageKey="VENOMOUS_UI__LAYOUT_COLLAPSE_SIDE"
        expandSideWidth={sideWidth}
        collapsedSideWidth={collapsedSideWidth}
        renderContent={renderContent}
        className={clsx("Venomous-UI-React--Layout.CollapseSide", className)}
        style={{
          boxSizing: "border-box",
          height: `calc(100svh - ${headerHeight}px)`,
          position: "sticky",
          top: `${headerHeight}px`,
          left: 0,
          zIndex: 1,
          ...style,
        }}
      />
    );
  },
);

LayoutCollapseSide.displayName = "Layout.CollapseSide";
export default LayoutCollapseSide;
