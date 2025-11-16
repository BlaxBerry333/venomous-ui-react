"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { POPOVER_PLACEMENT_MAP, POPOVER_TRIGGER_MAP, type PopoverProps } from "./Popover.types";

interface __Position {
  top: number;
  left: number;
}

export function usePopoverStyles({ position }: { position: __Position }) {
  const { BackgroundColors, ShadowStyles } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.Popover });

  const DynamicPlacementStyles = React.useMemo<React.CSSProperties>(
    () => ({
      position: "fixed",
      top: position.top,
      left: position.left,
      zIndex: 1400, // 比 Dialog (1200) 和 Drawer (1300) 高
    }),
    [position],
  );

  const componentStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",

      // -- default style --
      width: "max-content",
      borderRadius: 8,
      backgroundColor: BackgroundColors[1],
      boxShadow: ShadowStyles[2],
      ...DynamicPlacementStyles,

      // -- custom style --
      ...customStyle,
    }),
    [BackgroundColors, ShadowStyles, DynamicPlacementStyles, customStyle],
  );

  return {
    componentStyle,
    __: {
      DynamicPlacementStyles,
    },
  };
}

export function usePopoverPosition({
  triggerRef,
  popoverRef,
  placement = POPOVER_PLACEMENT_MAP.BOTTOM,
  offset = 2,
  open,
}: {
  triggerRef: React.RefObject<HTMLElement | null>;
  popoverRef: React.RefObject<HTMLElement | null>;
  placement?: PopoverProps["placement"];
  offset?: number;
  open: boolean;
}) {
  const [position, setPosition] = React.useState<__Position>({ top: 0, left: 0 });

  const calculatePosition = React.useCallback(() => {
    const trigger = triggerRef.current;
    const popover = popoverRef.current;
    if (!trigger || !popover) return;

    const triggerRect = trigger.getBoundingClientRect();
    const popoverRect = popover.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (placement) {
      case POPOVER_PLACEMENT_MAP.BOTTOM:
        top = triggerRect.bottom + offset;
        left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
        break;
      case POPOVER_PLACEMENT_MAP.TOP:
        top = triggerRect.top - popoverRect.height - offset;
        left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
        break;
      case POPOVER_PLACEMENT_MAP.LEFT:
        top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
        left = triggerRect.left - popoverRect.width - offset;
        break;
      case POPOVER_PLACEMENT_MAP.RIGHT:
        top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
        left = triggerRect.right + offset;
        break;
      default:
        break;
    }

    // 边界检测
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (left < 8) left = 8;
    if (left + popoverRect.width > viewportWidth - 8) {
      left = viewportWidth - popoverRect.width - 8;
    }
    if (top < 8) top = 8;
    if (top + popoverRect.height > viewportHeight - 8) {
      top = viewportHeight - popoverRect.height - 8;
    }

    setPosition({ top, left });
  }, [triggerRef, popoverRef, placement, offset]);

  React.useEffect(() => {
    if (!open) return;
    calculatePosition();
    window.addEventListener("scroll", calculatePosition, true);
    window.addEventListener("resize", calculatePosition);

    return () => {
      window.removeEventListener("scroll", calculatePosition, true);
      window.removeEventListener("resize", calculatePosition);
    };
  }, [open, calculatePosition]);

  return {
    position,
  };
}

// ============================
// usePopoverActions - 所有状态和事件逻辑
// ============================
export function usePopoverActions({
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
  trigger = POPOVER_TRIGGER_MAP.CLICK,
  autoCloseOnClickOutside = true,
  triggerRef,
  popoverRef,
}: Pick<PopoverProps, "defaultOpen" | "open" | "onOpenChange" | "trigger" | "autoCloseOnClickOutside"> & {
  triggerRef: React.RefObject<HTMLElement | null>;
  popoverRef: React.RefObject<HTMLElement | null>;
}) {
  // ========== 内部状态（非受控模式） ==========
  const [internalOpen, setInternalOpen] = React.useState<boolean>(defaultOpen);

  // 判断是否受控
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  // ========== 状态变化处理 ==========
  const handleOpenChange = React.useCallback(
    (newOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    },
    [isControlled, onOpenChange],
  );

  const onToggle = React.useCallback(() => {
    handleOpenChange(!open);
  }, [open, handleOpenChange]);

  // ========== 绑定触发器元素事件 ==========
  React.useEffect(() => {
    const triggerElement = triggerRef.current;
    if (!triggerElement) return;

    const handleClick = () => {
      handleOpenChange(!open);
    };

    const handleMouseEnter = () => {
      handleOpenChange(true);
    };

    const handleMouseLeave = () => {
      handleOpenChange(false);
    };

    // Click 触发
    if (trigger === POPOVER_TRIGGER_MAP.CLICK) {
      triggerElement.addEventListener("click", handleClick);
      return () => triggerElement.removeEventListener("click", handleClick);
    }

    // Hover 触发
    if (trigger === POPOVER_TRIGGER_MAP.HOVER) {
      triggerElement.addEventListener("mouseenter", handleMouseEnter);
      triggerElement.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        triggerElement.removeEventListener("mouseenter", handleMouseEnter);
        triggerElement.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [trigger, triggerRef, open, handleOpenChange]);

  // ========== 点击外部关闭（仅在 click 模式下生效） ==========
  React.useEffect(() => {
    // hover 模式下不需要点击外部关闭（鼠标移出就会自动关闭）
    if (!open || !autoCloseOnClickOutside || trigger === POPOVER_TRIGGER_MAP.HOVER) return;

    const handleClickOutside = (event: MouseEvent) => {
      const triggerElement = triggerRef.current;
      const popover = popoverRef.current;

      if (
        popover &&
        !popover.contains(event.target as Node) &&
        triggerElement &&
        !triggerElement.contains(event.target as Node)
      ) {
        handleOpenChange(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, autoCloseOnClickOutside, trigger, triggerRef, popoverRef, handleOpenChange]);

  // ========== Hover 触发器事件（仅用于 Popover 本身） ==========
  const PopoverMouseEvents = React.useMemo(() => {
    if (trigger !== POPOVER_TRIGGER_MAP.HOVER) return {};
    return {
      onMouseEnter: () => handleOpenChange(true),
      onMouseLeave: () => handleOpenChange(false),
    };
  }, [trigger, handleOpenChange]);

  // ========== 性能优化：返回对象使用 useMemo 包装 ==========
  return React.useMemo(
    () => ({
      open,
      onToggle,
      PopoverMouseEvents,
    }),
    [open, onToggle, PopoverMouseEvents],
  );
}
