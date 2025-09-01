/* cSpell:disable */

import type { Meta, StoryObj } from "@storybook/react";

import { SEMANTIC_COLORS } from "@/utils";
import { Typography } from ".";

const meta = {
  title: "components/Typography/Typography.Paragraph",
  component: Typography.Paragraph,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the paragraph",
      control: false,
      table: { type: { summary: "React.ReactNode" } },
    },
    ellipsis: {
      description: "The lines to be eclipsed",
      control: { type: "number", min: 0 },
      table: { type: { summary: "number" }, defaultValue: { summary: "0" } },
    },
    semanticColor: {
      description: "The built-in built-in semantic color of the text",
      control: { type: "select" },
      options: [...Object.keys(SEMANTIC_COLORS), undefined],
      table: { type: { summary: `undefined|SemanticColorName"` }, defaultValue: { summary: "undefined" } },
    },
  },
  args: {
    children: null,
    ellipsis: 0,
    semanticColor: undefined,
  },
} satisfies Meta<typeof Typography.Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <Typography.Paragraph {...args}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
        <br />
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography.Paragraph>
    );
  },
};
