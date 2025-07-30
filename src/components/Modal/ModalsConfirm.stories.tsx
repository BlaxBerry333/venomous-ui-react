import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { useHandler } from "@/hooks";
import { BreakPointName } from "@/utils";
import { Button } from "../Button";
import { Modals } from "./index";

const meta = {
  title: "components/Modal/Modals.Confirm",
  component: Modals.Confirm,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    isOpen: {
      description: "Whether the confirm modal is open",
      control: { type: "boolean" },
      type: { name: "string", required: true },
      table: { defaultValue: { summary: "false" } },
    },
    onClose: {
      description: "The callback function to be called when the confirm modal is closed",
      control: false,
      type: { name: "string", required: true },
      table: { category: "Events", type: { summary: "() => void" } },
    },
    maskClosable: {
      description: "Whether the confirm modal is closable by clicking on the mask",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    maxBreakpoint: {
      description: "The maximum breakpoint of the confirm modal",
      control: { type: "select" },
      options: Object.values(BreakPointName),
      table: { type: { summary: `"xs"|"sm"|"md"|"lg"|"xl"|"xxl"` }, defaultValue: { summary: '"xs"' } },
    },
    title: {
      description: "The title of the confirm modal",
      control: { type: "text" },
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
    },
    description: {
      description: "The description of the confirm modal",
      control: { type: "text" },
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
    },
    isConformLoading: {
      description: "Whether the confirm button is loading",
      control: false,
    },
    onCancel: {
      description: "The callback function to be called when the cancel button is clicked",
      control: false,
      type: { name: "string", required: true },
      table: { category: "Events", type: { summary: "() => void" } },
    },
    onConfirm: {
      description: "The callback function to be called when the confirm button is clicked",
      control: false,
      type: { name: "string", required: true },
      table: { category: "Events", type: { summary: "() => void" } },
    },
  },
  args: {
    isOpen: false,
    onClose: () => {},
    maskClosable: false,
    maxBreakpoint: BreakPointName.xs,
    title: "Are you sure?",
    description: "This action cannot be undone.",
    isConformLoading: false,
    onCancel: () => {},
    onConfirm: () => {},
  },
} satisfies Meta<typeof Modals.Confirm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    const handler = useHandler();
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
      handler.setIsOpen(args.isOpen);
    }, [args.isOpen, handler.setIsOpen]);

    return (
      <>
        <Modals.Confirm
          {...args}
          isOpen={handler.isOpen}
          onClose={handler.close}
          isConformLoading={isLoading}
          onCancel={() => console.log("cancel")}
          onConfirm={async () => {
            console.log("confirm");
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            setIsLoading(false);
          }}
        />

        <Button text="Open" onClick={handler.open} />
      </>
    );
  },
};
