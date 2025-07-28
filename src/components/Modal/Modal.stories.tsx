import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { useHandler } from "@/hooks";
import { BreakPointName } from "@/utils";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { Modal } from "./index";

const meta = {
  title: "components/Modal/Modal",
  component: Modal,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the portal",
      control: false,
      type: { name: "string", required: true },
      table: { type: { summary: "React.ReactNode" } },
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
    maxBreakpoint: {
      description: "The maximum breakpoint of the modal",
      control: { type: "select" },
      options: Object.values(BreakPointName),
      table: { type: { summary: `"xs"|"sm"|"md"|"lg"|"xl"|"xxl"` }, defaultValue: { summary: '"xs"' } },
    },
  },
  args: {
    children: null,
    isOpen: false,
    onClose: () => {},
    maskClosable: true,
    maxBreakpoint: BreakPointName.xs,
  },
} satisfies Meta<typeof Modal>;

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
        <Modal {...args} isOpen={isOpen} onClose={close}>
          <Typography.Text text="xxxx" />
        </Modal>

        <Button text="Open" onClick={open} />
      </>
    );
  },
};
