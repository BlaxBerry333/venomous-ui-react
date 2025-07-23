import type { Meta, StoryObj } from "@storybook/react";

import { BreakPoint, BreakPointWidth } from "@/utils";
import { Container } from ".";
import { Typography } from "../Typography";

const meta = {
  title: "components/Container/Container",
  component: Container,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the portal",
      control: false,
      table: { type: { summary: "React.ReactNode" } },
    },
    breakpoint: {
      description: "The breakpoint of the container",
      control: { type: "select" },
      options: Object.values(BreakPoint),
      table: { type: { summary: `"xs"|"sm"|"md"|"lg"|"xl"|"xxl"` }, defaultValue: { summary: "lg" } },
    },
  },
  args: {
    children: null,
    breakpoint: "lg",
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <Container {...args}>
        <div
          style={{
            backgroundColor: "skyblue",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography.Text color="grey" as="strong" text={`BreakPoint: ${args.breakpoint}`} />
          {args.breakpoint && (
            <Typography.Text color="grey" text={`max-width: ${BreakPointWidth[args.breakpoint]}px`} />
          )}
        </div>
      </Container>
    );
  },
};
