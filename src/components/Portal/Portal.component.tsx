"use client";

import React from "react";
import { createPortal } from "react-dom";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import type { PortalProps } from "./Portal.types";

const Portal = React.memo<PortalProps>(({ children, containerId }) => {
  const PortalContainer = React.useMemo<HTMLElement | null>(() => {
    if (typeof document === "undefined") return null;
    if (!containerId) return document.body;
    return document.getElementById(containerId);
  }, [containerId]);

  if (!PortalContainer) {
    return null;
  }

  return <>{createPortal(children, PortalContainer)}</>;
});

Portal.displayName = COMPONENT_DISPLAY_NAMES.Portal;
export default Portal;
