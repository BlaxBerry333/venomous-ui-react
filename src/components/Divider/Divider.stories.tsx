import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from ".";
import { Space } from "../Space";
import { Typography } from "../Typography";

const meta = {
  title: "components/Divider/Divider",
  component: Divider,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    column: {
      description: "Whether the divider is a column divider",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
  },
  args: {
    column: false,
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <Space.Flex column={!args.column}>
        <Typography.Text text="Content above" />
        <Divider {...args} />
        <Typography.Text text="Content below" />
      </Space.Flex>
    );
  },
};
