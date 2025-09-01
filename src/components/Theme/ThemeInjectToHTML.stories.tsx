import type { Meta, StoryObj } from "@storybook/react";

import { THEME_COLORS, THEME_MODES } from "@/utils";
import { Theme } from ".";
import { Button, Buttons } from "../Button";
import { Card } from "../Card";
import { Space } from "../Space";
import { Typography } from "../Typography";

const meta = {
  title: "components/Theme/Theme.InjectToHTML",
  component: Theme.InjectToHTML,
  parameters: { layout: "centered" },
  tags: ["!autodocs", "!dev"],
} satisfies Meta<typeof Theme.InjectToHTML>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  render: function RenderStory() {
    const { themeColor, setThemeColor } = Theme.useThemeColor();
    const { isDarkThemeMode, themeMode, setThemeMode, toggleThemeMode } = Theme.useThemeMode();

    return (
      <>
        <Theme.InjectToHTML />

        <Card variant="outlined" style={{ height: "100%", width: "100%" }}>
          <Space.Flex column gap={16}>
            <Space.Flex>
              <Buttons.Icon
                icon={isDarkThemeMode ? "solar:moon-bold-duotone" : "solar:sun-2-bold-duotone"}
                onClick={toggleThemeMode}
              />
              <Button
                text="Dark"
                isDisabled={themeMode === THEME_MODES.Dark}
                onClick={() => setThemeMode(THEME_MODES.Dark)}
              />
              <Button
                text="Light"
                isDisabled={themeMode === THEME_MODES.Light}
                onClick={() => setThemeMode(THEME_MODES.Light)}
              />
              <Typography.Title text={`themeMode: ${themeMode}`} />
            </Space.Flex>

            <Typography.Paragraph>
              After switching, try scrolling the page to see the scrollbar color, and select text to see the color.
            </Typography.Paragraph>

            <Space.Flex style={{ flexWrap: "wrap" }}>
              <Typography.Title text={`themeColor: ${themeColor}`} />

              {Object.values(THEME_COLORS).map((color) => (
                <Card
                  key={color}
                  style={{
                    cursor: "pointer",
                    width: "100px",
                    height: "100px",
                    backgroundColor: color,
                  }}
                  onClick={() => setThemeColor(color)}
                />
              ))}
            </Space.Flex>
          </Space.Flex>
        </Card>
      </>
    );
  },
};
