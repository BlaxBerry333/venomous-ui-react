import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Backdrop } from ".";
import { Button } from "../Buttons";
import { Portal } from "../Portal";
import { Typography } from "../Typographies";

const meta = {
  title: "components/<Backdrop>",
  component: Backdrop,
  tags: ["autodocs"],
  argTypes: {
    open: {
      description: "Whether the backdrop is open/visible.",
      type: { name: "boolean", required: true },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    opacity: {
      description: "The opacity of the backdrop.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0.5" },
      },
      control: { type: "range", min: 0, max: 1, step: 0.1 },
    },
    children: {
      description: "The children to render inside the backdrop.",
      type: { name: "other", value: "React.ReactNode", required: true },
      table: { type: { summary: "React.ReactNode" } },
      control: { type: "radio" },
      options: [undefined, "<Typography />"],
      mapping: {
        undefined: undefined,
        "<Typography />": <Typography.Title text="Modal Content" />,
      },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>背景遮罩组件</Subtitle>

          <Markdown>
            {`
通常用于模态框、抽屉等组件的背景，展示为一个半透明的遮罩层。

继承自内部组件 \`<Box>\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, Backdrop } from "venomous-ui-react/components";

function App() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Theme.Provider>
      <Button text="Open Backdrop" onClick={() => setOpen(true)} />
      <Backdrop open={open} onClick={() => setOpen(false)} />
    </Theme.Provider>
  );
}
  `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{ControlledUsageExample.name}</Heading>
          <Description of={ControlledUsageExample} />
          <Canvas of={ControlledUsageExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Backdrop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    open: true,
    opacity: 0.5,
    children: undefined,
  },
};

export const ControlledUsageExample: Story = {
  name: "Controlled Usage Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      source: {
        sourceState: "hidden",
        code: `
"use client";

import { Theme, Button, Backdrop } from "venomous-ui-react/components";

function App() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Theme.Provider>
      <Button text="Open Backdrop" onClick={() => setOpen(true)} />
      <Backdrop open={open} onClick={() => setOpen(false)} />
    </Theme.Provider>
  );
}
  `.trim(),
      },
    },
  },
  render: function PlaygroundRender(args) {
    const [open, setOpen] = React.useState(args.open);

    React.useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    return (
      <>
        <Button text="Open Backdrop" onClick={() => setOpen(true)} />
        <Portal>
          <Backdrop {...args} open={open} onClick={() => setOpen(false)} />
        </Portal>
      </>
    );
  },
};
