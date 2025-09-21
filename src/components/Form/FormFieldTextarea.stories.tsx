import type { Meta, StoryObj } from "@storybook/react";

import { FormField } from ".";
import { Space } from "../Space";

const meta = {
  title: "components/Form/FormField.Textarea",
  component: FormField.Textarea,
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
    rows: {
      description: "The number of rows of the form field",
      control: { type: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "3" } },
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
    rows: 3,
    name: "name",
    label: "Label",
    helpText: "Help text",
    onChange: (e) => console.log(e.target.value),
  },
} satisfies Meta<typeof FormField.Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
