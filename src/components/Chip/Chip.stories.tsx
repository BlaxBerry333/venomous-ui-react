import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { default as AvatarStoriesMeta } from "@/components/Avatar/Avatar.stories";
import { Chip, CHIP_VARIANT_MAP } from ".";
import { Avatar } from "../Avatar";
import { Icon } from "../Icon";

const meta = {
  title: "components/<Chip>",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "The text to display in the chip.",
      type: { name: "string", required: true },
      control: { type: "text" },
    },
    variant: {
      description: "The variant of the chip.",
      type: { name: "other", value: "keyof typeof CHIP_VARIANT_MAP" },
      table: {
        type: { summary: `${Object.values(CHIP_VARIANT_MAP).join(" | ")}` },
        defaultValue: { summary: `"${CHIP_VARIANT_MAP.CONTAINED}"` },
      },
      control: { type: "radio" },
      options: Object.values(CHIP_VARIANT_MAP),
    },
    color: {
      description: "The color of the chip ( hex string ).",
      type: { name: "string" },
      control: { type: "color" },
    },
    StartIcon: {
      description: "Element displayed before label.",
      type: { name: "other", value: "React.ReactNode" },
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: { type: "radio" },
      options: [undefined, "<span>🏠</span>", "<Icon />"],
      mapping: {
        undefined: undefined,
        "<span>🏠</span>": <span>🏠</span>,
        "<Icon />": <Icon icon="solar:home-2-linear" />,
        "<Avatar />": <Avatar width={20} src={AvatarStoriesMeta.argTypes?.src?.options?.[2]} />,
      },
    },
    EndIcon: {
      description: "Element displayed after label.",
      type: { name: "other", value: "React.ReactNode" },
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: { type: "radio" },
      options: [undefined, "<span>🏠</span>", "<Icon />"],
      mapping: {
        undefined: undefined,
        "<span>🏠</span>": <span>🏠</span>,
        "<Icon />": <Icon icon="solar:home-2-linear" />,
        "<Avatar />": <Avatar width={20} src={AvatarStoriesMeta.argTypes?.src?.options?.[2]} />,
      },
    },
    onClick: {
      description: "Click handler. If provided, chip will show hover/active effects automatically.",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "React.MouseEventHandler<BoxRef>" },
      },
      control: { type: "radio" },
      options: [undefined, "console.log('clicked')"],
      mapping: {
        undefined: undefined,
        "console.log('clicked')": () => console.log("clicked"),
      },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>徽标组件</Subtitle>

          <Markdown>
            {`
用于包裹其他组件并显示为一个提示徽标。

继承自内部组件 \`<Box>\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, Chip } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      {/* Contained variant (default) */}
      <Chip label="Contained" />
      <Chip label="With Color" color="#4CAF50" />

      {/* Outlined variant */}
      <Chip label="Outlined" variant="outlined" />
      <Chip label="Outlined Color" variant="outlined" color="#ff5722" />

      {/* Clickable */}
      <Chip label="Clickable" onClick={() => alert("clicked!")} />
      <Chip label="Outlined Clickable" variant="outlined" onClick={() => alert("clicked!")} />
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
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    label: "Chip Text",
    variant: CHIP_VARIANT_MAP.CONTAINED,
    color: undefined,
    StartIcon: undefined,
    EndIcon: undefined,
    onClick: undefined,
  },
};
