import type { Meta, StoryObj } from "@storybook/react";

import { Space } from ".";
import { Card } from "../Card";

const meta = {
  title: "components/Space/Space.Grid",
  component: Space.Grid,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the flex container",
      control: false,
      table: { type: { summary: "React.ReactNode" } },
    },
    columns: {
      description: "The number of columns",
      control: { type: "number", min: 0 },
      table: { type: { summary: "number | Record<BreakPointName, number>" }, defaultValue: { summary: "1" } },
    },
    spacing: {
      description: "The spacing between the flex items",
      control: { type: "number", min: 0 },
      table: { type: { summary: "number | Record<BreakPointName, number>" }, defaultValue: { summary: "16px" } },
    },
  },
  args: {
    children: null,
    columns: 1,
    spacing: 16,
  },
} satisfies Meta<typeof Space.Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <Space.Grid {...args}>
        <Card style={{ backgroundColor: "red" }}>A</Card>
        <Card style={{ flex: 1, backgroundColor: "skyblue" }}>B</Card>
        <Card style={{ backgroundColor: "cadetblue" }}>C</Card>
        <Card style={{ backgroundColor: "orange " }}>D</Card>
        <Card style={{ flex: 1, backgroundColor: "thistle " }}>E</Card>
        <Card style={{ backgroundColor: "yellow" }}>F</Card>
      </Space.Grid>
    );
  },
};
