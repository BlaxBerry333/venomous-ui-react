import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { BOX_ELEMENT_MAP } from "@/components/Box";
import { default as BoxStoriesMeta } from "@/components/Box/Box.stories";
import { Button } from "@/components/Buttons";
import { Typography } from "@/components/Typographies";
import { Card, CARD_VARIANT_MAP, type CardProps } from ".";

const __CARD_ELEMENTS: CardProps["as"][] = [BOX_ELEMENT_MAP.DIV, BOX_ELEMENT_MAP.SECTION, BOX_ELEMENT_MAP.ARTICLE];

const meta = {
  title: "components/Cards/<Card>",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    as: {
      ...BoxStoriesMeta.argTypes.as,
      table: {
        ...BoxStoriesMeta.argTypes.as.table,
        type: { summary: `${__CARD_ELEMENTS.join("|")}` },
      },
      options: __CARD_ELEMENTS,
    },
    variant: {
      description: "Card style variant.",
      type: { name: "other", value: "keyof typeof CARD_VARIANT_MAP" },
      table: {
        type: { summary: `${Object.values(CARD_VARIANT_MAP).join(" | ")}` },
        defaultValue: { summary: `"${CARD_VARIANT_MAP.CONTAINED}"` },
      },
      control: { type: "radio" },
      options: Object.values(CARD_VARIANT_MAP),
    },
    children: {
      description: "Card content.",
      type: { name: "other", value: "React.ReactNode", required: true },
      table: { type: { summary: "React.ReactNode" } },
      control: { type: "radio" },
      options: [undefined, '"Hello world"', "<Typography /> + <Button />"],
      mapping: {
        undefined: undefined,
        '"Hello world"': "Hello world",
        "<Typography /> + <Button />": (
          <>
            <Typography.Title text="Card Title" />
            <Typography.Paragraph text="Card content goes here..." style={{ marginBottom: 16 }} />
            <Button text="Button" />
          </>
        ),
      },
    },
    onClick: {
      description: "Click event handler (automatically adds cursor: pointer).",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "() => void" },
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
          <Subtitle>卡片组件</Subtitle>

          <Markdown>
            {`
用于以一个卡片的形式展示内容。

继承自内部组件 \`<Box>\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, Card } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <Card>
        {/* ... */}
        {/* ... */}
      </Card>
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
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    as: "div",
    variant: "contained",
    children: meta.argTypes?.children?.options?.[0],
    onClick: undefined,
  },
  render: function RenderStory(args) {
    return <Card {...args} />;
  },
};
