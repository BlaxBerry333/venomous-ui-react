import React from "react";
import { type PopoverProps } from "./Popover.types";
interface __Position {
    top: number;
    left: number;
}
export declare function usePopoverStyles({ position }: {
    position: __Position;
}): {
    componentStyle: React.CSSProperties;
    __: {
        DynamicPlacementStyles: React.CSSProperties;
    };
};
export declare function usePopoverPosition({ triggerRef, popoverRef, placement, offset, open, }: {
    triggerRef: React.RefObject<HTMLElement | null>;
    popoverRef: React.RefObject<HTMLElement | null>;
    placement?: PopoverProps["placement"];
    offset?: number;
    open: boolean;
}): {
    position: __Position;
};
export declare function usePopoverActions({ defaultOpen, open: controlledOpen, onOpenChange, trigger, autoCloseOnClickOutside, triggerRef, popoverRef, }: Pick<PopoverProps, "defaultOpen" | "open" | "onOpenChange" | "trigger" | "autoCloseOnClickOutside"> & {
    triggerRef: React.RefObject<HTMLElement | null>;
    popoverRef: React.RefObject<HTMLElement | null>;
}): {
    open: boolean;
    onToggle: () => void;
    PopoverMouseEvents: {
        onMouseEnter?: undefined;
        onMouseLeave?: undefined;
    } | {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    };
};
export {};
//# sourceMappingURL=Popover.hooks.d.ts.map