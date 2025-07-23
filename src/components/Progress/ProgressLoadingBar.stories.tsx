import type { Meta, StoryObj } from "@storybook/react";

import { Space } from "../Space";
import { Progress } from "./index";

const meta = {
  title: "components/Progress/Progress.LoadingBar",
  component: Progress.LoadingBar,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    height: {
      description: "The height of the progress bar",
      control: { type: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "8" } },
    },
  },
  args: {
    height: 8,
  },
} satisfies Meta<typeof Progress.LoadingBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <Space.Flex column>
        <Progress.LoadingBar height={args.height} />

        <div style={{ width: "100%" }}>
          <Progress.LoadingBar height={args.height} />
        </div>

        <div style={{ width: "80%" }}>
          <Progress.LoadingBar height={args.height} />
        </div>

        <div style={{ width: "300px" }}>
          <Progress.LoadingBar height={args.height} />
        </div>
      </Space.Flex>
    );
  },
};
