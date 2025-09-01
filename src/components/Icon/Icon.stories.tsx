import type { Meta, StoryObj } from "@storybook/react";

import { SEMANTIC_COLORS } from "@/utils";
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
    semanticColor: {
      description: "The built-in semantic color of the icon svg",
      control: { type: "select" },
      options: [...Object.keys(SEMANTIC_COLORS), undefined],
      table: { type: { summary: `undefined|SemanticColorName"` }, defaultValue: { summary: "undefined" } },
    },
  },
  args: {
    icon: "solar:basketball-bold-duotone",
    width: 20,
    semanticColor: undefined,
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
