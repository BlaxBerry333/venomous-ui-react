"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { useHandler } from "@/hooks";
import { Card } from "../Card";
import type { PopoverPosition, PopoverProps } from "./index.types";

const Popover = React.memo<PopoverProps>(({ children, style, placement = "bottom", renderTrigger }) => {
  const handler = useHandler();
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState<PopoverPosition>({ top: 0, left: 0 });

  // 外部点击关闭
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !triggerRef.current?.contains(event.target as Node)
      ) {
        handler.close();
      }
    };

    if (handler.isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler]);

  // Popover 定位计算（相对 wrapper）
  React.useEffect(() => {
    if (handler.isOpen && wrapperRef.current && triggerRef.current && popoverRef.current) {
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popoverWidth = popoverRef.current.offsetWidth;
      const popoverHeight = popoverRef.current.offsetHeight;

      const relativeTop = triggerRect.top - wrapperRect.top;
      const relativeLeft = triggerRect.left - wrapperRect.left;

      const top = placement === "bottom" ? relativeTop + triggerRect.height + 8 : relativeTop - popoverHeight - 8;

      const left = relativeLeft + triggerRect.width / 2 - popoverWidth / 2;

      setPosition({ top, left });
    }
  }, [handler.isOpen, placement]);

  return (
    <div ref={wrapperRef} style={{ display: "inline-block", position: "relative" }}>
      <div ref={triggerRef} onClick={handler.toggle} style={{ display: "inline-block", cursor: "pointer" }}>
        {renderTrigger({ isOpen: handler.isOpen })}
      </div>

      <AnimatePresence>
        {handler.isOpen && (
          <motion.div
            ref={popoverRef}
            initial={{ opacity: 0, y: placement === "bottom" ? -5 : 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: placement === "bottom" ? -5 : 5 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
              zIndex: 1000,
              minWidth: triggerRef.current?.offsetWidth,
            }}
          >
            <Card style={style}>{children}</Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

Popover.displayName = "Popover";
export default Popover;
