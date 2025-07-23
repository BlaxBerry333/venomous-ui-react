import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";
import { Notification, notify } from "./index";

const meta = {
  title: "components/Notification/Notification + notify",
  component: Notification,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    position: {
      description: "The position of the notification",
      control: { type: "select" },
      options: ["top-left", "top-right", "bottom-left", "bottom-right", "top-center", "bottom-center"],
      table: {
        type: { summary: `"top-left"|"top-right"|"bottom-left"|"bottom-right"|"top-center"|"bottom-center"` },
        defaultValue: { summary: "top-center" },
      },
    },
    offset: {
      description: "The offset of the notification from the edge of the screen",
      control: { type: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "0" } },
    },
    collapsable: {
      description: "Whether the notification is collapsable",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
  },
  args: {
    position: "top-center",
    offset: 0,
    collapsable: false,
  },
} satisfies Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <>
        <Notification position="top-center" offset={0} collapsable={false} {...args} />

        <Button
          text="Show Notification"
          onClick={() => {
            notify({ type: "success", title: "Success", description: "..." });
            notify({ type: "error", title: "Error", description: "..." });
            notify({ type: "warning", title: "Warning", description: "..." });
            notify({ type: "info", title: "Info", description: "..." });
          }}
        />
      </>
    );
  },
};
