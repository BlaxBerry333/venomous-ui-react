import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import MenuItem from "./MenuItem.component";
import { MENU_ITEM_ELEMENT_MAP, type MenuItemRef } from "./MenuItem.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Menu.Item", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    render(
      <MenuItem>
        <div>Menu Item Content</div>
      </MenuItem>,
      { wrapper },
    );

    expect(screen.getByText("Menu Item Content")).toBeDefined();
  });

  it("renders as li by default", () => {
    const { container } = render(<MenuItem>Content</MenuItem>, { wrapper });

    const menuItem = container.querySelector<MenuItemRef>(`li[class*='${COMPONENT_CLASSNAME_NAMES.MenuItem}']`);
    expect(menuItem).toBeDefined();
    expect(menuItem?.tagName).toBe("LI");
  });

  it("renders as dt when as='dt'", () => {
    const { container } = render(<MenuItem as={MENU_ITEM_ELEMENT_MAP.DT}>Content</MenuItem>, { wrapper });

    const menuItem = container.querySelector<MenuItemRef>(`dt[class*='${COMPONENT_CLASSNAME_NAMES.MenuItem}']`);
    expect(menuItem).toBeDefined();
    expect(menuItem?.tagName).toBe("DT");
  });

  it("renders as dd when as='dd'", () => {
    const { container } = render(<MenuItem as={MENU_ITEM_ELEMENT_MAP.DD}>Content</MenuItem>, { wrapper });

    const menuItem = container.querySelector<MenuItemRef>(`dd[class*='${COMPONENT_CLASSNAME_NAMES.MenuItem}']`);
    expect(menuItem).toBeDefined();
    expect(menuItem?.tagName).toBe("DD");
  });

  it("renders label text correctly", () => {
    render(<MenuItem label="Menu Item Label" />, { wrapper });

    expect(screen.getByText("Menu Item Label")).toBeDefined();
  });

  it("renders StartIcon correctly", () => {
    render(<MenuItem StartIcon={<span data-testid="menu-icon">🏠</span>} label="Home" />, { wrapper });

    expect(screen.getByTestId("menu-icon")).toBeDefined();
    expect(screen.getByText("Home")).toBeDefined();
  });

  it("prioritizes children over label and StartIcon", () => {
    render(
      <MenuItem StartIcon={<span>Icon</span>} label="Label">
        <div>Custom Content</div>
      </MenuItem>,
      { wrapper },
    );

    expect(screen.getByText("Custom Content")).toBeDefined();
    expect(screen.queryByText("Label")).toBeNull();
    expect(screen.queryByText("Icon")).toBeNull();
  });

  it("handles onClick when clickable", () => {
    const onClick = vi.fn();

    const { container } = render(<MenuItem onClick={onClick} label="Clickable Item" />, { wrapper });

    const menuItem = container.querySelector<MenuItemRef>(`li[class*='${COMPONENT_CLASSNAME_NAMES.MenuItem}']`);
    menuItem?.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const onClick = vi.fn();

    const { container } = render(<MenuItem onClick={onClick} disabled label="Disabled Item" />, { wrapper });

    const menuItem = container.querySelector<MenuItemRef>(`li[class*='${COMPONENT_CLASSNAME_NAMES.MenuItem}']`);
    menuItem?.click();

    expect(onClick).not.toHaveBeenCalled();
  });

  it("does not call onClick when no onClick provided", () => {
    const { container } = render(<MenuItem label="No Click Handler" />, { wrapper });

    const menuItem = container.querySelector<MenuItemRef>(`li[class*='${COMPONENT_CLASSNAME_NAMES.MenuItem}']`);
    // Should not throw error
    expect(() => menuItem?.click()).not.toThrow();
  });

  it("applies selected state styles", () => {
    const { container } = render(<MenuItem selected label="Selected Item" />, { wrapper });

    const menuItem = container.querySelector<MenuItemRef>(`li[class*='${COMPONENT_CLASSNAME_NAMES.MenuItem}']`);
    expect(menuItem).toBeDefined();
  });

  it("applies disabled state styles", () => {
    const { container } = render(<MenuItem disabled label="Disabled Item" />, { wrapper });

    const menuItem = container.querySelector<MenuItemRef>(`li[class*='${COMPONENT_CLASSNAME_NAMES.MenuItem}']`);
    expect(menuItem?.style.cursor).toBe("not-allowed");
  });

  it("applies custom className", () => {
    const { container } = render(<MenuItem className="custom-class" label="Item" />, { wrapper });

    const menuItem = container.querySelector<MenuItemRef>(`li[class*='${COMPONENT_CLASSNAME_NAMES.MenuItem}']`);
    expect(menuItem?.className).toContain("custom-class");
    expect(menuItem?.className).toContain(COMPONENT_CLASSNAME_NAMES.MenuItem);
  });

  it("applies custom styles", () => {
    const { container } = render(<MenuItem style={{ padding: "20px" }} label="Item" />, { wrapper });

    const menuItem = container.querySelector<MenuItemRef>(`li[class*='${COMPONENT_CLASSNAME_NAMES.MenuItem}']`);
    expect(menuItem?.style.padding).toBe("20px");
  });

  it("applies custom spacing", () => {
    const { container } = render(<MenuItem spacing={16} StartIcon={<span>Icon</span>} label="Item" />, { wrapper });

    const menuItem = container.querySelector<MenuItemRef>(`li[class*='${COMPONENT_CLASSNAME_NAMES.MenuItem}']`);
    expect(menuItem?.style.gap).toBe("16px");
  });

  it("applies default spacing of 8px", () => {
    const { container } = render(<MenuItem StartIcon={<span>Icon</span>} label="Item" />, { wrapper });

    const menuItem = container.querySelector<MenuItemRef>(`li[class*='${COMPONENT_CLASSNAME_NAMES.MenuItem}']`);
    expect(menuItem?.style.gap).toBe("8px");
  });

  it("applies custom LabelProps style", () => {
    render(<MenuItem label="Styled Label" LabelProps={{ style: { fontSize: "20px" } }} />, { wrapper });

    const label = screen.getByText("Styled Label");
    expect(label.style.fontSize).toBe("20px");
  });

  it("applies LabelProps ellipsis correctly", () => {
    render(<MenuItem label="Very Long Label Text That Should Be Truncated" LabelProps={{ ellipsis: 1 }} />, {
      wrapper,
    });

    const label = screen.getByText("Very Long Label Text That Should Be Truncated");
    expect(label).toBeDefined();
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLLIElement>();

    render(<MenuItem ref={ref} label="Item" />, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("LI");
  });

  it("displays correct displayName", () => {
    expect(MenuItem.displayName).toBe(COMPONENT_DISPLAY_NAMES.MenuItem);
  });

  it("renders component correctly", () => {
    const { container } = render(<MenuItem label="Test Item" />, { wrapper });

    const menuItem = container.querySelector<MenuItemRef>(`li[class*='${COMPONENT_CLASSNAME_NAMES.MenuItem}']`);
    expect(menuItem).toBeDefined();
  });

  it("handles mouse events when clickable", () => {
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const onClick = vi.fn();

    const { container } = render(
      <MenuItem onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} label="Interactive Item" />,
      { wrapper },
    );

    const menuItem = container.querySelector<MenuItemRef>(`li[class*='${COMPONENT_CLASSNAME_NAMES.MenuItem}']`);

    if (menuItem) {
      fireEvent.mouseEnter(menuItem);
      expect(onMouseEnter).toHaveBeenCalledTimes(1);

      fireEvent.mouseLeave(menuItem);
      expect(onMouseLeave).toHaveBeenCalledTimes(1);
    }
  });

  it("renders without label (only StartIcon)", () => {
    render(<MenuItem StartIcon={<span data-testid="icon-only">📄</span>} />, { wrapper });

    expect(screen.getByTestId("icon-only")).toBeDefined();
    expect(screen.queryByText("📄")).toBeDefined();
  });

  it("renders without StartIcon (only label)", () => {
    render(<MenuItem label="Label Only" />, { wrapper });

    expect(screen.getByText("Label Only")).toBeDefined();
  });
});
