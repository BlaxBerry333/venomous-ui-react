import type { Meta, StoryObj } from "@storybook/react";

import { SEMANTIC_COLORS } from "@/utils";
import { Typography } from ".";

const meta = {
  title: "components/Typography/Typography.Title",
  component: Typography.Title,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    as: {
      description: "The tag of the text to be rendered as",
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      table: { type: { summary: `"h1"|"h2"|"h3"|"h4"|"h5"|"h6"` }, defaultValue: { summary: '"h4"' } },
    },
    text: {
      description: "The text to be rendered",
      control: false,
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
    },
    ellipsis: {
      description: "The lines to be eclipsed",
      control: { type: "number", min: 0 },
      table: { type: { summary: "number" }, defaultValue: { summary: "0" } },
    },
    semanticColor: {
      description: "The built-in semantic color of the text",
      control: { type: "select" },
      options: [...Object.keys(SEMANTIC_COLORS), undefined],
      table: { type: { summary: `undefined|SemanticColorName"` }, defaultValue: { summary: "undefined" } },
    },
  },
  args: {
    as: "h4",
    text: "xxxx",
    ellipsis: 0,
    semanticColor: undefined,
  },
} satisfies Meta<typeof Typography.Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
