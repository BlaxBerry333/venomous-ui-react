import type { BoxProps, BoxRef } from "../../components/Box/Box.types";
export declare const POPOVER_PLACEMENT_MAP: {
    readonly TOP: "top";
    readonly BOTTOM: "bottom";
    readonly LEFT: "left";
    readonly RIGHT: "right";
};
export declare const POPOVER_TRIGGER_EVENT_MAP: {
    readonly CLICK: "click";
    readonly HOVER: "hover";
};
export type PopoverRef = BoxRef;
/**
 * Render props provided to trigger function.
 */
export interface PopoverTriggerRenderProps {
    /**
     * Ref to attach to the trigger element (required for positioning and event binding).
     * This ref can be safely cast to the specific element type you're using.
     * @required - Must be attached to the trigger element.
     */
    ref: React.Ref<any>;
    /**
     * Whether the popover is currently open.
     */
    isOpen: boolean;
}
export interface PopoverProps extends Omit<BoxProps, "as" | "maxWidth" | "children"> {
    /**
     * Render props function to render the trigger element.
     * The function receives { ref, isOpen } and must return a React element with ref attached.
     * @example
     * trigger={({ ref, isOpen }) => <Button ref={ref}>{isOpen ? "Close" : "Open"}</Button>}
     */
    trigger: (props: PopoverTriggerRenderProps) => React.ReactElement;
    /**
     * The content to display inside the popover.
     */
    children: React.ReactNode;
    /**
     * The event type that triggers the popover to show/hide.
     * @default "click"
     */
    triggerEvent?: (typeof POPOVER_TRIGGER_EVENT_MAP)[keyof typeof POPOVER_TRIGGER_EVENT_MAP];
    /**
     * The placement of the popover.
     * @default "bottom"
     */
    placement?: (typeof POPOVER_PLACEMENT_MAP)[keyof typeof POPOVER_PLACEMENT_MAP];
    /**
     * The offset between the trigger element and the popover ( px ).
     * @default 2
     */
    offset?: number;
    /**
     * Whether to close the popover when clicking outside.
     * @default true
     */
    autoCloseOnClickOutside?: boolean;
    /**
     * Default open state.
     * @default false
     */
    defaultOpen?: boolean;
}
//# sourceMappingURL=Popover.types.d.ts.map