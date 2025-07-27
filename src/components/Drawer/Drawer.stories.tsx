import type { Meta, StoryObj } from "@storybook/react";

import { useHandler } from "@/hooks";
import React from "react";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { Drawer } from "./index";

const meta = {
  title: "components/Drawer/Drawer",
  component: Drawer,
  parameters: { layout: "fullscreen" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the portal",
      control: false,
      table: { type: { summary: "React.ReactNode" } },
    },
    position: {
      description: "The position of the drawer",
      control: { type: "select" },
      options: ["left", "right", "top", "bottom"],
      table: { type: { summary: `"left"|"right"|"top"|"bottom"` }, defaultValue: { summary: "left" } },
    },
    isOpen: {
      description: "Whether the drawer is open",
      control: { type: "boolean" },
      type: { name: "string", required: true },
      table: { defaultValue: { summary: "false" } },
    },
    onClose: {
      description: "The callback function to be called when the drawer is closed",
      control: false,
      type: { name: "string", required: true },
      table: { category: "Events", type: { summary: "() => void" } },
    },
    maskClosable: {
      description: "Whether the drawer is closable by clicking on the mask",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "true" } },
    },
    width: {
      description: "The width of the drawer ( only works when position is `left|right` )",
      control: { type: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "300" } },
    },
    height: {
      description: "The height of the drawer ( only works when position is `top|bottom` )",
      control: { type: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "300" } },
    },
  },
  args: {
    children: null,
    position: "left",
    isOpen: false,
    onClose: () => {},
    maskClosable: true,
    width: 300,
    height: 300,
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    const handler = useHandler();
    const { isOpen, open, close, setIsOpen } = handler;

    React.useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen, setIsOpen]);

    return (
      <>
        <Drawer {...args} isOpen={isOpen} onClose={close}>
          <Typography.Text text="xxxx" />
        </Drawer>

        <Button text="Open" onClick={open} />
      </>
    );
  },
};
