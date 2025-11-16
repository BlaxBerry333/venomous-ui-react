import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { PageScrollProgressBar } from ".";
import { default as ProgressBarStoriesMeta } from "./ProgressBar.stories";

const meta = {
  title: "components/Progress/<PageScrollProgressBar>",
  component: PageScrollProgressBar,
  tags: ["autodocs"],
  argTypes: {
    color: ProgressBarStoriesMeta.argTypes.color,
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>页面滚动进度条指示器组件</Subtitle>

          <Markdown>
            {`
是一个固定在页面顶部的滚动进度条。

继承自内部组件 \`<ProgressBar>\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, PageScrollProgressBar } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <PageScrollProgressBar color="#FF5722" style={{ height: 10 }} />
      <div style={{ height: "200vh" }}>
        Scroll down to see the progress bar at the top.
      </div>
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
} satisfies Meta<typeof PageScrollProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    color: undefined,
  },
  render: (args) => (
    <>
      <PageScrollProgressBar {...args} />

      <div style={{ height: "200vh" }}>
        <h1>Scroll down to see the progress bar at the top.</h1>
      </div>
    </>
  ),
};
