import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./index";
import { CardTagMap, CardVariantMap } from "./index.types";

const meta = {
  title: "components/Card/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the card",
      control: false,
      table: { type: { summary: "React.ReactNode" } },
    },
    as: {
      description: "The element to be rendered as",
      control: { type: "select" },
      options: Object.values(CardTagMap),
      table: { type: { summary: '"div"|"section"|"article"' }, defaultValue: { summary: '"div"' } },
    },
    variant: {
      description: "The variant of the card",
      control: { type: "select" },
      options: Object.values(CardVariantMap),
      table: {
        type: { summary: '"elevated"|"outlined"|"transparent"|"frostedGlass"' },
        defaultValue: { summary: '"elevated"' },
      },
    },
  },
  args: {
    children: null,
    as: "div",
    variant: "elevated",
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
