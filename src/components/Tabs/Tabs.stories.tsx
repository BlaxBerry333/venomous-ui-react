import React from "react";

import { ArgTypes, Canvas, Description, Heading, Markdown, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/components/Badge";
import { Box } from "@/components/Box";
import { Button } from "@/components/Buttons";
import { Icon } from "@/components/Icon";
import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { Tabs, type TabsTabProps } from ".";

const meta = {
  title: "components/Tabs",
  component: Tabs.Container,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>选项卡组件</Subtitle>

          <Markdown>
            {`
用于在多个内容面板之间切换。包含 \`<Tabs.Container>\`、\`<Tabs.TabList>\`、\`<Tabs.Tab>\`、 \`<Tabs.TabPanel>\`。

继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。
`}
          </Markdown>

          <Heading>Usage</Heading>
          <Markdown>{`主要有 3 种实现方式，可根据需求自行组合使用。`}</Markdown>

          <Subtitle>
            <code>方式1. {WithContainerExample.name}</code>
          </Subtitle>
          <Description of={WithContainerExample} />
          <Canvas
            of={WithContainerExample}
            sourceState="hidden"
            source={{
              code: WithContainerExample.parameters?.docs?.source?.code,
            }}
          />

          <Subtitle>
            <code>方式2. {WithTabList.name}</code>
          </Subtitle>
          <Description of={WithTabList} />
          <Canvas
            of={WithTabList}
            sourceState="hidden"
            source={{
              code: WithTabList.parameters?.docs?.source?.code,
            }}
          />

          <Subtitle>
            <code>方式3. {WithTabComponentExample.name}</code>
          </Subtitle>
          <Description of={WithTabComponentExample} />
          <Canvas
            of={WithTabComponentExample}
            sourceState="hidden"
            source={{
              code: WithTabComponentExample.parameters?.docs?.source?.code,
            }}
          />

          <Heading>{KeepMountedExample.name}</Heading>
          <Description of={KeepMountedExample} />
          <Canvas
            of={KeepMountedExample}
            sourceState="hidden"
            source={{
              code: KeepMountedExample.parameters?.docs?.source?.code,
            }}
          />

          <Heading>{DynamicTabsExample.name}</Heading>
          <Description of={DynamicTabsExample} />
          <Canvas
            of={DynamicTabsExample}
            sourceState="hidden"
            source={{
              code: DynamicTabsExample.parameters?.docs?.source?.code,
            }}
          />

          <Heading>API</Heading>
          <Subtitle>
            <code>{`<Tabs.Container>`}</code>
          </Subtitle>
          <ArgTypes of={meta} />

          <Subtitle>
            <code>{`<Tabs.TabList>`}</code>
          </Subtitle>
          <ArgTypes of={Tabs.TabList} />

          <Subtitle>
            <code>{`<Tabs.Tab>`}</code>
          </Subtitle>
          <ArgTypes of={Tabs.Tab} />

          <Subtitle>
            <code>{`<Tabs.TabPanel>`}</code>
          </Subtitle>
          <ArgTypes of={Tabs.TabPanel} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Tabs.Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================
// 使用方式一：Tabs.Container（最简单）
// ============================
export const WithContainerExample: Story = {
  name: "<Tabs.Container>",
  argTypes: {
    activeTabValue: { control: false, table: { disable: true } },
    onTabChange: { control: false, table: { disable: true } },
    items: { control: false, table: { disable: true } },
    style: { control: false, table: { disable: true } },
    TabListStyle: { control: false, table: { disable: true } },
    TabPanelStyle: { control: false, table: { disable: true } },
    TabStyle: { control: false, table: { disable: true } },
  },
  args: {
    activeTabValue: "tab1",
    onTabChange: () => {},
    items: [],
    column: false,
  },
  render: function RenderStory(args) {
    const [activeTab, setActiveTab] = React.useState<string>("tab1");

    return (
      <Tabs.Container
        style={{ height: 200 }}
        TabListStyle={args.column ? { width: 150 } : { height: 50 }}
        TabPanelStyle={{ backgroundColor: "pink" }}
        activeTabValue={activeTab}
        onTabChange={(value) => setActiveTab(String(value))}
        column={args.column}
        items={[
          {
            value: "tab1",
            label: "Tab1",
            content: <div>Content 1</div>,
          },
          {
            value: "tab2",
            label: "Tab2",
            disabled: true,
            content: <div>Content 2</div>,
          },
          {
            value: "tab3",
            label: "Tab3",
            prefix: <Icon icon="solar:chat-line-linear" />,
            suffix: <Badge text="99+" />,
            content: <div>Content 3</div>,
          },
          {
            value: "tab4",
            label: "Tab4",
            content: <div>Content 4</div>,
            color: "#4caf50",
          },
          {
            value: "tab5",
            label: "Tab5",
            content: <div>Content 5</div>,
            color: "#2196f3",
          },
        ]}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "通过 `<Tabs.Container>` 组件可以以最简单的方式实现 Tabs。<br/>需要给容器设置一个明确固定的 `height` 否则其内容无法自动填充空间。",
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, Tabs, Icon, Badge } from "venomous-ui-react/components";

function App() {
  const [activeTab, setActiveTab] = React.useState<string>("home");
  const column = false;

  return (
    <Theme.Provider>
      <Tabs.Container
        style={{ height: 200 }}
        TabListStyle={column ? { width: 150 } : { height: 50 }}
        TabPanelStyle={{ backgroundColor: "pink" }}
        activeTabValue={activeTab}
        onTabChange={(value) => setActiveTab(String(value))}
        column={column}
        items={[
          {
            value: "tab1",
            label: "Tab1",
            content: <div>Content 1</div>,
          },
          {
            value: "tab2",
            label: "Tab2",
            disabled: true,
            content: <div>Content 2</div>,
          },
          {
            value: "tab3",
            label: "Tab3",
            prefix: <Icon icon="solar:chat-line-linear" />,
            suffix: <Badge text="99+" />,
            content: <div>Content 3</div>,
          },
          {
            value: "tab4",
            label: "Tab4",
            content: <div>Content 4</div>,
            color: "#4caf50",
          },
          {
            value: "tab5",
            label: "Tab5",
            content: <div>Content 5</div>,
            color: "#2196f3",
          },
        ]}
      />
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};

// ============================
// 使用方式二：Tabs.TabList（中等灵活）
// ============================
export const WithTabList: Story = {
  name: "<Tabs.TabList> + <Tabs.TabPanel>",
  tags: ["!dev"],
  argTypes: WithContainerExample.argTypes,
  args: WithContainerExample.args,
  render: function RenderStory(args) {
    const [activeTab, setActiveTab] = React.useState<string>("tab1");

    return (
      <Space.Flex column={!args.column} style={{ height: 200 }}>
        <Tabs.TabList
          style={{ ...(args.column ? { width: 150, height: "100%" } : { height: 50 }) }}
          column={args.column}
          spacing={4}
          activeTabValue={activeTab}
          onTabChange={(value) => setActiveTab(String(value))}
          tabs={[
            {
              value: "tab1",
              label: "Tab 1",
            },
            {
              value: "tab2",
              label: "Tab 2",
              disabled: true,
            },
            {
              value: "tab3",
              label: "Tab 3",
              prefix: <Icon icon="solar:chat-line-linear" />,
              suffix: <Badge text="99+" />,
            },
            {
              value: "tab4",
              label: "Tab4",
              color: "#4caf50",
            },
            {
              value: "tab5",
              label: "Tab5",
              color: "#2196f3",
            },
          ]}
        />

        <div style={{ flex: 1, height: "100%", width: "100%", backgroundColor: "pink" }}>
          <Tabs.TabPanel visible={activeTab === "tab1"}>
            <div>Content 1</div>
          </Tabs.TabPanel>
          <Tabs.TabPanel visible={activeTab === "tab2"}>
            <div>Content 2</div>
          </Tabs.TabPanel>
          <Tabs.TabPanel visible={activeTab === "tab3"}>
            <div>Content 3</div>
          </Tabs.TabPanel>
        </div>
      </Space.Flex>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "使用 `<Tabs.TabList>` + `<Tabs.Panel>` + `<Space.Flex>` 的方式也可以实现 Tabs。<br/>要记得给最外层的容器 `<Space.Flex>` 设置一个明确固定的 `height` 否则其内容无法自动填充空间。",
      },
      source: {
        code: `
"use client";

import React from "react";
import { Tabs, Space, Icon, Badge, Theme, type TabsTabProps } from "venomous-ui-react/components";

function App() {
  const [activeTab, setActiveTab] = React.useState<string>("tab1");
  const column = false;

  const tabs: Array<TabsTabProps> = [
    { value: "tab1", label: "Tab 1" },
    { value: "tab2", label: "Tab 2", disabled: true },
    { value: "tab3", label: "Tab 3", prefix: <Icon icon="solar:chat-line-linear" />, suffix: <Badge text="99+" /> },
    { value: "tab4", label: "Tab4", color: "#4caf50" },
    { value: "tab5", label: "Tab5", color: "#2196f3" },
  ];

  return (
    <Theme.Provider>
      <Space.Flex column={!column} style={{ height: 200 }}>
        <Tabs.TabList
          style={column ? { width: 150, height: "100%" } : { height: 50 }}
          column={column}
          spacing={4}
          activeTabValue={activeTab}
          onTabChange={(value) => setActiveTab(String(value))}
          tabs={[
            { value: "tab1", label: "Tab 1" },
            { value: "tab2", label: "Tab 2", disabled: true },
            { value: "tab3", label: "Tab 3", prefix: <Icon icon="solar:chat-line-linear" />, suffix: <Badge text="99+" /> },
            { value: "tab4", label: "Tab4", color: "#4caf50" },
            { value: "tab5", label: "Tab5", color: "#2196f3" },
          ]}
        />

        <div style={{ flex: 1, height: "100%", width: "100%", backgroundColor: "pink" }}>
          <Tabs.TabPanel visible={activeTab === "tab1"}>
            <div>Content 1</div>
          </Tabs.TabPanel>
          <Tabs.TabPanel visible={activeTab === "tab2"}>
            <div>Content 2</div>
          </Tabs.TabPanel>
          <Tabs.TabPanel visible={activeTab === "tab3"}>
            <div>Content 3</div>
          </Tabs.TabPanel>
        </div>
      </Space.Flex>
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};

// ============================
// 使用方式三：Tabs.Tab（最灵活）
// ============================
export const WithTabComponentExample: Story = {
  name: "<Tabs.Tab> + <Tabs.TabPanel>",
  tags: ["!dev"],
  argTypes: WithContainerExample.argTypes,
  args: WithContainerExample.args,
  render: function RenderStory(args) {
    const [activeTab, setActiveTab] = React.useState<string>("tab1");
    const tabs: Array<TabsTabProps> = [
      {
        value: "tab1",
        label: "Tab 1",
      },
      {
        value: "tab2",
        label: "Tab 2",
        disabled: true,
      },
      {
        value: "tab3",
        label: "Tab 3",
        prefix: <Icon icon="solar:chat-line-linear" />,
        suffix: <Badge text="99+" />,
      },
      {
        value: "tab4",
        label: "Tab4",
        color: "#4caf50",
      },
      {
        value: "tab5",
        label: "Tab5",
        color: "#2196f3",
      },
    ];

    return (
      <Space.Flex column={!args.column} style={{ height: 200 }}>
        <Space.Flex
          column={args.column}
          spacing={4}
          style={{ ...(args.column ? { width: 150, height: "100%" } : { height: 50 }) }}
        >
          {tabs.map((tab) => (
            <Tabs.Tab
              key={tab.value}
              value={tab.value}
              label={tab.label}
              column={args.column}
              spacing={4}
              selected={activeTab === tab.value}
              disabled={tab.disabled}
              prefix={tab.prefix}
              suffix={tab.suffix}
              color={tab.color}
              onClick={() => setActiveTab(String(tab.value))}
            />
          ))}
        </Space.Flex>

        <div style={{ flex: 1, height: "100%", width: "100%", backgroundColor: "pink" }}>
          <Tabs.TabPanel visible={activeTab === "tab1"}>
            <div>Content 1</div>
          </Tabs.TabPanel>
          <Tabs.TabPanel visible={activeTab === "tab2"}>
            <div>Content 2</div>
          </Tabs.TabPanel>
          <Tabs.TabPanel visible={activeTab === "settings"}>
            <div>Settings</div>
          </Tabs.TabPanel>
        </div>
      </Space.Flex>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "使用 `<Tabs.Tab>` + `<Tabs.Panel>` + `<Space.Flex>` 的方式也可以实现 Tabs。<br/>要记得给最外层的容器 `<Space.Flex>` 设置一个明确固定的 `height` 否则其内容无法自动填充空间。",
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, Tabs, Icon, Badge, Space, type TabsTabProps } from "venomous-ui-react/components";

function App() {
    const [activeTab, setActiveTab] = React.useState<string>("tab1");
    const column = false;

    const tabs: Array<TabsTabProps> = [
      { value: "tab1", label: "Tab 1" },
      { value: "tab2", label: "Tab 2", disabled: true },
      { value: "tab3", label: "Tab 3", prefix: <Icon icon="solar:chat-line-linear" />, suffix: <Badge text="99+" /> },
      { value: "tab4", label: "Tab4", color: "#4caf50" },
      { value: "tab5", label: "Tab5", color: "#2196f3" },
    ];

    return (
      <Theme.Provider>
        <Space.Flex column={!column} style={{ height: 200 }}>
          <Space.Flex
            column={column}
            spacing={4}
            style={column ? { width: 150, height: "100%" } : { height: 50 }}
          >
            {tabs.map((tab) => (
              <Tabs.Tab
                key={tab.value}
                value={tab.value}
                label={tab.label}
                column={column}
                spacing={4}
                selected={activeTab === tab.value}
                disabled={tab.disabled}
                prefix={tab.prefix}
                suffix={tab.suffix}
                color={tab.color}
                onClick={() => setActiveTab(String(tab.value))}
              />
            ))}
          </Space.Flex>
  
          <div style={{ flex: 1, height: "100%", width: "100%", backgroundColor: "pink" }}>
            <Tabs.TabPanel visible={activeTab === "tab1"}>
              <div>Content 1</div>
            </Tabs.TabPanel>
            <Tabs.TabPanel visible={activeTab === "tab2"}>
              <div>Content 2</div>
            </Tabs.TabPanel>
            <Tabs.TabPanel visible={activeTab === "settings"}>
              <div>Settings</div>
            </Tabs.TabPanel>
          </div>
        </Space.Flex>
      </Theme.Provider>
    );
}
        `.trim(),
      },
    },
  },
};

// ============================
// keepMounted
// ============================
export const KeepMountedExample: Story = {
  name: "keepMounted",
  tags: ["!dev"],
  argTypes: WithContainerExample.argTypes,
  args: WithContainerExample.args,
  render: function RenderStory() {
    const [activeTab, setActiveTab] = React.useState<string>("form1");

    return (
      <Space.Flex column spacing={16}>
        <Box>
          <Typography.Paragraph
            text="keepMounted will keep the content mounted when the tab is not active. "
            color="#666"
          />
          <Typography.Paragraph
            text=" For example, the form inputs will not be cleared when the tab is not active."
            color="#666"
          />
        </Box>

        <Tabs.Container
          activeTabValue={activeTab}
          onTabChange={(value) => setActiveTab(String(value))}
          TabPanelStyle={{ padding: 8 }}
          items={[
            {
              value: "form1",
              label: "with keepMounted",
              keepMounted: true,
              content: (
                <Space.Flex column spacing={16}>
                  <input
                    type="text"
                    placeholder="user name"
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "1px solid #ddd",
                      borderRadius: 4,
                      fontSize: 14,
                    }}
                  />
                  <input
                    type="email"
                    placeholder="user email"
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "1px solid #ddd",
                      borderRadius: 4,
                      fontSize: 14,
                    }}
                  />
                  <Typography.Paragraph text="Panel 保持挂载, tab 切换后表单输入不会丢失" color="#666" />
                </Space.Flex>
              ),
            },
            {
              value: "form2",
              label: "without keepMounted",
              keepMounted: false,
              content: (
                <Space.Flex column spacing={16}>
                  <input
                    type="text"
                    placeholder="user name"
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "1px solid #ddd",
                      borderRadius: 4,
                      fontSize: 14,
                    }}
                  />
                  <input
                    type="email"
                    placeholder="user email"
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "1px solid #ddd",
                      borderRadius: 4,
                      fontSize: 14,
                    }}
                  />
                  <Typography.Paragraph text="Panel 不保持挂载, tab 切换后表单输入会丢失" color="#666" />
                </Space.Flex>
              ),
            },
            {
              value: "display",
              label: "without keepMounted",
              keepMounted: false,
              content: (
                <Space.Flex column spacing={16}>
                  <Typography.Paragraph text="仅用于展示，不需要保持挂载" color="#666" />
                </Space.Flex>
              ),
            },
          ]}
        />
      </Space.Flex>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
