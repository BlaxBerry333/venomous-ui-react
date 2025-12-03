import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { FORM_FIELD_RADIO_GROUP_DIRECTION_MAP, FormFieldRadioGroup, type FormFieldRadioOption } from ".";

const __EXAMPLE_OPTIONS: FormFieldRadioOption<string>[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape", disabled: true },
];

const meta = {
  title: "components/Form/Fields/<FormField.RadioGroup>",
  component: FormFieldRadioGroup,
  tags: ["autodocs"],
  argTypes: {
    name: {
      description:
        "The name attribute for the radio group. Used to identify the form data after submission. If not provided, a unique name will be generated automatically.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    options: {
      description: "The options to display.",
      type: { name: "other", value: "FormFieldRadioOption[]" },
      table: {
        type: { summary: "FormFieldRadioOption[]" },
      },
      control: false,
    },
    value: {
      description: "The current selected value (controlled mode).",
      type: { name: "string" },
      table: {
        type: { summary: "T" },
      },
      control: { type: "select" },
      options: [undefined, "apple", "banana", "orange", "grape"],
    },
    onChange: {
      description: "Callback fired when the selected value changes.",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "(value: T, event: React.ChangeEvent<HTMLInputElement>) => void" },
      },
      control: false,
    },
    disabled: {
      description: "Whether the radio group is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    direction: {
      description: "The layout direction of the radio group.",
      type: { name: "string" },
      table: {
        type: { summary: `${Object.values(FORM_FIELD_RADIO_GROUP_DIRECTION_MAP).join(" | ")}` },
        defaultValue: { summary: `"${FORM_FIELD_RADIO_GROUP_DIRECTION_MAP.VERTICAL}"` },
      },
      control: { type: "radio" },
      options: Object.values(FORM_FIELD_RADIO_GROUP_DIRECTION_MAP),
    },
    spacing: {
      description: "The spacing between radio items.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "8" },
      },
      control: { type: "number", min: 0, max: 32, step: 4 },
    },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>单选按钮组组件</Subtitle>

          <Markdown>
            {`
用于在一组选项中选择单个值的表单控件。

继承自 \`<Box>\` + 原生 \`<input type="radio">\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import React from "react";
import { Theme, FormField } from "venomous-ui-react/components";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
];

function App() {
  const [selected, setSelected] = React.useState<string>();

  return (
    <Theme.Provider>
      <FormField.RadioGroup
        options={options}
        value={selected}
        onChange={(value) => setSelected(value)}
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
} satisfies Meta<typeof FormFieldRadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  argTypes: {
    name: { table: { disable: true } },
  },
  args: {
    options: __EXAMPLE_OPTIONS,
    value: undefined,
    disabled: false,
    direction: "vertical",
    spacing: 8,
  },
  decorators: [
    (Story) => (
      <div style={{ paddingTop: "15%" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  render: function RenderStory({ value: _value, defaultValue, ...args }) {
    const [value, setValue] = React.useState<string>((_value as string) ?? defaultValue);
    React.useEffect(() => {
      setValue((_value as string) ?? "");
    }, [_value]);
    return <FormFieldRadioGroup {...args} options={__EXAMPLE_OPTIONS} value={value} onChange={setValue} />;
  },
};
