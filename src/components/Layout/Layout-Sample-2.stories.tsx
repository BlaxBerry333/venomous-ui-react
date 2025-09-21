import type { Meta, StoryObj } from "@storybook/react";

import { BREAK_POINT_NAMES } from "@/utils";
import { Layout } from ".";
import { Menu } from "../Menu";
import { Space } from "../Space";

const meta = {
  title: "components/Layout/LayoutSample 2",
  component: Layout.Provider,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  args: {
    children: null,
  },
} satisfies Meta<typeof Layout.Provider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  name: "Sample",
  render: function RenderStory() {
    return (
      <Layout.Provider maxBreakpoint={BREAK_POINT_NAMES.xl} headerHeight={60} footerHeight={80} sideWidth={300}>
        <Layout.Header>
          <div style={{ height: "100%", backgroundColor: "skyblue" }} />
        </Layout.Header>

        <Space.Flex gap={0}>
          <Layout.CollapseSide
            collapsedSideWidth={56}
            renderContent={(params) => (
              <Menu.List
                className={params.className}
                style={{ ...params.baseStyles, width: "100%", height: "100%", padding: "8px" }}
              >
                <Menu.Item id="Item 1" icon="solar:basketball-bold-duotone" text="Item 1" />
                <Menu.Item id="Item 2" icon="solar:basketball-bold-duotone" text="Item 2" subText="Item 2 sub text" />
                <Menu.Item id="Item 3" icon="solar:basketball-bold-duotone" text="Item 3" />
                <div style={{ height: "100vh", backgroundColor: "crimson" }} />
              </Menu.List>
            )}
          />

          <Space.Flex column gap={0}>
            <Layout.Content style={{ position: "relative" }}>
              <div style={{ height: "200vh", backgroundColor: "pink" }} />
            </Layout.Content>
          </Space.Flex>
        </Space.Flex>
      </Layout.Provider>
    );
  },
};
