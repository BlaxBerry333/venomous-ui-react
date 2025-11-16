import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from ".";

const meta = {
  title: "components/<Icon>",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      description: "The icon to be rendered.",
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
      control: { type: "text" },
    },
    width: {
      description: "The width of the icon ( px )",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "24" },
      },
      control: { type: "number", min: 0 },
    },
    color: {
      description: "The color to be used as text color ( hex string ).",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
      control: { type: "color" },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>图标组件</Subtitle>

          <Markdown>
            {`
功能基于 [Iconify 图标库](https://icon-sets.iconify.design/) 并且能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

目前只支持联网加载图标。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, Icon } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <Icon icon="XXXX" />
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
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    icon: "solar:basketball-bold-duotone",
    width: 24,
    color: undefined,
  },
};
