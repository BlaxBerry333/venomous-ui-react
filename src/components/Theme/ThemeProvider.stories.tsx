import { ArgTypes, Canvas, Description, Heading, Markdown, Source, Subtitle, Title } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@/components/Box";
import { Button, BUTTON_VARIANT_MAP } from "@/components/Buttons";
import { Space } from "@/components/Space";
import { Typography } from "@/components/Typographies";
import { getDarker, getLighter } from "@/tools";
import { Theme } from ".";

const meta = {
  title: "components/Theme/<Theme.Provider>",
  component: Theme.Provider,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the ThemeProvider component.",
      type: { name: "other", value: "React.ReactNode", required: true },
      table: { type: { summary: "React.ReactNode" } },
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>全局主题配置组件</Subtitle>

          <Markdown>
            {`
所有组件、工具、钩子函数都需要被这个组件包裹才能使用。应该只在应用的根节点单独使用而不能多个嵌套使用，因为可能导致样式丢失或行为不符合预期。 

在 Next.js 等 SSR 框架中需要额外被 \`<NoSSR>\` 包裹，否则直接使用时会出现水合作用不匹配错误。

`}
          </Markdown>

          <Source
            language="tsx"
            dark
            code={`
"use client";

import { Theme, NoSSR } from "venomous-ui-react/components";

function App() {
  return (
    <NoSSR>
      <Theme.Provider>
        {/* App Content */}
        {/* Other Components */}
        ${Playground?.args?.children as string} 
      </Theme.Provider>
    </NoSSR>
  );
}
  `.trim()}
          />

          <Heading>API</Heading>
          <ArgTypes />

          <Heading>{CustomComponentPropsExample.name}</Heading>
          <Description of={CustomComponentPropsExample} />
          <Canvas of={CustomComponentPropsExample} />

          <Heading>{CustomDesignsExample.name}</Heading>
          <Description of={CustomDesignsExample} />
          <Canvas of={CustomDesignsExample} />
        </>
      ),
    },
  },
} satisfies Meta<typeof Theme.Provider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "Playground",
  argTypes: {
    children: { control: false },
  },
  args: {
    children: "all components imported from this component library will be wrapped here.",
  },
};

export const CustomComponentPropsExample: Story = {
  name: "Custom Component Props Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "可以通过 `props.customComponentProps` 全局配置组件的默认 Props。<br/>" +
          "优先级：**直接传入的 props > customComponentProps > 组件默认值**<br/><br/>" +
          "如下示例：全局配置 Button 的 `variant` 为 `contained`、`style` 为自定义背景图片。" +
          '第二个 Button 直接传入 `variant="outlined"` 覆盖了全局配置。',
      },
    },
  },
  args: {
    customComponentProps: {
      Button: {
        variant: BUTTON_VARIANT_MAP.CONTAINED,
        style: {
          backgroundImage: "url(https://github.githubassets.com/assets/universe_25_1-cloud-2-47e97c624870.webp)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 60,
          fontSize: 20,
        },
      },
    },
  },
  render: function RenderStory(args) {
    return (
      <Theme.Provider {...args}>
        <Space.Flex spacing={16} style={{ padding: "16px", border: "1px solid grey" }}>
          <Button text="使用全局 customComponentProps" />
          <Button
            text="覆盖 variant"
            variant={BUTTON_VARIANT_MAP.OUTLINED}
            style={{
              fontStyle: "italic",
              borderColor: "pink",
              borderWidth: 4,
              borderRadius: 30,
            }}
          />
        </Space.Flex>
      </Theme.Provider>
    );
  },
};

export const CustomDesignsExample: Story = {
  name: "Custom Designs Example",
  tags: ["!dev"],
  parameters: {
    docs: {
      description: {
        story:
          "可以通过 `props.customDesigns` 为指定的组件使用自定义样式去覆盖默认的样式。<br/>如下：内部的 `<Button>`、`<Box>`组件使用了自定义的设计风格。",
      },
    },
  },
  args: {
    customDesigns: {
      PaletteColors: {
        1: "#EA580C",
        2: getDarker("#EA580C", 0.2),
        3: getLighter("#EA580C", 0.2),
      },

      TextColors: {
        1: "#0c86ea",
        2: getDarker("#0c86ea", 0.2),
        3: getLighter("#0c86ea", 0.2),
        disabled: "#0c86ea",
      },
    },
  },
  render: function RenderStory(args) {
    return (
      <Theme.Provider {...args}>
        <Theme.ResetCSSStyle />
        <Box style={{ padding: "16px", border: "1px solid grey" }}>
          <Button variant="outlined" text="custom palette" />
          <Typography.Title as="h4" text="custom palette" />
        </Box>
      </Theme.Provider>
    );
  },
};
