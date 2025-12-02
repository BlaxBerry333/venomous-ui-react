import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Buttons";
import { FORM_FIELD_VARIANT_MAP } from "@/components/Form/_";
import { Icon } from "@/components/Icon";
import { Space } from "@/components/Space";
import { FormFieldSelect, type FormFieldSelectOption } from ".";

const __FRUITS_OPTIONS: FormFieldSelectOption<string>[] = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Watermelon", value: "watermelon" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Mango", value: "mango" },
  { label: "Peach", value: "peach" },
  { label: "CherryxxxxxxxxxxxxCherryxxxxxxxxxxxxCherryxxxxxxxxxxxxCherryxxxxxxxxxxxx", value: "cherry" },
];

const __PLATFORM_OPTIONS: FormFieldSelectOption<string>[] = [
  {
    label: "GitHub",
    value: "github",
    StartIcon: <Icon icon="mdi:github" />,
    subLabel: "Most popular",
  },
  {
    label: "GitLab",
    value: "gitlab",
    StartIcon: <Icon icon="mdi:gitlab" />,
    subLabel: "Self-hosted available",
  },
  {
    label: "Bitbucket",
    value: "bitbucket",
    StartIcon: <Icon icon="mdi:bitbucket" />,
  },
  {
    label: "Azure DevOps",
    value: "azure",
    StartIcon: <Icon icon="mdi:microsoft-azure-devops" />,
    subLabel: "Enterprise",
  },
];

