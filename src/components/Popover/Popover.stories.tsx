import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Buttons";
import { Card } from "@/components/Cards";
import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { Popover, POPOVER_PLACEMENT_MAP, POPOVER_TRIGGER_MAP } from ".";

const meta = {
  title: "components/<Popover>",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Render props function to render the trigger element.",
      type: { name: "function", required: true },
      table: {
        type: { summary: "(props: PopoverRenderProps) => React.ReactElement" },
      },
      control: false,
    },
    content: {
      description: "The content to display inside the popover.",
      type: { name: "other", value: "React.ReactNode", required: true },
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: false,
    },
    trigger: {
      description: "The trigger type of how to show the content.",
      type: { name: "other", value: `${Object.values(POPOVER_TRIGGER_MAP).join(" | ")}` },
      table: {
        type: { summary: `${Object.values(POPOVER_TRIGGER_MAP).join(" | ")}` },
        defaultValue: { summary: `"${POPOVER_TRIGGER_MAP.CLICK}"` },
      },
      control: { type: "radio" },
      options: Object.values(POPOVER_TRIGGER_MAP),
    },
    placement: {
      description: "The placement of the popover.",
      type: { name: "other", value: `${Object.values(POPOVER_PLACEMENT_MAP).join(" | ")}` },
      table: {
        type: { summary: `${Object.values(POPOVER_PLACEMENT_MAP).join(" | ")}` },
        defaultValue: { summary: `"${POPOVER_PLACEMENT_MAP.BOTTOM}"` },
      },
      control: { type: "radio" },
      options: Object.values(POPOVER_PLACEMENT_MAP),
    },
    offset: {
      description: "The offset between the trigger element and the popover ( px ).",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "2" },
      },
      control: { type: "number" },
    },
    autoCloseOnClickOutside: {
      description: "Whether to close the popover when clicking outside.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      if: { arg: "trigger", eq: POPOVER_TRIGGER_MAP.CLICK },
      control: { type: "boolean" },
    },
    defaultOpen: {
      description: "Default open state (uncontrolled mode).",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    open: {
      description: "Controlled open state.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    onOpenChange: {
      description: "Callback fired when the open state changes.",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "(open: boolean) => void" },
      },
      control: false,
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>悬浮弹出层组件</Subtitle>

          <Markdown>
            {`
用于相对于触发元素定位展示的弹出层。采用 **Render Props** 模式，简化使用方式。

继承自内部组件 \`<Portal>\` + \`<Transition.Fade>\` + \`<Box>\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import React from "react";
import { Theme, Button, Card, Popover } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <Popover
        content={<Card>Popover Content</Card>}
        trigger="click"
        placement="bottom"
        offset={8}
      >
        {({ ref }) => <Button ref={ref} text="Click Me" />}
      </Popover>
    </Theme.Provider>
  );
}
            `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{ControlledModeExample.name}</Heading>
          <Description of={ControlledModeExample} />
          <Canvas of={ControlledModeExample} />

          <Heading>{AllPlacementsExample.name}</Heading>
          <Description of={AllPlacementsExample} />
          <Canvas of={AllPlacementsExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  render: function RenderStory(args) {
    return (
      <Popover
        trigger={args.trigger}
        placement={args.placement}
        offset={args.offset}
        autoCloseOnClickOutside={args.autoCloseOnClickOutside}
        defaultOpen={args.defaultOpen}
        content={
          <Card variant="outlined" style={{ padding: 24, backgroundColor: "pink" }}>
            <Typography.Text text="Popover Content" />
          </Card>
        }
      >
        {({ ref }) => <Button ref={ref} text="Click to toggle Popover" />}
      </Popover>
    );
  },
  argTypes: {
    children: { control: false, table: { disable: true } },
    content: { control: false, table: { disable: true } },
  },
  args: {
    trigger: POPOVER_TRIGGER_MAP.CLICK,
    placement: POPOVER_PLACEMENT_MAP.BOTTOM,
    offset: 2,
    autoCloseOnClickOutside: true,
    defaultOpen: false,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
};

export const ControlledModeExample: Story = {
  name: "Controlled Mode Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      source: {
        sourceState: "hidden",
        code: `
"use client";

import React from "react";
import { Theme, Button, Card, Popover } from "venomous-ui-react/components";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <Theme.Provider>
      <Popover
        content={<Card>Controlled Popover</Card>}
        open={open}
        onOpenChange={setOpen}
      >
        {({ ref, open }) => (
          <Button ref={ref} text={open ? "Close" : "Open"} />
        )}
      </Popover>
    </Theme.Provider>
  );
}
  `.trim(),
      },
    },
  },
  argTypes: {
    trigger: { control: false, table: { disable: true } },
    placement: { control: false, table: { disable: true } },
    offset: { control: false, table: { disable: true } },
    autoCloseOnClickOutside: { control: false, table: { disable: true } },
    defaultOpen: { control: false, table: { disable: true } },
    open: { control: false, table: { disable: true } },
    onOpenChange: { control: false, table: { disable: true } },
  },
  args: Playground.args,
  render: function RenderStory() {
    const [open, setOpen] = React.useState(false);

    return (
      <Popover
        content={
          <Card variant="outlined" style={{ padding: 24 }}>
            <Typography.Text text="Controlled Popover" />
          </Card>
        }
        open={open}
        onOpenChange={setOpen}
      >
        {({ ref, open }) => <Button ref={ref} text={open ? "Close" : "Open"} />}
      </Popover>
    );
  },
};

