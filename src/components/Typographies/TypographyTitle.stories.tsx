import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Typography, TYPOGRAPHY_TITLE_ELEMENT_MAP } from ".";

const meta = {
  title: "components/Typography/<Typography.Title>",
  component: Typography.Title,
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "The element Tag to be render.",
      type: { name: "other", value: "keyof typeof TYPOGRAPHY_TITLE_ELEMENT_MAP" },
      control: { type: "radio" },
      options: Object.values(TYPOGRAPHY_TITLE_ELEMENT_MAP),
      table: {
        type: { summary: `${Object.values(TYPOGRAPHY_TITLE_ELEMENT_MAP).join("|")}` },
        defaultValue: { summary: `"${TYPOGRAPHY_TITLE_ELEMENT_MAP.H3}"` },
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
          <Subtitle>标题组件</Subtitle>

          <Markdown>
            {`
会被渲染为 HTML 原生 \`<h1> ~ <h6>\` 标签。能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
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
      <Typography.Title text="xxxx" />
      <Typography.Title text="xxxx" as="h4" />
      <Typography.Title text="xxxx" as="h6" />
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
} satisfies Meta<typeof Typography.Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    as: "h3",
    text: "xxxxxxxxxxx",
    color: undefined,
  },
};
