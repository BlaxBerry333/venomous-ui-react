import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { TYPOGRAPHY_SIZES } from "@/constants";
import { Typography } from ".";

const meta = {
  title: "components/Typography/<Typography.Paragraph>",
  component: Typography.Paragraph,
  tags: ["autodocs"],
  argTypes: {
    text: {
      description: "The text to be rendered as children of the Typography.",
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
      control: { type: "text" },
    },
    size: {
      description: "Font size variant based on TYPOGRAPHY_SIZES.TEXT",
      type: { name: "other", value: "keyof typeof TYPOGRAPHY_SIZES.TEXT" },
      table: {
        type: { summary: `${Object.keys(TYPOGRAPHY_SIZES.TEXT).join(" | ")}` },
        defaultValue: { summary: '"BASE"' },
      },
      control: { type: "radio" },
      options: Object.keys(TYPOGRAPHY_SIZES.TEXT),
    },
    weight: {
      description: "Font weight.",
      type: { name: "other", value: "normal | bold" },
      table: {
        type: { summary: "normal | bold" },
        defaultValue: { summary: '"normal"' },
      },
      control: { type: "radio" },
      options: ["normal", "bold"],
    },
    color: {
      description: "The color to be used as text color ( hex string ).",
      type: { name: "string" },
      table: { type: { summary: "string" } },
      control: { type: "color" },
    },
    ellipsis: {
      description: "Text ellipsis rows.",
      type: { name: "number" },
      table: {
        type: { summary: " number" },
        defaultValue: { summary: "0" },
      },
      control: { type: "number", min: 0, step: 1 },
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
          <Subtitle>段落组件</Subtitle>

          <Markdown>
            {`
会被渲染为 HTML 原生 \`<p>\` 标签。能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
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
      <Typography.Paragraph text="xxxx" />
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
} satisfies Meta<typeof Typography.Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    size: "BASE",
    weight: "normal",
    color: undefined,
    ellipsis: 0,
  },
};
