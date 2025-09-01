"use client";

import clsx from "clsx";
import { motion, useAnimation } from "motion/react";
import React from "react";

import { useDesign } from "@/hooks";
import { getLighterHex, getOpacityHex } from "@/utils";
import { Theme } from "../Theme";
import type { ProgressLoadingBarProps } from "./index.types";

const ProgressLoadingBar = React.memo<ProgressLoadingBarProps>(({ height = 8, className, style }) => {
  const controls = useAnimation();

  const { themeColor } = Theme.useThemeColor();
  const design = useDesign();

  const containerRef = React.useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = React.useState<number>(0);

  React.useEffect(() => {
    const calculateMaxX = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const barWidth = containerWidth * 0.3; // 30% width
        setMaxX(containerWidth - barWidth);
      }
    };
    calculateMaxX();
    window.addEventListener("resize", calculateMaxX);
    return () => window.removeEventListener("resize", calculateMaxX);
  }, []);

  React.useEffect(() => {
    if (maxX === 0) return;
    const sequence = async () => {
      while (true) {
        await controls.start({ x: [0, maxX], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
        await controls.start({ x: [maxX, 0], transition: { duration: 1.2, ease: [0.68, -0.55, 0.27, 1.55] } });
      }
    };
    void sequence();
  }, [controls, maxX]);

  return (
    <div
      ref={containerRef}
      className={clsx("Venomous-UI-React--Progress.LoadingBar", className)}
      style={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
        backgroundColor: getOpacityHex(themeColor, 0.2),
        borderRadius: height / 2,
        boxShadow: design.Shadows.tertiary,
        ...style,
      }}
    >
      <motion.div
        animate={controls}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "50%",
          backgroundImage: `linear-gradient(45deg, ${getOpacityHex(themeColor, 0.15)} 0%, ${getLighterHex(themeColor, 0.1)} 90%)`,
          borderRadius: height / 2,
        }}
      />
    </div>
  );
});

ProgressLoadingBar.displayName = "Progress.LoadingBar";
export default ProgressLoadingBar;
