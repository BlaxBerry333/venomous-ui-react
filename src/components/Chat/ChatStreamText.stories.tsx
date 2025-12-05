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
      table: { type: { summary: "string" }, defaultValue: { summary: '"|"' } },
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

function App() {
  const [text, setText] = React.useState("");

  // 模拟 AI 流式响应
  React.useEffect(() => {
    const fullText = "这是一段模拟的 AI 响应...";
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <Theme.Provider>
      <Chat.StreamText
        text={text}
        streaming={text.length < fullText.length}
      />
    </Theme.Provider>
  );
}
  `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{StreamingSimulation.name}</Heading>
          <Description of={StreamingSimulation} />
          <Canvas
            of={StreamingSimulation}
            sourceState="hidden"
            source={{
              code: StreamingSimulation.parameters?.docs?.source?.code,
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

export const StreamingSimulation: Story = {
  name: "Streaming Simulation",
  tags: ["!dev"],
  argTypes: hideAllArgTypes,
  args: Playground.args,
  render: function StreamingDemo() {
    const fullText =
      "This is a simulated AI response that demonstrates the streaming text effect. The text appears character by character, just like how AI models generate responses in real-time. Pretty cool, right?";
    const [text, setText] = React.useState("");
    const [isStreaming, setIsStreaming] = React.useState(false);

    const startStreaming = () => {
      setText("");
      setIsStreaming(true);
      let index = 0;

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
        <Button text="Start Streaming" onClick={startStreaming} disabled={isStreaming} />
        <Card
          style={{
            padding: 16,
            minHeight: 100,
          }}
        >
          {text ? (
            <Chat.StreamText text={text} streaming={isStreaming} skipAnimation />
          ) : (
            <span style={{ color: "#999" }}>Click the button to start...</span>
          )}
        </Card>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "模拟流式输出场景，点击按钮开始模拟 AI 响应的流式输出效果。",
      },
      source: {
        code: `
const fullText = "This is a simulated AI response...";
const [text, setText] = React.useState("");
const [isStreaming, setIsStreaming] = React.useState(false);

const startStreaming = () => {
  setText("");
  setIsStreaming(true);
  let index = 0;

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
  <div>
    <Button text="Start Streaming" onClick={startStreaming} disabled={isStreaming} />
    <Card style={{ padding: 16, minHeight: 100 }}>
      {text ? (
        <Chat.StreamText text={text} streaming={isStreaming} skipAnimation />
      ) : (
        <span style={{ color: "#999" }}>Click the button to start...</span>
      )}
    </Card>
  </div>
);
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
    const fullText = "This is an AI response displayed inside a chat bubble with the streaming text effect.";
    const [text, setText] = React.useState("");
    const [isStreaming, setIsStreaming] = React.useState(true);

    React.useEffect(() => {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setIsStreaming(false);
        }
      }, 30);

      return () => clearInterval(timer);
    }, []);

    return (
      <div style={{ maxWidth: 500 }}>
        <Chat.Bubble
          placement="left"
          Avatar={<Avatar text="AI" width={32} shape="circle" />}
          message={<Chat.StreamText text={text} streaming={isStreaming} skipAnimation />}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "在 `<Chat.Bubble>` 中使用 `<Chat.StreamText>` 实现流式输出效果。",
      },
      source: {
        code: `
const fullText = "This is an AI response...";
const [text, setText] = React.useState("");
const [isStreaming, setIsStreaming] = React.useState(true);

React.useEffect(() => {
  let index = 0;
  const timer = setInterval(() => {
    if (index <= fullText.length) {
      setText(fullText.slice(0, index));
      index++;
    } else {
      clearInterval(timer);
      setIsStreaming(false);
    }
  }, 30);
  return () => clearInterval(timer);
}, []);

return (
  <Chat.Bubble
    placement="left"
    Avatar={<Avatar text="AI" width={32} shape="circle" />}
    message={<Chat.StreamText text={text} streaming={isStreaming} skipAnimation />}
  />
);
        `.trim(),
      },
    },
  },
};
