import type { Meta, StoryObj } from "@storybook/react";

import { useHandler } from "@/hooks";
import React from "react";
import { Button } from "../Button";
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
  },
  args: {
    children: null,
    isOpen: false,
    onClose: () => {},
    maskClosable: true,
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
          xxx
        </Modal>

        <Button text="Open" onClick={open} />
      </>
    );
  },
};
