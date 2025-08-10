import type { Meta, StoryObj } from "@storybook/react";

import { BreakPointName } from "@/utils";
import { Layout } from ".";

const meta = {
  title: "components/Layout/LayoutSample 3",
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
      // eslint-disable-next-line react-x/no-context-provider
      <Layout.Provider maxBreakpoint={BreakPointName.sm} headerHeight={60} footerHeight={80}>
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
