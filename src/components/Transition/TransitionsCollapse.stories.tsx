import type { Meta, StoryObj } from "@storybook/react";

import { useHandler } from "@/hooks";
import React from "react";
import { Transitions } from ".";
import { Button } from "../Button";

const meta = {
  title: "components/Transition/Transitions.Collapse",
  component: Transitions.Collapse,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the popover",
      control: false,
      type: { name: "string", required: true },
      table: { type: { summary: "React.ReactNode" } },
    },
    isOpen: {
      description: "Whether the popover is open",
      control: { type: "boolean" },
      type: { name: "string", required: true },
      table: { defaultValue: { summary: "false" } },
    },
    direction: {
      description: "The direction of the drawer",
      control: { type: "select" },
      options: ["left", "right", "up", "down"],
      table: { type: { summary: `"left"|"right"|"up"|"down"` }, defaultValue: { summary: '"down"' } },
    },
  },
  args: {
    children: null,
    isOpen: false,
    direction: "down",
  },
} satisfies Meta<typeof Transitions.Collapse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    const handler = useHandler();
    const { isOpen, toggle, setIsOpen } = handler;

    React.useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen, setIsOpen]);

    return (
      <>
        <Button text="Toggle" onClick={toggle} />
        <Transitions.Collapse {...args} isOpen={isOpen}>
          <div style={{ width: "200px", height: "100px", backgroundColor: "pink" }} />
          <div style={{ width: "200px", height: "100px", backgroundColor: "skyblue" }} />
        </Transitions.Collapse>
      </>
    );
  },
};
