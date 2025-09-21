"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

import { useDesign } from "@/hooks";
import { Icon } from "../Icon";
import { Space } from "../Space";
import { Theme } from "../Theme";
import { Typography } from "../Typography";
import type { TabItemProps, TabProps } from "./index.types";

const Tab = React.memo<TabProps>(
  ({
    tabs,
    defaultActiveIndex = 0,
    onChange,
    variant = "pills",
    tabContainerStyle,
    tabItemContainerStyle,
    tabItemStyle,
    tabIndicatorStyle,
    tabContentStyle,
  }) => {
    const { themeColor } = Theme.useThemeColor();
    const design = useDesign();

    const [isInitialRender, setIsInitialRender] = React.useState<boolean>(false);

    const [activeIndex, setActiveIndex] = React.useState<number>(defaultActiveIndex);
    const [indicatorStyle, setIndicatorStyle] = React.useState<React.CSSProperties>({});
    const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

    // 更新指示器位置
    const updateIndicatorPosition = React.useCallback(() => {
      if (tabRefs.current[activeIndex]) {
        const activeTab = tabRefs.current[activeIndex];
        if (activeTab) {
          const hasIcon = !!tabs[activeIndex].icon;

          const { offsetLeft, offsetWidth } = activeTab;
          setIndicatorStyle({
            left: offsetLeft,
            width: offsetWidth + (isInitialRender && hasIcon ? 24 : 0),
          });
        }
      }
    }, [activeIndex, variant, tabs, isInitialRender]);

    React.useLayoutEffect(() => {
      setIsInitialRender(true);
      return () => {
        setIsInitialRender(false);
      };
    }, []);

    React.useEffect(() => {
      updateIndicatorPosition();
    }, [updateIndicatorPosition]);

    React.useEffect(() => {
      const timer = requestAnimationFrame(() => {
        updateIndicatorPosition();
      });
      return () => cancelAnimationFrame(timer);
    }, [activeIndex, tabs.length, updateIndicatorPosition]);

    const handleTabClick = React.useCallback(
      (index: number, tabItem: TabItemProps) => {
        setIsInitialRender(false);
        React.startTransition(() => {
          setActiveIndex(index);
        });
        onChange?.(index, tabItem);
      },
      [onChange],
    );

    return (
      <Space.Flex
        column
        gap={0}
        className={clsx("Venomous-UI-React--Tabs.Container")}
        style={{ width: "100%", ...tabContainerStyle }}
      >
        {/* Tab导航栏 */}
        <Space.Flex
          className={clsx("Venomous-UI-React--Tabs.ItemContainer")}
          style={{
            position: "relative",
            ...(variant === "pills" && {
              background: design.BackgroundColors.secondary,
              borderRadius: "8px",
            }),
            ...(variant === "underline" && {
              borderBottomWidth: 1.5,
              borderBottomStyle: "solid",
              borderBottomColor: design.BorderColors.secondary,
            }),
            ...tabItemContainerStyle,
          }}
        >
          {/* Tab 按钮 */}
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.key || index}
              ref={(el) => {
                if (el) tabRefs.current[index] = el;
              }}
              onClick={() => {
                if (tab.isDisabled) return;
                handleTabClick(index, tab);
              }}
              className={clsx("Venomous-UI-React--Tabs.Item")}
              style={{
                WebkitTapHighlightColor: "transparent",
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                cursor: tab.isDisabled ? "not-allowed" : "pointer",
                fontWeight: "500",
                outline: "none",
                border: "none",
                color: tab.isDisabled ? design.TextColors.disabled : design.TextColors.primary,
                background: "transparent",
                transition: "color 0.2s ease",
                ...(variant === "pills" && {
                  position: "relative",
                  zIndex: 2,
                  borderRadius: "8px",
                }),
                ...(variant === "underline" && {
                  borderRadius: 0,
                }),
                ...tabItemStyle,
              }}
            >
              {tab.icon && (
                <Icon
                  icon={tab.icon}
                  width={20}
                  style={{
                    marginRight: "8px",
                    color: index === activeIndex ? themeColor : "inherit",
                  }}
                />
              )}
              <Typography.Text
                text={tab.label}
                style={{
                  color: index === activeIndex ? themeColor : "inherit",
                }}
              />
            </motion.button>
          ))}

          {/* 动态指示器 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            layout
            className={clsx("Venomous-UI-React--Tabs.Indicator")}
            style={{
              position: "absolute",
              ...indicatorStyle,
              ...(variant === "pills" && {
                top: "4px",
                zIndex: 1,
                height: "calc(100% - 8px)",
                borderRadius: "6px",
                background: design.BackgroundColors.primary,
                boxShadow: design.Shadows.tertiary,
              }),
              ...(variant === "underline" && {
                bottom: "-2px",
                height: "3px",
                background: themeColor,
                borderRadius: "4px",
              }),
              ...tabIndicatorStyle,
            }}
          />
        </Space.Flex>

        {/* Tab 内容 */}
        <AnimatePresence mode="wait">
          {tabs[activeIndex] && (
            <motion.div
              key={activeIndex}
              variants={{
                enter: { opacity: 1, x: 0, transition: { duration: 0.2, ease: "easeOut" } },
                exit: { opacity: 0, x: 10, transition: { duration: 0.2, ease: "easeIn" } },
              }}
              initial="exit"
              animate="enter"
              exit="exit"
              className={clsx("Venomous-UI-React--Tabs.Content")}
              style={{
                width: "100%",
                padding: "16px 8px",
                position: "relative",
                boxSizing: "border-box",
                ...tabContentStyle,
              }}
            >
              {tabs[activeIndex].content}
            </motion.div>
          )}
        </AnimatePresence>
      </Space.Flex>
    );
  },
);

Tab.displayName = "Tab";
export default Tab;
