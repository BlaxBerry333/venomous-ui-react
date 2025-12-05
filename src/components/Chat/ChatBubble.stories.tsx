import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@/components/Avatar";
import { Card } from "@/components/Cards";
import { Chat, CHAT_BUBBLE_PLACEMENT_MAP } from ".";

const meta = {
  title: "components/Chat/<Chat.Bubble>",
  component: Chat.Bubble,
  tags: ["autodocs"],
  argTypes: {
    placement: {
      description: "Bubble placement. Left for received, right for sent.",
      type: { name: "other", value: "keyof typeof CHAT_BUBBLE_PLACEMENT_MAP" },
      table: {
        type: { summary: `${Object.values(CHAT_BUBBLE_PLACEMENT_MAP).join(" | ")}` },
        defaultValue: { summary: `"${CHAT_BUBBLE_PLACEMENT_MAP.LEFT}"` },
      },
      control: { type: "radio" },
      options: Object.values(CHAT_BUBBLE_PLACEMENT_MAP),
    },
    loading: {
      description: "Whether to show typing indicator animation.",
      type: { name: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
      control: { type: "boolean" },
    },
    message: {
      description: "Message content (shorthand for text content).",
      type: { name: "string" },
      table: { type: { summary: "React.ReactNode" } },
      control: { type: "text" },
    },
    Avatar: {
      description: "Custom Avatar element. Use the Avatar component or any custom ReactNode.",
      table: { type: { summary: "React.ReactNode" }, defaultValue: { summary: "undefined" } },
      control: { type: "radio" },
      options: [undefined, "example"],
      mapping: {
        undefined: undefined,
        example: <Avatar text="AI" width={32} shape="circle" />,
      },
    },
    senderName: {
      description: "Sender name. When provided, the name will be displayed above the message.",
      type: { name: "string" },
      table: { type: { summary: "string" }, defaultValue: { summary: "undefined" } },
      control: { type: "radio" },
      options: [undefined, "example"],
      mapping: {
        undefined: undefined,
        example: "AI Assistant",
      },
    },
    timestamp: {
      description: "Message timestamp. When provided, the timestamp will be displayed.",
      type: { name: "other", value: "string | Date" },
      table: { type: { summary: "string | Date" }, defaultValue: { summary: "undefined" } },
      control: { type: "radio" },
      options: [undefined, "example"],
      mapping: {
        undefined: undefined,
        example: new Date(),
      },
    },
    maxWidth: {
      description: "Maximum width of the bubble.",
      type: { name: "string" },
      table: { type: { summary: "string | number" }, defaultValue: { summary: '"75%"' } },
      control: { type: "text" },
    },
  },
  parameters: {
    layout: "padded",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>聊天气泡</Subtitle>

          <Markdown>
            {`
用于在对话界面中显示消息的聊天气泡组件。

能继承使用 \`<Theme.Provider>\` 的主题样式。
            `}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
import { Theme, Chat, Avatar } from "venomous-ui-react/components";

function App() {
  const aiAvatar = <Avatar text="AI" width={32} shape="circle" />;
  const userAvatar = <Avatar text="我" width={32} shape="circle" />;

  return (
    <Theme.Provider>
      <Chat.Bubble
        placement="left"
        message="你好！有什么可以帮助你的？"
        Avatar={aiAvatar}
      />
      <Chat.Bubble
        placement="right"
        message="我有一个关于 React 的问题。"
        Avatar={userAvatar}
      />

      <Chat.Bubble placement="left" loading Avatar={aiAvatar} />

      {/* with metadata */}
      <Chat.Bubble
        placement="left"
        message="报告长官，我有一个关于 React 的问题。"
        Avatar={aiAvatar}
        senderName="菜鸟新人"
        timestamp={new Date()}
      />
    </Theme.Provider>
  );
}
  `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{CustomAvatar.name}</Heading>
          <Description of={CustomAvatar} />
          <Canvas
            of={CustomAvatar}
            sourceState="hidden"
            source={{
              code: CustomAvatar.parameters?.docs?.source?.code,
            }}
          />

          <Heading>{CustomFormatTimestamp.name}</Heading>
          <Description of={CustomFormatTimestamp} />
          <Canvas
            of={CustomFormatTimestamp}
            sourceState="hidden"
            source={{
              code: CustomFormatTimestamp.parameters?.docs?.source?.code,
            }}
          />
        </>
      ),
    },
  },
} satisfies Meta<typeof Chat.Bubble>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    placement: "left",
    message: "Hello! How can I help you today?",
    loading: false,
    maxWidth: "75%",
  },
};

const hideAllArgTypes = {
  placement: { table: { disable: true } },
  loading: { table: { disable: true } },
  message: { table: { disable: true } },
  Avatar: { table: { disable: true } },
  senderName: { table: { disable: true } },
  timestamp: { table: { disable: true } },
  maxWidth: { table: { disable: true } },
  formatTimestamp: { table: { disable: true } },
};

export const CustomFormatTimestamp: Story = {
  name: "Custom Format Timestamp",
  tags: ["!dev"],
  argTypes: hideAllArgTypes,
  render: () => (
    <Card style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 500 }}>
      <Chat.Bubble
        placement="left"
        message="中文日期格式"
        Avatar={<Avatar text="AI" width={32} shape="circle" />}
        senderName="Mr.A"
        timestamp={new Date()}
        formatTimestamp={(date) =>
          `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`
        }
      />
      <Chat.Bubble
        placement="right"
        message="相对时间格式"
        Avatar={<Avatar text="Me" width={32} shape="circle" />}
        senderName="Mr.B"
        timestamp={new Date()}
        formatTimestamp={() => "刚刚"}
      />
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "使用 `formatTimestamp` 属性可以自定义时间戳的显示格式。",
      },
      source: {
        code: `
// 中文日期格式
<Chat.Bubble
  message="中文日期格式"
  senderName="Mr.A"
  timestamp={new Date()}
  formatTimestamp={(date) => \`\${date.getFullYear()}年\${date.getMonth() + 1}月\${date.getDate()}日\`}
/>

// 相对时间格式
<Chat.Bubble
  message="相对时间格式"
  senderName="Mr.B"
  timestamp={new Date()}
  formatTimestamp={() => "刚刚"}
/>
        `.trim(),
      },
    },
  },
};

