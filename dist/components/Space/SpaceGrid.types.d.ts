import type { BoxProps, BoxRef } from "../../components/Box/Box.types";
import type { TThemeBreakpoint } from "../../constants/designs";
export type SpaceGridRef = BoxRef;
export interface SpaceGridProps extends BoxProps {
    /**
     * The number of columns
     * @default 1
     */
    columns?: number | Partial<Record<TThemeBreakpoint, number>>;
    /**
     * The spacing between the flex items
     * @default 0
     */
    spacing?: number | Partial<Record<TThemeBreakpoint, number>>;
}
//# sourceMappingURL=SpaceGrid.types.d.ts.map