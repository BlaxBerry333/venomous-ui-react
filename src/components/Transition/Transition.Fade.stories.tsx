import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Buttons";
import { Card } from "@/components/Cards";
import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { Transition } from ".";

const meta = {
  title: "components/Transitions/<Transition.Fade>",
  component: Transition.Fade,
  tags: ["autodocs"],
  argTypes: {
    visible: {
      description: "Whether the content is visible.",
      type: { name: "boolean", required: true },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    duration: {
      description: "The duration of the animation ( ms ).",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "200" },
      },
      control: { type: "number", min: 0, max: 2000, step: 50 },
    },
    children: {
      description: "The content to display inside.",
      type: { name: "other", value: "React.ReactNode", required: true },
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: false,
    },
    onFinish: {
      description: "The callback function to execute when the animation finishes.",
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
          <Subtitle>淡入淡出过渡动画组件</Subtitle>

          <Markdown>
            {`
会实现 CSS 淡入淡出的过渡动画效果，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

所占宽高默认取决于 \`children\` 的宽高，也可通过 \`style\` 自定义设置。

不显示时内部是通过 \`visibility: hidden\` 实现隐藏，所以仍会在 DOM 中保持挂载，并且会保留原始的宽高占位空间。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import React from "react";
import { Theme, Button, Card, Transition } from "venomous-ui-react/components";

function App() {
  const [visible, setVisible] = React.useState<boolean>(true);

  return (
    <Theme.Provider>
      <Button text="Toggle" onClick={() => setVisible(!visible)} />

      <Transition.Fade visible={visible}>
        <Card variant="outlined" style={{ padding: 40, backgroundColor: "pink" }} />
      </Transition.Fade>
    </Theme.Provider>
  );
}
            `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{DifferentDurationsExample.name}</Heading>
          <Description of={DifferentDurationsExample} />
          <Canvas
            of={DifferentDurationsExample}
            sourceState="hidden"
            source={{
              code: `
"use client";

import React from "react";
import { Theme, Space, Button, Card, Transition } from "venomous-ui-react/components";

function App() {
  const [visible, setVisible] = React.useState<boolean>(true);

  return (
    <Theme.Provider>
      <Space.Flex column spacing={16}>
        <Button text="Toggle" onClick={() => setVisible(!visible)} />

        <Transition.Fade visible={visible} duration={0}>
          <Card variant="outlined" style={{ width: 300 }}>
            <Typography.Text text="0ms" />
          </Card>
        </Transition.Fade>

        <Transition.Fade visible={visible} duration={200}>
          <Card variant="outlined" style={{ width: 300 }}>
            <Typography.Text text="200ms ( Default )" />
          </Card>
        </Transition.Fade>

        <Transition.Fade visible={visible} duration={1000}>
          <Card variant="outlined" style={{ width: 300 }}>
            <Typography.Text text="1000ms" />
          </Card>
        </Transition.Fade>
      </Space.Flex>
    </Theme.Provider>
  );
}
  `.trim(),
            }}
          />

          <Heading>{OnFinishCallbackExample.name}</Heading>
          <Description of={OnFinishCallbackExample} />
          <Canvas
            of={OnFinishCallbackExample}
            sourceState="hidden"
            source={{
              code: `
"use client";

import React from "react";
import { Theme, Space, Button, Card, Transition } from "venomous-ui-react/components"; 

function App() {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [isDoing, setIsDoing] = React.useState<boolean>(false);
  const handleClick = () => {
    setVisible(!visible);
    setIsDoing(true);
  };
  const handleFinish = () => {
    setIsDoing(false);
  };

  return (
    <Theme.Provider>
      <Space.Flex column spacing={8}>
        <Button text="Toggle" loading={isDoing} onClick={handleClick} />
        <Typography.Text text={\`Status: \${isDoing ? "Doing..." : "Finished"}\`} />

        <Transition.Fade visible={visible} onFinish={handleFinish}>
          <Card variant="outlined" style={{ width: 300 }}>
            <Typography.Text text="300ms" />
          </Card>
        </Transition.Fade>
      </Space.Flex>
    </Theme.Provider>
  );
}
  `.trim(),
            }}
          />
        </>
      ),
    },
  },
} satisfies Meta<typeof Transition.Fade>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    visible: true,
    duration: 200,
    children: <Card variant="outlined" style={{ padding: 40, backgroundColor: "pink" }} />,
  },
};

export const DifferentDurationsExample: Story = {
  name: "Different Durations Example",
  tags: ["!dev"],
  argTypes: {
    visible: { control: false, table: { disable: true } },
    duration: { control: false, table: { disable: true } },
    children: { control: false, table: { disable: true } },
    onFinish: { control: false, table: { disable: true } },
  },
  args: Playground.args,
  render: function RenderStory() {
    const [visible, setVisible] = React.useState<boolean>(true);

    return (
      <Space.Flex column spacing={16}>
        <Button text="Toggle" onClick={() => setVisible(!visible)} />

        <Transition.Fade visible={visible} duration={0}>
          <Card variant="outlined" style={{ width: 300 }}>
            <Typography.Text text="In 0ms" />
          </Card>
        </Transition.Fade>

        <Transition.Fade visible={visible} duration={200}>
          <Card variant="outlined" style={{ width: 300 }}>
            <Typography.Text text="In 200ms ( Default )" />
          </Card>
        </Transition.Fade>

        <Transition.Fade visible={visible} duration={1000}>
          <Card variant="outlined" style={{ width: 300 }}>
            <Typography.Text text="In 1000ms" />
          </Card>
        </Transition.Fade>
      </Space.Flex>
    );
  },
};

export const OnFinishCallbackExample: Story = {
  name: "OnFinish Callback Example",
  tags: ["!dev"],
  argTypes: {
    visible: { control: false, table: { disable: true } },
    duration: { control: false, table: { disable: true } },
    children: { control: false, table: { disable: true } },
    onFinish: { control: false, table: { disable: true } },
  },
  args: Playground.args,
  render: function RenderStory() {
    const [visible, setVisible] = React.useState<boolean>(false);
    const [isDoing, setIsDoing] = React.useState<boolean>(false);

    const handleClick = () => {
      setVisible(!visible);
      setIsDoing(true);
    };
    const handleFinish = () => {
      setIsDoing(false);
    };

    return (
      <Space.Flex column spacing={8}>
        <Button text="Toggle" loading={isDoing} onClick={handleClick} />
        <Typography.Text text={`Status: ${isDoing ? "Doing..." : "Finished"}`} />

        <Transition.Fade visible={visible} onFinish={handleFinish}>
          <Card variant="outlined" style={{ width: 300 }}>
            <Typography.Text text="300ms" />
          </Card>
        </Transition.Fade>
      </Space.Flex>
    );
  },
};
