import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@/components/Box";
import BoxStoriesMeta from "@/components/Box/Box.stories";
import { PALETTE_COLORS } from "@/constants/designs";
import { Space } from ".";

const meta = {
  title: "components/Space/<Space.Grid>",
  component: Space.Grid,
  tags: ["autodocs"],
  argTypes: {
    ...BoxStoriesMeta.argTypes,
    children: {
      description: "The content to be rendered inside the flex container.",
      type: { name: "other", value: "React.ReactNode", required: true },
      table: { type: { summary: "React.ReactNode" } },
      control: false,
    },
    columns: {
      description: "The number of columns",
      type: { name: "number" },
      table: {
        type: { summary: "number | Record<BreakPointName, number>" },
        defaultValue: { summary: "1" },
      },
      control: { type: "number", min: 0 },
    },
    spacing: {
      description: "The spacing ( px ) between items",
      type: { name: "number" },
      table: {
        type: { summary: "number | Record<BreakPointName, number>" },
        defaultValue: { summary: "0" },
      },
      control: { type: "number", min: 0 },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>栅格布局组件</Subtitle>

          <Markdown>
            {`\
会实现 CSS Grid 栅格布局。能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, Box, Space } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <Space.Grid columns={3} spacing={8}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Space.Grid>
    </Theme.Provider>
  );
}
  `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{StaticColumnsExample.name}</Heading>
          <Description of={StaticColumnsExample} />
          <Canvas of={StaticColumnsExample} />

          <Heading>{DynamicColumnsExample.name}</Heading>
          <Description of={DynamicColumnsExample} />
          <Canvas of={DynamicColumnsExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Space.Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    as: "div",
    columns: 1,
    spacing: 0,
    maxWidth: undefined,
    children: Object.entries(PALETTE_COLORS)
      .slice(0, 3)
      .map(([name, value], index) => (
        <Box key={name} style={{ height: "100px", width: "100%", backgroundColor: value[1] }}>
          {index + 1}
        </Box>
      )),
  },
};

export const StaticColumnsExample: Story = {
  name: "Static Columns Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story: "参数`columns`值为固定的一个数字时列数会固定。<br/> 如下：固定一行显示 3 个并且间隔 16px.",
      },
      source: {
        sourceState: "hidden",
        code: `
"use client";

import { Theme, Box, Space } from "venomous-ui-react/components";
import { PALETTE_COLORS } from "venomous-ui-react/constants";

function App() {
  return (
    <Theme.Provider>
      <Space.Grid columns={3} spacing={16}>
        {Object.entries(PALETTE_COLORS).map(([name, value], index) => (
          <Box key={name} style={{ height: "100px", width: "100%", backgroundColor: value[1] }}>
            {index + 1}
          </Box>
        ))}
      </Space.Grid>
    </Theme.Provider>
  );
}
`.trim(),
      },
    },
  },
  args: {
    columns: 3,
    spacing: 16,
    children: Object.entries(PALETTE_COLORS).map(([name, value], index) => (
      <Box key={name} style={{ height: "100px", width: "100%", backgroundColor: value[1] }}>
        {index + 1}
      </Box>
    )),
  },
};

export const DynamicColumnsExample: Story = {
  name: "Dynamic Columns Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "参数`columns`值为固定的一个ThemeBreakpoint 断点对象时，列数会根据当前的屏幕尺寸对应的短点的动态变化为指定的列数。<br/> 如下：一行显示的数量与间隔根据 Breakpoint 自动变换为，**XS** 时一行显示 1 个且间隔 8px、**SM** 时一行显示 2 个且间隔 12px、**MD** 时一行显示 3 个且间隔 16px、**LG | XL | XXL** 时一行显示 4 个且间隔 20px",
      },
      source: {
        sourceState: "hidden",
        code: `
"use client";

import { Theme, Box, Space } from "venomous-ui-react/components";
import { PALETTE_COLORS } from "venomous-ui-react/constants";

function App() {
  return (
    <Theme.Provider>
      <Space.Grid 
        columns={{ XS: 1, SM: 2, MD: 3, LG: 4, XL: 4, XXL: 4 }}
        spacing={{ XS: 8, SM: 12, MD: 16, LG: 20, XL: 20, XXL: 20 }}
      >
        {Object.entries(PALETTE_COLORS).map(([name, value], index) => (
          <Box key={name} style={{ height: "100px", width: "100%", backgroundColor: value[1] }}>
            {index + 1}
          </Box>
        ))}
      </Space.Grid>
    </Theme.Provider>
  );
}
`.trim(),
      },
    },
  },
  args: {
    columns: { XS: 1, SM: 2, MD: 3, LG: 4, XL: 4, XXL: 4 },
    spacing: { XS: 8, SM: 12, MD: 16, LG: 20, XL: 20, XXL: 20 },
    children: Object.entries(PALETTE_COLORS).map(([name, value], index) => (
      <Box key={name} style={{ height: "100px", width: "100%", backgroundColor: value[1] }}>
        {index + 1}
      </Box>
    )),
  },
};
