import type { SpaceFlexProps, SpaceFlexRef } from "../../components/Space";
export type TabsTabRef = SpaceFlexRef;
export interface TabsTabProps extends Omit<SpaceFlexProps, "children" | "prefix" | "suffix" | "onClick"> {
    /**
     * The unique identifier of the tab.
     * @required
     */
    value: string | number;
    /**
     * The label to be displayed.
     * @required
     */
    label: string;
    /**
     * Whether the tab is selected.
     * @default false
     */
    selected?: boolean;
    /**
     * Whether the tab is disabled.
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether the tab list is in column layout.
     * When true, selected border changes from bottom to right.
     * @default false
     */
    column?: boolean;
    /**
     * Custom theme color.
     */
    color?: string;
    /**
     * Prefix element (e.g., Icon).
     */
    prefix?: React.ReactNode;
    /**
     * Suffix element (e.g., Badge).
     */
    suffix?: React.ReactNode;
    /**
     * Click handler.
     */
    onClick?: (value: string | number, event: React.MouseEvent<HTMLDivElement>) => void;
}
//# sourceMappingURL=TabsTab.types.d.ts.map