import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Buttons";
import { Card } from "@/components/Cards";
import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { Popover, POPOVER_PLACEMENT_MAP, POPOVER_TRIGGER_EVENT_MAP } from ".";

const meta = {
  title: "components/<Popover>",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      description: "Render props function to render the trigger element.",
      type: { name: "function", required: true },
      table: {
        type: { summary: "(props: PopoverTriggerRenderProps) => React.ReactElement" },
      },
      control: false,
    },
    children: {
      description: "The content to display inside the popover.",
      type: { name: "other", value: "React.ReactNode", required: true },
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: false,
    },
    triggerEvent: {
      description: "The event type that triggers the popover to show/hide.",
      type: { name: "other", value: `${Object.values(POPOVER_TRIGGER_EVENT_MAP).join(" | ")}` },
      table: {
        type: { summary: `${Object.values(POPOVER_TRIGGER_EVENT_MAP).join(" | ")}` },
        defaultValue: { summary: `"${POPOVER_TRIGGER_EVENT_MAP.CLICK}"` },
      },
      control: { type: "radio" },
      options: Object.values(POPOVER_TRIGGER_EVENT_MAP),
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
      if: { arg: "triggerEvent", eq: POPOVER_TRIGGER_EVENT_MAP.CLICK },
      control: { type: "boolean" },
    },
    defaultOpen: {
      description: "Default open state.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
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
        triggerEvent="click"
        placement="bottom"
        offset={8}
        trigger={({ ref, isOpen }) => (
          <Button ref={ref} text={isOpen ? "Close" : "Open"} />
        )}
      >
        <Card>Popover Content</Card>
      </Popover>
    </Theme.Provider>
  );
}
            `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

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
        triggerEvent={args.triggerEvent}
        placement={args.placement}
        offset={args.offset}
        autoCloseOnClickOutside={args.autoCloseOnClickOutside}
        defaultOpen={args.defaultOpen}
        trigger={({ ref, isOpen }) => <Button ref={ref} text={isOpen ? "Close Popover" : "Open Popover"} />}
      >
        <Card variant="outlined" style={{ padding: 24, backgroundColor: "pink" }}>
          <Typography.Text text="Popover Content" />
        </Card>
      </Popover>
    );
  },
  argTypes: {
    trigger: { control: false, table: { disable: true } },
    children: { control: false, table: { disable: true } },
  },
  args: {
    triggerEvent: POPOVER_TRIGGER_EVENT_MAP.CLICK,
    placement: POPOVER_PLACEMENT_MAP.BOTTOM,
    offset: 2,
    autoCloseOnClickOutside: true,
    defaultOpen: false,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
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
        <Popover placement="top" trigger={({ ref }) => <Button ref={ref} text="Top" />}>
          {commonContent}
        </Popover>

        <Popover placement="bottom" trigger={({ ref }) => <Button ref={ref} text="Bottom" />}>
          {commonContent}
        </Popover>

        <Popover placement="left" trigger={({ ref }) => <Button ref={ref} text="Left" />}>
          {commonContent}
        </Popover>

        <Popover placement="right" trigger={({ ref }) => <Button ref={ref} text="Right" />}>
          {commonContent}
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
    triggerEvent: { control: false, table: { disable: true } },
    placement: { control: false, table: { disable: true } },
    offset: { control: false, table: { disable: true } },
    autoCloseOnClickOutside: { control: false, table: { disable: true } },
    defaultOpen: { control: false, table: { disable: true } },
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
        <Popover placement="top" trigger={({ ref }) => <Button ref={ref} text="Top" />}>
          {commonContent}
        </Popover>

        <Popover placement="bottom" trigger={({ ref }) => <Button ref={ref} text="Bottom" />}>
          {commonContent}
        </Popover>

        <Popover placement="left" trigger={({ ref }) => <Button ref={ref} text="Left" />}>
          {commonContent}
        </Popover>

        <Popover placement="right" trigger={({ ref }) => <Button ref={ref} text="Right" />}>
          {commonContent}
        </Popover>
      </Space.Flex>
    );
  },
};
