import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { FORM_FIELD_VARIANT_MAP } from "@/components/Form/_/FormFieldBase.types";
import { Icon } from "@/components/Icon";
import { Space } from "@/components/Space";
import { FormFieldPassword } from ".";

const meta = {
  title: "components/Form/Fields/<FormField.Password>",
  component: FormFieldPassword,
  tags: ["autodocs"],
  argTypes: {
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
      description: "Whether the input is in error state.",
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
    showVisibilityToggle: {
      description: "Whether to show the visibility toggle button.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
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
      options: [null, "<span>🔒</span>", "<Icon />"],
      mapping: {
        null: null,
        "<span>🔒</span>": <span>🔒</span>,
        "<Icon />": <Icon icon="solar:lock-password-linear" />,
      },
    },
    prefixClassName: {
      description: "The className of the prefix element.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      if: { arg: "prefix", neq: null },
      control: false,
    },
    prefixStyle: {
      description: "The style of the prefix element.",
      table: {
        type: { summary: "React.CSSProperties" },
      },
      if: { arg: "prefix", neq: null },
      control: false,
    },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>密码输入框组件</Subtitle>

          <Markdown>
            {`
用于处理用户输入的密码内容。

继承自内置组件 \`<Space.Flex>\` + \`<Icon>\` + 原生 \`<input type="password">\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import React from "react";
import { Theme, FormField, Icon } from "venomous-ui-react/components";

function App() {
  const [value, setValue] = React.useState<string>("");

  return (
    <Theme.Provider>
      <FormField.Password
        value={value}
        onChange={(newValue) => setValue(newValue)}
        placeholder="请输入密码..."
        prefix={<Icon icon="solar:lock-password-linear" />}
      />
    </Theme.Provider>
  );
}
            `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{WithPrefixExample.name}</Heading>
          <Description of={WithPrefixExample} />
          <Canvas
            of={WithPrefixExample}
            sourceState="hidden"
            source={{
              code: `
"use client";

import React from "react";
import { Theme, Space, Icon, FormFieldPassword } from "venomous-ui-react/components";

function App() {
  const [value1, setValue1] = React.useState<string>("mypassword");
  const [value2, setValue2] = React.useState<string>("securepass");

  return (
    <Theme.Provider>
      <Space.Flex column spacing={16}>
        <FormFieldPassword
          value={value1}
          onChange={setValue1}
          placeholder="带图标前缀"
          prefix={<Icon icon="solar:lock-password-linear" />}
        />
        <FormFieldPassword 
          value={value2} 
          onChange={setValue2} 
          placeholder="带文本前缀" 
          prefix={<span>🔒</span>} 
        />
      </Space.Flex>
    </Theme.Provider>
  );
}
`.trim(),
            }}
          />
        </>
      ),
    },
  },
} satisfies Meta<typeof FormFieldPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  decorators: [
    (Story) => (
      <div style={{ paddingTop: "25%" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    value: "",
    variant: "outlined",
    disabled: false,
    error: false,
    fullWidth: false,
    showVisibilityToggle: true,
    prefix: null,
  },
};

export const WithPrefixExample: Story = {
  name: "With Prefix Example",
  tags: ["!dev"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: { control: false, table: { disable: true } },
    disabled: { control: false, table: { disable: true } },
    error: { control: false, table: { disable: true } },
    fullWidth: { control: false, table: { disable: true } },
    showVisibilityToggle: { control: false, table: { disable: true } },
    value: { control: false, table: { disable: true } },
    onChange: { control: false, table: { disable: true } },
    min: { control: false, table: { disable: true } },
    max: { control: false, table: { disable: true } },
    step: { control: false, table: { disable: true } },
    wrapperClassName: { control: false, table: { disable: true } },
    wrapperStyle: { control: false, table: { disable: true } },
    prefix: { control: false, table: { disable: true } },
    prefixStyle: { control: false, table: { disable: true } },
    prefixClassName: { control: false, table: { disable: true } },
  },
  args: Playground.args,
  render: function RenderStory() {
    const [value1, setValue1] = React.useState<string>("mypassword");
    const [value2, setValue2] = React.useState<string>("securepass");

    return (
      <Space.Flex column spacing={16}>
        <FormFieldPassword
          value={value1}
          onChange={setValue1}
          placeholder="带图标前缀"
          prefix={<Icon icon="solar:lock-password-linear" />}
        />
        <FormFieldPassword value={value2} onChange={setValue2} placeholder="带文本前缀" prefix={<span>🔒</span>} />
      </Space.Flex>
    );
  },
};
