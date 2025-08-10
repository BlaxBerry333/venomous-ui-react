import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from ".";
import { MenuItemTagMap, type MenuItemProps } from "./index.types";

const meta = {
  title: "components/Menu/Menu.CollapseItem",
  component: Menu.CollapseItem,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    as: {
      description: "The HTML element to use for the menu item",
      control: { type: "select" },
      options: Object.values(MenuItemTagMap),
      table: { type: { summary: '"li"|"dt"|"dd"' }, defaultValue: { summary: '"li"' } },
    },
    text: {
      description: "The main text of the menu item",
      control: { type: "text" },
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
    },
    subText: {
      description: "The sub text of the menu item",
      control: { type: "text" },
      table: { type: { summary: "string" } },
    },
    icon: {
      description: "The icon to be rendered at the start of the menu item",
      control: { type: "select" },
      options: [undefined, "solar:basketball-bold-duotone"],
      table: { type: { summary: "string" } },
    },
    isDisabled: {
      description: "Whether the menu item is disabled",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    isCollapsed: {
      description: "Whether the menu item is collapsed",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    subItems: {
      description: "The sub items of the menu item",
      control: false,
      type: { name: "string", required: true },
      table: { type: { summary: "Array<MenuItemProps>" }, defaultValue: { summary: "[]" } },
    },
  },
  args: {
    as: "li",
    text: "xxxxxxx",
    subText: "yyyyyyy",
    icon: undefined,
    isDisabled: false,
    isCollapsed: false,
    subItems: [],
  },
} satisfies Meta<typeof Menu.CollapseItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    const MockSubItems: MenuItemProps[] = [
      { icon: "solar:basketball-bold-duotone", text: "Item 1" },
      { icon: "solar:basketball-bold-duotone", text: "Item 2" },
    ].map((item) => ({
      ...item,
      onClick: () => console.log(item.text),
    }));

    return <Menu.CollapseItem {...args} style={{ width: "200px" }} subItems={MockSubItems} />;
  },
};
