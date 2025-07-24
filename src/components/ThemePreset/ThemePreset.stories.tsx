import type { Meta, StoryObj } from "@storybook/react";

import { useThemeColor, useThemeMode } from "@/hooks";
import { ThemeColor, ThemeMode } from "@/utils";
import React from "react";
import { Buttons } from "../Button";
import { Card } from "../Card";
import { Space } from "../Space";
import { Typography } from "../Typography";
import { ThemePreset } from "./index";

const meta = {
  title: "components/ThemePreset/ThemePreset",
  component: ThemePreset,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
  argTypes: {
    defaultThemeColor: {
      description: "The default theme color",
      control: { type: "select" },
      options: Object.values(ThemeColor),
      table: { type: { summary: "ThemeColor" } },
    },
    defaultThemeMode: {
      description: "The default theme mode",
      control: { type: "select" },
      options: Object.values(ThemeMode),
      table: { type: { summary: "ThemeMode" } },
    },
  },
  args: {
    defaultThemeColor: ThemeColor.JadeAnaconda,
    defaultThemeMode: ThemeMode.Light,
  },
} satisfies Meta<typeof ThemePreset>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory(args) {
    const { themeColor, setThemeColor } = useThemeColor();
    const { isDarkThemeMode, themeMode, setThemeMode, toggleThemeMode } = useThemeMode();

    React.useEffect(() => {
      if (args.defaultThemeColor) setThemeColor(args.defaultThemeColor);
      if (args.defaultThemeMode) setThemeMode(args.defaultThemeMode);
    }, [args.defaultThemeColor, args.defaultThemeMode, setThemeColor, setThemeMode]);

    return (
      <>
        <ThemePreset />

        <Card isOutline style={{ height: "100%", width: "100%" }}>
          <Space.Flex column style={{ height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
            <Space.Flex style={{ alignItems: "center", justifyContent: "center" }}>
              <Card style={{ height: "100px", width: "100px", backgroundColor: themeColor }} />
              <Typography.Text text={themeColor} />
            </Space.Flex>
            <Space.Flex style={{ alignItems: "center", justifyContent: "center" }}>
              <Buttons.Icon
                variant="ghost"
                icon={isDarkThemeMode ? "solar:moon-bold-duotone" : "solar:sun-2-bold-duotone"}
                onClick={toggleThemeMode}
              />
              <Typography.Text text={themeMode} />
            </Space.Flex>
          </Space.Flex>
        </Card>
      </>
    );
  },
};
