import type { BoxProps, BoxRef } from "../../components/Box/Box.types";
export type ProgressBarRef = BoxRef;
export interface ProgressBarProps extends Omit<BoxProps, "as" | "maxWidth" | "children" | "value" | "onChange"> {
    /**
     * Progress value ( 0-100 ).
     * @default 0
     */
    value?: number;
    /**
     * Callback fired when value changes
     */
    onChange?: (value: number) => void;
    /**
     * Enable auto-animation mode (0 → 100 loop)
     * @default true
     */
    animated?: boolean;
    /**
     * Progress bar color ( hex string ).
     */
    color?: string;
}
//# sourceMappingURL=ProgressBar.types.d.ts.map