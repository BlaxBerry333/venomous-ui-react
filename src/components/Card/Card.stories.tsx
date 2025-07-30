import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./index";
import { CardTagMap } from "./index.types";

const meta = {
  title: "components/Card/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the portal",
      control: false,
      table: { type: { summary: "React.ReactNode" } },
    },
    as: {
      description: "The element to be rendered as",
      control: { type: "select" },
      options: Object.values(CardTagMap),
      table: { type: { summary: '"div"|"section"|"article"' }, defaultValue: { summary: '"div"' } },
    },
    isTransparent: {
      description: "Whether the card is transparent",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    isFrostedGlass: {
      description: "Whether the card is frosted glass",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    isOutline: {
      description: "Whether the card is outline",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
  },
  args: {
    children: null,
    as: "div",
    isTransparent: false,
    isFrostedGlass: false,
    isOutline: false,
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return <Card style={{ width: "80px", height: "80px", ...args.style }} {...args} />;
  },
};
