import type { Meta, StoryObj } from "@storybook/react";

import { FormField } from ".";
import { Space } from "../Space";
import { LabelPositionMap } from "./index.types";

const meta = {
  title: "components/Form/FormField.Checkbox",
  component: FormField.Checkbox,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  decorators: [
    (Story) => (
      <Space.Flex style={{ padding: "16px" }}>
        <Story />
      </Space.Flex>
    ),
  ],
  argTypes: {
    checked: {
      description: "Whether the form field is checked",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    isError: {
      description: "Whether the form field is in error state",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    required: {
      description: "Whether the form field is required",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    disabled: {
      description: "Whether the form field is disabled",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    autoComplete: {
      table: { disable: true },
    },
    name: {
      description: "The name of the form field",
      control: { type: "text" },
      table: { type: { summary: "string" } },
    },
    label: {
      description: "The label of the form field",
      control: { type: "text" },
      table: { type: { summary: "string" } },
    },
    labelPosition: {
      description: "The position of the label",
      control: { type: "select" },
      options: Object.values(LabelPositionMap),
      table: { type: { summary: '"top"|"left"|"right' }, defaultValue: { summary: '"right"' } },
    },
    onChange: {
      description: "The function to be called when the form field is changed",
      control: false,
      table: { category: "Events", type: { summary: "React.ChangeEventHandler<HTMLInputElement>" } },
    },
  },
  args: {
    checked: false,
    isError: false,
    required: false,
    disabled: false,
    name: "name",
    label: "Label",
    labelPosition: "right",
    onChange: (e) => console.log(e.target.checked),
  },
} satisfies Meta<typeof FormField.Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
