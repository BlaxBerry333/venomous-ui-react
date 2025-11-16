import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AVATAR_SHAPE_MAP } from ".";

const meta = {
  title: "components/<Avatar>",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    shape: {
      description: "Avatar shape.",
      type: { name: "other", value: "keyof typeof AVATAR_SHAPE_MAP" },
      table: {
        type: { summary: `${Object.values(AVATAR_SHAPE_MAP).join(" | ")}` },
        defaultValue: { summary: `"${AVATAR_SHAPE_MAP.CIRCLE}"` },
      },
      control: { type: "radio" },
      options: Object.values(AVATAR_SHAPE_MAP),
    },
    width: {
      description: "Avatar width and height ( px )",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "40" },
      },
      control: { type: "number", min: 24, max: 128, step: 4 },
    },
    src: {
      description: "Image source URL.",
      type: { name: "string" },
      table: { type: { summary: "string" } },
      control: { type: "radio" },
      options: [undefined, "https://xxxxxxxxxxxxxxxxxx", "https://avatars.githubusercontent.com/u/166675080?v=4"],
    },
    alt: {
      description: "Alt text for image",
      type: { name: "string" },
      table: { type: { summary: "string" } },
      control: { type: "text" },
    },
    text: {
      description: "Text to be rendered when src is not provided or fails to load.",
      type: { name: "string" },
      table: { type: { summary: "string" } },
      control: { type: "text" },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>头像组件</Subtitle>

          <Markdown>
            {`
主要用于展示用户头像。

会自动判断显示内容：\`src\` ( 图片成功 ) > \`src\` ( 图片失败 → 问号 Icon ) > \`text\` ( 首字母 ) > 默认 Icon

继承自内部组件 \`<Box>\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, Badge, Avatar } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      {/* Image Avatar */}
      <Avatar src="${Playground.args?.src}" alt="Example User" />

      {/* Text Avatar */}
      <Avatar text="Example User" />

      {/* Empty Default Avatar */}
      <Avatar />

      {/* With Badge */}
      <Badge variant="dot" placement="bottom-right">
        <Avatar src="${Playground.args?.src}" width={48} />
      </Badge>

      {/* Custom Style Block */}
      <Avatar text="A" width={40} style={{ backgroundColor: "orange" }} />
    </Theme.Provider>
  );
}
  `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    shape: "circle",
    width: 40,
    src: meta.argTypes?.src?.options?.[0],
    alt: "Example User",
    text: "Example User",
  },
};
