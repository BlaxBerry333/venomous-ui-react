import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Chip } from "@/components/Chip";
import { Playground as IconStoryPlayground } from "@/components/Icon/Icon.stories";
import { Space } from "@/components/Space";
import { default as SpaceFlexStoriesMeta } from "@/components/Space/SpaceFlex.stories";
import { Typography } from "@/components/Typographies";
import { Menu, MENU_ITEM_ELEMENT_MAP } from ".";
import { Icon } from "../Icon";

const meta = {
  title: "components/Menu/<Menu.Item>",
  component: Menu.Item,
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "The element Tag to be rendered.",
      type: { name: "string" },
      table: {
        type: { summary: `${Object.values(MENU_ITEM_ELEMENT_MAP).join(" | ")}` },
        defaultValue: { summary: `"${MENU_ITEM_ELEMENT_MAP.LI}"` },
      },
      control: { type: "radio" },
      options: Object.values(MENU_ITEM_ELEMENT_MAP),
    },
    children: {
      description:
        "Custom elements to be rendered inside. If provided `icon`、`label`、`labelEllipsis` will be ignored.",
      type: { name: "other", value: "React.ReactNode" },
      table: { type: { summary: "React.ReactNode" } },
      control: false,
    },
    spacing: {
      ...SpaceFlexStoriesMeta.argTypes.spacing,
      description: `${SpaceFlexStoriesMeta.argTypes.spacing.description} Ignored if \`children\` is provided.`,
    },
    selected: {
      description: "Selected state. Ignored if `children` is provided.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    disabled: {
      description: "Disabled state. Ignored if `children` is provided.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    StartIcon: {
      description: "Element displayed before label. Ignored if `children` is provided.",
      type: { name: "other", value: "React.ReactNode" },
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: { type: "radio" },
      options: [undefined, "<span>🏠</span>", "<Icon />"],
      mapping: {
        undefined: undefined,
        "<span>🏠</span>": <span>🏠</span>,
        "<Icon />": <Icon icon={IconStoryPlayground.args.icon} />,
      },
    },
    EndIcon: {
      description: "Element displayed after label. Ignored if `children` is provided.",
      type: { name: "other", value: "React.ReactNode" },
      table: {
        type: { summary: "React.ReactNode" },
      },
      control: { type: "radio" },
      options: [undefined, "<span>🏠</span>", "<Icon />"],
      mapping: {
        undefined: undefined,
        "<span>🏠</span>": <span>🏠</span>,
        "<Icon />": <Icon icon={IconStoryPlayground.args.icon} />,
      },
    },
    label: {
      description: "Label Text content. Ignored if `children` is provided.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    subLabel: {
      description: "Sub Label Text content. Ignored if `children` is provided.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    LabelProps: {
      description: "Label Typography props. Ignored if `children` is provided.",
      type: { name: "other", value: "TypographyParagraphProps" },
      table: {
        type: { summary: "TypographyParagraphProps" },
      },
      control: false,
    },
    SubLabelProps: {
      description: "Sub Label Typography props. Ignored if `children` is provided.",
      type: { name: "other", value: "TypographyParagraphProps" },
      table: {
        type: { summary: "TypographyParagraphProps" },
      },
      control: false,
    },
    onClick: {
      description: "Click handler (enables clickable styles)",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "React.MouseEventHandler<MenuItemRef>" },
      },
      control: { type: "radio" },
      options: [undefined, "console.log('clicked')"],
      mapping: {
        undefined: undefined,
        "console.log('clicked')": () => console.log("clicked"),
      },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>菜单选择项组件</Subtitle>

          <Markdown>
            {`
会被渲染为 HTML 原生 \`<li>\`、\`<dt>\`、\`<dd>\` 标签。能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

主要用于在菜单列表中作为一个选择项。其展示的内容可以是通过 \`props\` 传参使用默认的基础布局，也可通过 \`children\` 自由组合。

`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, Menu } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <Menu.List as="ul" spacing={8} style={{ width: 300 }}>
        <Menu.Item as="li" label="Home" />
        <Menu.Item as="li" label="About" subLabel="xxxx" />
        <Menu.Item as="li" StartIcon={<span>🏠</span>} label="Home" />
        <Menu.Item as="li" EndIcon={<span>👤</span>} label="Profile" disabled />
      </Menu.List>
    </Theme.Provider>
  );
}
            `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{SelectableExample.name}</Heading>
          <Description of={SelectableExample} />
          <Canvas
            of={SelectableExample}
            sourceState="hidden"
            source={{ code: SelectableExample.parameters?.docs?.source?.code }}
          />

          <Heading>{CustomChildrenExample.name}</Heading>
          <Description of={CustomChildrenExample} />
          <Canvas
            of={CustomChildrenExample}
            sourceState="hidden"
            source={{
              code: CustomChildrenExample.parameters?.docs?.source?.code,
            }}
          />
        </>
      ),
    },
  },
} satisfies Meta<typeof Menu.Item>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  argTypes: {
    children: { control: false },
    LabelProps: { control: false },
    SubLabelProps: { control: false },
  },
  args: {
    as: "li",
    spacing: 8,
    selected: false,
    disabled: false,
    StartIcon: undefined,
    EndIcon: undefined,
    label: "Label Text",
    subLabel: "Sub Label Text",
    LabelProps: undefined,
    SubLabelProps: undefined,
    onClick: undefined,
  },
};

export const SelectableExample: Story = {
  name: "Selectable Example",
  tags: ["!dev"],
  render: function RenderStory() {
    const [selectedId, setSelectedId] = React.useState<string | null>(null);
    return (
      <Menu.List spacing={4}>
        {Array.from({ length: 3 }).map((_, index) => {
          const id = String(index);
          return (
            <Menu.Item
              key={id}
              StartIcon={<span>🏠</span>}
              EndIcon={(index + 1) % 2 === 0 ? <span>👤</span> : undefined}
              label={`Menu Item ${index + 1}`}
              subLabel="xxxx"
              LabelProps={{ ellipsis: 1 }}
              SubLabelProps={{ ellipsis: 0 }}
              selected={id === selectedId}
              onClick={() => setSelectedId(id)}
            />
          );
        })}
      </Menu.List>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
"use client";

import React from "react";

import { Theme, Menu } from "venomous-ui-react/components";

function App() {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  return (
    <Theme.Provider>
      <Menu.List spacing={4}>
        {Array.from({ length: 3 }).map((_, index) => {
          const id = String(index);
          return (
            <Menu.Item
              key={id}
              StartIcon={<span>🏠</span>}
              EndIcon={(index + 1) % 2 === 0 ? <span>👤</span> : undefined}
              label={\`Menu Item \${index + 1}\`}
              LabelProps={{ ellipsis: 1 }}
              SubLabelProps={{ ellipsis: 0 }}
              selected={id === selectedId}
              onClick={() => setSelectedId(id)}
            />
          );
        })}
      </Menu.List>
    </Theme.Provider>
  );
}
  `.trim(),
      },
    },
  },
};

