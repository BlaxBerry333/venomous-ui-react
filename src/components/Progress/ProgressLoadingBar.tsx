"use client";

import { motion, useAnimation } from "motion/react";
import React from "react";

import { Colors, getColors } from "@/utils";
import { Theme } from "../Theme";
import type { ProgressLoadingBarProps } from "./index.types";

const ProgressLoadingBar = React.memo<ProgressLoadingBarProps>(({ height = 8, color }) => {
  const controls = useAnimation();

  const { themeColor } = Theme.useThemeColor();

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
      style={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
        backgroundColor: getColors(Colors.disabled).opacity,
        borderRadius: height / 2,
        boxShadow: "rgba(0, 0, 0, 0.14) 0px 6px 10px 0px",
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
          backgroundColor: color || themeColor,
          borderRadius: height / 2,
        }}
      />
    </div>
  );
});

ProgressLoadingBar.displayName = "Progress.LoadingBar";
export default ProgressLoadingBar;
