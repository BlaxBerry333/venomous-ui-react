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
    direction: {
      description: "The placement of the popover",
      control: { type: "select" },
      options: ["top", "bottom", "right", "left"],
      table: { type: { summary: `"top"|"bottom|"right"|"left"` }, defaultValue: { summary: '"bottom"' } },
    },
    alignment: {
      description: "The alignment of the popover",
      control: { type: "select" },
      options: ["start", "center", "end"],
      table: { type: { summary: `"start"|"center"|"end"` }, defaultValue: { summary: '"center"' } },
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
      table: {
        category: "Events",
        type: {
          summary: "(params: { isOpen: boolean; close: VoidFunction; toggle: VoidFunction }) => React.ReactNode;",
        },
      },
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
    onClickOutside: {
      description: "The callback function to be called when the popover is closed",
      control: false,
      table: { category: "Events", type: { summary: "() => void" } },
    },
  },
  args: {
    children: null,
    direction: "bottom",
    alignment: "center",
    trigger: "click",
    renderTrigger: () => null,
    onClickOutside: () => {},
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
