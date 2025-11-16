import React from "react";

import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { BOX_ELEMENT_MAP } from "@/components/Box";
import { default as BoxStoriesMeta } from "@/components/Box/Box.stories";
import { Button } from "@/components/Buttons";
import { Typography } from "@/components/Typographies";
import { Drawer, DRAWER_PLACEMENT_MAP, type DrawerProps } from ".";

const __DRAWER_ELEMENTS: DrawerProps["as"][] = [BOX_ELEMENT_MAP.DIV, BOX_ELEMENT_MAP.SECTION, BOX_ELEMENT_MAP.NAV];

const meta = {
  title: "components/Drawers/<Drawer>",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    as: {
      ...BoxStoriesMeta.argTypes.as,
      table: {
        ...BoxStoriesMeta.argTypes.as.table,
        type: { summary: `${__DRAWER_ELEMENTS.join("|")}` },
      },
      options: __DRAWER_ELEMENTS,
    },
    open: {
      description: "Whether the drawer is open/visible.",
      type: { name: "boolean", required: true },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    placement: {
      description: "The placement of the drawer.",
      type: { name: "string" },
      table: {
        type: { summary: `${Object.values(DRAWER_PLACEMENT_MAP).join(" | ")}` },
        defaultValue: { summary: `"${DRAWER_PLACEMENT_MAP.LEFT}"` },
      },
      control: { type: "radio" },
      options: Object.values(DRAWER_PLACEMENT_MAP),
    },
    autoCloseOnClickBackdrop: {
      description: "Whether clicking the backdrop triggers the onClickBackdrop callback.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: { type: "boolean" },
    },
    onClickBackdrop: {
      description: "Callback fired when the backdrop is clicked.",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "() => void" },
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
          <Subtitle>抽屉组件</Subtitle>

          <Markdown>
            {`
用于在页面中侧边栏展示内容。

继承自内部组件 \`<Portal>\` + \`<Backdrop>\`  + \`<Box>\` + 内部 hook \`useTransitionState\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import React from "react";
import { Theme, Button, Drawer } from "venomous-ui-react/components";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <Theme.Provider>
      <Button text="Open Drawer" onClick={() => setOpen(true)} />
      <Drawer
        open={open}
        onClickBackdrop={() => setOpen(false)}
        autoCloseOnClickBackdrop
        placement="left
      >
        {/* Drawer Content */}
        {/* Drawer Content */}
      </Dialog>
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
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    as: "div",
    open: false,
    autoCloseOnClickBackdrop: true,
    placement: "left",
  },
  render: function RenderStory(args) {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button text="Open Drawer" onClick={() => setOpen(true)} />
        <Drawer
          open={open}
          placement={args.placement}
          autoCloseOnClickBackdrop={args.autoCloseOnClickBackdrop}
          onClickBackdrop={() => setOpen(false)}
        >
          <Typography.Title text="Drawer Title" as="h3" style={{ marginBottom: 16 }} />
          <Typography.Paragraph
            text={
              args.autoCloseOnClickBackdrop
                ? "Click the backdrop (outside area) to close this drawer."
                : "Auto-close is disabled. Click the button below to close."
            }
            style={{ marginBottom: 16 }}
          />
          <Button text="Close Drawer" onClick={() => setOpen(false)} style={{ marginTop: 16 }} />

          {Array.from({ length: 40 })
            .map((_, i) => String(i))
            .map((_, i) => (
              <Typography.Paragraph key={_} text={`Paragraph ${i + 1}`} style={{ marginBottom: 8 }} />
            ))}
        </Drawer>
      </>
    );
  },
};
