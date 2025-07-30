import type { Meta, StoryObj } from "@storybook/react";

import { Cards } from "./index";

const meta = {
  title: "components/Card/Cards.Book",
  component: Cards.Book,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    children: {
      description: "The content to be rendered inside the book card",
      control: false,
      table: { type: { summary: "React.ReactNode" } },
    },
    height: {
      description: "The height of the book",
      control: { type: "number", min: 0 },
      type: { name: "string", required: true },
      table: { type: { summary: "number" }, defaultValue: { summary: "300" } },
    },
    width: {
      description: "The width of the book",
      control: { type: "number", min: 0 },
      type: { name: "string", required: true },
      table: { type: { summary: "number" }, defaultValue: { summary: "200" } },
    },
    title: {
      description: "The title of the book",
      control: { type: "text" },
      table: { type: { summary: "string" } },
    },
    coverImage: {
      description: "The cover image of the book",
      control: { type: "text" },
      table: { type: { summary: "string" } },
    },
  },
  args: {
    children: null,
    height: 300,
    width: 200,
    title: "",
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348130928i/6296334.jpg",
  },
} satisfies Meta<typeof Cards.Book>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
