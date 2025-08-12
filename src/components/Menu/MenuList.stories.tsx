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
        <Menu.Item id="1" icon="solar:basketball-bold-duotone" text="Item 1" />
        <Menu.Item id="2" icon="solar:basketball-bold-duotone" text="Item 2" isActive />
        <Menu.Item id="3" icon="solar:basketball-bold-duotone" text="Item 3" isDisabled />
        <Menu.Item id="4" icon="solar:basketball-bold-duotone" text="Item 4" subText="Item 4 sub text" />
        <Menu.CollapseItem
          id="5"
          icon="solar:basketball-bold-duotone"
          text="Collapse Item 1"
          subItems={[
            { id: "5-1", icon: "solar:basketball-bold-duotone", text: "SubItem 1" },
            { id: "5-2", icon: "solar:basketball-bold-duotone", text: "SubItem 2" },
          ]}
        />
        <Menu.CollapseItem
          id="6"
          icon="solar:basketball-bold-duotone"
          text="Collapse Item 2"
          subItems={[
            { id: "6-1", icon: "solar:basketball-bold-duotone", text: "SubItem 1" },
            { id: "6-2", icon: "solar:basketball-bold-duotone", text: "SubItem 2" },
          ]}
        />
      </Menu.List>
    );
  },
};
