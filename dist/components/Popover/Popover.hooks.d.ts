import React from "react";
import { type PopoverProps } from "./Popover.types";
interface __Position {
    top: number;
    left: number;
}
export declare function usePopoverStyles({ position, isPositioned, isTriggerVisible, }: {
    position: __Position;
    isPositioned: boolean;
    isTriggerVisible: boolean;
}): {
    componentStyle: React.CSSProperties;
    __: {
        DynamicPlacementStyles: React.CSSProperties;
    };
};
export declare function usePopoverPosition({ triggerRef, popoverRef, placement, offset, isOpen, }: {
    triggerRef: React.RefObject<HTMLElement | null>;
    popoverRef: React.RefObject<HTMLElement | null>;
    placement?: PopoverProps["placement"];
    offset?: number;
    isOpen: boolean;
}): {
    position: __Position;
    isPositioned: boolean;
    isTriggerVisible: boolean;
};
export declare function usePopoverActions({ defaultOpen, triggerEvent, autoCloseOnClickOutside, triggerRef, popoverRef, }: Pick<PopoverProps, "defaultOpen" | "triggerEvent" | "autoCloseOnClickOutside"> & {
    triggerRef: React.RefObject<HTMLElement | null>;
    popoverRef: React.RefObject<HTMLElement | null>;
}): {
    open: boolean;
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