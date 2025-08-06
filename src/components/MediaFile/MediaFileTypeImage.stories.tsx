import type { Meta, StoryObj } from "@storybook/react";
import { MediaFile } from ".";
import { MediaFileTypeMap } from "./index.types";

const meta = {
  title: "components/MediaFile/MediaFile.TypeImage",
  component: MediaFile.TypeImage,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    fileExtension: {
      description: "The text to be rendered",
      control: { type: "select" },
      options: Object.keys(MediaFileTypeMap),
      type: { name: "string", required: true },
      table: { type: { summary: "string" } },
    },
    width: {
      description: "The width of the image",
      control: { type: "number", min: 0 },
      type: { name: "string", required: true },
      table: { type: { summary: "number" }, defaultValue: { summary: "40" } },
    },
  },
  args: {
    fileExtension: ".jpg",
    width: 40,
  },
} satisfies Meta<typeof MediaFile.TypeImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
