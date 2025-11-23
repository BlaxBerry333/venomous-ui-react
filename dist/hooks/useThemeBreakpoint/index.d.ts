import { type TThemeBreakpoint } from "../../constants/designs";
export default function useThemeBreakpoint(props?: {
    __?: {
        windowSizeCalculationDebounceMS?: number;
    };
}): {
    breakpoint: TThemeBreakpoint;
    breakpointRange: readonly [0, 575] | readonly [576, 767] | readonly [768, 1023] | readonly [1024, 1365] | readonly [1366, 1919] | readonly [1920, number];
    isXS: boolean;
    isSM: boolean;
    isMD: boolean;
    isLG: boolean;
    isXL: boolean;
    isXXL: boolean;
    isLargerThan: (target: TThemeBreakpoint) => boolean;
    isSmallerThan: (target: TThemeBreakpoint) => boolean;
    isLargerThanOrEqual: (target: TThemeBreakpoint) => boolean;
    isSmallerThanOrEqual: (target: TThemeBreakpoint) => boolean;
};
//# sourceMappingURL=index.d.ts.map