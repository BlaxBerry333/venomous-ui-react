export type ChatStreamTextRef = HTMLSpanElement;
export interface ChatStreamTextProps extends Omit<React.HTMLAttributes<ChatStreamTextRef>, "children"> {
    /**
     * The text content to display with streaming effect.
     */
    text: string;
    /**
     * Delay between each character in milliseconds.
     * @default 30
     */
    speed?: number;
    /**
     * Whether content is still being streamed (shows cursor).
     * @default false
     */
    streaming?: boolean;
    /**
     * Callback when typing animation completes.
     */
    onComplete?: () => void;
    /**
     * Skip animation and display full text immediately.
     * @default false
     */
    skipAnimation?: boolean;
    /**
     * Cursor character to display while streaming.
     * @default "|"
     */
    cursor?: string;
    /**
     * Whether to show cursor.
     * @default true
     */
    showCursor?: boolean;
    /**
     * Cursor blink speed in milliseconds.
     * @default 10000
     */
    cursorBlinkSpeed?: number;
}
//# sourceMappingURL=ChatStreamText.types.d.ts.map