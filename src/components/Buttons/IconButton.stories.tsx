import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { BUTTON_VARIANT_MAP, ICON_BUTTON_SHAPE_MAP, IconButton } from ".";

import { default as IconStoriesMeta } from "@/components/Icon/Icon.stories";
import { default as ButtonStoriesMeta } from "./Button.stories";

const meta = {
  title: "components/Buttons/<IconButton>",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    type: ButtonStoriesMeta.argTypes.type,
    icon: IconStoriesMeta.argTypes.icon,
    disabled: ButtonStoriesMeta.argTypes.disabled,
    loading: ButtonStoriesMeta.argTypes.loading,
    variant: ButtonStoriesMeta.argTypes.variant,
    color: ButtonStoriesMeta.argTypes.color,
    shape: {
      description: "The shape of the button.",
      type: { name: "other", value: "keyof typeof ICON_BUTTON_SHAPE_MAP" },
      table: {
        type: { summary: `${Object.values(ICON_BUTTON_SHAPE_MAP).join("|")}` },
        defaultValue: { summary: `"${ICON_BUTTON_SHAPE_MAP.SQUARE}"` },
      },
      control: { type: "radio" },
      options: Object.values(ICON_BUTTON_SHAPE_MAP),
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>图标按钮组件</Subtitle>

          <Markdown>
            {`
继承自内部组件 \`<Button>\` 实现，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, IconButton } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <IconButton icon="mdi:heart" />
      <IconButton icon="mdi:heart" shape="circle" />
      <IconButton icon="mdi:heart" loading />
      <IconButton icon="mdi:heart" disabled />
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
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    icon: "mdi:heart",
    variant: BUTTON_VARIANT_MAP.CONTAINED,
    shape: ICON_BUTTON_SHAPE_MAP.SQUARE,
    color: undefined,
    disabled: false,
    loading: false,
  },
};
