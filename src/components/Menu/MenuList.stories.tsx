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
        <Menu.Item icon="solar:basketball-bold-duotone" text="Item 2" isActive />
        <Menu.Item icon="solar:basketball-bold-duotone" text="Item 3" isDisabled />
        <Menu.CollapseItem
          icon="solar:basketball-bold-duotone"
          text="Item 4"
          subItems={[
            { icon: "solar:basketball-bold-duotone", text: "SubItem 1" },
            { icon: "solar:basketball-bold-duotone", text: "SubItem 2" },
          ]}
        />
        <Menu.Item icon="solar:basketball-bold-duotone" text="Item 5" subText="Item 4 sub text" />
      </Menu.List>
    );
  },
};
