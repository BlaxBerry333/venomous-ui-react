import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Buttons";
import { FormField } from "@/components/Form";
import { Space } from "@/components/Space";
import { default as SpaceFlexStoriesMeta } from "@/components/Space/SpaceFlex.stories";
import { FormControl } from "./index";

const meta = {
  title: "components/Form/<FormControl>",
  component: FormControl,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "The label text.",
      type: { name: "string" },
      table: { type: { summary: "string" } },
      control: { type: "text" },
    },
    children: {
      description: "Render prop for the field element. Receives the auto-generated id.",
      type: { name: "function" },
      table: {
        type: { summary: "(id: string) => React.ReactNode" },
      },
      control: false,
    },
    message: {
      description: "The helper text or error message.",
      type: { name: "string" },
      table: { type: { summary: "string" } },
      control: { type: "text" },
    },
    required: {
      description: "Whether the field is required (adds * to label).",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    isError: {
      description: "Whether the field is in error state (red label & message).",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    disabled: {
      description: "Whether the field is disabled (gray label & message).",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    column: {
      ...SpaceFlexStoriesMeta.argTypes.column,
      table: {
        ...SpaceFlexStoriesMeta.argTypes.column.table,
        defaultValue: { summary: "true" },
      },
    },
    spacing: {
      ...SpaceFlexStoriesMeta.argTypes.spacing,
      table: {
        ...SpaceFlexStoriesMeta.argTypes.spacing.table,
        defaultValue: { summary: "4" },
      },
    },
    reverse: {
      description: "Whether to reverse label and field position when `column` is true.",
      type: { name: "boolean" },
      if: { arg: "column" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    className: {
      description: "The className of the wrapper element (for advanced use).",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: false,
    },
    style: {
      description: "The style of the wrapper element (for advanced use).",
      type: { name: "other", value: "React.CSSProperties" },
      table: {
        type: { summary: "React.CSSProperties" },
      },
      control: false,
    },
  },
  parameters: {
    layout: "padded",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>表单控件包装器组件</Subtitle>

          <Markdown>
            {`
用于包裹 \`FormField\` 表单控件，提供 label 和 message 的统一布局。

能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, FormControl, FormField } from "venomous-ui-react/components";

function App() {
  return (
    <FormControl 
      label="Email"
      message="请输入您的邮箱"
      required
      disabled={false}
      isError={false}
    >
      {(id) => <FormField.Text id={id} name="email" placeholder="you@example.com" fullWidth />}
    </FormControl>
  );
}
  `.trim()}
          />

          <Heading>Examples</Heading>

          <Subtitle>
            <code>{ControlledExample.name}</code>
          </Subtitle>
          <Description of={ControlledExample} />
          <Canvas
            of={ControlledExample}
            sourceState="hidden"
            source={{ code: ControlledExample.parameters?.docs?.source?.code }}
          />

          <Subtitle>
            <code>{UncontrolledExample.name}</code>
          </Subtitle>
          <Description of={UncontrolledExample} />
          <Canvas
            of={UncontrolledExample}
            sourceState="hidden"
            source={{ code: UncontrolledExample.parameters?.docs?.source?.code }}
          />

          <Heading>API</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    label: "Username",
    message: "请输入您的用户名",
    children: () => null,
    required: false,
    disabled: false,
    isError: false,
    column: true,
    reverse: false,
    spacing: 4,
  },
  decorators: [
    (Story) => (
      <div style={{ marginTop: "25%" }}>
        <Story />
      </div>
    ),
  ],
  render: function RenderStory(args) {
    return (
      <FormControl {...args}>
        {(id) => <div key={id} style={{ height: 40, width: 300, backgroundColor: "grey" }} />}
      </FormControl>
    );
  },
};

export const ControlledExample: Story = {
  name: "Controlled Mode",
  argTypes: {
    label: { control: false, table: { disable: true } },
    message: { control: false, table: { disable: true } },
    children: { control: false, table: { disable: true } },
    required: { control: false, table: { disable: true } },
    disabled: { control: false, table: { disable: true } },
    isError: { control: false, table: { disable: true } },
    column: { control: false, table: { disable: true } },
    reverse: { control: false, table: { disable: true } },
    spacing: { control: false, table: { disable: true } },
    className: { control: false, table: { disable: true } },
    style: { control: false, table: { disable: true } },
  },
  args: {
    children: () => null,
  },
  render: function RenderStory() {
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [agreed, setAgreed] = React.useState(false);

    const emailError = email.length > 0 && !email.includes("@");
    const usernameError = username.length > 0 && username.length < 3;

    const countryOptions = [
      { label: "中国", value: "CN" },
      { label: "美国", value: "US" },
      { label: "日本", value: "JP" },
    ];

    const handleClear = () => {
      setEmail("");
      setUsername("");
      setCountry("");
      setAgreed(false);
    };

    const handleSubmit = () => {
      const data = {
        email,
        username,
        country,
        agreed,
      };
      alert(`${JSON.stringify(data, null, 2)}`);
    };

    return (
      <Space.Flex column spacing={16}>
        <FormControl
          label="Email"
          message={emailError ? "请输入有效的邮箱地址" : "请输入您的邮箱"}
          required
          isError={emailError}
        >
          {(id) => (
            <FormField.Text
              id={id}
              value={email}
              onChange={setEmail}
              error={emailError}
              placeholder="you@example.com"
              fullWidth
            />
          )}
        </FormControl>

        <FormControl
          label="Username"
          message={usernameError ? "用户名至少需要 3 个字符" : "请输入您的用户名"}
          required
          isError={usernameError}
        >
          {(id) => (
            <FormField.Text
              id={id}
              value={username}
              onChange={setUsername}
              error={usernameError}
              placeholder="Enter username..."
              fullWidth
            />
          )}
        </FormControl>

        <FormControl label="国家/地区" message="请选择您所在的国家或地区" required>
          {(id) => (
            <FormField.Select
              id={id}
              value={country}
              onChange={setCountry}
              options={countryOptions}
              placeholder="请选择..."
              fullWidth
            />
          )}
        </FormControl>

        <FormControl label="同意服务条款 ( 请阅读并同意我们的服务条款 )" required reverse column={false}>
          {(id) => <FormField.Checkbox id={id} checked={agreed} onChange={setAgreed} />}
        </FormControl>

        <Space.Flex spacing={8}>
          <Button variant="outlined" onClick={handleClear} text="清空" />
          <Button onClick={handleSubmit} text="提交" />
        </Space.Flex>
      </Space.Flex>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "受控模式示例：使用 React state 管理每个表单字段的值，通过 value/checked 和 onChange 控制。",
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, Space, Button, FormControl, FormField } from "venomous-ui-react/components";

const countryOptions = [
  { label: "中国", value: "CN" },
  { label: "美国", value: "US" },
  { label: "日本", value: "JP" },
];


function App() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [agreed, setAgreed] = React.useState(false);

  const emailError = email.length > 0 && !email.includes("@");
  const usernameError = username.length > 0 && username.length < 3;

  const handleClear = () => {
    setEmail("");
    setUsername("");
    setCountry("");
    setAgreed(false);
  };

  const handleSubmit = () => {
    const data = { email, username, country, agreed };
    alert(\`\${JSON.stringify(data, null, 2)}\`);
  };

  return (
    <Theme.Provider>
      <Space.Flex column spacing={16}>
        <FormControl
          label="Email"
          message={emailError ? "请输入有效的邮箱地址" : "请输入您的邮箱"}
          required
          isError={emailError}
        >
          {(id) => (
            <FormField.Text
              id={id}
              value={email}
              onChange={setEmail}
              error={emailError}
              placeholder="you@example.com"
              fullWidth
            />
          )}
        </FormControl>

        <FormControl
          label="Username"
          message={usernameError ? "用户名至少需要 3 个字符" : "请输入您的用户名"}
          required
          isError={usernameError}
        >
          {(id) => (
            <FormField.Text
              id={id}
              value={username}
              onChange={setUsername}
              error={usernameError}
              placeholder="Enter username..."
              fullWidth
            />
          )}
        </FormControl>

        <FormControl label="国家/地区" message="请选择您所在的国家或地区" required>
          {(id) => (
            <FormField.Select
              id={id}
              value={country}
              onChange={setCountry}
              options={countryOptions}
              placeholder="请选择..."
              fullWidth
            />
          )}
        </FormControl>

        <FormControl label="同意服务条款 ( 请阅读并同意我们的服务条款 )" required reverse column={false}>
          {(id) => <FormField.Checkbox id={id} checked={agreed} onChange={setAgreed} />}
        </FormControl>

        <Space.Flex spacing={8}>
          <Button variant="outlined" onClick={handleClear} text="清空" />
          <Button onClick={handleSubmit} text="提交" />
        </Space.Flex>
      </Space.Flex>
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};

export const UncontrolledExample: Story = {
  name: "Uncontrolled Mode",
  argTypes: ControlledExample.argTypes,
  args: ControlledExample.args,
  render: function RenderStory() {
    const formRef = React.useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = {
        email: formData.get("email"),
        username: formData.get("username"),
        country: formData.get("country"),
        agreed: formData.get("agreed") === "on",
      };
      alert(`\n${JSON.stringify(data, null, 2)}`);
    };

    const handleReset = () => {
      formRef.current?.reset();
    };

    const countryOptions = [
      { label: "中国", value: "CN" },
      { label: "美国", value: "US" },
      { label: "日本", value: "JP" },
    ];

    return (
      <form ref={formRef} onSubmit={handleSubmit}>
        <Space.Flex column spacing={16}>
          <FormControl label="Email" message="请输入您的邮箱" required>
            {(id) => <FormField.Text id={id} name="email" placeholder="you@example.com" fullWidth />}
          </FormControl>

          <FormControl label="Username" message="请输入您的用户名" required>
            {(id) => <FormField.Text id={id} name="username" placeholder="Enter username..." fullWidth />}
          </FormControl>

          <FormControl label="国家/地区" message="请选择您所在的国家或地区" required>
            {(id) => (
              <FormField.Select
                id={id}
                name="country"
                options={countryOptions}
                placeholder="请选择..."
                fullWidth
                // defaultValue={"US"}
              />
            )}
          </FormControl>

          <FormControl label="同意服务条款 ( 请阅读并同意我们的服务条款 )" required reverse column={false}>
            {(id) => <FormField.Checkbox id={id} name="agreed" />}
          </FormControl>

          <Space.Flex spacing={8}>
            <Button type="reset" variant="outlined" text="清空 ( by reset )" />
            <Button type="button" onClick={handleReset} variant="outlined" text="清空 ( by ref )" />
            <Button type="submit" text="提交" />
          </Space.Flex>
        </Space.Flex>
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "非受控模式示例：使用原生 form + name 属性，通过 FormData API 获取值，支持 reset 和 submit。不需要 useState 管理状态。",
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, FormControl, FormField } from "venomous-ui-react/components";


const countryOptions = [
  { label: "中国", value: "CN" },
  { label: "美国", value: "US" },
  { label: "日本", value: "JP" },
];

function App() {
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      username: formData.get("username"),
      country: formData.get("country"),
      agreed: formData.get("agreed") === "on",
    };
    alert(\`\${JSON.stringify(data, null, 2)}\`);
  };

  const handleReset = () => {
    formRef.current?.reset();
  };

  return (
    <Theme.Provider>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Space.Flex column spacing={16}>
          <FormControl label="Email" message="请输入您的邮箱" required>
            {(id) => <FormField.Text id={id} name="email" placeholder="you@example.com" fullWidth />}
          </FormControl>

          <FormControl label="Username" message="请输入您的用户名" required>
            {(id) => <FormField.Text id={id} name="username" placeholder="Enter username..." fullWidth />}
          </FormControl>

          <FormControl label="国家/地区" message="请选择您所在的国家或地区" required>
            {(id) => (
              <FormField.Select
                id={id}
                name="country"
                options={countryOptions}
                placeholder="请选择..."
                fullWidth
              />
            )}
          </FormControl>

          <FormControl label="同意服务条款 ( 请阅读并同意我们的服务条款 )" required reverse column={false}>
            {(id) => <FormField.Checkbox id={id} name="agreed" />}
          </FormControl>

          <Space.Flex spacing={8}>
            <Button type="reset" variant="outlined" text="清空 ( by reset )" />
            <Button type="button" onClick={handleReset} variant="outlined" text="清空 ( by ref )" />
            <Button type="submit" text="提交" />
          </Space.Flex>
        </Space.Flex>
      </form>
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};
