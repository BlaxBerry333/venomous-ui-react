# Storybook Stories 开发规范

本文档定义了项目中 Storybook Stories 文件的编写规范和最佳实践。

## 文件结构

每个组件的 stories 文件应包含以下部分：

```tsx
// 1. 导入区
import React from "react";
import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

// 2. Meta 配置
const meta = { ... } satisfies Meta<typeof Component>;
export default meta;
type Story = StoryObj<typeof meta>;

// 3. Playground Story（必需）
export const Playground: Story = { ... };

// 4. 示例 Stories（可选）
export const ExampleName: Story = { ... };
```

## Meta 配置

### 基础结构

```tsx
const meta = {
  title: "components/Category/<ComponentName>",  // 导航路径
  component: Component,
  tags: ["autodocs"],
  argTypes: { ... },                             // Props 控制器
  parameters: {
    layout: "fullscreen",                        // 或 "centered"
    docs: {
      page: () => ( ... ),                       // 文档页面
    },
  },
} satisfies Meta<typeof Component>;
```

### docs.page 结构

docs.page 负责组织文档页面的整体布局：

```tsx
docs: {
  page: () => (
    <>
      {/* 1. 标题区 */}
      <Title />
      <Subtitle>组件中文名称</Subtitle>

      {/* 2. 组件描述 */}
      <Markdown>
        {`
组件功能描述...
        `}
      </Markdown>

      {/* 3. 基础使用示例代码 */}
      <Source
        language="tsx"
        dark
        code={`
"use client";
import { Component } from "venomous-ui-react/components";
// 示例代码...
        `.trim()}
      />

      {/* 4. API 文档 */}
      <Heading>API</Heading>
      <ArgTypes />

      {/* 5. 引用各个示例 Story（使用 Heading + Description + Canvas） */}
      <Heading>{ExampleStory.name}</Heading>
      <Description of={ExampleStory} />
      <Canvas of={ExampleStory} />
    </>
  ),
}
```

**关键点：**

- `Canvas of={Story}` 不带 `source` 属性，示例代码在 Story 对象中定义
- 每个示例使用 `Heading` + `Description` + `Canvas` 三件套

## Story 对象

### Playground Story（必需）

每个组件必须有一个 Playground story：

```tsx
export const Playground: Story = {
  name: "Playground",
  parameters: {
    layout: "centered", // Playground 通常居中显示
  },
  args: {
    // 所有可控 props 的默认值
    checked: false,
    disabled: false,
    error: false,
  },
  // 如果需要状态管理（如受控组件）
  render: function RenderStory(args) {
    const [value, setValue] = React.useState(args.defaultValue ?? "");
    React.useEffect(() => {
      setValue(args.value ?? "");
    }, [args.value]);
    return <Component {...args} value={value} onChange={setValue} />;
  },
  // 可选：装饰器
  decorators: [
    (Story) => (
      <div style={{ paddingTop: "15%" }}>
        <Story />
      </div>
    ),
  ],
};
```

### 示例 Story

示例 Story 的 `description` 和 `source.code` 写在 `parameters.docs` 中：

```tsx
export const ControlledExample: Story = {
  name: "Controlled Example",           // 英文名称
  tags: ["!dev"],                        // 在开发模式下隐藏
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "示例的中文描述...",      // Story 描述
      },
      source: {
        code: `
// 示例代码（简洁版，用于文档展示）
import React from "react";
import { Component } from "venomous-ui-react/components";

function App() {
  // ...
}
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    // 实际渲染逻辑（可能比 source.code 更完整）
    return ( ... );
  },
};
```

**关键点：**

- `name`: 使用英文名称
- `tags: ["!dev"]`: 在开发模式下隐藏该 Story
- `parameters.docs.description.story`: 中文描述
- `parameters.docs.source.code`: 简洁的示例代码（用于文档展示）
- `render`: 实际渲染逻辑

## 命名规范

### Story 名称

| 类型           | 命名规范               | 示例                                |
| -------------- | ---------------------- | ----------------------------------- |
| Playground     | 固定为 "Playground"    | `name: "Playground"`                |
| 受控模式示例   | "Controlled Example"   | `name: "Controlled Example"`        |
| 非受控模式示例 | "Uncontrolled Example" | `name: "Uncontrolled Example"`      |
| 布局示例       | "Xxx Layout Example"   | `name: "Horizontal Layout Example"` |
| 功能示例       | "Xxx Example"          | `name: "With Icon Example"`         |

### Title 路径

```tsx
// 单组件
title: "components/<ComponentName>";

// 命名空间组件
title: "components/Category/<Component.Name>";

