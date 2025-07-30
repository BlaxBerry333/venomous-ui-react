import type { Meta, StoryObj } from "@storybook/react";

import { BreakPointName, ThemeBreakPoint, ThemeColor } from "@/utils";
import { Container } from ".";
import { Space } from "../Space";
import { Typography } from "../Typography";

const meta = {
  title: "components/Container/Container",
  component: Container,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the container",
      control: false,
      table: { type: { summary: "React.ReactNode" } },
    },
    breakpoint: {
      description: "The breakpoint of the container",
      control: { type: "select" },
      options: Object.values(BreakPointName),
      table: { type: { summary: `"xs"|"sm"|"md"|"lg"|"xl"|"xxl"` }, defaultValue: { summary: '"lg"' } },
    },
  },
  args: {
    children: null,
    breakpoint: BreakPointName.lg,
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <Container breakpoint={args.breakpoint} style={{ border: "0.1px solid grey" }}>
        <Space.Flex column gap={16} style={{ backgroundColor: ThemeColor.EmeraldMamba }}>
          <Typography.Text as="strong" text={`BreakPointName: ${args.breakpoint}`} />
          {args.breakpoint && <Typography.Text text={`max-width: ${ThemeBreakPoint[args.breakpoint]}px`} />}
        </Space.Flex>
      </Container>
    );
  },
};
