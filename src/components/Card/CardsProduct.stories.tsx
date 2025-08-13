import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from "../Menu";
import { Cards } from "./index";

const meta = {
  title: "components/Card/Cards.Product",
  component: Cards.Product,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
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
    renderMenu: {
      description: "The callback function to be called to render the menu",
      control: false,
      type: { name: "string", required: true },
      table: { category: "Events", type: { summary: "() => React.ReactNode" } },
    },
  },
  args: {
    title: "Title",
    description: "Description",
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
          <Menu.List>
            <Menu.Item id="Edit" text="Edit" icon="solar:pen-line-duotone" onClick={() => {}} />
            <Menu.Item id="Delete" text="Delete" icon="solar:trash-bin-trash-line-duotone" onClick={() => {}} />
          </Menu.List>
        )}
      />
    );
  },
};
