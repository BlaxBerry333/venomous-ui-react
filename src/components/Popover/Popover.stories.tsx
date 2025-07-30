import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { Typography } from "../Typography";
import Popover from "./Popover";

const meta = {
  title: "components/Popover/Popover",
  component: Popover,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the portal",
      control: false,
      type: { name: "string", required: true },
      table: { type: { summary: "React.ReactNode" } },
    },
    placement: {
      description: "The placement of the popover",
      control: { type: "select" },
      options: ["top", "bottom"],
      table: { type: { summary: `"top"|"bottom"` }, defaultValue: { summary: '"bottom"' } },
    },
    renderTrigger: {
      description: "The content to be rendered inside the trigger",
      control: false,
      type: { name: "string", required: true },
      table: { category: "Events", type: { summary: "(isOpen: boolean) => React.ReactNode;" } },
    },
  },
  args: {
    children: null,
    placement: "bottom",
    renderTrigger: () => null,
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <Popover {...args} renderTrigger={() => <Button text="Open" />}>
        <Typography.Text text="xxxx" />
      </Popover>
    );
  },
};
