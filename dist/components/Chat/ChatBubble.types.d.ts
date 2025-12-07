export declare const CHAT_BUBBLE_PLACEMENT_MAP: {
    readonly LEFT: "left";
    readonly RIGHT: "right";
};
export type ChatBubbleRef = HTMLDivElement;
export interface ChatBubbleProps extends Omit<React.HTMLAttributes<ChatBubbleRef>, "children"> {
    /**
     * Bubble placement. Left for received messages, right for sent messages.
     * @default "left"
     */
    placement?: (typeof CHAT_BUBBLE_PLACEMENT_MAP)[keyof typeof CHAT_BUBBLE_PLACEMENT_MAP];
    /**
     * Whether the bubble is in loading state (shows typing indicator).
     * @default false
     */
    loading?: boolean;
    /**
     * Custom Avatar element. Use the Avatar component or any custom ReactNode.
     * When provided, avatar will be displayed.
     * @example <Chat.Bubble Avatar={<Avatar text="AI" />} message="Hello" />
     */
    Avatar?: React.ReactNode;
    /**
     * Sender name. When provided, will be displayed above the bubble.
     */
    senderName?: string;
    /**
     * Timestamp of the message. When provided, will be displayed.
     */
    timestamp?: string | Date;
    /**
     * Custom timestamp formatter.
     */
    formatTimestamp?: (timestamp: Date) => string;
    /**
     * Message content.
     */
    message?: React.ReactNode;
    /**
     * Maximum width of the bubble (percentage or pixels).
     * @default "75%"
     */
    maxWidth?: string | number;
}
//# sourceMappingURL=ChatBubble.types.d.ts.map