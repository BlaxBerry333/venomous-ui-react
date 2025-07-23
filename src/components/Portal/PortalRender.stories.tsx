import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../Typography";
import { Portal } from "./index";

const meta = {
  title: "components/Portal/Portal.Render",
  component: Portal.Render,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the portal",
      control: false,
      table: { type: { summary: "React.ReactNode" } },
    },
    targetElementID: {
      description: "The ID of the target element where the content should be rendered",
      control: false,
      type: { name: "string", required: true },
    },
  },
  args: {
    children: null,
    targetElementID: "",
  },
} satisfies Meta<typeof Portal.Render>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory() {
    const PORTAL_TARGET_ID = "xxxxxx";

    return (
      <>
        <div id={PORTAL_TARGET_ID} />

        <Portal.Render targetElementID={PORTAL_TARGET_ID}>
          <Typography.Paragraph>xxx</Typography.Paragraph>
        </Portal.Render>
      </>
    );
  },
};
