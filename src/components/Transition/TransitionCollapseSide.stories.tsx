import type { Meta, StoryObj } from "@storybook/react";

import { Transitions } from ".";
import { Menu } from "../Menu";

const meta = {
  title: "components/Transition/Transitions.CollapseSide",
  component: Transitions.CollapseSide,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    storageKey: {
      description: "The key to store the collapse state in local storage",
      control: { type: "text" },
      table: { type: { summary: "string" }, defaultValue: { summary: "VENOMOUS_UI__TRANSITION_COLLAPSE_SIDE" } },
    },
    expandSideWidth: {
      description: "The width of the expanded side",
      control: { type: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "200" } },
    },
    collapsedSideWidth: {
      description: "The width of the collapsed side",
      control: { type: "number" },
      table: { type: { summary: "number" }, defaultValue: { summary: "60" } },
    },
    renderContent: {
      description: "The content to be rendered inside the collapse side",
      control: false,
      type: { name: "string", required: true },
      table: { type: { summary: "React.ReactNode" } },
    },
  },
  args: {
    storageKey: "VENOMOUS_UI__TRANSITION_COLLAPSE_SIDE",
    expandSideWidth: 200,
    collapsedSideWidth: 60,
    renderContent: () => null,
  },
} satisfies Meta<typeof Transitions.CollapseSide>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <Transitions.CollapseSide
        {...args}
        style={{
          height: "500px",
          top: 0,
        }}
        renderContent={(params) => (
          <Menu.List
            className={params.className}
            style={{ ...params.baseStyles, width: "100%", height: "100%", padding: "8px", border: "1px solid grey" }}
          >
            <Menu.Item id="Item 1" icon="solar:basketball-bold-duotone" text="Item 1" />
            <Menu.Item id="Item 2" icon="solar:basketball-bold-duotone" text="Item 2" subText="Item 2 sub text" />
            <Menu.Item id="Item 3" icon="solar:basketball-bold-duotone" text="Item 3" />
            <div style={{ height: "100vh", backgroundColor: "crimson" }} />
          </Menu.List>
        )}
      />
    );
  },
};