// 示例
title: "components/<Badge>";
title: "components/Form/Fields/<FormField.Switch>";
title: "components/Buttons/<Button>";
```

## argTypes 配置

### 基础类型

```tsx
argTypes: {
  // 字符串
  text: {
    description: "The text content.",
    type: { name: "string" },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: '""' },
    },
    control: { type: "text" },
  },

  // 布尔值
  disabled: {
    description: "Whether the component is disabled.",
    type: { name: "boolean" },
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: "false" },
    },
    control: { type: "boolean" },
  },

  // 数字
  spacing: {
    description: "The spacing between items.",
    type: { name: "number" },
    table: {
      type: { summary: "number" },
      defaultValue: { summary: "8" },
    },
    control: { type: "number", min: 0, max: 32, step: 4 },
  },

  // 枚举（使用常量映射）
  variant: {
    description: "The variant style.",
    type: { name: "string" },
    table: {
      type: { summary: `${Object.values(VARIANT_MAP).join(" | ")}` },
      defaultValue: { summary: `"${VARIANT_MAP.OUTLINED}"` },
    },
    control: { type: "radio" },
    options: Object.values(VARIANT_MAP),
  },

  // 函数/事件
  onChange: {
    description: "Callback fired when value changes.",
    type: { name: "function" },
    table: {
      category: "Events",
      type: { summary: "(value: string) => void" },
    },
    control: false,
  },

  // 禁用显示
  onMouseEnter: {
    table: { disable: true },
  },

  // 条件显示
  minRows: {
    description: "Minimum rows when autoSize is enabled.",
    type: { name: "number" },
    table: { type: { summary: "number" } },
    control: { type: "number" },
    if: { arg: "autoSize", eq: true },
  },
}
```

## 完整示例

以下是一个完整的 stories 文件示例：

```tsx
import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Buttons";
import { Space } from "@/components/Space";
import { FormFieldSwitch } from ".";

const meta = {
  title: "components/Form/Fields/<FormField.Switch>",
  component: FormFieldSwitch,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      description: "Whether the switch is checked (controlled mode).",
      type: { name: "boolean" },
      table: { type: { summary: "boolean" } },
      control: { type: "boolean" },
    },
    onChange: {
      description: "Callback fired when the checked state changes.",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "(checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void" },
      },
      control: false,
    },
    disabled: {
      description: "Whether the switch is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    error: {
      description: "Whether the switch is in error state.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>开关切换组件</Subtitle>

          <Markdown>
            {`
用于在两种状态之间切换的开关控件。

基于 \`<Box>\` + 原生 \`<input type="checkbox">\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import React from "react";
import { Theme, FormField } from "venomous-ui-react/components";

function App() {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <Theme.Provider>
      <FormField.Switch checked={checked} onChange={setChecked} />
    </Theme.Provider>
  );
}
            `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{ControlledExample.name}</Heading>
          <Description of={ControlledExample} />
          <Canvas of={ControlledExample} />

          <Heading>{UncontrolledExample.name}</Heading>
          <Description of={UncontrolledExample} />
          <Canvas of={UncontrolledExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof FormFieldSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

// ============================
// Playground
// ============================
export const Playground: Story = {
  name: "Playground",
  parameters: {
    layout: "centered",
  },
  args: {
    checked: false,
    disabled: false,
    error: false,
  },
  render: function RenderStory(args) {
    const [checked, setChecked] = React.useState<boolean>(args.defaultChecked ?? false);
    React.useEffect(() => {
      setChecked(!!args.checked);
    }, [args.checked]);
    return <FormFieldSwitch {...args} checked={checked} onChange={setChecked} />;
  },
};

// ============================
// 受控模式示例
// ============================
export const ControlledExample: Story = {
  name: "Controlled Example",
  tags: ["!dev"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "使用 `checked` 和 `onChange` 实现受控模式，状态由父组件管理。",
      },
      source: {
        code: `
import React from "react";
import { FormField } from "venomous-ui-react/components";

function App() {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <div>
      <FormField.Switch checked={checked} onChange={setChecked} />
      <p>notifications: {String(checked)}</p>
    </div>
  );
}
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [checked, setChecked] = React.useState<boolean>(false);

    return (
      <Space.Flex column spacing={24} style={{ padding: 24, maxWidth: 400 }}>
        <FormFieldSwitch checked={checked} onChange={setChecked} />
        <div
          style={{
            padding: 16,
            backgroundColor: "#f5f5f5",
            borderRadius: 8,
            fontFamily: "monospace",
            fontSize: 14,
          }}
        >
          notifications: {String(checked)}
        </div>
      </Space.Flex>
    );
  },
};

// ============================
// 非受控模式示例
// ============================
export const UncontrolledExample: Story = {
  name: "Uncontrolled Example",
  tags: ["!dev"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "使用 `defaultChecked` 和 `name` 实现非受控模式，状态由原生 input 管理，配合 form 表单使用。",
      },
      source: {
        code: `
import React from "react";
import { Button, FormField } from "venomous-ui-react/components";

function App() {
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const notifications = formData.get("notifications") === "on";
    console.log({ notifications });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <FormField.Switch name="notifications" defaultChecked={true} />
      <Button type="submit" text="Submit" />
    </form>
  );
}
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const formRef = React.useRef<HTMLFormElement>(null);
    // ... 完整渲染逻辑
  },
};
```

## 检查清单

编写 stories 前请确认：

- [ ] 导入了所有需要的 Storybook blocks（`Canvas`, `Description`, `Heading` 等）
- [ ] meta.title 遵循命名规范
- [ ] docs.page 包含 Title、Subtitle、Markdown、Source、ArgTypes
- [ ] 每个示例 Story 在 docs.page 中用 `Heading` + `Description` + `Canvas` 引用
- [ ] Playground Story 存在且名称为 "Playground"
- [ ] 示例 Story 的 `description.story` 和 `source.code` 在 `parameters.docs` 中
- [ ] 示例 Story 添加了 `tags: ["!dev"]`
- [ ] argTypes 配置完整（description、type、table、control）
