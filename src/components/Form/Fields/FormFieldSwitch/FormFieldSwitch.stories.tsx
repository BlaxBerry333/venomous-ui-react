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
    name: {
      description: "The name attribute for the input element. Used to identify the form data after submission.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    checked: {
      description: "Whether the switch is checked (controlled mode). Use with onChange for controlled mode.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
      },
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
    onMouseLeave: {
      table: { disable: true },
    },
    onMouseEnter: {
      table: { disable: true },
    },
    disabled: {
      description: "Whether the switch is disabled. Native HTML attribute.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    className: {
      description: "Additional CSS class name for the switch element.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: false,
    },
    style: {
      description: "Additional inline styles for the switch element.",
      table: {
        type: { summary: "React.CSSProperties" },
      },
      control: false,
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

export const Playground: Story = {
  name: "Playground",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: { table: { disable: true } },
  },
  args: {
    checked: false,
    disabled: false,
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

  const handleReset = () => {
    formRef.current?.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} onReset={handleReset}>
      <FormField.Switch name="notifications" defaultChecked={true} />
      <Button type="submit" text="Submit" />
      <Button type="reset" text="Reset" variant="outlined" />
    </form>
  );
}
        `.trim(),
      },
    },
  },
  render: function RenderStory() {
    const [submittedValue, setSubmittedValue] = React.useState<boolean | null>(null);
    const formRef = React.useRef<HTMLFormElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const notifications = formData.get("notifications") === "on";
      console.log({ notifications });
      setSubmittedValue(notifications);
    };

    const handleReset = () => {
      setSubmittedValue(null);
      formRef.current?.reset();
    };

    return (
      <Space.Flex column spacing={24} style={{ padding: 24, maxWidth: 400 }}>
        <form ref={formRef} onSubmit={handleSubmit} onReset={handleReset}>
          <Space.Flex column spacing={16}>
            <FormFieldSwitch name="notifications" defaultChecked={true} />

            <Space.Flex spacing={12}>
              <Button type="submit" text="Submit" />
              <Button type="reset" text="Reset" variant="outlined" />
            </Space.Flex>
          </Space.Flex>
        </form>

        {submittedValue !== null && (
          <div
            style={{
              padding: 16,
              backgroundColor: "#f5f5f5",
              borderRadius: 8,
              fontFamily: "monospace",
              fontSize: 14,
            }}
          >
            notifications: {String(submittedValue)}
          </div>
        )}
      </Space.Flex>
    );
  },
};
