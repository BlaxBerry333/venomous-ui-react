import type { Meta, StoryObj } from "@storybook/react";

import { Cards } from "./index";

const meta = {
  title: "components/Card/Cards.TitleBlock",
  component: Cards.TitleBlock,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the card",
      control: false,
      table: { type: { summary: "React.ReactNode" } },
    },
    title: {
      description: "The title of the card",
      control: { type: "text" },
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
    },
    titleStyle: {
      description: "The style of the title",
      control: false,
      table: { type: { summary: "React.CSSProperties" } },
    },
  },
  args: {
    children: null,
    title: "xxxxxx",
    titleStyle: undefined,
  },
} satisfies Meta<typeof Cards.TitleBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    return (
      <Cards.TitleBlock {...args} title={String(args.title)} titleStyle={{ maxWidth: "100px" }}>
        <div style={{ width: "200px", height: "100px", backgroundColor: "pink" }}>xxxxxx</div>
      </Cards.TitleBlock>
    );
  },
};
