import React from "react";
import type { ChatStreamTextProps } from "./ChatStreamText.types";
export declare function useChatStreamTextStyles({ cursorBlinkSpeed }: Partial<ChatStreamTextProps>): {
    containerStyle: React.CSSProperties;
    cursorStyle: React.CSSProperties;
};
export declare function useChatStreamTextActions({ text, speed, streaming, skipAnimation, onComplete, }: Partial<ChatStreamTextProps> & {
    text: string;
}): {
    displayedText: string;
    isTypingComplete: boolean;
    showCursorNow: boolean;
};
//# sourceMappingURL=ChatStreamText.hooks.d.ts.map