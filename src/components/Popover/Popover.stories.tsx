import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import Popover from "./Popover";

const meta = {
  title: "components/Popover/Popover",
  component: Popover,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the popover",
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
    trigger: {
      description: "How to trigger the popover",
      control: { type: "select" },
      options: ["click", "hover"],
      table: { type: { summary: `"click"|"hover"` }, defaultValue: { summary: '"click"' } },
    },
    renderTrigger: {
      description: "The content to be rendered inside the trigger",
      control: false,
      type: { name: "string", required: true },
      table: { category: "Events", type: { summary: "(isOpen: boolean) => React.ReactNode;" } },
    },
    style: {
      description: "The style of the popover ( trigger )",
      control: false,
      table: { type: { summary: "React.CSSProperties" } },
    },
    contentStyle: {
      description: "The style of the popover ( content )",
      control: false,
      table: { type: { summary: "React.CSSProperties" } },
    },
  },
  args: {
    children: null,
    placement: "bottom",
    trigger: "click",
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
        <div style={{ width: "200px", height: "100px", backgroundColor: "pink" }} />
        <div style={{ width: "200px", height: "100px", backgroundColor: "skyblue" }} />
      </Popover>
    );
  },
};