export const AllPlacementsExample: Story = {
  name: "All Placements Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      source: {
        sourceState: "hidden",
        code: `
"use client";

import React from "react";
import { Theme, Space, Button, Card, Popover } from "venomous-ui-react/components";

function App() {
  const commonContent = React.useMemo(
    () => (
      <Card variant="outlined" style={{ padding: 16, backgroundColor: "pink" }}>
        <Typography.Text text="Popover Content" />
      </Card>
    ),
    [],
  );

  return (
    <Theme.Provider>
      <Space.Flex spacing={16}>
        <Popover content={commonContent} placement="top">
          {({ ref }) => <Button ref={ref} text="Top" />}
        </Popover>

        <Popover content={commonContent} placement="bottom">
          {({ ref }) => <Button ref={ref} text="Bottom" />}
        </Popover>

        <Popover content={commonContent} placement="left">
          {({ ref }) => <Button ref={ref} text="Left" />}
        </Popover>

        <Popover content={commonContent} placement="right">
          {({ ref }) => <Button ref={ref} text="Right" />}
        </Popover>
      </Space.Flex>
    </Theme.Provider>
  );
}
  `.trim(),
      },
    },
  },
  argTypes: {
    trigger: { control: false, table: { disable: true } },
    placement: { control: false, table: { disable: true } },
    offset: { control: false, table: { disable: true } },
    autoCloseOnClickOutside: { control: false, table: { disable: true } },
    defaultOpen: { control: false, table: { disable: true } },
    open: { control: false, table: { disable: true } },
    onOpenChange: { control: false, table: { disable: true } },
  },
  args: Playground.args,
  render: function RenderStory() {
    const commonContent = React.useMemo(
      () => (
        <Card variant="outlined" style={{ padding: 16, backgroundColor: "pink" }}>
          <Typography.Text text="Popover Content" />
        </Card>
      ),
      [],
    );
    return (
      <Space.Flex spacing={16}>
        <Popover content={commonContent} placement="top">
          {({ ref }) => <Button ref={ref} text="Top" />}
        </Popover>

        <Popover content={commonContent} placement="bottom">
          {({ ref }) => <Button ref={ref} text="Bottom" />}
        </Popover>

        <Popover content={commonContent} placement="left">
          {({ ref }) => <Button ref={ref} text="Left" />}
        </Popover>

        <Popover content={commonContent} placement="right">
          {({ ref }) => <Button ref={ref} text="Right" />}
        </Popover>
      </Space.Flex>
    );
  },
};
