import type { Meta, StoryObj } from "@storybook/react";

import { FormField } from ".";
import { Space } from "../Space";
import { LabelPositionMap } from "./index.types";

const meta = {
  title: "components/Form/FormField.Radio",
  component: FormField.Radio,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  decorators: [
    (Story) => (
      <Space.Flex row style={{ padding: "16px" }}>
        <Story />
      </Space.Flex>
    ),
  ],
  argTypes: {
    fullWidth: {
      description: "The width of the form field",
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
    onChange: {
      description: "The function to be called when the form field is changed",
      control: false,
      table: { category: "Events", type: { summary: "React.ChangeEventHandler<HTMLInputElement>" } },
    },
    labelPosition: {
      description: "The position of the label",
      control: { type: "select" },
      options: Object.values(LabelPositionMap),
      table: { type: { summary: '"top"|"left"|"right' }, defaultValue: { summary: '"right"' } },
    },
    options: {
      description: "The options of the form field",
      control: false,
      table: { type: { summary: "FormFieldOption[]" } },
    },
  },
  args: {
    fullWidth: false,
    required: false,
    disabled: false,
    name: "name",
    label: "Label",
    labelPosition: "right",
    onChange: (e) => console.log(e.target.value),
    // value: "a",
    options: [
      { label: "Option a", value: "a" },
      { label: "Option b", value: "b", disabled: true },
      { label: "Option c", value: "c" },
    ],
  },
} satisfies Meta<typeof FormField.Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
