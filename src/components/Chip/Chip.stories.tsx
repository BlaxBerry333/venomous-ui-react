import type { Meta, StoryObj } from "@storybook/react";

import Chip from "./Chip";

const meta = {
  title: "components/Chip/Chip",
  component: Chip,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    text: {
      description: "The text to be rendered",
      control: false,
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
    },
    isDisabled: {
      description: "Whether the tag is disabled",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    closeIcon: {
      description: "The icon to be rendered at the end of the tag",
      control: { type: "select" },
      options: [undefined, "solar:close-circle-line-duotone"],
      table: { type: { summary: "string" } },
    },
    closeIconPosition: {
      description: "The position of the close icon",
      if: { arg: "closeIcon" },
      control: { type: "select" },
      options: ["start", "end"],
      table: { type: { summary: `"start"|"end"` }, defaultValue: { summary: '"end"' } },
    },
    onClose: {
      description: "The callback function to be called when the tag is closed",
      if: { arg: "closeIcon" },
      control: false,
      type: { name: "string", required: true },
      table: { category: "Events", type: { summary: "() => void" } },
    },
  },
  args: {
    text: "Tag你好すき",
    isDisabled: false,
    closeIcon: undefined,
    closeIconPosition: "end",
    onClose: undefined,
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
