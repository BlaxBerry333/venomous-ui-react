import type { Meta, StoryObj } from "@storybook/react";
import { MediaFile } from ".";

const meta = {
  title: "components/MediaFile/MediaFile.Uploader",
  component: MediaFile.Uploader,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    handleFileUpload: {
      description: "Handle file upload",
      control: false,
      type: { name: "function", required: true },
      table: { category: "Events", type: { summary: "(files: File[]) => void" } },
    },
    multiple: {
      description: "Whether multiple files can be uploaded",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    accept: {
      description: "The accepted file types",
      control: { type: "text" },
      table: { type: { summary: "string" } },
    },
    isLoading: {
      description: "Whether the uploader is loading",
      control: { type: "boolean" },
      if: { arg: "isDisabled", neq: true },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
    isDisabled: {
      description: "Whether the uploader is disabled",
      control: { type: "boolean" },
      if: { arg: "isLoading", neq: true },
      table: { type: { summary: "boolean" }, defaultValue: { summary: "false" } },
    },
  },
  args: {
    handleFileUpload: (files) => console.log(files),
    multiple: false,
    accept: "image/*,video/*,audio/*",
    isLoading: false,
    isDisabled: false,
  },
} satisfies Meta<typeof MediaFile.Uploader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
};
