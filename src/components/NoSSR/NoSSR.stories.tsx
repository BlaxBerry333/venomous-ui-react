import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { NoSSR } from ".";

const meta = {
  title: "components/<NoSSR>",
  component: NoSSR,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the NoSSR component.",
      type: { name: "other", value: "React.ReactNode", required: true },
      table: { type: { summary: "React.ReactNode" } },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>客户端渲染组件</Subtitle>

          <Markdown>
            {`
用于包装内容使其仅在客户端呈现。确保在 Next.js 等 SSR 框架中防止直接使用这个组件库时出现的水合作用不匹配错误。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { NoSSR } from "venomous-ui-react/components";

function App() {
  return (
    <NoSSR>
      {/* App Content */}
      {/* Other Components */}
      ${Playground?.args?.children as string} 
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
} satisfies Meta<typeof NoSSR>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  argTypes: {
    children: { control: false },
  },
  args: {
    children:
      "in SSR frameworks like Next.js, all components imported from this component library will be wrapped here.",
  },
};
