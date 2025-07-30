import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from ".";
import { MenuListTagMap } from "./index.types";

const meta = {
  title: "components/Menu/Menu.List",
  component: Menu.List,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    as: {
      description: "The HTML element to use for the menu list",
      control: { type: "select" },
      options: Object.values(MenuListTagMap),
      table: { type: { summary: '"ul"|"ol"|"dl"' }, defaultValue: { summary: '"ul"' } },
    },
  },
  args: {
    as: "ul",
  },
} satisfies Meta<typeof Menu.List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <Menu.List {...args} style={{ width: "200px" }}>
        <Menu.Item icon="solar:basketball-bold-duotone" text="Item 1" />
        <Menu.Item icon="solar:basketball-bold-duotone" text="Item 2" subText="Item 2 sub text" />
        <Menu.Item icon="solar:basketball-bold-duotone" text="Item 3" subText="Item 3 sub text" />
      </Menu.List>
    );
  },
};
