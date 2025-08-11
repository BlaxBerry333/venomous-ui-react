"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { useHandler } from "@/hooks";
import { Card } from "../Card";
import type { PopoverProps } from "./index.types";

type PopoverPosition = {
  top: number;
  left: number;
};

const Popover = React.memo<PopoverProps>(
  ({ children, style, contentStyle, direction = "bottom", renderTrigger, trigger = "click", onClickOutside }) => {
    const handler = useHandler();
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const triggerRef = React.useRef<HTMLDivElement>(null);
    const popoverRef = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = React.useState<PopoverPosition>({ top: 0, left: 0 });

    // 外部点击关闭（仅在click模式下生效）
    React.useEffect(() => {
      if (trigger !== "click") return;
      const handleClickOutside = (event: MouseEvent) => {
        if (
          popoverRef.current &&
          !popoverRef.current.contains(event.target as Node) &&
          !triggerRef.current?.contains(event.target as Node)
        ) {
          handler.close();
          if (onClickOutside) {
            onClickOutside();
          }
        }
      };
      if (handler.isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [handler, trigger, onClickOutside]);

    // Popover 定位计算（相对 wrapper）
    React.useEffect(() => {
      if (handler.isOpen && wrapperRef.current && triggerRef.current && popoverRef.current) {
        const wrapperRect = wrapperRef.current.getBoundingClientRect();
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const popoverWidth = popoverRef.current.offsetWidth;
        const popoverHeight = popoverRef.current.offsetHeight;
        const relativeTop = triggerRect.top - wrapperRect.top;
        const relativeLeft = triggerRect.left - wrapperRect.left;

        let top: number;
        let left: number;

        switch (direction) {
          case "top":
            top = relativeTop - popoverHeight;
            left = relativeLeft + triggerRect.width / 2 - popoverWidth / 2;
            break;
          case "bottom":
            top = relativeTop + triggerRect.height;
            left = relativeLeft + triggerRect.width / 2 - popoverWidth / 2;
            break;
          case "left":
            top = relativeTop + triggerRect.height / 2 - popoverHeight / 2;
            left = relativeLeft - popoverWidth;
            break;
          case "right":
            top = relativeTop + triggerRect.height / 2 - popoverHeight / 2;
            left = relativeLeft + triggerRect.width;
            break;
          default:
            top = relativeTop + triggerRect.height;
            left = relativeLeft + triggerRect.width / 2 - popoverWidth / 2;
        }

        setPosition({ top, left });
      }
    }, [handler.isOpen, direction]);

    // hover模式的事件处理函数
    const handleWrapperMouseEnter = () => {
      if (trigger !== "hover") return;
      handler.open();
    };

    const handleWrapperMouseLeave = () => {
      if (trigger !== "hover") return;
      handler.close();
    };

    return (
      <div
        ref={wrapperRef}
        className={clsx("Venomous-UI-React--Popover.TriggerWrapper")}
        style={{ display: "inline-block", position: "relative", ...style }}
        {...(trigger === "hover"
          ? {
              onMouseEnter: handleWrapperMouseEnter,
              onMouseLeave: handleWrapperMouseLeave,
            }
          : {})}
      >
        <div
          ref={triggerRef}
          style={{ display: "inline-block", width: "100%" }}
          className={clsx("Venomous-UI-React--Popover.Trigger")}
          {...(trigger === "click"
            ? {
                onClick: handler.toggle,
              }
            : {})}
        >
          {renderTrigger(handler.isOpen)}
        </div>

        <AnimatePresence>
          {handler.isOpen && (
            <motion.div
              ref={popoverRef}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className={clsx("Venomous-UI-React--Popover")}
              style={{
                boxSizing: "border-box",
                position: "absolute",
                top: position.top,
                left: position.left,
                zIndex: 1000,
                minWidth: direction === "left" || direction === "right" ? undefined : triggerRef.current?.offsetWidth,
                maxWidth: direction === "left" || direction === "right" ? undefined : triggerRef.current?.offsetWidth,
              }}
            >
              <Card
                className={clsx("Venomous-UI-React--Popover.Content")}
                style={{ width: "100%", padding: "8px", ...contentStyle }}
              >
                {children}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

Popover.displayName = "Popover";
export default Popover;
