import React from "react";

import { ArgTypes, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@/components/Icon";
import { Menu } from "@/components/Menu";
import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { Layout } from ".";
import { Box } from "../Box";
import { IconButton, ScrollToTop } from "../Buttons";
import { default as LayoutHeaderComponent } from "./LayoutHeader.component";

const meta = {
  title: "components/Layout",
  component: LayoutHeaderComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>布局组件系列</Subtitle>

          <Markdown>
            {`
用于构建经典的页面布局结构，包含 \`<Layout.Header>\`、\`<Layout.Side>\`、\`<Layout.Footer>\`。

所有组件能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Heading>Examples</Heading>

          <Subtitle>
            <code>{BasicLayout.name}</code>
          </Subtitle>
          <Markdown>{BasicLayout.parameters?.docs?.description?.story}</Markdown>
          <Source language="tsx" dark code={BasicLayout.parameters?.docs?.source?.code} />

          <Subtitle>
            <code>{WithSidebar.name}</code>
          </Subtitle>
          <Markdown>{WithSidebar.parameters?.docs?.description?.story}</Markdown>
          <Source language="tsx" dark code={WithSidebar.parameters?.docs?.source?.code} />

          <Subtitle>
            <code>{CollapsibleSidebar.name}</code>
          </Subtitle>
          <Markdown>{CollapsibleSidebar.parameters?.docs?.description?.story}</Markdown>
          <Source language="tsx" dark code={CollapsibleSidebar.parameters?.docs?.source?.code} />

          <Heading>API</Heading>
          <Subtitle>
            <code>{`<Layout.Header>`}</code>
          </Subtitle>
          <ArgTypes of={Layout.Header} />

          <Subtitle>
            <code>{`<Layout.Side>`}</code>
          </Subtitle>
          <ArgTypes of={Layout.Side} />

          <Subtitle>
            <code>{`<Layout.Footer>`}</code>
          </Subtitle>
          <ArgTypes of={Layout.Footer} />
        </>
      ),
    },
  },
} satisfies Meta<typeof LayoutHeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicLayout: Story = {
  name: "Header + Footer",
  argTypes: {
    Logo: { control: false, table: { disable: true } },
    Menu: { control: false, table: { disable: true } },
    style: { control: false, table: { disable: true } },
    children: { control: false, table: { disable: true } },
    showProgressBar: { control: false, table: { disable: true } },
    ProgressBarProps: { control: false, table: { disable: true } },
  },
  render: function RenderStory() {
    const HEADER_HEIGHT: number = 60;

    return (
      <>
        <Layout.Header
          style={{ height: HEADER_HEIGHT, padding: "0 16px" }}
          showProgressBar
          ProgressBarProps={{ color: "#4CAF50" }}
          Logo={<Typography.Title text="My App" />}
          Menu={
            <Space.Flex spacing={24} style={{ height: "100%", justifyContent: "flex-end", flex: 1 }}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </Space.Flex>
          }
        />

        {/* main content */}
        <Box
          as="main"
          style={{
            minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
            paddingTop: HEADER_HEIGHT,
          }}
        >
          {/* content */}
          <Box style={{ padding: "16px 16px" }}>
            <Typography.Title text="Main Content" />
            <Typography.Paragraph text="Scroll down to see the ScrollToTop button..." />
            <div style={{ height: "150vh" }} />
          </Box>

          <ScrollToTop distance={200} style={{ bottom: HEADER_HEIGHT }} />

          {/* footer */}
          <Layout.Footer
            style={{ minHeight: HEADER_HEIGHT }}
            Copyright={<Typography.Text text={`© ${new Date().getFullYear()} My Company. All rights reserved.`} />}
            Links={
              <Space.Flex spacing={16} style={{ height: "100%", justifyContent: "flex-end", flex: 1 }}>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
              </Space.Flex>
            }
          />
        </Box>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "基础布局结构：固定 Header + 滚动 Content + Footer。Content 区域内置 ScrollToTop 按钮。",
      },
      source: {
        code: `
"use client";

import { Theme, Layout, Box, Space, Typography } from "venomous-ui-react/components";

const HEADER_HEIGHT: number = 60;

function App() {
  return (
    <Theme.Provider>
      {/* header */}
      <Layout.Header
        showProgressBar
        ProgressBarProps={{ color: "#4CAF50" }}
        style={{ height: HEADER_HEIGHT, padding: "0 16px" }}
        Logo={() => <Typography.Title text="My App" />}
        Menu={() => (
          <Space.Flex spacing={24} style={{ height: "100%", justifyContent: "flex-end", flex: 1 }}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </Space.Flex>
        )}
      />

      {/* main content */}
      <Box
        as="main"
        style={{
          height: \`calc(100vh - \${HEADER_HEIGHT}px)\`,
          paddingTop: \`\${HEADER_HEIGHT + 16}px\`,
        }}
      >
        {/* content */}
        <Box style={{ padding: "0px 16px" }}>
          <Typography.Title text="Main Content" />
          <Typography.Paragraph text="Scroll down to see the ScrollToTop button..." />
          <div style={{ height: "150vh" }} />
        </Box>

        <ScrollToTop distance={200} style={{ bottom: HEADER_HEIGHT }} />

        {/* footer */}
        <Layout.Footer
          style={{ minHeight: HEADER_HEIGHT }}
          Copyright={<Typography.Text text={\`© \${new Date().getFullYear()} My Company. All rights reserved.\`} />}
          Links={
            <Space.Flex spacing={16} style={{ height: "100%", justifyContent: "flex-end", flex: 1 }}>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </Space.Flex>
          }
        />
      </Box>
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};

export const WithSidebar: Story = {
  name: "Header + Footer + Side",
  argTypes: BasicLayout.argTypes,
  render: function RenderStory() {
    const HEADER_HEIGHT: number = 60;
    const SIDE_WIDTH: number = 280;

    return (
      <>
        {/* header */}
        <Layout.Header
          showProgressBar
          ProgressBarProps={{ color: "#4CAF50" }}
          style={{ height: HEADER_HEIGHT, padding: "0 16px" }}
          Logo={<Typography.Title text="My App" />}
          Menu={
            <Space.Flex spacing={24} style={{ height: "100%", justifyContent: "flex-end", flex: 1 }}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </Space.Flex>
          }
        />

        {/* main content */}
        <Space.Flex style={{ paddingTop: HEADER_HEIGHT }}>
          {/* sidebar */}
          <Layout.Side
            style={{
              top: HEADER_HEIGHT,
              height: `calc(100vh - ${HEADER_HEIGHT}px)`,
              width: SIDE_WIDTH,
            }}
            renderMenu={() => (
              <Menu.List spacing={8} style={{ padding: 8 }}>
                <Menu.Item
                  Icon={<Icon icon="solar:home-linear" />}
                  label="Home"
                  onClick={() => alert("Home clicked")}
                />
                <Menu.Item
                  Icon={<Icon icon="solar:chart-linear" />}
                  label="Analytics"
                  onClick={() => alert("Analytics clicked")}
                />
                <Menu.Item
                  Icon={<Icon icon="solar:settings-linear" />}
                  label="Settings"
                  onClick={() => alert("Settings clicked")}
                />
              </Menu.List>
            )}
          />

          {/* main content */}
          <Box
            as="main"
            style={{
              minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
              flexGrow: 1,
              marginLeft: SIDE_WIDTH,
            }}
          >
            {/* content */}
            <Box style={{ padding: "16px 16px" }}>
              <Typography.Title text="Main Content" />
              <Typography.Paragraph text="Scroll down to see the ScrollToTop button..." />
              <div style={{ height: "150vh" }} />
            </Box>

            <ScrollToTop distance={200} style={{ bottom: HEADER_HEIGHT }} />

            {/* footer */}
            <Layout.Footer
              style={{ minHeight: HEADER_HEIGHT }}
              Copyright={<Typography.Text text={`© ${new Date().getFullYear()} My Company. All rights reserved.`} />}
              Links={
                <Space.Flex spacing={16} style={{ height: "100%", justifyContent: "flex-end", flex: 1 }}>
                  <a href="#privacy">Privacy Policy</a>
                  <a href="#terms">Terms of Service</a>
                </Space.Flex>
              }
            />
          </Box>
        </Space.Flex>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "带固定侧边栏的布局：Header + 固定 Side + Content + Footer。Side 使用 fixed 定位，滚动时保持在屏幕左侧。",
      },
      source: {
        code: `
"use client";

import { Theme, Layout, Space, Typography, Menu, Icon } from "venomous-ui-react/components";

const HEADER_HEIGHT: number = 60;
const SIDE_WIDTH: number = 280;

function App() {
  return (
    <Theme.Provider>
      {/* header */}
      <Layout.Header
        showProgressBar
        ProgressBarProps={{ color: "#4CAF50" }}
        style={{ height: HEADER_HEIGHT, padding: "0 16px" }}
        Logo={<Typography.Title text="My App" />}
        Menu={
          <Space.Flex spacing={24} style={{ height: "100%", justifyContent: "flex-end", flex: 1 }}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </Space.Flex>
        }
      />

      {/* main content */}
      <Space.Flex style={{ paddingTop: HEADER_HEIGHT }}>
        {/* sidebar */}
        <Layout.Side
          style={{
            top: HEADER_HEIGHT,
            height: \`calc(100vh - \${HEADER_HEIGHT}px)\`,
            width: SIDE_WIDTH,
          }}
          renderMenu={() => (
            <Menu.List spacing={8} style={{ padding: 8 }}>
              <Menu.Item
                Icon={<Icon icon="solar:home-linear" />}
                label="Home"
                onClick={() => alert("Home clicked")}
              />
              <Menu.Item
                Icon={<Icon icon="solar:chart-linear" />}
                label="Analytics"
                onClick={() => alert("Analytics clicked")}
              />
              <Menu.Item
                Icon={<Icon icon="solar:settings-linear" />}
                label="Settings"
                onClick={() => alert("Settings clicked")}
              />
            </Menu.List>
          )}
        />

        {/* main content */}
        <Box
          as="main"
          style={{
            minHeight: \`calc(100vh - \${HEADER_HEIGHT}px)\`,
            flexGrow: 1,
            marginLeft: SIDE_WIDTH,
          }}
        >
          {/* content */}
          <Box style={{ padding: "16px 16px" }}>
            <Typography.Title text="Main Content" />
            <Typography.Paragraph text="Scroll down to see the ScrollToTop button..." />
            <div style={{ height: "150vh" }} />
          </Box>

          <ScrollToTop distance={200} style={{ bottom: HEADER_HEIGHT }} />
          
          {/* footer */}
          <Layout.Footer
            style={{ minHeight: HEADER_HEIGHT }}
            Copyright={<Typography.Text text={\`© \${new Date().getFullYear()} My Company. All rights reserved.\`} />}
            Links={
              <Space.Flex spacing={16} style={{ height: "100%", justifyContent: "flex-end", flex: 1 }}>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
              </Space.Flex>
            }
          />
        </Box>
      </Space.Flex>
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};

export const CollapsibleSidebar: Story = {
  name: "Header + Footer + Collapsible Side",
  argTypes: BasicLayout.argTypes,
  render: function RenderStory() {
    const HEADER_HEIGHT: number = 60;
    const SIDE_EXPANDED_WIDTH: number = 280;
    const SIDE_COLLAPSED_WIDTH: number = 80;

    const [collapsed, setCollapsed] = React.useState(false);

    return (
      <>
        {/* header */}
        <Layout.Header
          style={{
            height: HEADER_HEIGHT,
            padding: "0 16px",
            backgroundColor: "transparent",
            backdropFilter: "blur(10px)",
          }}
          Logo={<Typography.Title text="My App" />}
          Menu={
            <Space.Flex spacing={24} style={{ height: "100%", justifyContent: "flex-end", flex: 1 }}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </Space.Flex>
          }
        />

        {/* main content */}
        <Space.Flex style={{ paddingTop: HEADER_HEIGHT }}>
          {/* sidebar */}
          <Layout.Side
            expandedWidth={SIDE_EXPANDED_WIDTH}
            collapsedWidth={SIDE_COLLAPSED_WIDTH}
            collapsible
            collapsed={collapsed}
            onCollapsedChange={setCollapsed}
            renderCollapseButton={(isCollapsed, toggle) => (
              <IconButton
                icon={isCollapsed ? "solar:arrow-right-bold" : "solar:arrow-left-bold"}
                shape="square"
                onClick={toggle}
                style={{ position: "absolute", top: 8, right: 0, transform: "translateX(50%)", zIndex: 101 }}
              />
            )}
            renderMenu={(isCollapsed) => (
              <Menu.List spacing={8} style={{ padding: 8 }}>
                <Menu.Item
                  Icon={<Icon icon="solar:home-linear" />}
                  label={isCollapsed ? undefined : "Home"}
                  onClick={() => alert("Home")}
                />
                <Menu.Item
                  Icon={<Icon icon="solar:chart-linear" />}
                  label={isCollapsed ? undefined : "Analytics"}
                  onClick={() => alert("Analytics")}
                />
                <div style={{ height: "300vh" }} />
              </Menu.List>
            )}
            style={{
              top: HEADER_HEIGHT,
              height: `calc(100dvh - ${HEADER_HEIGHT}px)`,
            }}
          />

          {/* main content */}
          <Box
            as="main"
            style={{
              minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
              flexGrow: 1,
              marginLeft: collapsed ? SIDE_COLLAPSED_WIDTH : SIDE_EXPANDED_WIDTH,
              transition: "margin-left 0.25s ease-in-out",
            }}
          >
            {/* content */}
            <Box style={{ padding: "16px 16px" }}>
              <Typography.Title text="Main Content" />
              <Typography.Paragraph text="Scroll down to see the ScrollToTop button..." />
              <div style={{ height: "150vh" }} />
            </Box>

            <ScrollToTop distance={200} style={{ bottom: HEADER_HEIGHT }} />

            {/* footer */}
            <Layout.Footer
              style={{ minHeight: HEADER_HEIGHT, padding: "8px 16px" }}
              Copyright={<Typography.Text text={`© ${new Date().getFullYear()} My Company. All rights reserved.`} />}
              Links={
                <Space.Flex spacing={16} style={{ height: "100%", justifyContent: "flex-end", flex: 1 }}>
                  <a href="#privacy">Privacy Policy</a>
                  <a href="#terms">Terms of Service</a>
                </Space.Flex>
              }
            />
          </Box>
        </Space.Flex>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "可折叠侧边栏的布局：Side 支持展开/折叠切换，可自定义展开宽度和折叠宽度。折叠时菜单项 label 可选择隐藏。",
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, Layout, Space, Typography, Menu, Icon } from "venomous-ui-react/components";

const HEADER_HEIGHT: number = 60;
const SIDE_EXPANDED_WIDTH: number = 280;
const SIDE_COLLAPSED_WIDTH: number = 80;

function App() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Theme.Provider>
      {/* header */}
      <Layout.Header
        style={{
          height: HEADER_HEIGHT,
          padding: "0 16px",
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
        }}
        Logo={<Typography.Title text="My App" />}
        Menu={
          <Space.Flex spacing={24} style={{ height: "100%", justifyContent: "flex-end", flex: 1 }}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </Space.Flex>
        }
      />

      {/* main content */}
      <Space.Flex style={{ paddingTop: HEADER_HEIGHT }}>
        {/* sidebar */}
        <Layout.Side
          expandedWidth={SIDE_EXPANDED_WIDTH}
          collapsedWidth={SIDE_COLLAPSED_WIDTH}
          collapsible
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
          renderCollapseButton={(isCollapsed, toggle) => (
            <IconButton
              icon={isCollapsed ? "solar:arrow-right-bold" : "solar:arrow-left-bold"}
              shape="square"
              onClick={toggle}
              style={{ position: "absolute", top: 8, right: 0, transform: "translateX(50%)", zIndex: 101 }}
            />
          )}
          renderMenu={(isCollapsed) => (
            <Menu.List spacing={8} style={{ padding: 8 }}>
              <Menu.Item
                Icon={<Icon icon="solar:home-linear" />}
                label={isCollapsed ? undefined : "Home"}
                onClick={() => alert("Home")}
              />
              <Menu.Item
                Icon={<Icon icon="solar:chart-linear" />}
                label={isCollapsed ? undefined : "Analytics"}
                onClick={() => alert("Analytics")}
              />
              <div style={{ height: "300vh" }} />
            </Menu.List>
          )}
          style={{
            top: HEADER_HEIGHT,
            height: \`calc(100dvh - \${HEADER_HEIGHT}px)\`,
          }}
        />

        {/* main content */}
        <Box
          as="main"
          style={{
            minHeight: \`calc(100vh - \${HEADER_HEIGHT}px)\`,
            flexGrow: 1,
            marginLeft: collapsed ? SIDE_COLLAPSED_WIDTH : SIDE_EXPANDED_WIDTH,
            transition: "margin-left 0.25s ease-in-out",
          }}
        >
          {/* content */}
          <Box style={{ padding: "16px 16px" }}>
            <Typography.Title text="Main Content" />
            <Typography.Paragraph text="Scroll down to see the ScrollToTop button..." />
            <div style={{ height: "150vh" }} />
          </Box>

          <ScrollToTop distance={200} style={{ bottom: HEADER_HEIGHT }} />

          {/* footer */}
          <Layout.Footer
            style={{ minHeight: HEADER_HEIGHT, padding: "8px 16px" }}
            Copyright={<Typography.Text text={\`© \${new Date().getFullYear()} My Company. All rights reserved.\`} />}
            Links={
              <Space.Flex spacing={16} style={{ height: "100%", justifyContent: "flex-end", flex: 1 }}>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
              </Space.Flex>
            }
          />
        </Box>
      </Space.Flex>
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};
