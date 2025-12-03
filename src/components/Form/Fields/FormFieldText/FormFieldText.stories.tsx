import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { FORM_FIELD_VARIANT_MAP } from "@/components/Form/_/FormFieldBase.types";
import { Icon } from "@/components/Icon";
import { Space } from "@/components/Space";
import { FormFieldText } from ".";

const meta = {
  title: "components/Form/Fields/<FormField.Text>",
  component: FormFieldText,
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "The name attribute for the input element. Used to identify the form data after submission.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    value: {
      description: "The value of the input.",
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
        type: { summary: "(value: string, event: React.ChangeEvent<HTMLInputElement>) => void" },
      },
      control: false,
    },
    variant: {
      description: "The variant of the input.",
      type: { name: "string" },
      table: {
        type: { summary: `${Object.values(FORM_FIELD_VARIANT_MAP).join(" | ")}` },
        defaultValue: { summary: `"${FORM_FIELD_VARIANT_MAP.OUTLINED}"` },
      },
      control: { type: "radio" },
      options: Object.values(FORM_FIELD_VARIANT_MAP),
    },
    disabled: {
      description: "Whether the input is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    error: {
      description: " Whether the input is in error state.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      description: "Whether the input should take full width.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
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
    prefix: {
      description: "Element to display before the input.",
      type: { name: "other", value: "React.ReactNode" },
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "null" },
      },
      control: { type: "radio" },
      options: [null, "<span>🏠</span>", "<Icon />"],
      mapping: {
        null: null,
        "<span>🏠</span>": <span>🏠</span>,
        "<Icon />": <Icon icon="solar:home-2-linear" />,
      },
    },
    prefixClassName: {
      description: "The className of the prefix element.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      if: { arg: "prefix", neq: undefined },
      control: false,
    },
    prefixStyle: {
      description: "The style of the prefix element.",
      table: {
        type: { summary: "React.CSSProperties" },
      },
      if: { arg: "prefix", neq: undefined },
      control: false,
    },
    suffix: {
      description: "Element to display after the input",
      type: { name: "other", value: "React.ReactNode" },
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "null" },
      },
      control: { type: "radio" },
      options: [null, "<span>🏠</span>", "<Icon />"],
      mapping: {
        null: null,
        "<span>🏠</span>": <span>🏠</span>,
        "<Icon />": <Icon icon="solar:home-2-linear" />,
      },
    },
    suffixClassName: {
      description: "The className of the suffix element.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      if: { arg: "suffix", neq: undefined },
      control: false,
    },
    suffixStyle: {
      description: "The style of the suffix element.",
      table: {
        type: { summary: "React.CSSProperties" },
      },
      if: { arg: "suffix", neq: undefined },
      control: false,
    },
  },
  parameters: {
    layout: "fullscreen ",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>文本输入框组件</Subtitle>

          <Markdown>
            {`
用于处理用户输入的文本内容的表单控件。

继承自内置组件 \`<Space.Flex>\` + \`<Icon>\` + 原生 \`<input type="text">\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import React from "react";
import { Theme, FormFieldText, Icon } from "venomous-ui-react/components";

function App() {
  const [value, setValue] = React.useState<string>("");

  return (
    <Theme.Provider>
      <FormFieldText
        value={value}
        onChange={(newValue) => setValue(newValue)}
        placeholder="请输入..."
        prefix={<Icon icon="lucide:search" />}
        suffix={<Icon icon="lucide:search" />}
        fullWidth
      />
    </Theme.Provider>
  );
}
            `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{WithPrefixSuffixExample.name}</Heading>
          <Description of={WithPrefixSuffixExample} />
          <Canvas of={WithPrefixSuffixExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof FormFieldText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  argTypes: {
    name: { table: { disable: true } },
  },
  args: {
    value: "Hello world",
    variant: "outlined",
    disabled: false,
    error: false,
    fullWidth: false,
    prefix: null,
    prefixClassName: undefined,
    prefixStyle: undefined,
    suffix: null,
    suffixClassName: undefined,
    suffixStyle: undefined,
  },
  decorators: [
    (Story) => (
      <div style={{ paddingTop: "25%" }}>
        <Story />
      </div>
    ),
  ],
};

export const WithPrefixSuffixExample: Story = {
  name: "With Prefix/Suffix Example",
  tags: ["!dev"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "使用 `prefix` 和 `suffix` 属性在输入框前后添加自定义元素，如图标或文本。",
      },
      source: {
        code: `
import React from "react";
import { FormField, Icon, Space } from "venomous-ui-react/components";

function App() {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [urlValue, setUrlValue] = React.useState<string>("");
  const [priceValue, setPriceValue] = React.useState<string>("");

  return (
    <Space.Flex column spacing={16} style={{ width: 300 }}>
      <FormField.Text
        value={searchValue}
        onChange={setSearchValue}
        placeholder="搜索..."
        prefix={<Icon icon="lucide:search" />}
        fullWidth
      />
      <FormField.Text
        value={urlValue}
        onChange={setUrlValue}
        placeholder="example.com"
        prefix={<span>https://</span>}
        fullWidth
      />
      <FormField.Text
        value={priceValue}
        onChange={setPriceValue}
        placeholder="0.00"
        prefix={<span>$</span>}
        suffix={<span>USD</span>}
        fullWidth
      />
    </Space.Flex>
  );
}
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [searchValue, setSearchValue] = React.useState<string>("");
    const [urlValue, setUrlValue] = React.useState<string>("");
    const [priceValue, setPriceValue] = React.useState<string>("");

    return (
      <Space.Flex column spacing={16} style={{ width: 300 }}>
        <FormFieldText
          value={searchValue}
          onChange={setSearchValue}
          placeholder="搜索..."
          prefix={<Icon icon="lucide:search" />}
          fullWidth
        />
        <FormFieldText
          value={urlValue}
          onChange={setUrlValue}
          placeholder="example.com"
          prefix={<span>https://</span>}
          fullWidth
        />
        <FormFieldText
          value={priceValue}
          onChange={setPriceValue}
          placeholder="0.00"
          prefix={<span>$</span>}
          suffix={<span>USD</span>}
          fullWidth
        />
      </Space.Flex>
    );
  },
};
