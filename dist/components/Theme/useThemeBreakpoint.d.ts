import { BreakPointName } from "@/utils";
export default function useThemeBreakpoint(): {
    screenSize: BreakPointName;
    isLargerThanOrEqual: (targetBreakpoint: BreakPointName) => boolean;
    isMounted: boolean;
    isSSRHydrated: boolean;
};
/**
 * 智能默认断点检测
 */
export declare function _getSmartDefaultBreakpoint(): BreakPointName;
//# sourceMappingURL=useThemeBreakpoint.d.ts.map