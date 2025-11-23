import type { ProgressBarProps, ProgressBarRef } from "./ProgressBar.types";
export type PageScrollProgressBarRef = ProgressBarRef;
export interface PageScrollProgressBarProps extends Omit<ProgressBarProps, "value" | "onChange" | "children" | "animated"> {
    /**
     * Progress bar color
     */
    color?: string;
    /**
     * Disable Portal rendering (render in place instead of body)
     * @default false
     */
    disablePortal?: boolean;
}
//# sourceMappingURL=PageScrollProgressBar.types.d.ts.map