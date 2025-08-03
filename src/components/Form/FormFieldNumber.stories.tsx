import type { Meta, StoryObj } from "@storybook/react";

import { FormField } from ".";
import { Space } from "../Space";

const meta = {
  title: "components/Form/FormField.Number",
  component: FormField.Number,
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
    helpText: {
      description: "The help text of the form field",
      control: { type: "text" },
      table: { type: { summary: "string" } },
    },
    onChange: {
      description: "The function to be called when the form field is changed",
      control: false,
      table: { category: "Events", type: { summary: "React.ChangeEventHandler<HTMLInputElement>" } },
    },
  },
  args: {
    fullWidth: false,
    isError: false,
    required: false,
    disabled: false,
    name: "name",
    label: "Label",
    helpText: "Help text",
    onChange: (e) => console.log(e.target.value, e.target.valueAsNumber),
  },
} satisfies Meta<typeof FormField.Number>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
