import type { Meta, StoryObj } from "@storybook/react";

import { SemanticColors } from "@/utils";
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
      table: { type: { summary: `"span"|"small"|"strong"` }, defaultValue: { summary: '"span"' } },
    },
    text: {
      description: "The text to be rendered",
      control: false,
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
    },
    semanticColor: {
      description: "The semantic color of the text",
      control: { type: "select" },
      options: [...Object.keys(SemanticColors), undefined],
      table: { type: { summary: `undefined|SemanticColors"` }, defaultValue: { summary: "undefined" } },
    },
  },
  args: {
    as: "span",
    text: "xxxx",
    semanticColor: undefined,
  },
} satisfies Meta<typeof Typography.Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
