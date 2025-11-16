import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Typography, TYPOGRAPHY_TEXT_ELEMENT_MAP } from ".";

const meta = {
  title: "components/Typography/<Typography.Text>",
  component: Typography.Text,
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "The element Tag to be render.",
      type: { name: "other", value: "keyof typeof TYPOGRAPHY_TEXT_ELEMENT_MAP" },
      control: { type: "radio" },
      options: Object.values(TYPOGRAPHY_TEXT_ELEMENT_MAP),
      table: {
        type: { summary: `${Object.values(TYPOGRAPHY_TEXT_ELEMENT_MAP).join("|")}` },
        defaultValue: { summary: `"${TYPOGRAPHY_TEXT_ELEMENT_MAP.SPAN}"` },
      },
    },
    text: {
      description: "The text to be rendered.",
      type: { name: "string", required: true },
      control: { type: "text" },
      table: { type: { summary: "string" } },
    },
    color: {
      description: "The color to be used as text color ( hex string ).",
      type: { name: "string" },
      control: { type: "color" },
      table: { type: { summary: "string" } },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ paddingTop: "25%" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>文本组件</Subtitle>

          <Markdown>
            {`
会被渲染为 HTML 原生 \`<span>\`、\`<strong>\`、\`<small>\`、\`<code>\`、\`<mark>\` 标签。能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, Typography } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <Typography.Text text="xxxx" />
      <Typography.Text text="xxxx" as="strong" />
      <Typography.Text text="xxxx" as="small" />
      <Typography.Text text="xxxx" as="code" />
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
} satisfies Meta<typeof Typography.Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    as: "span",
    text: "xxxxxxxxxxx",
    color: undefined,
  },
};
