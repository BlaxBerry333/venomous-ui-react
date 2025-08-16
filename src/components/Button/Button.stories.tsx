import type { Meta, StoryObj } from "@storybook/react";

import { SemanticColors } from "@/utils";
import { Button } from "./index";
import { ButtonVariantMap } from "./index.types";

const meta = {
  title: "components/Button/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    type: {
      table: { disable: true },
    },
    text: {
      description: "The text to be rendered",
      control: { type: "text" },
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
    },
    variant: {
      description: "The variant of the button",
      control: { type: "select" },
      options: Object.values(ButtonVariantMap),
      table: {
        type: { summary: `"contained"|"outlined"|"ghost"|"transparent"` },
        defaultValue: { summary: '"contained"' },
      },
    },
    semanticColor: {
      description: "The built-in semantic color of the button",
      if: { arg: "variant", neq: "ghost" },
      control: { type: "select" },
      options: [...Object.keys(SemanticColors), undefined],
      table: { type: { summary: `undefined|SemanticColors"` }, defaultValue: { summary: "undefined" } },
    },
    icon: {
      description: "The icon to be rendered",
      control: { type: "select" },
      options: ["solar:basketball-bold-duotone"],
      table: { type: { summary: "string" } },
    },
    iconWidth: {
      description: "The width of the icon",
      if: { arg: "icon" },
      control: { type: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "24" } },
    },
    iconPosition: {
      description: "The position of the icon",
      if: { arg: "icon" },
      control: { type: "select" },
      options: ["start", "end"],
      table: { type: { summary: `"start"|"end"` }, defaultValue: { summary: '"start"' } },
    },
    iconStyle: {
      description: "The style of the icon",
      if: { arg: "icon" },
      control: { type: "object" },
      table: { type: { summary: "React.CSSProperties" } },
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
    text: "Button",
    variant: "contained",
    semanticColor: undefined,
    icon: "",
    iconWidth: 24,
    iconPosition: "start",
    isLoading: false,
    isDisabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
