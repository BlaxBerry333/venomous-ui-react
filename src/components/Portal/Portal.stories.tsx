import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "@/components/Cards";
import { Portal } from ".";

const meta = {
  title: "components/<Portal>",
  component: Portal,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the portal.",
      type: { name: "other", value: "React.ReactNode", required: true },
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: { type: "text" },
    },
    containerId: {
      description:
        "The ID of the container element to render the portal into. If cannot find the target element, the document body element will be used.",
      type: { name: "string" },
      table: { type: { summary: "string" } },
      control: { type: "radio" },
      options: [undefined, "root", "xxxxxx"],
    },
  },
  decorators: [
    (Story) => (
      <>
        <div id="root" />
        <div id="xxxxxx" />
        <Story />
      </>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>传送门组件</Subtitle>

          <Markdown>
            {`
通常用于需要脱离父容器层级关系的场景，如：模态框、弹出层、工具提示等。

会自动判断择挂载位置：\`document.getElementById(containerId)\` > \`document.body\`

元素在 DOM 树中的挂载功能基于 \`React.createPortal()\`，因此必须在 \`<NoSSR>\` 组件内使用以避免在 SSR 框架中使用时出现的水合作用不匹配错误。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, NoSSR, Portal } from "venomous-ui-react/components";

function App() {
  return (
    <NoSSR>
      <Theme.Provider>
        
        {/* Target Element */}
        <div id="xxxx" />

        <SomeDeepNestingComponent />
          <Portal containerId="xxxx">
            {/* ... */}
           </Portal>
        </SomeDeepNestingComponent>
      </Theme.Provider>
    </NoSSR>
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
} satisfies Meta<typeof Portal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  argTypes: {
    children: { control: false },
  },
  args: {
    containerId: undefined,
    children: <Card style={{ width: "80%", padding: 20 }}>Check out the HTML code to see where this is rendered.</Card>,
  },
};
