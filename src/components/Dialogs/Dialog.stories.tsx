import React from "react";

import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { BOX_ELEMENT_MAP } from "@/components/Box";
import { default as BoxStoriesMeta } from "@/components/Box/Box.stories";
import { Button } from "@/components/Buttons";
import { Typography } from "@/components/Typographies";
import { THEME_BREAKPOINTS } from "@/constants";
import { Dialog, type DialogProps } from ".";

const __DIALOG_ELEMENTS: DialogProps["as"][] = [BOX_ELEMENT_MAP.DIV, BOX_ELEMENT_MAP.SECTION];

const meta = {
  title: "components/Dialogs/<Dialog>",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    as: {
      ...BoxStoriesMeta.argTypes.as,
      table: {
        ...BoxStoriesMeta.argTypes.as.table,
        type: { summary: `${__DIALOG_ELEMENTS.join("|")}` },
      },
      options: __DIALOG_ELEMENTS,
    },
    open: {
      description: "Whether the dialog is open/visible.",
      type: { name: "boolean", required: true },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    children: {
      description: "The content to display inside the dialog.",
      type: { name: "other", value: "React.ReactNode", required: true },
      table: { type: { summary: "React.ReactNode" } },
      control: false,
    },
    autoCloseOnClickBackdrop: {
      description: "Whether clicking the backdrop closes the dialog automatically.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: { type: "boolean" },
    },
    maxWidth: {
      description: "The maximum width of the dialog.",
      type: { name: "other", value: "TThemeBreakpoint" },
      table: {
        type: { summary: `${Object.values(THEME_BREAKPOINTS).join(" | ")}` },
        defaultValue: { summary: `"${THEME_BREAKPOINTS.XS}"` },
      },
      control: { type: "radio" },
      options: Object.values(THEME_BREAKPOINTS),
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
          <Subtitle>对话框组件</Subtitle>

          <Markdown>
            {`
用于在页面中弹出一个对话框。

继承自内部组件 \`<Portal>\` + \`<Backdrop>\` + \`<Transition.Scale>\` + \`<Box>\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import React from "react";
import { Theme, Button, Dialog } from "venomous-ui-react/components";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <Theme.Provider>
      <Button text="Open Dialog" onClick={() => setOpen(true)} />
      <Dialog
        open={open}
        onClickBackdrop={() => setOpen(false)}
        autoCloseOnClickBackdrop
        maxWidth="SM"
      >
        {/* Dialog Content */}
        {/* Dialog Content */}
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
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    as: "div",
    open: true,
    autoCloseOnClickBackdrop: true,
    onClickBackdrop: () => console.log("onClickBackdrop"),
    maxWidth: "MD",
    children: undefined,
  },
  render: function RenderStory(args) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
      setOpen(!!args.open);
    }, [args.open]);

    const handleOpen = () => setOpen(true);
    const handleClose: DialogProps["onClickBackdrop"] = (e) => {
      setOpen(false);
      args.onClickBackdrop?.(e);
    };

    return (
      <>
        <Button text="Open Dialog" onClick={handleOpen} />
        <Dialog {...args} open={open} onClickBackdrop={handleClose}>
          <Typography.Title text="Dialog Playground" as="h3" style={{ marginBottom: 8 }} />
          <Typography.Paragraph
            text="This is a dialog playground. You can test different configurations using the controls below."
            style={{ marginBottom: 16 }}
          />
          <Typography.Paragraph
            text={
              args.autoCloseOnClickBackdrop
                ? "✨ Click the backdrop (outside area) to close this dialog."
                : "⚠️ Auto-close is disabled. Click the button below to close."
            }
            style={{ marginBottom: 16 }}
          />
          <Button text="Close Dialog" onClick={handleClose} />
        </Dialog>
      </>
    );
  },
};
