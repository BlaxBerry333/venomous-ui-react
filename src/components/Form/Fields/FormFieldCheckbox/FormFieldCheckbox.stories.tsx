import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Buttons";
import { Space } from "@/components/Space";
import { FormFieldCheckbox } from ".";

const meta = {
  title: "components/Form/Fields/<FormField.Checkbox>",
  component: FormFieldCheckbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      description: "Whether the checkbox is checked (controlled mode). Use with onChange for controlled mode.",
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
      description: "Whether the checkbox is disabled. Native HTML attribute.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    error: {
      description: "Whether the checkbox is in error state.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    className: {
      description: "Additional CSS class name for the input element.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: false,
    },
    style: {
      description: "Additional inline styles for the input element.",
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
          <Subtitle>复选框组件</Subtitle>

          <Markdown>
            {`
用于处理用户的勾选行为，通常用于表单中的复选框。

基于内置组件 \`<Icon>\` + 原生 \`<input type="checkbox">\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import React from "react";
import { Theme, Space, FormField } from "venomous-ui-react/components";

function App() {
  const [checked, setChecked] = React.useState<boolean>(false);
  const id = React.useId();

  return (
    <Theme.Provider>
      <Space.Flex spacing={8}>
        <FormField.Checkbox id={id} checked={checked} onChange={setChecked} />
        <label htmlFor={id}>我已阅读并同意用户协议</label>
      </Space.Flex>
    </Theme.Provider>
  );
}
            `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{ControlledExample.name}</Heading>
          <Description of={ControlledExample} />
          <Canvas
            of={ControlledExample}
            sourceState="hidden"
            source={{
              code: `
"use client";

import React from "react";
import { Theme, FormField } from "venomous-ui-react/components";

function App() {
  const [checked, setChecked] = React.useState<boolean>(false);
  const id = React.useId();

  return (
    <Theme.Provider>
      <FormField.Checkbox id={id} checked={checked} onChange={setChecked} />
      <label htmlFor={id} style={{ cursor: "pointer" }}>
        我已阅读并同意用户协议
      </label>
    </Theme.Provider>
  );
}
`.trim(),
            }}
          />

          <Heading>{UncontrolledExample.name}</Heading>
          <Description of={UncontrolledExample} />
          <Canvas
            of={UncontrolledExample}
            sourceState="hidden"
            source={{
              code: `
"use client";

import React from "react";
import { Theme, Button, FormField } from "venomous-ui-react/components";

function App() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const id = React.useId();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const IAgree = formData.get("IAgree") === "on";
    console.log({ IAgree });
  };

  const handleReset = () => {
    formRef.current?.reset();
  };

  return (
    <Theme.Provider>
      <form ref={formRef} onSubmit={handleSubmit} onReset={handleReset}>
        <FormField.Checkbox id={id} name="IAgree" defaultChecked={true} />
        <label htmlFor={id} style={{ cursor: "pointer" }}>
          我已阅读并同意用户协议
        </label>

        <Button type="submit" text="Submit" />
        <Button type="reset" text="Reset" variant="outlined" />
      </form>
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
} satisfies Meta<typeof FormFieldCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

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
    return <FormFieldCheckbox {...args} checked={checked} onChange={setChecked} />;
  },
};

export const ControlledExample: Story = {
  name: "Controlled Example",
  tags: ["!dev"],
  parameters: {
    layout: "centered",
  },
  render: function RenderStory() {
    const [checked, setChecked] = React.useState<boolean>(false);
    const id = React.useId();

    return (
      <Space.Flex column spacing={24} style={{ padding: 24, maxWidth: 400 }}>
        <Space.Flex spacing={8}>
          <FormFieldCheckbox id={id} checked={checked} onChange={setChecked} />
          <label htmlFor={id} style={{ cursor: "pointer" }}>
            我已阅读并同意用户协议
          </label>
        </Space.Flex>

        <div
          style={{
            padding: 16,
            backgroundColor: "#f5f5f5",
            borderRadius: 8,
            fontFamily: "monospace",
            fontSize: 14,
          }}
        >
          IAgree: {String(checked)}
        </div>
      </Space.Flex>
    );
  },
};

export const UncontrolledExample: Story = {
  name: "Uncontrolled Example",
  tags: ["!dev"],
  parameters: {
    layout: "centered",
  },
  render: function RenderStory() {
    const [submittedValue, setSubmittedValue] = React.useState<boolean | null>(null);
    const formRef = React.useRef<HTMLFormElement>(null);
    const id = React.useId();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const IAgree = formData.get("IAgree") === "on";
      console.log({ IAgree });
      setSubmittedValue(IAgree);
    };

    const handleReset = () => {
      setSubmittedValue(null);
      formRef.current?.reset();
    };

    return (
      <Space.Flex column spacing={24} style={{ padding: 24, maxWidth: 400 }}>
        <form ref={formRef} onSubmit={handleSubmit} onReset={handleReset}>
          <Space.Flex column spacing={16}>
            <Space.Flex spacing={8}>
              <FormFieldCheckbox id={id} name="IAgree" defaultChecked={true} />
              <label htmlFor={id} style={{ cursor: "pointer" }}>
                我已阅读并同意用户协议
              </label>
            </Space.Flex>

            <Space.Flex spacing={12}>
              <Button type="submit" text="Submit" />
              <Button type="reset" text="Reset" variant="outlined" />
            </Space.Flex>
          </Space.Flex>
        </form>

        {submittedValue !== null && (
          <div
            style={{
              backgroundColor: "#f5f5f5",
              borderRadius: 8,
              fontFamily: "monospace",
              fontSize: 14,
            }}
          >
            IAgree: {String(submittedValue)}
          </div>
        )}
      </Space.Flex>
    );
  },
};
