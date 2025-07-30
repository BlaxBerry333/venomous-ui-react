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
      control: { type: "text" },
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
    },
    isEllipsis: {
      description: "Whether the text is to be eclipsed",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    semanticColor: {
      description: "The built-in semantic color of the text",
      control: { type: "select" },
      options: [...Object.keys(SemanticColors), undefined],
      table: { type: { summary: `undefined|SemanticColors"` }, defaultValue: { summary: "undefined" } },
    },
  },
  args: {
    as: "span",
    text: "xxxx",
    semanticColor: undefined,
    isEllipsis: false,
  },
} satisfies Meta<typeof Typography.Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return <Typography.Text {...args} style={{ ...(args.isEllipsis && { width: "200px" }) }} />;
  },
};
