import type { Meta, StoryObj } from "@storybook/react";

import { BREAK_POINT_NAMES, THEME_BREAKPOINTS, THEME_COLORS } from "@/utils";
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
    maxBreakpoint: {
      description: "The max breakpoint of the container",
      control: { type: "select" },
      options: Object.values(BREAK_POINT_NAMES),
      table: { type: { summary: `"xs"|"sm"|"md"|"lg"|"xl"|"xxl"` }, defaultValue: { summary: '"lg"' } },
    },
  },
  args: {
    children: null,
    maxBreakpoint: BREAK_POINT_NAMES.lg,
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <Container maxBreakpoint={args.maxBreakpoint} style={{ border: "0.1px solid grey" }}>
        <Space.Flex column gap={16} style={{ backgroundColor: THEME_COLORS.EmeraldMamba }}>
          <Typography.Text as="strong" text={`BreakPointName: ${args.maxBreakpoint}`} />
          {args.maxBreakpoint && <Typography.Text text={`max-width: ${THEME_BREAKPOINTS[args.maxBreakpoint]}px`} />}
        </Space.Flex>
      </Container>
    );
  },
};
