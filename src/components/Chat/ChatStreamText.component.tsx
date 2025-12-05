"use client";

import React from "react";

import clsx from "clsx";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { useChatStreamTextActions, useChatStreamTextStyles } from "./ChatStreamText.hooks";
import type { ChatStreamTextProps, ChatStreamTextRef } from "./ChatStreamText.types";

const ChatStreamText = React.memo(
  React.forwardRef<ChatStreamTextRef, ChatStreamTextProps>(
    (
      {
        className,
        style,
        text,
        speed: propSpeed,
        streaming: propStreaming,
        onComplete: propOnComplete,
        skipAnimation: propSkipAnimation,
        cursor: propCursor,
        showCursor: propShowCursor,
        cursorBlinkSpeed: propCursorBlinkSpeed,
        ...props
      },
      ref,
    ) => {
      // ========== customComponentProps ==========
      const customComponentProps = useCustomComponentProps<ChatStreamTextProps>({
        displayName: COMPONENT_DISPLAY_NAMES.ChatStreamText,
      });

      // ========== Merge Props ==========
      const speed = propSpeed ?? customComponentProps.speed ?? 30;
      const streaming = propStreaming ?? customComponentProps.streaming ?? false;
      const onComplete = propOnComplete ?? customComponentProps.onComplete;
      const skipAnimation = propSkipAnimation ?? customComponentProps.skipAnimation ?? false;
      const cursor = propCursor ?? customComponentProps.cursor ?? "|";
      const showCursor = propShowCursor ?? customComponentProps.showCursor ?? true;
      const cursorBlinkSpeed = propCursorBlinkSpeed ?? customComponentProps.cursorBlinkSpeed ?? 10000;

      const { containerStyle, cursorStyle } = useChatStreamTextStyles({ cursorBlinkSpeed });
      const { displayedText, showCursorNow } = useChatStreamTextActions({
        text,
        speed,
        streaming,
        skipAnimation,
        onComplete,
      });

      return (
        <span
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.ChatStreamText, className)}
          style={{ ...containerStyle, ...style }}
          {...props}
        >
          {displayedText}
          {showCursor && showCursorNow && (
            <span style={cursorStyle} aria-hidden="true">
              {cursor}
            </span>
          )}
        </span>
      );
    },
  ),
);

ChatStreamText.displayName = COMPONENT_DISPLAY_NAMES.ChatStreamText;
export default ChatStreamText;
