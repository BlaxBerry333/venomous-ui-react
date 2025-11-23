import { Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from ".";

const meta = {
  title: "components/Theme/<Theme.ResetCSSStyle>",
  component: Theme.ResetCSSStyle,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>全局 CSS 重置样式组件</Subtitle>

          <Markdown>
            {`
提供全局 CSS 重置样式，统一为本组件库的主题化设计。必须在 \`<Theme.Provider>\` 内部使用。
            `}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <Theme.ResetCSSStyle />
      {/* Your app content */}
    </Theme.Provider>
  );
}
            `.trim()}
          />
        </>
      ),
    },
  },
} satisfies Meta<typeof Theme.ResetCSSStyle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {},
};
