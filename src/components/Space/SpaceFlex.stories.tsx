import type { Meta, StoryObj } from "@storybook/react";

import { Space } from ".";

const meta = {
  title: "components/Space/Space.Flex",
  component: Space.Flex,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the flex container",
      control: false,
      table: { type: { summary: "React.ReactNode" } },
    },
    row: {
      description: "Whether the flex container is a row flex container",
      if: { arg: "column", neq: true },
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "true" } },
    },
    column: {
      description: "Whether the flex container is a column flex container",
      if: { arg: "row", neq: true },
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    gap: {
      description: "The gap between the flex items",
      control: { type: "number", min: 0 },
      table: { type: { summary: "number | [number, number]" }, defaultValue: { summary: "8" } },
    },
  },
  args: {
    children: null,
    row: true,
    column: false,
    gap: 8,
  },
} satisfies Meta<typeof Space.Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <Space.Flex {...args}>
        <div style={{ width: "100%", backgroundColor: "red" }}>A</div>
        <div style={{ width: "100%", backgroundColor: "skyblue" }}>B</div>
        <div style={{ width: "100%", backgroundColor: "cadetblue" }}>C</div>
      </Space.Flex>
    );
  },
};
