import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../Typography";
import { Progress } from "./index";

const meta = {
  title: "components/Progress/Progress.Scrollbar",
  component: Progress.Scrollbar,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    height: {
      description: "The height of the progress bar",
      control: { type: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "4" } },
    },
  },
  args: {
    height: 4,
  },
} satisfies Meta<typeof Progress.Scrollbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <>
        <Progress.Scrollbar {...args} />

        <Typography.Paragraph style={{ textAlign: "center" }}>Please scroll the page</Typography.Paragraph>
      </>
    );
  },
};
