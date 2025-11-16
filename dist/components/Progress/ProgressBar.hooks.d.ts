import React from "react";
import type { ProgressBarProps } from "./ProgressBar.types";
export declare function useProgressBarStyles({ height, color, displayValue, }: {
    height?: number;
    color?: string;
    displayValue?: number;
}): {
    containerStyle: React.CSSProperties;
    insideBarStyle: React.CSSProperties;
};
export declare function useProgressBarActions({ value, onChange, animated }: Partial<ProgressBarProps>): {
    displayValue: number;
};
//# sourceMappingURL=ProgressBar.hooks.d.ts.map