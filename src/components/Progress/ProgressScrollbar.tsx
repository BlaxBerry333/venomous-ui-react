"use client";

import { motion, useScroll } from "motion/react";
import React from "react";

import { getLighterHex, getOpacityHex } from "@/utils";
import { Theme } from "../Theme";
import type { ProgressScrollbarProps } from "./index.types";

const ProgressScrollbar = React.memo<ProgressScrollbarProps>(({ height = 8 }) => {
  const { scrollYProgress } = useScroll();
  const { themeColor } = Theme.useThemeColor();

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
        backgroundImage: `linear-gradient(45deg, ${getLighterHex(themeColor, 0.2)} 0%, ${getOpacityHex(themeColor, 0.15)} 90%)`,
        height: height,
        borderTopRightRadius: "16px",
        borderBottomRightRadius: "16px",
      }}
    />
  );
});

ProgressScrollbar.displayName = "Progress.Scrollbar";
export default ProgressScrollbar;
