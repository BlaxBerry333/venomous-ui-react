import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { FORM_FIELD_VARIANT_MAP } from "@/components/Form/_/FormFieldBase.types";
import { FormFieldTextarea } from ".";

const meta = {
  title: "components/Form/Fields/<FormField.Textarea>",
  component: FormFieldTextarea,
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "The name attribute for the textarea element. Used to identify the form data after submission.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    value: {
      description: "The value of the textarea.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    onChange: {
      description: "Callback fired when the value changes.",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "(value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void" },
      },
      control: false,
    },
    variant: {
      description: "The variant of the textarea.",
      type: { name: "string" },
      table: {
        type: { summary: `${Object.values(FORM_FIELD_VARIANT_MAP).join(" | ")}` },
        defaultValue: { summary: `"${FORM_FIELD_VARIANT_MAP.OUTLINED}"` },
      },
      control: { type: "radio" },
      options: Object.values(FORM_FIELD_VARIANT_MAP),
    },
    disabled: {
      description: "Whether the textarea is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    error: {
      description: "Whether the textarea is in error state.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      description: "Whether the textarea should take full width.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    rows: {
      description: "Number of rows to display. When autoSize is enabled, this is ignored.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "3" },
      },
      control: { type: "number", min: 1, max: 20, step: 1 },
    },
    autoSize: {
      description: "Whether to auto-resize height based on content.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    minRows: {
      description: "Minimum number of rows when autoSize is enabled.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
      },
      control: { type: "number", min: 1, max: 20, step: 1 },
      if: { arg: "autoSize", eq: true },
    },
    maxRows: {
      description: "Maximum number of rows when autoSize is enabled.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
      },
      control: { type: "number", min: 1, max: 20, step: 1 },
      if: { arg: "autoSize", eq: true },
    },
    wrapperClassName: {
      description: "The className of the wrapper element (for advanced use).",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: false,
    },
    wrapperStyle: {
      description: "The style of the wrapper element (for advanced use).",
      table: {
        type: { summary: "React.CSSProperties" },
      },
      control: false,
    },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>多行文本输入框组件</Subtitle>

          <Markdown>
            {`
用于处理用户输入的多行文本内容的表单控件。

继承自 \`<Box>\` + 原生 \`<textarea>\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import React from "react";
import { Theme, FormField } from "venomous-ui-react/components";

function App() {
  const [value, setValue] = React.useState<string>("");

  return (
    <Theme.Provider>
      {/* Fixed rows mode (default) */}
      <FormField.Textarea
        value={value}
        onChange={(newValue) => setValue(newValue)}
        placeholder="Fixed 3 rows textarea..."
        rows={3}
        fullWidth
      />

      {/* Auto-resize mode */}
      <FormField.Textarea
        value={value}
        onChange={(newValue) => setValue(newValue)}
        placeholder="Auto-resize textarea..."
        autoSize
        minRows={2}
        maxRows={6}
        fullWidth
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
} satisfies Meta<typeof FormFieldTextarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  argTypes: {
    name: { table: { disable: true } },
  },
  args: {
    value: "Hello world\nThis is a multiline text.",
    variant: "outlined",
    disabled: false,
    error: false,
    fullWidth: false,
    rows: 3,
    autoSize: false,
    minRows: undefined,
    maxRows: undefined,
  },
  decorators: [
    (Story) => (
      <div style={{ paddingTop: "15%" }}>
        <Story />
      </div>
    ),
  ],
};
