import type { Meta, StoryObj } from "@storybook/react";

import { SemanticColors } from "@/utils";
import { Buttons } from "./index";
import { ButtonVariantMap } from "./index.types";

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
      options: Object.values(ButtonVariantMap),
      table: { type: { summary: `"contained"|"outlined"|"ghost"|"flat"` }, defaultValue: { summary: '"contained"' } },
    },
    semanticColor: {
      description: "The built-in semantic color of the button",
      if: { arg: "variant", neq: "ghost" },
      control: { type: "select" },
      options: [...Object.keys(SemanticColors), undefined],
      table: { type: { summary: `undefined|SemanticColors"` }, defaultValue: { summary: "undefined" } },
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
    variant: "contained",
    semanticColor: undefined,
    icon: "solar:basketball-bold-duotone",
    iconWidth: 24,
    isLoading: false,
    isDisabled: false,
  },
} satisfies Meta<typeof Buttons.Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
