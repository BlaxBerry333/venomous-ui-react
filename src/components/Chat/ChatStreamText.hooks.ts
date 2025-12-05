"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import type { ChatStreamTextProps } from "./ChatStreamText.types";

// Inject cursor blink keyframes once
let cursorKeyframesInjected = false;
const CURSOR_KEYFRAMES_ID = "__VENOMOUS_UI__chat-stream-cursor-keyframes";

function injectCursorKeyframes() {
  if (cursorKeyframesInjected || typeof document === "undefined") return;
  if (document.getElementById(CURSOR_KEYFRAMES_ID)) {
    cursorKeyframesInjected = true;
    return;
  }

  const style = document.createElement("style");
  style.id = CURSOR_KEYFRAMES_ID;
  style.textContent = `
    @keyframes venomous-cursor-blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
  cursorKeyframesInjected = true;
}

export function useChatStreamTextStyles({ cursorBlinkSpeed = 10000 }: Partial<ChatStreamTextProps>) {
  const { TextColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.ChatStreamText });

  // Inject keyframes on mount
  React.useEffect(() => {
    injectCursorKeyframes();
  }, []);

  const containerStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      display: "inline",
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
      ...customStyle,
    }),
    [customStyle],
  );

  const cursorStyle = React.useMemo<React.CSSProperties>(
    () => ({
      display: "inline",
      color: TextColors[1],
      fontWeight: "normal",
      animation: `venomous-cursor-blink ${cursorBlinkSpeed}ms step-end infinite`,
    }),
    [TextColors, cursorBlinkSpeed],
  );

  return {
    containerStyle,
    cursorStyle,
  };
}

export function useChatStreamTextActions({
  text,
  speed = 30,
  streaming = false,
  skipAnimation = false,
  onComplete,
}: Partial<ChatStreamTextProps> & { text: string }) {
  const [displayedText, setDisplayedText] = React.useState("");
  const [isTypingComplete, setIsTypingComplete] = React.useState(false);
  const prevTextRef = React.useRef("");
  const typingIndexRef = React.useRef(0);

  React.useEffect(() => {
    // If skipAnimation, show full text immediately
    if (skipAnimation) {
      setDisplayedText(text);
      setIsTypingComplete(true);
      if (!streaming) {
        onComplete?.();
      }
      return;
    }

    // If text is empty, reset
    if (!text) {
      setDisplayedText("");
      setIsTypingComplete(false);
      prevTextRef.current = "";
      typingIndexRef.current = 0;
      return;
    }

    // Handle incremental text (streaming scenario)
    if (text.startsWith(prevTextRef.current)) {
      // Text is continuation of previous text
      const startIndex = prevTextRef.current.length;
      typingIndexRef.current = startIndex;

      const timer = setInterval(() => {
        if (typingIndexRef.current < text.length) {
          typingIndexRef.current++;
          setDisplayedText(text.slice(0, typingIndexRef.current));
        } else {
          clearInterval(timer);
          prevTextRef.current = text;
          if (!streaming) {
            setIsTypingComplete(true);
            onComplete?.();
          }
        }
      }, speed);

      return () => clearInterval(timer);
    } else {
      // Text changed completely, restart from beginning
      prevTextRef.current = "";
      typingIndexRef.current = 0;
      setDisplayedText("");
      setIsTypingComplete(false);

      const timer = setInterval(() => {
        if (typingIndexRef.current < text.length) {
          typingIndexRef.current++;
          setDisplayedText(text.slice(0, typingIndexRef.current));
        } else {
          clearInterval(timer);
          prevTextRef.current = text;
          if (!streaming) {
            setIsTypingComplete(true);
            onComplete?.();
          }
        }
      }, speed);

      return () => clearInterval(timer);
    }
  }, [text, speed, streaming, skipAnimation, onComplete]);

  // When streaming ends, mark as complete
  React.useEffect(() => {
    if (!streaming && displayedText === text && text.length > 0) {
      setIsTypingComplete(true);
    }
  }, [streaming, displayedText, text]);

  return {
    displayedText,
    isTypingComplete,
    showCursorNow: streaming || !isTypingComplete,
  };
}
