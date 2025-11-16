import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Buttons";
import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { SEMANTIC_COLORS } from "@/constants";
import { ProgressBar } from ".";

const meta = {
  title: "components/Progress/<ProgressBar>",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    animated: {
      description: "Enable auto-animation mode (0 → 100 loop)",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: { type: "boolean" },
    },
    value: {
      description: "Progress value ( 0-100 ).",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
      if: { arg: "animated", eq: false },
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    onChange: {
      description: "Callback fired when value changes",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "(value: number) => void" },
      },
      if: { arg: "animated", eq: false },
    },
    color: {
      description: "Progress bar color ( hex string ).",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: { type: "color" },
    },
    style: {
      table: { disable: true },
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "25% 0" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>进度条指示器组件</Subtitle>

          <Markdown>
            {`
用于展示一个水平的进度条，通常用于显示加载状态。支持自动动画模式和受控模式。

继承自内部组件 \`<Box>\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, ProgressBar } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <ProgressBar value={60} color="#4CAF50" />
    </Theme.Provider>
  );
}
`.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{CustomStylesExample.name}</Heading>
          <Description of={CustomStylesExample} />
          <Canvas
            of={CustomStylesExample}
            sourceState="hidden"
            source={{
              code: `
"use client";

import { Theme, ProgressBar } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
        {/* Custom Height */}
        <ProgressBar animated style={{ height: 20 }} />

        {/* Custom Width */}
        <ProgressBar animated style={{ width: 300 }} />
        <div style={{ width: 300 }}>
          <ProgressBar animated />
        </div>

        {/* Custom Colors */}
        <ProgressBar animated color={SEMANTIC_COLORS.ERROR} />
        <ProgressBar animated color={SEMANTIC_COLORS.INFO} />
        <ProgressBar animated color={SEMANTIC_COLORS.WARNING} />
    </Theme.Provider>
  );
}
`.trim(),
            }}
          />

          <Heading>{ControlledExample.name}</Heading>
          <Description of={ControlledExample} />
          <Canvas
            of={ControlledExample}
            sourceState="hidden"
            source={{
              code: `
"use client";

import React from "react";
import { Theme, Space, Button, Typography, ProgressBar } from "venomous-ui-react/components";

const minValue = 0;
const maxValue = 100;

function App() {
  const [value, setValue] = React.useState<number>(30);
  const increment = () => setValue(Math.min(100, value + 10));
  const decrement = () => setValue(Math.max(0, value - 10));

  return (
    <Theme.Provider>
      <ProgressBar value={value} onChange={setValue} style={{ width: 300, height: 16 }} />
      <Space.Flex style={{ width: 300, marginTop: 8 }}>
        <Button text="-10" onClick={decrement} disabled={value === minValue} />
        <Typography.Text text={String(value)} style={{ textAlign: "center", flex: 1 }} />
        <Button text="+10" onClick={increment} disabled={value === maxValue} />
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
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    animated: true,
    value: 60,
    onChange: undefined,
    color: undefined,
  },
};

export const CustomStylesExample: Story = {
  name: "Custom Styles Example",
  tags: ["!dev"],
  render: function RenderStory() {
    return (
      <Space.Flex column spacing={8}>
        {/* Custom Height */}
        <ProgressBar animated style={{ height: 20 }} />

        {/* Custom Width */}
        <ProgressBar animated style={{ width: 300 }} />
        <div style={{ width: 300 }}>
          <ProgressBar animated />
        </div>

        {/* Custom Colors */}
        <ProgressBar animated color={SEMANTIC_COLORS.ERROR} />
        <ProgressBar animated color={SEMANTIC_COLORS.INFO} />
        <ProgressBar animated color={SEMANTIC_COLORS.WARNING} />

        {/* Custom Ovrerides */}
        <ProgressBar
          animated
          color={SEMANTIC_COLORS.ERROR}
          style={{ height: 20, borderRadius: 10, backgroundColor: SEMANTIC_COLORS.SUCCESS }}
        />
      </Space.Flex>
    );
  },
};

export const ControlledExample: Story = {
  name: "Controlled Example",
  tags: ["!dev"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "通过参数 `value`+` onChange` 可以实现受控模式。<br />如下：通过按钮控制进度条的值。",
      },
    },
  },
  render: function RenderStory() {
    const minValue = 0;
    const maxValue = 100;
    const [value, setValue] = React.useState<number>(30);
    const increment = () => setValue(Math.min(100, value + 10));
    const decrement = () => setValue(Math.max(0, value - 10));
    return (
      <>
        <ProgressBar value={value} onChange={setValue} style={{ width: 300, height: 16 }} />
        <Space.Flex style={{ width: 300, marginTop: 8 }}>
          <Button text="-10" onClick={decrement} disabled={value === minValue} />
          <Typography.Text text={String(value)} style={{ textAlign: "center", flex: 1 }} />
          <Button text="+10" onClick={increment} disabled={value === maxValue} />
        </Space.Flex>
      </>
    );
  },
};
