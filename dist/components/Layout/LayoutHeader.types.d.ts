import type { BoxProps, BoxRef } from "../../components/Box/Box.types";
import type { PageScrollProgressBarProps } from "../../components/Progress";
export type LayoutHeaderRef = BoxRef;
export interface LayoutHeaderProps extends Omit<BoxProps, "as" | "children"> {
    /**
     * Logo element ( left side ).
     */
    Logo?: React.ReactNode;
    /**
     * Menu element (right side).
     */
    Menu?: React.ReactNode;
    /**
     * Custom children ( overrides logo and menu ).
     */
    children?: React.ReactNode;
    /**
     * Show page scroll progress bar.
     * @default true
     */
    showProgressBar?: boolean;
    /**
     * Progress bar props.
     */
    ProgressBarProps?: Partial<PageScrollProgressBarProps>;
}
//# sourceMappingURL=LayoutHeader.types.d.ts.map