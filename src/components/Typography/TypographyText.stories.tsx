import type { Meta, StoryObj } from "@storybook/react";

import { TextColors } from "@/utils";
import { Typography } from ".";

const meta = {
  title: "components/Typography/Typography.Text",
  component: Typography.Text,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    as: {
      description: "The tag of the text to be rendered as",
      control: { type: "select" },
      options: ["span", "small", "strong"],
      table: { type: { summary: `"span"|"small"|"strong"` }, defaultValue: { summary: "span" } },
    },
    text: {
      description: "The text to be rendered",
      control: false,
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
    },
    color: {
      description: "The built-in color name of the text",
      control: { type: "select" },
      options: Object.keys(TextColors),
      table: {
        type: { summary: `"lightMode"|"darkMode"|"grey"|"white"|"link"|"disabled"|"success"|"error"|"warning"` },
        defaultValue: { summary: "lightMode" },
      },
    },
  },
  args: {
    as: "span",
    text: "xxxx",
    color: "lightMode",
  },
} satisfies Meta<typeof Typography.Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
