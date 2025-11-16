import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Buttons";
import { Card } from "@/components/Cards";
import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { Transition, TRANSITION_SLIDE_DIRECTION_MAP } from ".";

const meta = {
  title: "components/Transitions/<Transition.Slide>",
  component: Transition.Slide,
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
    direction: {
      description: "The direction of the slide animation.",
      type: { name: "string" },
      table: {
        type: { summary: `${Object.values(TRANSITION_SLIDE_DIRECTION_MAP).join(" | ")}` },
        defaultValue: { summary: `"${TRANSITION_SLIDE_DIRECTION_MAP.RIGHT}"` },
      },
      control: { type: "radio" },
      options: Object.values(TRANSITION_SLIDE_DIRECTION_MAP),
    },
    distance: {
      description: "The distance of the slide animation ( px ).",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
      control: { type: "number", min: 0, max: 500, step: 10 },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>滑动过渡动画组件</Subtitle>

          <Markdown>
            {`
会实现 CSS 滑动的过渡动画效果，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

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

      <Transition.Slide visible={visible}>
        <Card variant="outlined" style={{ padding: 40, backgroundColor: "pink" }} />
      </Transition.Slide>
    </Theme.Provider>
  );
}
            `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{DifferentDirectionsExample.name}</Heading>
          <Description of={DifferentDirectionsExample} />
          <Canvas
            of={DifferentDirectionsExample}
            sourceState="hidden"
            source={{
              code: `
"use client";

import React from "react";
import { Theme, Space, Button, Card, Typography, Transition } from "venomous-ui-react/components";

const directions = [
  { key: TRANSITION_SLIDE_DIRECTION_MAP.LEFT, label: "From Left" },
  { key: TRANSITION_SLIDE_DIRECTION_MAP.RIGHT, label: "From Right" },
  { key: TRANSITION_SLIDE_DIRECTION_MAP.UP, label: "From Up" },
  { key: TRANSITION_SLIDE_DIRECTION_MAP.DOWN, label: "From Down" },
];

function App() {
  const [activeDirection, setActiveDirection] = React.useState<string | null>(null);  

  return (
    <Theme.Provider>
      <Space.Flex column spacing={16}>
        <Button text="Toggle" onClick={() => setVisible(!visible)} />

        <Transition.Fade visible={visible} duration={150}>
          <Card variant="outlined" style={{ width: 300 }}>
            <Typography.Text text="150ms" />
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

          <Heading>{DifferentDistancesExample.name}</Heading>
          <Description of={DifferentDistancesExample} />
          <Canvas
            of={DifferentDistancesExample}
            sourceState="hidden"
            source={{
              code: `
"use client";

import React from "react";
import { Theme, Space, Button, Card, Typography, Transition } from "venomous-ui-react/components";

function App() {
  const [visible, setVisible] = React.useState<boolean>(true);

  return (
    <Theme.Provider>
      <Space.Flex column spacing={24}>
        <Button text="Toggle" onClick={() => setVisible(!visible)} />

        <Transition.Slide visible={visible} distance={50}>
          <Card variant="outlined" style={{ width: 300 }}>
            <Typography.Text text="move to right 50px then hide." />
          </Card>
        </Transition.Slide>

        <Transition.Slide visible={visible} distance={100}>
          <Card variant="outlined" style={{ width: 300 }}>
            <Typography.Text text="move to right 100px then hide." />
          </Card>
        </Transition.Slide>

        <Transition.Slide visible={visible} distance={300}>
          <Card variant="outlined" style={{ width: 300 }}>
            <Typography.Text text="move to right 300px then hide." />
          </Card>
        </Transition.Slide>
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
} satisfies Meta<typeof Transition.Slide>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    visible: true,
    direction: TRANSITION_SLIDE_DIRECTION_MAP.RIGHT,
    duration: 300,
    distance: 100,
    children: <Card variant="outlined" style={{ padding: 40, backgroundColor: "pink" }} />,
  },
};

export const DifferentDirectionsExample: Story = {
  name: "Different Directions Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "可通过 `direction` 设置动画的移动方向。",
      },
    },
  },
  argTypes: {
    visible: { control: false, table: { disable: true } },
    direction: { control: false, table: { disable: true } },
    duration: { control: false, table: { disable: true } },
    distance: { control: false, table: { disable: true } },
    children: { control: false, table: { disable: true } },
  },
  args: Playground.args,
  render: function RenderStory() {
    const [activeDirection, setActiveDirection] = React.useState<string | null>(null);

    const directions = [
      { key: TRANSITION_SLIDE_DIRECTION_MAP.LEFT, label: "From Left" },
      { key: TRANSITION_SLIDE_DIRECTION_MAP.RIGHT, label: "From Right" },
      { key: TRANSITION_SLIDE_DIRECTION_MAP.UP, label: "From Up" },
      { key: TRANSITION_SLIDE_DIRECTION_MAP.DOWN, label: "From Down" },
    ];

    return (
      <Space.Flex column spacing={24} style={{ width: 400 }}>
        <Space.Flex spacing={8}>
          {directions.map(({ key, label }) => (
            <Button
              key={key}
              variant={activeDirection === key ? "contained" : "outlined"}
              onClick={() => setActiveDirection(activeDirection === key ? null : key)}
              text={label}
            />
          ))}
        </Space.Flex>

        {directions.map(({ key }) => (
          <Transition.Slide
            key={key}
            visible={activeDirection === key}
            direction={key}
            duration={200}
            distance={100}
            style={{ width: "100%" }}
          >
            <Card variant="outlined" style={{ padding: 40, width: "100%" }}>
              <Typography.Text text={`Direction: ${key}`} />
            </Card>
          </Transition.Slide>
        ))}
      </Space.Flex>
    );
  },
};

export const DifferentDistancesExample: Story = {
  name: "Different Distances Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "可通过 `distance` 设置动画的移动距离。",
      },
    },
  },
  argTypes: {
    visible: { control: false, table: { disable: true } },
    direction: { control: false, table: { disable: true } },
    duration: { control: false, table: { disable: true } },
    distance: { control: false, table: { disable: true } },
    children: { control: false, table: { disable: true } },
  },
  args: Playground.args,
  render: function RenderStory() {
    const [visible, setVisible] = React.useState<boolean>(true);

    return (
      <Space.Flex column spacing={24}>
        <Button text="Toggle" onClick={() => setVisible(!visible)} />

        <Transition.Slide visible={visible} distance={50}>
          <Card variant="outlined" style={{ width: 300 }}>
            <Typography.Text text="move to right 50px then hide." />
          </Card>
        </Transition.Slide>

        <Transition.Slide visible={visible} distance={100}>
          <Card variant="outlined" style={{ width: 300 }}>
            <Typography.Text text="move to right 100px then hide." />
          </Card>
        </Transition.Slide>

        <Transition.Slide visible={visible} distance={300}>
          <Card variant="outlined" style={{ width: 300 }}>
            <Typography.Text text="move to right 300px then hide." />
          </Card>
        </Transition.Slide>
      </Space.Flex>
    );
  },
};
