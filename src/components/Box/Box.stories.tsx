import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { THEME_BREAKPOINTS } from "@/constants";
import { Box, BOX_ELEMENT_MAP } from ".";

const meta = {
  title: "components/<Box>",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "The element Tag to be rendered.",
      type: { name: "other", value: "keyof typeof BOX_ELEMENT_MAP" },
      table: {
        type: { summary: `${Object.values(BOX_ELEMENT_MAP).join("|")}` },
        defaultValue: { summary: `"${BOX_ELEMENT_MAP.DIV}"` },
      },
      control: { type: "radio" },
      options: Object.values(BOX_ELEMENT_MAP),
    },
    maxWidth: {
      description: "The maximum width breakpoint of the box. When set, the box will be centered with `margin: 0 auto`.",
      type: { name: "string" },
      table: {
        type: { summary: `${Object.keys(THEME_BREAKPOINTS).join(" | ")}` },
        defaultValue: { summary: "undefined" },
      },
      control: { type: "radio" },
      options: [undefined, ...Object.keys(THEME_BREAKPOINTS)],
    },
    children: {
      description: "The content to display inside.",
      type: { name: "other", value: "React.ReactNode" },
      table: { type: { summary: "React.ReactNode" } },
      control: false,
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
          <Subtitle>盒子模型组件</Subtitle>

          <Markdown>
            {`
会被渲染为 HTML 原生 ${Object.values(BOX_ELEMENT_MAP)
              .map((el) => `\`<${el}>\``)
              .join("、")} 标签。

常用于被其他组件继承，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, Box } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      {/* 基础用法 */}
      <Box as="div" style={{ padding: "16px" }}>Content</Box>

      {/* 限制最大宽度并居中 */}
      <Box as="section" maxWidth="SM" style={{ padding: "16px" }}>
        Centered content with max-width
      </Box>
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
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  argTypes: {
    style: { control: false },
  },
  args: {
    as: BOX_ELEMENT_MAP.DIV,
    maxWidth: undefined,
    style: { padding: 40, backgroundColor: "pink" },
  },
};
