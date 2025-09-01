import type { Meta, StoryObj } from "@storybook/react";

import { BREAK_POINT_NAMES } from "@/utils";
import { Layout } from ".";
import { Space } from "../Space";

const meta = {
  title: "components/Layout/LayoutSample 1",
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
        <Space.Flex row gap={0}>
          <Layout.Side>
            <div style={{ height: "200vh", backgroundColor: "crimson" }} />
          </Layout.Side>
          <Space.Flex column gap={0}>
            <Layout.Content>
              <div style={{ height: "200vh", backgroundColor: "pink" }} />
            </Layout.Content>
            <Layout.Footer>
              <div style={{ height: "100%", backgroundColor: "orange" }} />
            </Layout.Footer>
          </Space.Flex>
        </Space.Flex>
      </Layout.Provider>
    );
  },
};
