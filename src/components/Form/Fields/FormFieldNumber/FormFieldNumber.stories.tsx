import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { FORM_FIELD_VARIANT_MAP } from "@/components/Form/_/FormFieldBase.types";
import { Icon } from "@/components/Icon";
import { Space } from "@/components/Space";
import { FormFieldNumber } from ".";

const meta = {
  title: "components/Form/Fields/<FormField.Number>",
  component: FormFieldNumber,
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: "The value of the input. When undefined, the input will be cleared.",
      table: {
        type: { summary: "number | undefined" },
      },
      control: { type: "number" },
    },
    onChange: {
      description: "Callback fired when the value changes. Returns undefined when the input is empty.",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "(value: number | undefined, event: React.ChangeEvent<HTMLInputElement>) => void" },
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
    min: {
      description: "The minimum value.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
      control: { type: "number" },
    },
    max: {
      description: "The maximum value.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "Infinity" },
      },
      control: { type: "number" },
    },
    step: {
      description: "The step value.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
      control: { type: "number" },
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
      options: [null, "<span>#</span>", "<Icon />"],
      mapping: {
        null: null,
        "<span>#</span>": <span>#</span>,
        "<Icon />": <Icon icon="solar:hashtag-linear" />,
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
    suffix: {
      description: "Element to display after the input",
      type: { name: "other", value: "React.ReactNode" },
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "null" },
      },
      control: { type: "radio" },
      options: [null, "<span>kg</span>", "<Icon />"],
      mapping: {
        null: null,
        "<span>kg</span>": <span>kg</span>,
        "<Icon />": <Icon icon="solar:ruler-linear" />,
      },
    },
    suffixClassName: {
      description: "The className of the suffix element.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      if: { arg: "suffix", neq: null },
      control: false,
    },
    suffixStyle: {
      description: "The style of the suffix element.",
      table: {
        type: { summary: "React.CSSProperties" },
      },
      if: { arg: "suffix", neq: null },
      control: false,
    },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>数字输入框组件</Subtitle>

          <Markdown>
            {`
用于处理户输入的数字内容。

继承自内置组件 \`<Space.Flex>\` + \`<Icon>\` + 原生 \`<input type="number">\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
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
  const [value, setValue] = React.useState<number | undefined>(0);

  return (
    <Theme.Provider>
      <FormField.Number
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        step={5}
        placeholder="请输入数字..."
      />
    </Theme.Provider>
  );
}
`.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{WithMinMaxStepExample.name}</Heading>
          <Description of={WithMinMaxStepExample} />
          <Canvas
            of={WithMinMaxStepExample}
            sourceState="hidden"
            source={{
              code: `
"use client";

import React from "react";
import { Theme, Space, Icon, FormFieldNumber } from "venomous-ui-react/components";

function App() {
  const [ageValue, setAgeValue] = React.useState<number | undefined>(25);
  const [priceValue, setPriceValue] = React.useState<number | undefined>(99.99);
  const [quantityValue, setQuantityValue] = React.useState<number | undefined>(5);

  return (
    <Theme.Provider>
      <Space.Flex column spacing={16}>
        <FormFieldNumber
          value={ageValue}
          onChange={setAgeValue}
          placeholder="年龄"
          min={0}
          max={120}
          step={1}
          prefix={<Icon icon="solar:user-linear" />}
          suffix={<span>岁</span>}
        />
        <FormFieldNumber
          value={priceValue}
          onChange={setPriceValue}
          placeholder="价格"
          min={0}
          step={0.01}
          prefix={<span>$</span>}
          suffix={<span>USD</span>}
        />
        <FormFieldNumber
          value={quantityValue}
          onChange={setQuantityValue}
          placeholder="数量"
          min={1}
          max={999}
          step={1}
          prefix={<Icon icon="solar:box-linear" />}
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
} satisfies Meta<typeof FormFieldNumber>;

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
    value: 0,
    variant: "outlined",
    disabled: false,
    error: false,
    fullWidth: false,
    min: 0,
    max: Infinity,
    step: 1,
    prefix: null,
    suffix: null,
  },
};

export const WithMinMaxStepExample: Story = {
  name: "With Min/Max/Step Example",
  tags: ["!dev"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: { control: false, table: { disable: true } },
    disabled: { control: false, table: { disable: true } },
    error: { control: false, table: { disable: true } },
    fullWidth: { control: false, table: { disable: true } },
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
    suffix: { control: false, table: { disable: true } },
    suffixClassName: { control: false, table: { disable: true } },
    suffixStyle: { control: false, table: { disable: true } },
  },
  args: Playground.args,
  render: function RenderStory() {
    const [ageValue, setAgeValue] = React.useState<number | undefined>(25);
    const [priceValue, setPriceValue] = React.useState<number | undefined>(99.99);
    const [quantityValue, setQuantityValue] = React.useState<number | undefined>(5);

    return (
      <Space.Flex column spacing={16}>
        <FormFieldNumber
          value={ageValue}
          onChange={setAgeValue}
          placeholder="年龄"
          min={0}
          max={120}
          step={1}
          prefix={<Icon icon="solar:user-linear" />}
          suffix={<span>岁</span>}
        />
        <FormFieldNumber
          value={priceValue}
          onChange={setPriceValue}
          placeholder="价格"
          min={0}
          step={0.01}
          prefix={<span>$</span>}
          suffix={<span>USD</span>}
        />
        <FormFieldNumber
          value={quantityValue}
          onChange={setQuantityValue}
          placeholder="数量"
          min={1}
          max={999}
          step={1}
          prefix={<Icon icon="solar:box-linear" />}
        />
      </Space.Flex>
    );
  },
};
