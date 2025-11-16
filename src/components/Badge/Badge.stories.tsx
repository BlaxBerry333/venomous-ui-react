import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@/components/Avatar";
import { Playground as AvatarPlayground } from "@/components/Avatar/Avatar.stories";
import { Button } from "@/components/Buttons";
import { Card } from "@/components/Cards";
import { Typography } from "@/components/Typographies";
import { SEMANTIC_COLORS } from "@/constants";
import { Badge, BADGE_PLACEMENT_MAP, BADGE_VARIANT_MAP } from ".";

const meta = {
  title: "components/<Badge>",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description:
        "Children to be wrapped by the badge. If provided: Wrapper mode (badge at corner). If omitted: Standalone mode (badge displays independently).",
      type: { name: "other", value: "React.ReactNode" },
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
      control: { type: "radio" },
      options: [undefined, "Button", "Avatar", "Card"],
      mapping: {
        undefined: undefined,
        Button: <Button text="Button" />,
        Avatar: <Avatar src={AvatarPlayground.args?.src} />,
        Card: (
          <Card variant="outlined">
            <Typography.Title as="h4" text="Product B" />
            <Typography.Paragraph size="SMALL" text="xxxxxxxxxx" />
          </Card>
        ),
      },
    },
    variant: {
      description: 'Badge variant. "dot": Small dot. "text": Text/number badge.',
      type: { name: "other", value: `${Object.values(BADGE_VARIANT_MAP).join(" | ")}` },
      table: {
        type: { summary: `${Object.values(BADGE_VARIANT_MAP).join(" | ")}` },
        defaultValue: { summary: `"${BADGE_VARIANT_MAP.TEXT}"` },
      },
      control: { type: "radio" },
      options: Object.values(BADGE_VARIANT_MAP),
    },
    text: {
      description: "Badge text content (text or number).",
      type: { name: "other", value: "string | number" },
      table: { type: { summary: "string | number" } },
      control: { type: "text" },
      if: { arg: "variant", eq: "text" },
    },
    placement: {
      description: "Badge placement relative to wrapped element (wrapper mode only).",
      type: { name: "other", value: "keyof typeof BADGE_PLACEMENT_MAP" },
      table: {
        type: { summary: `${Object.values(BADGE_PLACEMENT_MAP).join(" | ")}` },
        defaultValue: { summary: `"${BADGE_PLACEMENT_MAP.TOP_RIGHT}"` },
      },
      control: { type: "radio" },
      options: Object.values(BADGE_PLACEMENT_MAP),
      if: { arg: "children" },
    },
    offset: {
      description: "The offset of the badge from the edge (%) (wrapper mode only).",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "65" },
      },
      control: { type: "number", min: 0, max: 100, step: 5 },
      if: { arg: "children" },
    },
    color: {
      description: "Badge background color ( hex string ).",
      type: { name: "string" },
      table: {
        type: { summary: "React.CSSProperties['color']" },
        defaultValue: { summary: `"${SEMANTIC_COLORS.ERROR}"` },
      },
      control: { type: "color" },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>徽标组件</Subtitle>

          <Markdown>
            {`
徽标组件，支持两种使用模式：

**1. 包裹模式（有 children）**：在其他组件角落显示徽标
**2. 独立模式（无 children）**：独立显示的数字/文字徽标

继承自内部组件 \`<Box>\` + \`<Typography.Text>\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, Badge } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      {/* 独立模式 - 数字徽标 */}
      <Badge text="99+" color="#f44336" />
      <Badge text={5} color="#ff9800" />

      {/* 包裹模式 - 包裹其他组件 */}
      <Badge text="999+">
        <Button text="🔔" />
      </Badge>

      {/* 包裹模式 - 圆点指示器 */}
      <Badge variant="dot" placement="top-right">
        <Avatar src="..." width={48} />
      </Badge>
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
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    children: undefined,
    variant: "text",
    text: "99+",
    placement: "top-right",
    offset: 65,
    color: SEMANTIC_COLORS.ERROR,
  },
};

// ============================
// 独立模式示例
// ============================
export const StandaloneMode: Story = {
  name: "独立模式",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <span style={{ width: 100 }}>文字标签:</span>
        <Badge text="New" />
        <Badge text="Hot" color="#ff9800" />
        <Badge text="VIP" color="#9c27b0" />
      </div>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <span style={{ width: 100 }}>数字徽标:</span>
        <Badge text={5} />
        <Badge text={10} color="#ff9800" />
        <Badge text={99} color="#4caf50" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "独立使用的徽标，不需要包裹其他元素。支持文字和数字。",
      },
      source: {
        code: `
import { Badge } from "venomous-ui-react/components";

function App() {
  return (
    <div>
      {/* 文字标签 */}
      <Badge text="New" />
      <Badge text="Hot" color="#ff9800" />
      <Badge text="VIP" color="#9c27b0" />

      {/* 数字徽标 */}
      <Badge text={5} />
      <Badge text={10} color="#ff9800" />
      <Badge text={99} color="#4caf50" />
    </div>
  );
}
        `.trim(),
      },
    },
  },
};

// ============================
// 包裹模式示例
// ============================
export const WrapperMode: Story = {
  name: "包裹模式",
  tags: ["!dev"],
  render: () => (
    <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
      <Badge text="999+">
        <Button text="🔔" />
      </Badge>

      <Badge text="5" color="#ff9800" placement="top-left">
        <Button text="📧" />
      </Badge>

      <Badge variant="dot" placement="top-right">
        <Avatar src={AvatarPlayground.args?.src} width={48} />
      </Badge>

      <Badge variant="dot" placement="bottom-right" color="#4caf50">
        <Avatar src={AvatarPlayground.args?.src} width={48} />
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "包裹其他组件，在角落显示徽标。支持 dot（圆点）和 text（文字）两种样式。",
      },
      source: {
        code: `
import { Badge, Button, Avatar } from "venomous-ui-react/components";

function App() {
  return (
    <div>
      {/* 包裹按钮 */}
      <Badge text="999+">
        <Button text="🔔" />
      </Badge>

      {/* 不同位置 */}
      <Badge text="5" color="#ff9800" placement="top-left">
        <Button text="📧" />
      </Badge>

      {/* 圆点指示器 */}
      <Badge variant="dot" placement="top-right">
        <Avatar src="..." width={48} />
      </Badge>

      {/* 不同颜色 */}
      <Badge variant="dot" placement="bottom-right" color="#4caf50">
        <Avatar src="..." width={48} />
      </Badge>
    </div>
  );
}
        `.trim(),
      },
    },
  },
};
