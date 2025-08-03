import type { Meta, StoryObj } from "@storybook/react";

import { FormField } from ".";
import { Button } from "../Button";
import { Space } from "../Space";
import Form from "./Form";

const meta = {
  title: "components/Form/Form",
  component: Form,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <Space.Flex row style={{ width: "300px" }}>
        <Story />
      </Space.Flex>
    ),
  ],
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the form",
      control: false,
      table: { type: { summary: "React.ReactNode" } },
    },
    gap: {
      description: "The gap between the children of the form",
      control: { type: "number", min: 0 },
      table: { type: { summary: "number" }, defaultValue: { summary: "8" } },
    },
    onSubmit: {
      description: "The function to be called when the form is submitted",
      control: false,
      table: { category: "Events", type: { summary: "React.FormEventHandler<HTMLFormElement>" } },
    },
    onReset: {
      description: "The function to be called when the form is reset",
      control: false,
      table: { category: "Events", type: { summary: "React.FormEventHandler<HTMLFormElement>" } },
    },
  },
  args: {
    children: null,
    gap: 8,
    onSubmit: undefined,
    onReset: undefined,
  },
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <Form
        {...args}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit");
        }}
        onReset={(e) => {
          e.preventDefault();
          console.log("reset");
        }}
      >
        <FormField.Text name="a" label="A" fullWidth />
        <FormField.Text name="b" label="B" fullWidth helpText="Something you need to know" />
        <FormField.Text name="c" label="C" fullWidth isError helpText="Something went wrong, please try again" />
        <FormField.Text name="d" label="D" required />
        <FormField.Text name="e" label="E" helpText="Something went wrong, please try again" />
        <FormField.Text name="f" label="F" disabled value="Disabled" />
        <Space.Flex row>
          <Button type="submit" text="Submit" />
          <Button type="reset" text="Reset" />
        </Space.Flex>
      </Form>
    );
  },
};