const meta = {
  title: "components/Form/Fields/<FormField.Select>",
  component: FormFieldSelect,
  tags: ["autodocs"],
  argTypes: {
    options: {
      description: "The options of the select dropdown.",
      type: { name: "other", value: "FormFieldSelectOption[]", required: true },
      table: {
        type: { summary: "FormFieldSelectOption[]" },
      },
      control: false,
    },
    value: {
      description: "The value of the select ( controlled mode ).",
      type: { name: "other", value: "T" },
      table: {
        type: { summary: "T" },
      },
      control: false,
    },
    defaultValue: {
      description: "The default value of the select ( uncontrolled mode ). If not provided, value is empty string.",
      type: { name: "other", value: "T" },
      table: {
        type: { summary: "T" },
        defaultValue: { summary: "undefined" },
      },
      control: false,
    },
    onChange: {
      description: "The callback function that is called when the value of the select changes.",
      type: { name: "function" },
      table: {
        category: "Events",
        type: { summary: "(value: T, option: FormFieldSelectOption<T>) => void" },
      },
      control: false,
    },
    maxDropdownHeight: {
      description: "The maximum height of the dropdown ( px ).",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "300" },
      },
      control: { type: "number" },
    },
    variant: {
      description: "The variant of the select.",
      type: { name: "other", value: `${Object.values(FORM_FIELD_VARIANT_MAP).join(" | ")}` },
      table: {
        type: { summary: `${Object.values(FORM_FIELD_VARIANT_MAP).join(" | ")}` },
        defaultValue: { summary: `"${FORM_FIELD_VARIANT_MAP.OUTLINED}"` },
      },
      control: { type: "radio" },
      options: Object.values(FORM_FIELD_VARIANT_MAP),
    },
    error: {
      description: "Whether the select is in error state.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    disabled: {
      description: "Whether the select is disabled.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    fullWidth: {
      description: "Whether the input should take full width.",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    wrapperClassName: {
      description: "The className of the wrapper element (for advanced use).",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
      },
      control: false,
    },
    wrapperStyle: {
      description: "The style of the wrapper element (for advanced use).",
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
          <Subtitle>下拉选择框组件</Subtitle>

          <Markdown>
            {` 
用于处理单选与多选下拉框中的项目。

继承自内置组件 \`<Popover>\` + \`<Space.Flex>\` + \`<Icon>\` + \`<Menu>\` + 原生 \`<select>\`，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import React from "react";
import { Theme, FormField } from "venomous-ui-react/components";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

function App() {
  const [value, setValue] = React.useState<string>("");
  const [values, setValues] = React.useState<string[]>([]);

  return (
    <Theme.Provider>
      <FormField.Select
        options={options}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        placeholder="Select a fruit..."
      />

      <FormField.Select
        multiple
        options={options}
        value={values}
        onChange={(newValues) => setValues(newValues)}
        placeholder="Select fruits..."
      />

      <div>Selected Value: {value || "(none)"}</div>
      <div>Selected Values: {values.join(", ") || "(none)"}</div>
    </Theme.Provider>
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

          <Subtitle>
            <code>{MultipleSelectExample.name}</code>
          </Subtitle>
          <Description of={MultipleSelectExample} />
          <Canvas
            of={MultipleSelectExample}
            sourceState="hidden"
            source={{ code: MultipleSelectExample.parameters?.docs?.source?.code }}
          />

          <Subtitle>
            <code>{WithIconsExample.name}</code>
          </Subtitle>
          <Description of={WithIconsExample} />
          <Canvas
            of={WithIconsExample}
            sourceState="hidden"
            source={{ code: WithIconsExample.parameters?.docs?.source?.code }}
          />

          <Heading>API</Heading>
          <ArgTypes />
        </>
      ),
    },
  },
} satisfies Meta<typeof FormFieldSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  decorators: [
    (Story) => (
      <div style={{ paddingTop: "25%", paddingLeft: "10px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: "Select a fruit...",
    variant: "outlined",
    multiple: false,
    required: false,
    error: false,
    disabled: false,
    fullWidth: false,
    maxDropdownHeight: 300,
    defaultValue: __FRUITS_OPTIONS[1].value,
    options: __FRUITS_OPTIONS,
  },
};

export const ControlledExample: Story = {
  name: "Controlled Mode",
  tags: ["!dev"],
  args: {
    options: [],
  },
  render: function RenderStory() {
    const [value, setValue] = React.useState<string>("");

    return (
      <Space.Flex column spacing={24} style={{ padding: 24, maxWidth: 400 }}>
        <FormFieldSelect options={__FRUITS_OPTIONS} value={value} onChange={setValue} placeholder="Select a fruit..." />

        <div
          style={{
            padding: 16,
            backgroundColor: "#f5f5f5",
            borderRadius: 8,
            fontFamily: "monospace",
            fontSize: 14,
          }}
        >
          Selected: {value || "(none)"}
        </div>
      </Space.Flex>
    );
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "受控模式示例：使用 React state 管理选中值，通过 value 和 onChange 控制。",
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, FormField } from "venomous-ui-react/components";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

function App() {
  const [value, setValue] = React.useState<string>("");

  return (
    <Theme.Provider>
      <FormField.Select
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Select a fruit..."
      />
      <div>Selected: {value || "(none)"}</div>
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
  tags: ["!dev"],
  args: {
    options: [],
  },
  render: function RenderStory() {
    const [submittedData, setSubmittedData] = React.useState<string | null>(null);
    const formRef = React.useRef<HTMLFormElement>(null);

    const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const fruit = formData.get("fruit") as string;
      setSubmittedData(fruit);
    }, []);

    const handleReset = React.useCallback(() => {
      setSubmittedData(null);
      formRef.current?.reset();
    }, []);

    return (
      <Space.Flex column spacing={24} style={{ padding: 24, maxWidth: 400 }}>
        <form ref={formRef} onSubmit={handleSubmit}>
          <Space.Flex column spacing={16}>
            <FormFieldSelect
              name="fruit"
              options={__FRUITS_OPTIONS}
              defaultValue="banana"
              placeholder="Select a fruit..."
            />

            <Space.Flex spacing={12}>
              <Button type="button" onClick={handleReset} variant="outlined" text="清空" />
              <Button type="submit" text="提交" />
            </Space.Flex>
          </Space.Flex>
        </form>

        {submittedData && (
          <div
            style={{
              padding: 16,
              backgroundColor: "#f5f5f5",
              borderRadius: 8,
              fontFamily: "monospace",
              fontSize: 14,
            }}
          >
            Submitted: {submittedData}
          </div>
        )}
      </Space.Flex>
    );
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "非受控模式示例：使用原生 form + name 属性，通过 FormData API 获取值，支持 reset 和 submit。不需要 useState 管理状态。",
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, Space, Button, FormField } from "venomous-ui-react/components";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

function App() {
  const [submittedData, setSubmittedData] = React.useState<string | null>(null);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fruit = formData.get("fruit") as string;
    setSubmittedData(fruit);
  };

  const handleReset = () => {
    setSubmittedData(null);
    formRef.current?.reset();
  };

  return (
    <Theme.Provider>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Space.Flex column spacing={16}>
          <FormField.Select
            name="fruit"
            options={options}
            defaultValue="banana"
            placeholder="Select a fruit..."
          />

          <Space.Flex spacing={12}>
            <Button type="button" onClick={handleReset} variant="outlined" text="清空" />
            <Button type="submit" text="提交" />
          </Space.Flex>
        </Space.Flex>
      </form>

      {submittedData && <div>Submitted: {submittedData}</div>}
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};

export const MultipleSelectExample: Story = {
  name: "Multiple Select Mode",
  tags: ["!dev"],
  args: {
    options: [],
  },
  render: function RenderStory() {
    const [values, setValues] = React.useState<string[]>([]);

    const handleClear = () => {
      setValues([]);
    };

    const handleSubmit = () => {
      const data = { fruits: values };
      alert(`${JSON.stringify(data, null, 2)}`);
    };

    return (
      <Space.Flex column spacing={24} style={{ padding: 24, maxWidth: 400 }}>
        <FormFieldSelect
          multiple
          options={__FRUITS_OPTIONS}
          value={values}
          onChange={setValues}
          placeholder="Select fruits..."
          fullWidth
        />

        <div
          style={{
            padding: 16,
            backgroundColor: "#f5f5f5",
            borderRadius: 8,
            fontFamily: "monospace",
            fontSize: 14,
          }}
        >
          Selected: {values.join(", ") || "(none)"}
        </div>

        <Space.Flex spacing={8}>
          <Button variant="outlined" onClick={handleClear} text="清空" />
          <Button onClick={handleSubmit} text="提交" />
        </Space.Flex>
      </Space.Flex>
    );
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "多选模式示例：设置 multiple={true} 启用多选，value 和 onChange 使用数组类型。",
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, Space, Button, FormField } from "venomous-ui-react/components";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
];

function App() {
  const [values, setValues] = React.useState<string[]>([]);

  const handleClear = () => {
    setValues([]);
  };

  const handleSubmit = () => {
    const data = { fruits: values };
    alert(\`\${JSON.stringify(data, null, 2)}\`);
  };

  return (
    <Theme.Provider>
      <Space.Flex column spacing={16}>
        <FormField.Select
          multiple
          options={options}
          value={values}
          onChange={setValues}
          placeholder="Select fruits..."
          fullWidth
        />

        <div>Selected: {values.join(", ") || "(none)"}</div>

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

export const WithIconsExample: Story = {
  name: "With Icons & SubLabel",
  tags: ["!dev"],
  args: {
    options: [],
  },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
  render: function RenderStory() {
    const [multiple, setMultiple] = React.useState<boolean>(false);
    const [singleValue, setSingleValue] = React.useState<string>("");
    const [multipleValues, setMultipleValues] = React.useState<string[]>([]);

    const handleToggleMultiple = () => {
      setMultiple((prev) => !prev);
      // 切换模式时重置选中值
      setSingleValue("");
      setMultipleValues([]);
    };

    const displayValue = multiple ? multipleValues.join(", ") || "(none)" : singleValue || "(none)";

    return (
      <Space.Flex column spacing={24} style={{ padding: 24, maxWidth: 400 }}>
        {/* 模式切换器 */}
        <Space.Flex spacing={8} style={{ width: "auto" }}>
          <Button
            text="Single"
            variant={!multiple ? "contained" : "outlined"}
            onClick={() => !multiple || handleToggleMultiple()}
          />
          <Button
            text="Multiple"
            variant={multiple ? "contained" : "outlined"}
            onClick={() => multiple || handleToggleMultiple()}
          />
        </Space.Flex>

        {/* FormFieldSelect */}
        {multiple ? (
          <FormFieldSelect
            multiple
            options={__PLATFORM_OPTIONS}
            value={multipleValues}
            onChange={setMultipleValues}
            placeholder="Select platforms..."
            fullWidth
          />
        ) : (
          <FormFieldSelect
            options={__PLATFORM_OPTIONS}
            value={singleValue}
            onChange={setSingleValue}
            placeholder="Select a platform..."
            fullWidth
          />
        )}

        <div
          style={{
            padding: 16,
            backgroundColor: "#f5f5f5",
            borderRadius: 8,
            fontFamily: "monospace",
            fontSize: 14,
          }}
        >
          Mode: {multiple ? "Multiple" : "Single"}
          <br />
          Selected: {displayValue}
        </div>
      </Space.Flex>
    );
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story:
          "带图标和副标签的选项示例：选择项 option 支持 `StartIcon`、`EndIcon`、`subLabel` 等 `<Menu.Item>` 的属性，可以自定义选项的显示内容。选中项会在 `EndIcon` 位置显示对应的选中图标（单选为勾选，多选为 checkbox）。",
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, FormField, Icon } from "venomous-ui-react/components";

const options = [
  {
    label: "GitHub",
    value: "github",
    StartIcon: <Icon icon="mdi:github" />,
    subLabel: "Most popular",
  },
  {
    label: "GitLab",
    value: "gitlab",
    StartIcon: <Icon icon="mdi:gitlab" />,
    subLabel: "Self-hosted available",
  },
  {
    label: "Bitbucket",
    value: "bitbucket",
    StartIcon: <Icon icon="mdi:bitbucket" />,
  },
  {
    label: "Azure DevOps",
    value: "azure",
    StartIcon: <Icon icon="mdi:microsoft-azure-devops" />,
    subLabel: "Enterprise",
  },
];

function App() {
  const [value, setValue] = React.useState<string>("");

  return (
    <Theme.Provider>
      <FormField.Select
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Select a platform..."
      />
      <div>Selected: {value || "(none)"}</div>
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};
