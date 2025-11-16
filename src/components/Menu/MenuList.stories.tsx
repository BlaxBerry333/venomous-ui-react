import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { default as SpaceFlexStoriesMeta } from "@/components/Space/SpaceFlex.stories";
import { Menu, MENU_LIST_ELEMENT_MAP } from ".";

const meta = {
  title: "components/Menu/<Menu.List>",
  component: Menu.List,
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "The element Tag to be rendered.",
      type: { name: "other", value: "keyof typeof MENU_LIST_ELEMENT_MAP" },
      table: {
        type: { summary: `${Object.values(MENU_LIST_ELEMENT_MAP).join("|")}` },
        defaultValue: { summary: `"${MENU_LIST_ELEMENT_MAP.UL}"` },
      },
      control: { type: "radio" },
      options: Object.values(MENU_LIST_ELEMENT_MAP),
    },
    column: {
      ...SpaceFlexStoriesMeta.argTypes.column,
      table: {
        ...SpaceFlexStoriesMeta.argTypes.column.table,
        defaultValue: { summary: "true" },
      },
    },
    spacing: SpaceFlexStoriesMeta.argTypes.spacing,
    children: SpaceFlexStoriesMeta.argTypes.children,
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>菜单容器组件</Subtitle>

          <Markdown>
            {`
会被渲染为 HTML 原生 \`<ul>\`、\`<ol>\`、\`<dl>\` 标签。能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, Menu } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <Menu.List spacing={8} style={{ width: 300 }}>
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>About</MenuItem>
        <Menu.Item>Contact</Menu.Item>
      </Menu.List>
    </Theme.Provider>
  );
}
            `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof Menu.List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    as: "ul",
    column: true,
    spacing: 8,
    children: (
      <>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
      </>
    ),
  },
};
