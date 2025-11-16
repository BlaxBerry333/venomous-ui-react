import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Buttons";
import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { ErrorBoundary } from ".";

const meta = {
  title: "components/<ErrorBoundary>",
  component: ErrorBoundary,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ErrorBoundary
        fallback={(error, errorInfo, reset) => (
          <Space.Flex column spacing={16} style={{ padding: "20px" }}>
            <Typography.Title text="Oops! Something went wrong." color="#f5222d" />
            <Typography.Text text={error.message} color="#f5222d" />
            <Typography.Paragraph text={errorInfo.componentStack ?? ""} color="#f5222d" ellipsis={10} size="SMALL" />
            <Button text="Try again" onClick={reset} color="#f5222d" />
          </Space.Flex>
        )}
        onError={(error, errorInfo) => {
          console.error("Error caught:", error, errorInfo);
        }}
      >
        <Story />
      </ErrorBoundary>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>错误边界组件</Subtitle>

          <Markdown>
            {`
用于包裹并捕获子组件树中 JavaScript 错误然后显示降级回退 UI 以防止整个应用因为异常而崩溃。

用户也可以用自己的错误边界包裹本组件库。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import React from "react";
import { Theme, Space, Typography, Button, ErrorBoundary } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <ErrorBoundary
        fallback={(error, errorInfo, reset) => (
          <Space.Flex column>
            <Typography.Text text={error.message} />
            <Typography.Paragraph text={errorInfo.componentStack ?? ""} />
            <Button text="Try again" onClick={reset} />
          </Space.Flex>
        )}
        onError={(error, errorInfo) => {
          console.error(error, errorInfo);
        }}
      >
        {/* Your app content */}
      </ErrorBoundary>
    </Theme.Provider>
  );
}
  `.trim()}
          />

          <Heading>Usage</Heading>

          <Subtitle>
            <code>{Playground.name}</code>
          </Subtitle>
          <Description of={Playground} />
          <Canvas
            of={Playground}
            sourceState="hidden"
            source={{
              code: Playground.parameters?.docs?.source?.code,
            }}
          />

          <Heading>API</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
  argTypes: {
    children: {
      description: "Child components to be wrapped by the error boundary.",
      type: { name: "other", value: "React.ReactNode" },
      table: { type: { summary: "React.ReactNode" } },
      control: false,
    },
    fallback: {
      description:
        "Fallback render function to display custom UI when an error occurs. Receives error object, errorInfo with component stack trace, and reset function to reset error boundary state.",
      type: {
        name: "function",
      },
      table: {
        type: { summary: "(error: Error, errorInfo: React.ErrorInfo, reset: () => void) => React.ReactNode" },
      },
      control: false,
    },
    onError: {
      description: "Callback function called when an error is caught.",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "(error: Error, errorInfo: React.ErrorInfo) => void" },
      },
      control: false,
    },
  },
} satisfies Meta<typeof ErrorBoundary>;

export default meta;
type Story = StoryObj<typeof meta>;

const __BuggyComponent: React.FC<{ shouldThrow?: boolean }> = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error("💥 Something Went Wrong.");
  }
  return null;
};

export const Playground: Story = {
  name: "Basic Usage Example",
  args: {
    fallback: () => null,
    children: <div>Content</div>,
  },
  render: function RenderStory() {
    const [shouldThrow, setShouldThrow] = React.useState(false);

    return (
      <>
        <Button text="Trigger Error" color="#f5222d" onClick={() => setShouldThrow(true)} />
        <__BuggyComponent shouldThrow={shouldThrow} />
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "如下，模拟一个可以手动触发的自定义错误。",
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, ErrorBoundary } from "venomous-ui-react/components";

const __BuggyComponent: React.FC<{ shouldThrow?: boolean }> = ({ shouldThrow }) => {
  if (shouldThrow) throw new Error("💥 Something Went Wrong.");
  return null;
};

function App() {
  const [shouldThrow, setShouldThrow] = React.useState(false);

  return (
    <Theme.Provider>
      <ErrorBoundary
        fallback={(error, errorInfo, reset) => (
          <Space.Flex column spacing={16} style={{ padding: "20px" }}>
            <Typography.Title text="Oops! Something went wrong." color="#f5222d" />
            <Typography.Text text={error.message} color="#f5222d" />
            <Typography.Paragraph text={errorInfo.componentStack ?? ""} color="#f5222d" ellipsis={10} size="SMALL" />
            <Button text="Try again" onClick={reset} color="#f5222d" />
          </Space.Flex>
        )}
      >
        <Button text="Trigger Error" color="#f5222d" onClick={() => setShouldThrow(true)} />
        <__BuggyComponent shouldThrow={shouldThrow} />
      </ErrorBoundary>
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};
