import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button, BUTTON_VARIANT_MAP } from ".";

const meta = {
  title: "components/Buttons/<Button>",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      table: { disable: true },
    },
    text: {
      description: "The text to be rendered as children of the button.",
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
      control: { type: "text" },
    },
    disabled: {
      description: "Whether the button is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      if: { arg: "loading", neq: true },
      control: { type: "boolean" },
    },
    loading: {
      description: "Whether the button is loading.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      if: { arg: "disabled", neq: true },
      control: { type: "boolean" },
    },
    variant: {
      description: "The variant to be used.",
      type: { name: "other", value: "keyof typeof BUTTON_VARIANT_MAP" },
      table: {
        type: { summary: `${Object.values(BUTTON_VARIANT_MAP).join("|")}` },
        defaultValue: { summary: `"${BUTTON_VARIANT_MAP.CONTAINED}"` },
      },
      control: { type: "radio" },
      options: Object.values(BUTTON_VARIANT_MAP),
    },
    color: {
      description: "background color、border color、text color ( hex string ).",
      type: { name: "string" },
      table: { type: { summary: "string" } },
      control: { type: "color" },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ paddingTop: "50%", textAlign: "center" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>按钮组件</Subtitle>

          <Markdown>
            {`
会被渲染为 HTML 原生 \`<button>\` 标签。能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, Button } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <Button text="XXXX" />
      <Button text="XXXX" variant="outlined" />
      <Button text="XXXX" loading />
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
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    text: "Button",
    variant: "contained",
    color: undefined,
    disabled: false,
    loading: false,
    fullWidth: false,
  },
};
