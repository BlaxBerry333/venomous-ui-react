import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Avatar } from "@/components/Avatar";
import { Button } from "@/components/Buttons";
import { Card } from "@/components/Cards";
import { Chat } from ".";

const meta = {
  title: "components/Chat/<Chat.StreamText>",
  component: Chat.StreamText,
  tags: ["autodocs"],
  argTypes: {
    text: {
      description: "The text content to display with streaming effect.",
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
      control: { type: "text" },
    },
    speed: {
      description: "Delay between each character in milliseconds.",
      type: { name: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "30" } },
      control: { type: "number", min: 10, max: 200, step: 10 },
    },
    streaming: {
      description: "Whether content is still being streamed (shows cursor).",
      type: { name: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
      control: { type: "boolean" },
    },
    skipAnimation: {
      description: "Skip animation and display full text immediately.",
      type: { name: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
      control: { type: "boolean" },
    },
    showCursor: {
      description: "Whether to show cursor.",
      type: { name: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "true" } },
      control: { type: "boolean" },
    },
    cursor: {
      description: "Cursor character to display.",
      type: { name: "string" },
      table: { type: { summary: "string" }, defaultValue: { summary: "｜" } },
      control: { type: "text" },
    },
    cursorBlinkSpeed: {
      description: "Cursor blink speed in milliseconds.",
      type: { name: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "10000" } },
      control: { type: "number", min: 200, max: 15000, step: 500 },
    },
    onComplete: {
      description: "Callback when typing animation completes.",
      table: { type: { summary: "() => void" }, category: "Events" },
      action: "onComplete",
    },
  },
  parameters: {
    layout: "padded",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>流式文本组件</Subtitle>

          <Markdown>
            {`
用于显示打字机/流式输出效果的文本组件。

适用于模拟 AI 响应生成或创建引人入胜的文本展示效果。

`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
import { Theme, Chat } from "venomous-ui-react/components";

// 场景1：静态文本 + 打字效果（组件自动逐字显示）
function TypewriterEffect() {
  return (
    <Theme.Provider>
      <Chat.StreamText text="这是一段完整的文本，组件会自动逐字显示。" />
    </Theme.Provider>
  );
}

// 场景2：真实 SSE/WebSocket 流式数据
function RealStreamingData() {
  const { text, isStreaming } = useSSE("/api/chat"); // 你的流式 API

  return (
    <Theme.Provider>
      <Chat.StreamText
        text={text}           // 来自 API 的实时数据
        streaming={isStreaming}
        skipAnimation         // 跳过内部动画，因为数据本身就是流式的
      />
    </Theme.Provider>
  );
}
  `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{TypewriterEffect.name}</Heading>
          <Description of={TypewriterEffect} />
          <Canvas
            of={TypewriterEffect}
            sourceState="hidden"
            source={{
              code: TypewriterEffect.parameters?.docs?.source?.code,
            }}
          />

          <Heading>{RealStreamingData.name}</Heading>
          <Description of={RealStreamingData} />
          <Canvas
            of={RealStreamingData}
            sourceState="hidden"
            source={{
              code: RealStreamingData.parameters?.docs?.source?.code,
            }}
          />

          <Heading>{WithChatBubble.name}</Heading>
          <Description of={WithChatBubble} />
          <Canvas
            of={WithChatBubble}
            sourceState="hidden"
            source={{
              code: WithChatBubble.parameters?.docs?.source?.code,
            }}
          />
        </>
      ),
    },
  },
} satisfies Meta<typeof Chat.StreamText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    text: "Hello! This is a streaming text effect that simulates AI response generation.",
    speed: 30,
    streaming: false,
    skipAnimation: false,
    showCursor: true,
    cursor: "|",
    cursorBlinkSpeed: 10000,
  },
};

const hideAllArgTypes = {
  text: { table: { disable: true } },
  speed: { table: { disable: true } },
  streaming: { table: { disable: true } },
  skipAnimation: { table: { disable: true } },
  showCursor: { table: { disable: true } },
  cursor: { table: { disable: true } },
  cursorBlinkSpeed: { table: { disable: true } },
  onComplete: { table: { disable: true } },
};

export const TypewriterEffect: Story = {
  name: "Typewriter Effect",
  tags: ["!dev"],
  argTypes: hideAllArgTypes,
  args: Playground.args,
  render: function TypewriterDemo() {
    const [key, setKey] = React.useState(0);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 500 }}>
        <Button text="Replay" onClick={() => setKey((k) => k + 1)} />
        <Card style={{ padding: 16, minHeight: 80 }}>
          <Chat.StreamText
            key={key}
            text="This is a typewriter effect. The component automatically types the text character by character. No external state management needed!"
            speed={30}
            onComplete={() => console.log("Typing complete!")}
          />
        </Card>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "打字机效果：直接传入完整文本，组件自动逐字显示。无需外部状态管理。",
      },
      source: {
        code: `
// 最简单的用法：直接传入完整文本
<Chat.StreamText
  text="This is a typewriter effect..."
  speed={30}
  onComplete={() => console.log("Typing complete!")}
/>
        `.trim(),
      },
    },
  },
};

export const RealStreamingData: Story = {
  name: "Real Streaming Data",
  tags: ["!dev"],
  argTypes: hideAllArgTypes,
  args: Playground.args,
  render: function StreamingDemo() {
    // 模拟真实的 SSE/WebSocket 流式数据
    const fullText =
      "This simulates real SSE streaming data from an API. The text arrives in chunks, just like how AI models send responses. When streaming=true and skipAnimation=true, the component displays text as it arrives without additional animation.";
    const [text, setText] = React.useState("");
    const [isStreaming, setIsStreaming] = React.useState(false);

    const startStreaming = () => {
      setText("");
      setIsStreaming(true);
      let index = 0;

      // 模拟 SSE 数据到达（真实场景中这是来自 API 的数据）
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setIsStreaming(false);
        }
      }, 30);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 500 }}>
        <Button text="Simulate SSE Stream" onClick={startStreaming} disabled={isStreaming} />
        <Card style={{ padding: 16, minHeight: 100 }}>
          {text ? (
            <Chat.StreamText text={text} streaming={isStreaming} skipAnimation />
          ) : (
            <span style={{ color: "#999" }}>Click to simulate SSE data...</span>
          )}
        </Card>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "真实流式数据场景：当数据来自 SSE/WebSocket 时，使用 `skipAnimation` 跳过内部动画，因为数据本身就是流式到达的。",
      },
      source: {
        code: `
// 真实 SSE/WebSocket 场景
const { text, isStreaming } = useSSE("/api/chat");

<Chat.StreamText
  text={text}           // 来自 API 的实时数据
  streaming={isStreaming}
  skipAnimation         // 跳过内部动画，数据本身就是流式的
/>
        `.trim(),
      },
    },
  },
};

export const WithChatBubble: Story = {
  name: "Inside Chat Bubble",
  tags: ["!dev"],
  args: Playground.args,
  argTypes: hideAllArgTypes,
  render: function BubbleDemo() {
    const [key, setKey] = React.useState(0);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 500 }}>
        <Button text="Replay" onClick={() => setKey((k) => k + 1)} />
        <Chat.Bubble
          placement="left"
          Avatar={<Avatar text="AI" width={32} shape="circle" />}
          message={
            <Chat.StreamText
              key={key}
              text="This is an AI response displayed inside a chat bubble. The component handles the typewriter animation automatically!"
              speed={25}
            />
          }
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "在 `<Chat.Bubble>` 中使用 `<Chat.StreamText>` 实现打字机效果。直接传入完整文本即可。",
      },
      source: {
        code: `
// 简单用法：直接传入完整文本
<Chat.Bubble
  placement="left"
  Avatar={<Avatar text="AI" width={32} shape="circle" />}
  message={
    <Chat.StreamText
      text="This is an AI response..."
      speed={25}
    />
  }
/>
        `.trim(),
      },
    },
  },
};
