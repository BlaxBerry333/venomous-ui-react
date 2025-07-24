import type { Meta, StoryObj } from "@storybook/react";

import { ButtonColors } from "@/utils";
import { Buttons } from "./index";

const meta = {
  title: "components/Button/Buttons.Icon",
  component: Buttons.Icon,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    type: {
      table: { disable: true },
    },
    icon: {
      description: "The icon to be rendered",
      control: { type: "text" },
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
    },
    iconWidth: {
      description: "The width of the icon",
      if: { arg: "icon" },
      control: { type: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "24" } },
    },
    variant: {
      description: "The variant of the button",
      control: { type: "select" },
      options: ["contained", "outline", "ghost"],
      table: { type: { summary: `"contained"|"outline"|"ghost"` }, defaultValue: { summary: "contained" } },
    },
    color: {
      description: "The color of the button",
      if: { arg: "variant", neq: "ghost" },
      control: { type: "select" },
      options: Object.keys(ButtonColors),
      table: {
        type: { summary: `"auto"|"disabled"|"error""` },
        defaultValue: { summary: "primary" },
      },
    },
    isLoading: {
      description: "Whether the button is loading",
      control: { type: "boolean" },
      if: { arg: "isDisabled", neq: true },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    isDisabled: {
      description: "Whether the button is disabled",
      control: { type: "boolean" },
      if: { arg: "isLoading", neq: true },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
  },
  args: {
    icon: "solar:basketball-bold-duotone",
    iconWidth: 24,
    variant: "contained",
    isLoading: false,
    isDisabled: false,
  },
} satisfies Meta<typeof Buttons.Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
