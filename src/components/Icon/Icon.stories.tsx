import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./index";

const meta = {
  title: "components/Icon/Icon",
  component: Icon,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    icon: {
      description: "The icon to be rendered",
      control: { type: "text" },
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
    },
    width: {
      description: "The width of the icon",
      control: { type: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "20" } },
    },
  },
  args: {
    icon: "solar:basketball-bold-duotone",
    width: 20,
    color: "auto",
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