export const CustomAvatar: Story = {
  name: "Custom Avatar",
  tags: ["!dev"],
  argTypes: hideAllArgTypes,
  render: () => (
    <Card style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 500 }}>
      <Chat.Bubble
        placement="left"
        message="Message with image avatar"
        Avatar={<Avatar src="https://i.pravatar.cc/150?img=1" width={32} shape="circle" />}
      />
      <Chat.Bubble
        placement="right"
        message="Message with custom styled avatar"
        Avatar={
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          />
        }
      />
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "`Avatar` 属性支持传入一个任意的自定义元素。",
      },
      source: {
        code: `
<Chat.Bubble
  placement="left"
  message="使用图片头像"
  Avatar={<Avatar src="https://example.com/avatar.jpg" width={32} shape="circle" />}
/>

<Chat.Bubble
  placement="right"
  message="使用自定义元素作为头像"
  Avatar={
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    />
  }
/>
        `.trim(),
      },
    },
  },
};

export const Conversation: Story = {
  name: "Conversation Example",
  argTypes: hideAllArgTypes,
  render: () => (
    <Card style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 500 }}>
      <Chat.Bubble
        placement="left"
        message="Hi! I'm your AI assistant. How can I help you today?"
        Avatar={<Avatar text="AI" width={32} shape="circle" />}
      />
      <Chat.Bubble
        placement="right"
        message="Hello! Can you help me understand React hooks?"
        Avatar={<Avatar text="Me" width={32} shape="circle" />}
      />
      <Chat.Bubble
        placement="left"
        message="Of course! React Hooks are functions that let you use state and other React features in functional components. The most common ones are useState, useEffect, and useContext."
        Avatar={<Avatar text="AI" width={32} shape="circle" />}
      />
      <Chat.Bubble
        placement="right"
        message="That's helpful, thanks!"
        Avatar={<Avatar text="Me" width={32} shape="circle" />}
      />
      <Chat.Bubble placement="left" loading Avatar={<Avatar text="AI" width={32} shape="circle" />} />
    </Card>
  ),
};
