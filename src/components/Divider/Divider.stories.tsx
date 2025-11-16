import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { Divider } from ".";

const meta = {
  title: "components/<Divider>",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    column: {
      description: "Whether the divider is column.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>内容分割组件</Subtitle>

          <Markdown>
            {`
会被渲染为 HTML 原生 \`<hr>\` 标签。能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, Box, Space, Divider } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <Space.Flex style={{ height: "50px" }}>
        <Box>1</Box>
        <Divider column />
        <Box>2</Box> 
      </Space.Flex>
                  
      <Space.Flex column style={{ height: "50px", alignItems: "center" }}>
        <Box>1</Box>
        <Divider />
        <Box>2</Box> 
      </Space.Flex>
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
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    column: false,
  },
  render: function RenderStory(args) {
    return (
      <Space.Flex column={!args.column} style={{ height: "50px", alignItems: "center" }}>
        <Typography.Text text="AAAAAA" />
        <Divider {...args} />
        <Typography.Text text="BBBBBB" />
      </Space.Flex>
    );
  },
};
