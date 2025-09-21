import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from ".";
import { MenuItemTagMap } from "./index.types";

const meta = {
  title: "components/Menu/Menu.Item",
  component: Menu.Item,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    as: {
      description: "The HTML element to use for the menu item",
      control: { type: "select" },
      options: Object.values(MenuItemTagMap),
      table: { type: { summary: '"li"|"dt"|"dd"' }, defaultValue: { summary: '"li"' } },
    },
    id: {
      table: { disable: true },
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
    iconStyle: {
      description: "The style of the icon to be rendered at the start of the menu item",
      control: false,
      table: { type: { summary: "React.CSSProperties" } },
    },
    isDisabled: {
      description: "Whether the menu item is disabled",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    isActive: {
      description: "Whether the menu item is active",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    actionButtonProps: {
      description: "The props of the action icon button which to be rendered at the end of the menu item",
      control: { type: "select" },
      options: [undefined, { icon: "solar:hamburger-menu-line-duotone", onClick: () => {} }],
      table: { type: { summary: "{icon:string; onClick:VoidFunction;}" }, defaultValue: { summary: "undefined" } },
    },
  },
  args: {
    as: "li",
    id: "xxxxxxx",
    text: "xxxxxxx",
    subText: "yyyyyyy",
    icon: undefined,
    iconStyle: undefined,
    isDisabled: false,
    isActive: false,
    actionButtonProps: undefined,
  },
} satisfies Meta<typeof Menu.Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return <Menu.Item {...args} style={{ width: "200px" }} />;
  },
};
