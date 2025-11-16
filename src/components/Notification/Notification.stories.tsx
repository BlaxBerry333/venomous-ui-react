import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { SEMANTIC_COLORS } from "@/constants";
import { NOTIFICATION_POSITION_MAP, Notification, notify } from ".";
import { Button } from "../Buttons";
import { Space } from "../Space";

const meta = {
  title: "components/<Notification>",
  component: Notification,
  tags: ["autodocs"],
  argTypes: {
    position: {
      description: "The notification position.",
      type: { name: "other", value: `${Object.values(NOTIFICATION_POSITION_MAP).join(" | ")}` },
      table: {
        type: { summary: `${Object.values(NOTIFICATION_POSITION_MAP).join(" | ")}` },
        defaultValue: { summary: `"${NOTIFICATION_POSITION_MAP.TOP_RIGHT}"` },
      },
      control: { type: "radio" },
      options: Object.values(NOTIFICATION_POSITION_MAP),
    },
    maxCount: {
      description: "The maximum number of notifications to display.",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "5" },
      },
      control: { type: "number", min: 1, max: 10 },
    },
    offset: {
      description: "The offset from the edge of the screen ( px ).",
      type: { name: "number" },
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
      control: { type: "number", min: 0, max: 100, step: 5 },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>全局通知提示组件</Subtitle>

          <Markdown>
            {`
用于显示全局通知消息。

采用事件模式不会触发组件重新渲染，能继承使用 \`<Theme.Provider>\` 配置的全局主题化样式。

只需要在根组件中放置 \`<Notification>\` 就可以在任意组件中通过调用 \`notify()\` 函数来显示通知。

`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, Button, notify, Notification } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <Notification position="top-center" maxCount={5} />
      <Button
        text="Notify"
        onClick={() =>
          notify({
            type: "SUCCESS",
            title: "Success",
            description: "Operation completed!",
            closable: true,
          })
        }
      />
    </Theme.Provider>
  );
}
`.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>notify()</Heading>
          <Markdown>
            {`
用于显示通知消息，返回通知 ID。

 \`\`\`tsx
function notify(config: NotificationConfig): string {
  return /* Notification ID */
}

interface NotificationConfig {
  /**
   * The notification type.
   * @default "INFO"
   */
  type?: NotificationType;

  /**
   * The notification title.
   */
  title?: string;

  /**
   * The notification description.
   */
  description?: string;

  /**
   * The notification duration ( ms ).
   * @default 4500
   */
  duration?: number;

  /**
   * Whether the notification is closable.
   * @default true
   */
  closable?: boolean;
}
\`\`\`
`}
          </Markdown>

          <Heading>{CustomDurationExample.name}</Heading>
          <Description of={CustomDurationExample} />
          <Canvas of={CustomDurationExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  args: {
    position: "top-right",
    maxCount: 5,
    offset: 0,
  },
  render: function RenderStory(args) {
    return (
      <>
        <Notification {...args} />

        <Space.Flex column spacing={12}>
          <Button
            text="Success Notification"
            color={SEMANTIC_COLORS.SUCCESS}
            onClick={() => {
              notify({
                type: "SUCCESS",
                title: "This is a Success",
                description: "Your operation was completed successfully!",
              });
            }}
          />
          <Button
            text="Info Notification"
            onClick={() => {
              notify({
                type: "INFO",
                title: "This is a Information",
                description: "This is an informational message.",
              });
            }}
            color={SEMANTIC_COLORS.INFO}
          />
          <Button
            text="Warning Notification"
            onClick={() => {
              notify({
                type: "WARNING",
                title: "This is a Warning",
                description: "Please be careful with this action.",
              });
            }}
            color={SEMANTIC_COLORS.WARNING}
          />
          <Button
            text="Error Notification"
            color={SEMANTIC_COLORS.ERROR}
            onClick={() => {
              notify({
                type: "ERROR",
                title: "This is Error",
                description: "Something went wrong. Please try again.",
              });
            }}
          />
        </Space.Flex>
      </>
    );
  },
};

export const CustomDurationExample: Story = {
  name: "Custom Duration Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      source: {
        sourceState: "hidden",
        code: `
"use client";

import { Theme, Box, Space, Button, Notification, notify } from "venomous-ui-react/components";

function App() {
  return (
    <Theme.Provider>
      <Notification />

       <Space.Flex column spacing={12}>
          <Button
            text="2 Seconds"
            onClick={() => {
              notify({
                title: "Short Duration",
                description: "This will close in 2 seconds.",
                duration: 2000,
              });
            }}
          />
          <Button
            text="10 Seconds"
            onClick={() => {
              notify({
                title: "Long Duration",
                description: "This will close in 10 seconds.",
                duration: 10000,
              });
            }}
          />
          <Button
            text="No Auto-Close"
            onClick={() => {
              notify({
                title: "Persistent Notification",
                description: "This will not auto-close. Click X to dismiss.",
                duration: 0,
              });
            }}
          />
        </Space.Flex>
    </Theme.Provider>
  );
}
`.trim(),
      },
    },
  },
  argTypes: {
    position: { control: false, table: { disable: true } },
    maxCount: { control: false, table: { disable: true } },
    offset: { control: false, table: { disable: true } },
  },
  args: Playground.args,
  render: function RenderStory() {
    return (
      <>
        <Notification />

        <Space.Flex column spacing={12}>
          <Button
            text="2 Seconds"
            onClick={() => {
              notify({
                title: "Short Duration",
                description: "This will close in 2 seconds.",
                duration: 2000,
              });
            }}
          />
          <Button
            text="10 Seconds"
            onClick={() => {
              notify({
                title: "Long Duration",
                description: "This will close in 10 seconds.",
                duration: 10000,
              });
            }}
          />
          <Button
            text="No Auto-Close"
            onClick={() => {
              notify({
                title: "Persistent Notification",
                description: "This will not auto-close. Click X to dismiss.",
                duration: 0,
              });
            }}
          />
        </Space.Flex>
      </>
    );
  },
};