keepMounted 属性可以控制是否保持挂载在 DOM 中。主要用于处理 tab 切换后其对应的 panel 内容是否需要保留状态的情况，比如表单的输入值等需要保留。
`,
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, Tabs } from "venomous-ui-react/components";

function App() {
  const [activeTab, setActiveTab] = React.useState<string>("form1");

  return (
    <Theme.Provider>
      <Tabs.Container
        activeTabValue={activeTab}
        onTabChange={(value) => setActiveTab(String(value))}
        items={[
          {
            value: "form1",
            label: "表单 1",
            keepMounted: true,  // 保持挂载, tab 切换后表单输入不会丢失
            content: (
              <div>
                <input type="text" placeholder="用户名" />
                <input type="email" placeholder="邮箱" />
              </div>
            ),
          },
          {
            value: "form2",
            label: "表单 2",
            keepMounted: false,  // 不保持挂载, tab 切换后表单输入会丢失
            content: (
              <div>
                <input type="text" placeholder="公司名称" />
                <input type="text" placeholder="职位" />
              </div>
            ),
          },
          {
            value: "display",
            label: "纯展示内容",
            keepMounted: false,  // 不保持挂载
            content: <div>展示内容</div>,
          },
        ]}
      />
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};

// ============================
// 动态增删 Tab
// ============================
export const DynamicTabsExample: Story = {
  name: "Dynamic Add/Remove",
  tags: ["!dev"],
  argTypes: WithContainerExample.argTypes,
  args: WithContainerExample.args,
  render: function RenderStory() {
    const [activeTab, setActiveTab] = React.useState<string>("tab1");
    const [tabs, setTabs] = React.useState<Array<TabsTabProps>>([
      { value: "tab1", label: "Tab 1" },
      { value: "tab2", label: "Tab 2" },
      { value: "tab3", label: "Tab 3" },
    ]);
    const [nextTabId, setNextTabId] = React.useState(4);

    const handleAddTab = React.useCallback(() => {
      const newTab: TabsTabProps = {
        value: `tab${nextTabId}`,
        label: `Tab ${nextTabId}`,
      };
      setTabs((prev) => [...prev, newTab]);
      setActiveTab(String(newTab.value));
      setNextTabId((prev) => prev + 1);
    }, [nextTabId]);

    const handleRemoveTab = React.useCallback(
      (tabValue: string | number) => {
        const tabIndex = tabs.findIndex((tab) => tab.value === tabValue);
        const newTabs = tabs.filter((tab) => tab.value !== tabValue);
        setTabs(newTabs);

        // 如果删除的是当前激活的 tab，则切换到相邻的 tab
        if (activeTab === tabValue && newTabs.length > 0) {
          // 优先选择后一个 tab，如果没有则选择前一个
          const nextActiveTab = newTabs[tabIndex] || newTabs[tabIndex - 1];
          setActiveTab(String(nextActiveTab.value));
        }
      },
      [tabs, activeTab],
    );

    return (
      <Space.Flex column spacing={16}>
        <Space.Flex spacing={8}>
          <Button text="Add Tab" onClick={handleAddTab} />
          <Button
            text="Delete Current Active Tab"
            onClick={() => handleRemoveTab(activeTab)}
            disabled={tabs.length <= 1}
          />
        </Space.Flex>

        <Space.Flex column style={{ height: 200 }}>
          <Tabs.TabList
            style={{ height: 50 }}
            spacing={4}
            activeTabValue={activeTab}
            onTabChange={(value) => setActiveTab(String(value))}
            tabs={tabs.map((tab) => ({
              ...tab,
              suffix: tabs.length > 1 && (
                <Icon
                  icon="solar:close-circle-linear"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveTab(tab.value);
                  }}
                />
              ),
            }))}
          />

          <div style={{ flex: 1, height: "100%", width: "100%", backgroundColor: "pink" }}>
            {tabs.map((tab) => (
              <Tabs.TabPanel key={tab.value} visible={activeTab === tab.value}>
                <Typography.Title as="h3" text={`Content of ${tab.label}`} />
              </Tabs.TabPanel>
            ))}
          </div>
        </Space.Flex>
      </Space.Flex>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
若想实现动态增删 Tab 的功能，可以使用 \`<Tabs.TabList>\`。
`,
      },
      source: {
        code: `
"use client";

import React from "react";
import { Theme, Tabs, Button, Icon, Space, Typography, type TabsTabProps } from "venomous-ui-react/components";

function App() {
  const [activeTab, setActiveTab] = React.useState<string>("tab1");
  const [tabs, setTabs] = React.useState<Array<TabsTabProps>>([
    { value: "tab1", label: "Tab 1" },
    { value: "tab2", label: "Tab 2" },
    { value: "tab3", label: "Tab 3" },
  ]);
  const [nextTabId, setNextTabId] = React.useState(4);

  const handleAddTab = React.useCallback(() => {
    const newTab: TabsTabProps = {
      value: \`tab\${nextTabId}\`,
      label: \`Tab \${nextTabId}\`,
    };
    setTabs((prev) => [...prev, newTab]);
    setActiveTab(String(newTab.value));
    setNextTabId((prev) => prev + 1);
  }, [nextTabId]);

  const handleRemoveTab = React.useCallback(
    (tabValue: string | number) => {
      const tabIndex = tabs.findIndex((tab) => tab.value === tabValue);
      const newTabs = tabs.filter((tab) => tab.value !== tabValue);
      setTabs(newTabs);

      // 如果删除的是当前激活的 tab，则切换到相邻的 tab
      if (activeTab === tabValue && newTabs.length > 0) {
        const nextActiveTab = newTabs[tabIndex] || newTabs[tabIndex - 1];
        setActiveTab(String(nextActiveTab.value));
      }
    },
    [tabs, activeTab],
  );

  return (
    <Theme.Provider>
      <Space.Flex column spacing={16}>
        <Space.Flex spacing={8}>
          <Button text="Add Tab" onClick={handleAddTab} />
          <Button text="Delete Current Active Tab" onClick={() => handleRemoveTab(activeTab)} disabled={tabs.length <= 1} />
        </Space.Flex>

        <Space.Flex column style={{ height: 200 }}>
          <Tabs.TabList
            style={{ height: 50 }}
            spacing={4}
            activeTabValue={activeTab}
            onTabChange={(value) => setActiveTab(String(value))}
            tabs={tabs.map((tab) => ({
              ...tab,
              suffix: tabs.length > 1 && (
                <Icon
                  icon="solar:close-circle-linear"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveTab(tab.value);
                  }}
                />
              ),
            }))}
          />

          <div style={{ flex: 1, height: "100%", width: "100%", backgroundColor: "pink" }}>
            {tabs.map((tab) => (
              <Tabs.TabPanel key={tab.value} visible={activeTab === tab.value}>
                <Typography.Title as="h3" text={\`Content of \${tab.label}\`} />
              </Tabs.TabPanel>
            ))}
          </div>
        </Space.Flex>
      </Space.Flex>
    </Theme.Provider>
  );
}
        `.trim(),
      },
    },
  },
};
