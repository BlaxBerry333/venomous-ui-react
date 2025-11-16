import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@/components/Box";
import { default as BoxStoriesMeta } from "@/components/Box/Box.stories";
import { PALETTE_COLORS } from "@/constants/designs";
import { Space } from ".";

const meta = {
  title: "components/Space/<Space.Flex>",
  component: Space.Flex,
  tags: ["autodocs"],
  argTypes: {
    ...BoxStoriesMeta.argTypes,
    children: {
      description: "The elements to be rendered inside.",
      type: { name: "other", value: "React.ReactNode", required: true },
      table: { type: { summary: "React.ReactNode" } },
      control: false,
    },
    column: {
      description: "Whether to use Vertical layout ( flex-direction: column ).",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    spacing: {
      description: "Gap space between menu items ( px ).",
      type: { name: "number", required: false },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
      control: { type: "number", min: 0 },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>流式布局组件</Subtitle>

          <Markdown>
            {`
会实现 CSS Flex 流式布局。能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, Box, Space } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <Space.Flex spacing={8}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
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
} satisfies Meta<typeof Space.Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    as: "div",
    column: false,
    spacing: 0,
    maxWidth: undefined,
    children: Object.entries(PALETTE_COLORS)
      .slice(0, 3)
      .map(([name, value], index) => (
        <Box key={name} style={{ height: "100px", width: "100%", backgroundColor: value[1] }}>
          {index + 1}
        </Box>
      )),
  },
};
