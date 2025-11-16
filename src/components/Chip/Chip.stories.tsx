import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { default as AvatarStoriesMeta, Playground as AvatarStoryPlayground } from "@/components/Avatar/Avatar.stories";
import { Chip } from ".";

const meta = {
  title: "components/<Chip>",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    text: {
      description: "The text to display in the chip.",
      type: { name: "string", required: true },
      control: { type: "text" },
    },
    color: {
      description: "The color of the chip ( hex string ).",
      type: { name: "string" },
      control: { type: "color" },
    },
    AvatarProps: {
      description: "Avatar props to display an avatar before the text.",
      type: { name: "other", value: "AvatarProps" },
      control: { type: "radio" },
      options: [undefined, "AvatarProps"],
      mapping: {
        undefined: undefined,
        AvatarProps: {
          ...AvatarStoryPlayground.args,
          src: AvatarStoriesMeta.argTypes?.src?.options?.[2],
        },
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
      <Chip text="AAA" />
      <Chip text="BBB" color="#4CAF50" />
      <Chip text="CCC" onClick={() => alert("CCC clicked!")} />

      {/* With Avatar */}
      <Chip
        text="Alex Chen"
        AvatarProps={{ src: "${AvatarStoriesMeta.argTypes?.src?.options?.[2]}" }}
      />
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
    text: "Chip",
    color: undefined,
    AvatarProps: undefined,
    onClick: undefined,
  },
};
