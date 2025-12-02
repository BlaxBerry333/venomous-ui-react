"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { Portal } from "@/components/Portal";
import { Transition } from "@/components/Transition";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { usePopoverActions, usePopoverPosition, usePopoverStyles } from "./Popover.hooks";
import { POPOVER_TRIGGER_EVENT_MAP, type PopoverProps, type PopoverRef } from "./Popover.types";

const Popover = React.memo(
  React.forwardRef<PopoverRef, PopoverProps>(
    (
      {
        className,
        style,
        trigger,
        children,
        triggerEvent: propTriggerEvent,
        placement: propPlacement,
        offset: propOffset,
        autoCloseOnClickOutside: propAutoClose,
        defaultOpen: propDefaultOpen,
        ...props
      },
      ref,
    ) => {
      // ========== 获取 customComponentProps ==========
      const customComponentProps = useCustomComponentProps<PopoverProps>({
        displayName: COMPONENT_DISPLAY_NAMES.Popover,
      });

      // ========== 合并 Props（优先级：直接传入 > customComponentProps > 默认值）==========
      const triggerEvent = propTriggerEvent ?? customComponentProps.triggerEvent ?? POPOVER_TRIGGER_EVENT_MAP.CLICK;
      const placement = propPlacement ?? customComponentProps.placement ?? "bottom";
      const offset = propOffset ?? customComponentProps.offset ?? 2;
      const autoCloseOnClickOutside = propAutoClose ?? customComponentProps.autoCloseOnClickOutside ?? true;
      const defaultOpen = propDefaultOpen ?? customComponentProps.defaultOpen ?? false;

      const triggerRef = React.useRef<HTMLElement | null>(null);
      const popoverRef = React.useRef<HTMLElement | null>(null);

      const { open: isOpen, PopoverMouseEvents } = usePopoverActions({
        defaultOpen,
        triggerEvent,
        autoCloseOnClickOutside,
        triggerRef,
        popoverRef,
      });

      const { position, isPositioned, isTriggerVisible } = usePopoverPosition({
        triggerRef,
        popoverRef,
        placement,
        offset,
        isOpen,
      });

      const { componentStyle } = usePopoverStyles({
        position,
        isPositioned,
        isTriggerVisible,
      });

      return (
        <>
          {/* Trigger Element */}
          {trigger({
            ref: triggerRef,
            isOpen,
          })}

          {/* Popover Content */}
          <Portal>
            <Transition.Fade visible={isOpen}>
              <Box
                as="div"
                ref={(node) => {
                  popoverRef.current = node;
                  if (typeof ref === "function") ref(node);
                  else if (ref) ref.current = node;
                }}
                className={clsx(COMPONENT_CLASSNAME_NAMES.Popover, className)}
                style={{ ...componentStyle, ...style }}
                {...props}
                {...PopoverMouseEvents}
              >
                {children}
              </Box>
            </Transition.Fade>
          </Portal>
        </>
      );
    },
  ),
);

Popover.displayName = COMPONENT_DISPLAY_NAMES.Popover;
export default Popover;
