import React from "react";
import { type ChatBubbleProps } from "./ChatBubble.types";
export declare function useChatBubbleStyles({ placement, maxWidth }: Partial<ChatBubbleProps>): {
    containerStyle: React.CSSProperties;
    bubbleStyle: React.CSSProperties;
    metaStyle: React.CSSProperties;
    senderNameStyle: React.CSSProperties;
    timestampStyle: React.CSSProperties;
};
export declare function formatDefaultTimestamp(timestamp: Date): string;
//# sourceMappingURL=ChatBubble.hooks.d.ts.map