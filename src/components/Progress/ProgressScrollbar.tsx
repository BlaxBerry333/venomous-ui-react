"use client";

import { motion, useScroll } from "motion/react";
import React from "react";

import { getColors } from "@/utils";
import { Theme } from "../Theme";
import type { ProgressScrollbarProps } from "./index.types";

const ProgressScrollbar = React.memo<ProgressScrollbarProps>(({ height = 8, color }) => {
  const { scrollYProgress } = useScroll();
  const { themeColor } = Theme.useThemeColor();

  const ScrollbarColors = React.useMemo(() => getColors(color || themeColor), [color, themeColor]);

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        originX: 0,
        zIndex: 10000,
        backgroundImage: `linear-gradient(to right, ${ScrollbarColors.light}, ${ScrollbarColors.origin}, ${ScrollbarColors.opacity})`,
        height: height,
        borderRadius: "8px",
      }}
    />
  );
});

ProgressScrollbar.displayName = "Progress.Scrollbar";
export default ProgressScrollbar;
