import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Typography } from "../Typography";
import Tab from "./Tab";
import type { TabItemProps } from "./index.types";

const meta = {
  title: "components/Tab/Tab",
  component: Tab,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    tabs: {
      description: "The tabs to be rendered",
      control: false,
      table: { type: { summary: "TabItemProps[]" } },
    },
    defaultActiveIndex: {
      description: "The index of the default active tab",
      control: { type: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "0" } },
    },
    variant: {
      description: "The variant of the tab",
      control: { type: "select" },
      options: ["pills", "underline"],
      table: { type: { summary: `"pills"|"underline"` }, defaultValue: { summary: '"pills"' } },
    },
    onChange: {
      description: "The callback function to be called when the tab is changed",
      control: false,
      type: { name: "string", required: true },
      table: { category: "Events", type: { summary: "(index: number, tab: TabItemProps) => void" } },
    },
    tabContainerStyle: {
      description: "The style of the tab container",
      control: false,
      table: { type: { summary: "CSSProperties" } },
    },
    tabItemContainerStyle: {
      description: "The style of the tab items's container",
      control: false,
      table: { type: { summary: "CSSProperties" } },
    },
    tabItemStyle: {
      description: "The style of the tab item",
      control: false,
      table: { type: { summary: "CSSProperties" } },
    },
    tabIndicatorStyle: {
      description: "The style of the tab indicator",
      control: false,
      table: { type: { summary: "CSSProperties" } },
    },
    tabContentStyle: {
      description: "The style of the tab content",
      control: false,
      table: { type: { summary: "CSSProperties" } },
    },
  },
  args: {
    tabs: [],
    defaultActiveIndex: 0,
    variant: "pills",
    onChange: () => {},
  },
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <>
        <Tab {...args} tabs={tabs} onChange={(index, tab) => console.log(index, tab)} />
      </>
    );
  },
};

const tabs: TabItemProps[] = [
  {
    key: "home",
    label: "AA",
    content: <Typography.Paragraph>AA...</Typography.Paragraph>,
  },
  // 携带 icon
  {
    key: "products",
    icon: "solar:basketball-bold-duotone",
    label: "BB",
    content: <Typography.Paragraph>BB...</Typography.Paragraph>,
  },
  // 懒加载
  {
    key: "about",
    label: "CC",
    content: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Typography.Paragraph>CC...</Typography.Paragraph>
      </React.Suspense>
    ),
  },
];
