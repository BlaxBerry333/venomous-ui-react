import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

const meta = {
  title: "components/Button/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    text: {
      description: "The text to be rendered",
      control: { type: "text" },
      table: { type: { summary: "string" } },
    },
    variant: {
      description: "The variant of the button",
      control: { type: "select" },
      options: ["contained", "outline", "ghost"],
      table: { type: { summary: `"contained"|"outline"|"ghost"` }, defaultValue: { summary: "contained" } },
    },
    color: {
      description: "The color of the button",
      control: { type: "select" },
      options: ["primary", "secondary", "error", "warning", "success", "info"],
      table: {
        type: { summary: `"primary"|"secondary"|"error"|"warning"|"success"|"info"` },
        defaultValue: { summary: "primary" },
      },
    },
    isLoading: {
      description: "Whether the button is loading",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    isDisabled: {
      description: "Whether the button is disabled",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
  },
  args: {
    text: "Button",
    variant: "contained",
    color: "auto",
    isLoading: false,
    isDisabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
