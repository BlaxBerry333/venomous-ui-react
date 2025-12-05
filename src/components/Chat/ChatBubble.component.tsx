"use client";

import React from "react";

import clsx from "clsx";

import { Icon } from "@/components/Icon";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import useCustomComponentProps from "@/hooks/useCustomComponentProps";
import { formatDefaultTimestamp, useChatBubbleStyles } from "./ChatBubble.hooks";
import { CHAT_BUBBLE_PLACEMENT_MAP, type ChatBubbleProps, type ChatBubbleRef } from "./ChatBubble.types";

const ChatBubble = React.memo(
  React.forwardRef<ChatBubbleRef, ChatBubbleProps>(
    (
      {
        className,
        style,
        placement: propPlacement,
        loading: propLoading,
        Avatar: propAvatar,
        senderName: propSenderName,
        timestamp: propTimestamp,
        formatTimestamp: propFormatTimestamp,
        message: propMessage,
        maxWidth: propMaxWidth,
        ...props
      },
      ref,
    ) => {
      // ========== customComponentProps ==========
      const customComponentProps = useCustomComponentProps<ChatBubbleProps>({
        displayName: COMPONENT_DISPLAY_NAMES.ChatBubble,
      });

      // ========== Merge Props ==========
      const placement = propPlacement ?? customComponentProps.placement ?? CHAT_BUBBLE_PLACEMENT_MAP.LEFT;
      const loading = propLoading ?? customComponentProps.loading ?? false;
      const Avatar = propAvatar ?? customComponentProps.Avatar;
      const senderName = propSenderName ?? customComponentProps.senderName;
      const timestamp = propTimestamp ?? customComponentProps.timestamp;
      const formatTimestamp = propFormatTimestamp ?? customComponentProps.formatTimestamp ?? formatDefaultTimestamp;
      const message = propMessage ?? customComponentProps.message;
      const maxWidth = propMaxWidth ?? customComponentProps.maxWidth ?? "75%";

      // Determine if Avatar should be shown (based on whether Avatar prop is provided)
      const showAvatar = Avatar != null;

      const { containerStyle, bubbleStyle, metaStyle, senderNameStyle, timestampStyle } = useChatBubbleStyles({
        placement,
        maxWidth,
      });

      // Format timestamp
      const formattedTimestamp = React.useMemo(() => {
        if (!timestamp) return null;
        const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
        return formatTimestamp(date);
      }, [timestamp, formatTimestamp]);

      // Determine if we should show meta info (based on whether senderName or timestamp is provided)
      const showMeta = senderName || formattedTimestamp;

      return (
        <div
          ref={ref}
          className={clsx(COMPONENT_CLASSNAME_NAMES.ChatBubble, className)}
          style={{ ...containerStyle, ...style }}
          role="article"
          aria-label={`Message from ${senderName || (placement === CHAT_BUBBLE_PLACEMENT_MAP.RIGHT ? "you" : "assistant")}`}
          aria-busy={loading || undefined}
          {...props}
        >
          {/* Avatar */}
          {showAvatar && (
            <div className={COMPONENT_CLASSNAME_NAMES.ChatBubbleAvatar} style={{ flexShrink: 0 }}>
              {Avatar}
            </div>
          )}

          {/* Content wrapper - Slack style layout */}
          <div style={{ display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }}>
            {/* Meta info (sender name, timestamp) - displayed above bubble */}
            {showMeta && (
              <div className={COMPONENT_CLASSNAME_NAMES.ChatBubbleMeta} style={metaStyle}>
                {senderName && <span style={senderNameStyle}>{senderName}</span>}
                {formattedTimestamp && <span style={timestampStyle}>{formattedTimestamp}</span>}
              </div>
            )}

            {/* Bubble */}
            <div className={COMPONENT_CLASSNAME_NAMES.ChatBubbleContent} style={bubbleStyle}>
              {loading ? <Icon icon="eos-icons:three-dots-loading" width={24} /> : message}
            </div>
          </div>
        </div>
      );
    },
  ),
);

ChatBubble.displayName = COMPONENT_DISPLAY_NAMES.ChatBubble;
export default ChatBubble;
