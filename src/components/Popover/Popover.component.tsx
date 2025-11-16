"use client";

import React from "react";

import clsx from "clsx";

import { Box } from "@/components/Box";
import { Portal } from "@/components/Portal";
import { Transition } from "@/components/Transition";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import { usePopoverActions, usePopoverPosition, usePopoverStyles } from "./Popover.hooks";
import { POPOVER_TRIGGER_MAP, type PopoverProps, type PopoverRef } from "./Popover.types";

const Popover = React.memo(
  React.forwardRef<PopoverRef, PopoverProps>(
    (
      {
        className,
        style,
        children,
        content,
        trigger = POPOVER_TRIGGER_MAP.CLICK,
        placement = "bottom",
        offset = 2,
        autoCloseOnClickOutside = true,
        defaultOpen = false,
        open: controlledOpen,
        onOpenChange,
        ...props
      },
      ref,
    ) => {
      // ========== 内部 ref（用于定位和事件绑定） ==========
      const triggerRef = React.useRef<HTMLElement | null>(null);
      const popoverRef = React.useRef<HTMLElement | null>(null);

      // ========== 状态和事件管理 ==========
      const { open, onToggle, PopoverMouseEvents } = usePopoverActions({
        defaultOpen,
        open: controlledOpen,
        onOpenChange,
        trigger,
        autoCloseOnClickOutside,
        triggerRef,
        popoverRef,
      });

      // ========== 位置计算 ==========
      const { position } = usePopoverPosition({
        triggerRef,
        popoverRef,
        placement,
        offset,
        open,
      });

      // ========== 样式计算 ==========
      const { componentStyle } = usePopoverStyles({ position });

      // ========== 渲染触发器元素（Render Props） ==========
      const triggerElement = React.useMemo(() => {
        return children({
          ref: triggerRef,
          open,
          onToggle,
        });
      }, [children, open, onToggle]);

      return (
        <>
          {triggerElement}

          <Portal>
            <Transition.Fade visible={open}>
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
                {content}
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
