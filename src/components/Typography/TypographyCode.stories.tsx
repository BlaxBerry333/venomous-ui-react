import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from ".";

const meta = {
  title: "components/Typography/Typography.Code",
  component: Typography.Code,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    text: {
      description: "The text to be rendered",
      control: false,
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
    },
  },
  args: {
    text: "xxxx",
  },
} satisfies Meta<typeof Typography.Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
