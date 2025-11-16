import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@/components/Icon";
import { Typography } from "@/components/Typographies";
import ScrollToTop from "./ScrollToTop.component";

const meta = {
  title: "components/Buttons/<ScrollToTop>",
  component: ScrollToTop,
  tags: ["autodocs"],
  argTypes: {
    distance: {
      description: "Scroll distance to show the button ( px ).",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "300" },
      },
      control: { type: "number", min: 0, max: 1000, step: 50 },
    },
    children: {
      description: "Custom button content.",
      type: { name: "other", value: "React.ReactNode" },
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: { type: "radio" },
      options: [undefined, "custom content"],
      mapping: {
        undefined: undefined,
        "custom content": (
          <>
            <Icon icon="solar:rocket-2-bold" />
            <Typography.Text text="Back to top" />
          </>
        ),
      },
    },
    style: {
      description: "The style of the button.",
      type: { name: "other", value: "React.CSSProperties" },
      table: {
        type: { summary: "React.CSSProperties" },
      },
      control: { type: "radio" },
      options: [undefined, "custom style"],
      mapping: {
        undefined: undefined,
        "custom style": { backgroundColor: "#4caf50", padding: "16px 24px", borderRadius: 24 },
      },
    },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>滚动到顶部按钮</Subtitle>

          <Markdown>
            {`
用于在页面滚动超过指定阈值时显示一个点击后可快速滚动回页面顶部的按钮。

继承自内部组件 \`<IconButton>\` + \`<Transition.Fade>\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, ScrollToTop } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <div style={{ height: "300vh" }}>
        {/* content */}
        {/* content */}
      </div>

      <ScrollToTop />
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
} satisfies Meta<typeof ScrollToTop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    distance: 300,
  },
  render: (args) => (
    <>
      <Typography.Title text="The ScrollToTop button will appear after scrolling down." />
      {Array.from({ length: 60 })
        .map((_, i) => String(i))
        .map((_) => (
          <Typography.Paragraph key={_} text="Keep scrolling..." style={{ margin: "16px 0" }} />
        ))}

      <ScrollToTop {...args} />
    </>
  ),
};
