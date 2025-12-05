"use client";

import React from "react";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import { useThemeDesigns, useThemeMode } from "@/hooks";
import useCustomStyle from "@/hooks/useCustomStyle";
import { isLightColor } from "@/tools";
import { CHAT_BUBBLE_PLACEMENT_MAP, type ChatBubbleProps } from "./ChatBubble.types";

export function useChatBubbleStyles({ placement = "left", maxWidth = "75%" }: Partial<ChatBubbleProps>) {
  const { isDarkMode } = useThemeMode();
  const { BackgroundColors, TextColors, PaletteColors } = useThemeDesigns();
  const customStyle = useCustomStyle({ displayName: COMPONENT_DISPLAY_NAMES.ChatBubble });

  const isRight = placement === CHAT_BUBBLE_PLACEMENT_MAP.RIGHT;

  // Determine bubble background color
  const bubbleColor = React.useMemo(() => {
    if (isRight) return PaletteColors[1];
    return isDarkMode ? BackgroundColors[3] : BackgroundColors[2];
  }, [isRight, PaletteColors, isDarkMode, BackgroundColors]);

  // Determine text color based on background
  const textColor = React.useMemo(() => {
    const isLight = isLightColor(bubbleColor, 0.6);
    return isLight ? "#1a1a1a" : "#ffffff";
  }, [bubbleColor]);

  // Container style (row with avatar) - Slack style: avatar aligned to top
  const containerStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      display: "flex",
      flexDirection: isRight ? "row-reverse" : "row",
      alignItems: "flex-start",
      gap: 8,
      maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
      alignSelf: isRight ? "flex-end" : "flex-start",
    }),
    [isRight, maxWidth],
  );

  // Border color for left placement bubbles (to distinguish from container background)
  const borderColor = React.useMemo(() => {
    if (isRight) return "transparent";
    return isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)";
  }, [isRight, isDarkMode]);

  // Bubble content style
  const bubbleStyle = React.useMemo<React.CSSProperties>(
    () => ({
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      position: "relative",
      padding: "10px 14px",
      borderRadius: 16,
      // Adjust border radius based on placement
      ...(isRight ? { borderBottomRightRadius: 4 } : { borderBottomLeftRadius: 4 }),
      wordBreak: "break-word",
      lineHeight: 1.5,
      fontSize: 14,
      backgroundColor: bubbleColor,
      color: textColor,
      border: `1px solid ${borderColor}`,
      ...customStyle,
    }),
    [isRight, bubbleColor, textColor, borderColor, customStyle],
  );

  // Meta info style (sender name, timestamp)
  const metaStyle = React.useMemo<React.CSSProperties>(
    () => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      marginBottom: 4,
      paddingLeft: isRight ? 0 : 4,
      paddingRight: isRight ? 4 : 0,
      justifyContent: isRight ? "flex-end" : "flex-start",
    }),
    [isRight],
  );

  const senderNameStyle = React.useMemo<React.CSSProperties>(
    () => ({
      fontSize: 12,
      fontWeight: 500,
      color: TextColors[2],
    }),
    [TextColors],
  );

  const timestampStyle = React.useMemo<React.CSSProperties>(
    () => ({
      fontSize: 11,
      color: TextColors[3],
    }),
    [TextColors],
  );

  return {
    containerStyle,
    bubbleStyle,
    metaStyle,
    senderNameStyle,
    timestampStyle,
  };
}

export function formatDefaultTimestamp(timestamp: Date): string {
  return timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
