import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../Typography";
import { Cards } from "./index";

const meta = {
  title: "components/Card/Cards.Product",
  component: Cards.Product,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the portal",
      control: false,
      table: { type: { summary: "React.ReactNode" } },
    },
    title: {
      description: "The title of the product",
      control: { type: "text" },
      table: { type: { summary: "string" } },
    },
    description: {
      description: "The description of the product",
      control: { type: "text" },
      table: { type: { summary: "string" } },
    },
    onCloseMenu: {
      description: "The callback function to be called when the menu is closed",
      control: false,
      type: { name: "string", required: true },
      table: { category: "Events", type: { summary: "() => void" } },
    },
    renderMenu: {
      description: "The callback function to be called to render the menu",
      control: false,
      type: { name: "string", required: true },
      table: { category: "Events", type: { summary: "() => React.ReactNode" } },
    },
  },
  args: {
    children: null,
    title: "Title",
    description: "Description",
    onCloseMenu: () => {},
    renderMenu: () => null,
  },
} satisfies Meta<typeof Cards.Product>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <Cards.Product
        {...args}
        renderMenu={() => (
          <ul>
            <Typography.Text text="xxxx" />
          </ul>
        )}
      />
    );
  },
};
