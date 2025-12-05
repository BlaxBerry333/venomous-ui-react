import ChatBubbleComponent from "./ChatBubble.component";
import ChatStreamTextComponent from "./ChatStreamText.component";

export const Chat = {
  Bubble: ChatBubbleComponent,
  StreamText: ChatStreamTextComponent,
};

// ChatBubble exports
export { formatDefaultTimestamp, useChatBubbleStyles } from "./ChatBubble.hooks";
export { CHAT_BUBBLE_PLACEMENT_MAP } from "./ChatBubble.types";
export type { ChatBubbleProps, ChatBubbleRef } from "./ChatBubble.types";

// ChatStreamText exports
export { useChatStreamTextActions, useChatStreamTextStyles } from "./ChatStreamText.hooks";
export type { ChatStreamTextProps, ChatStreamTextRef } from "./ChatStreamText.types";