export const CustomChildrenExample: Story = {
  name: "Custom Children Example",
  tags: ["!dev"],
  render: () => (
    <Menu.Item
      spacing={16}
      style={{ width: 200, border: "1px solid grey" }}
      onClick={() => console.log("Clicked MenuItem")}
    >
      <Typography.Text as="strong" text="🏠" />

      <Space.Flex column style={{ flex: 1 }}>
        <Typography.Paragraph text="Main Label" weight="bold" ellipsis={1} />
        <Typography.Paragraph
          text="Sub Label with very long text that should be truncated"
          size="CAPTION"
          ellipsis={1}
        />
      </Space.Flex>

      <Chip
        text="New"
        onClick={(e) => {
          e.stopPropagation();
          console.log("Clicked Chip");
        }}
      />
    </Menu.Item>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "通过 `<Menu.Item>` 的 `children` 属性可以自定义子元素。<br/>如下：用 `children` 代替 `Icon`、`label`、`subLabel`、`LabelProps`、`SubLabelProps`",
      },
      source: {
        code: `
"use client";

import React from "react";

import { Theme, Icon, Chip, Menu } from "venomous-ui-react/components";

function App() {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  return (
    <Theme.Provider>
      <Menu.Item spacing={16} style={{ width: 200, border: "1px solid grey" }} onClick={() => console.log("Clicked")}>
        <Typography.Text as="strong" text="🏠" />
  
        <Space.Flex column style={{ flex: 1 }}>
          <Typography.Paragraph text="Main Label" weight="bold" ellipsis={1} />
          <Typography.Paragraph
            text="Sub Label with very long text that should be truncated"
            size="CAPTION"
            ellipsis={1}
          />
        </Space.Flex>
  
        <Chip text="New" />
      </Menu.Item>
    </Theme.Provider>
  );
}
  `.trim(),
      },
    },
  },
};
