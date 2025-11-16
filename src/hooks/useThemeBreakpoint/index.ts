"use client";

import React from "react";

import { THEME_BREAKPOINTS, THEME_BREAKPOINT_RANGES, type TThemeBreakpoint } from "@/constants/designs";

export default function useThemeBreakpoint(props?: { __?: { windowSizeCalculationDebounceMS?: number } }) {
  const debounceMs = props?.__?.windowSizeCalculationDebounceMS ?? __DEFAULT_WINDOW_SIZE_CALCULATION_DEBOUNCE_MS;

  const [breakpoint, setBreakpoint] = React.useState<TThemeBreakpoint>(() =>
    typeof window !== "undefined" ? __getBreakpointFromWidth(window.innerWidth) : THEME_BREAKPOINTS.XS,
  );

  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        const newBreakpoint = __getBreakpointFromWidth(window.innerWidth);
        setBreakpoint((prev) => (prev !== newBreakpoint ? newBreakpoint : prev));
      }, debounceMs);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [debounceMs]);

  return React.useMemo(
    () => ({
      breakpoint,
      breakpointRange: THEME_BREAKPOINT_RANGES[breakpoint],
    }),
    [breakpoint],
  );
}

const __DEFAULT_WINDOW_SIZE_CALCULATION_DEBOUNCE_MS = 150;

function __getBreakpointFromWidth(width: number): TThemeBreakpoint {
  for (const key of Object.keys(THEME_BREAKPOINTS) as Array<keyof typeof THEME_BREAKPOINTS>) {
    const breakpoint = THEME_BREAKPOINTS[key];
    const [min, max] = THEME_BREAKPOINT_RANGES[breakpoint];
    if (width >= min && width <= max) {
      return breakpoint;
    }
  }
  return THEME_BREAKPOINTS.XS;
}
