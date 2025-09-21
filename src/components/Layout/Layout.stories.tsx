import type { Meta, StoryObj } from "@storybook/react";

import { BREAK_POINT_NAMES } from "@/utils";
import React from "react";
import { Layout } from ".";
import { Buttons } from "../Button";
import { Space } from "../Space";

const meta = {
  title: "components/Layout/Layout",
  component: Layout.Provider,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  args: {
    children: null,
  },
} satisfies Meta<typeof Layout.Provider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LayoutSample1: Story = {
  name: "Default",
  render: function RenderStory() {
    return (
      <Layout.Provider maxBreakpoint={BREAK_POINT_NAMES.xl} headerHeight={60} footerHeight={80} sideWidth={300}>
        <Layout.Header>
          <div style={{ height: "100%", backgroundColor: "skyblue" }} />
        </Layout.Header>
        <Space.Flex gap={0}>
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

export const LayoutSample2: Story = {
  name: "Default",
  render: function RenderStory() {
    return (
      <Layout.Provider maxBreakpoint={BREAK_POINT_NAMES.sm} headerHeight={60} footerHeight={80}>
        <Layout.Header>
          <div style={{ height: "100%", backgroundColor: "skyblue" }} />
        </Layout.Header>
        <Layout.Content>
          <div style={{ height: "200vh", backgroundColor: "pink" }} />
        </Layout.Content>
        <Layout.Footer>
          <div style={{ height: "100%", backgroundColor: "orange" }} />
        </Layout.Footer>
      </Layout.Provider>
    );
  },
};

export const LayoutSample3: Story = {
  name: "Default",
  render: function RenderStory() {
    const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);
    const toggleCollapsed = React.useCallback(
      () => React.startTransition(() => setIsCollapsed((s) => !s)),
      [isCollapsed],
    );
    return (
      <Layout.Provider maxBreakpoint={BREAK_POINT_NAMES.xl} headerHeight={60} footerHeight={80} sideWidth={300}>
        <Layout.Header>
          <div style={{ height: "100%", backgroundColor: "skyblue" }} />
        </Layout.Header>

        <Space.Flex gap={0}>
          <Layout.CollapseSide
            collapsedSideWidth={60}
            renderContent={() => <div style={{ height: "200vh", backgroundColor: "crimson" }} />}
          />
          <Space.Flex column gap={0}>
            <Layout.Content style={{ position: "relative" }}>
              <Buttons.Icon
                icon="ion:menu"
                iconWidth={24}
                onClick={toggleCollapsed}
                style={{ position: "absolute", bottom: 60, left: 0, transform: "translateX(-50%)", zIndex: 1 }}
              />
              <div style={{ height: "200vh", backgroundColor: "pink" }} />
            </Layout.Content>
          </Space.Flex>
        </Space.Flex>
      </Layout.Provider>
    );
  },
};
