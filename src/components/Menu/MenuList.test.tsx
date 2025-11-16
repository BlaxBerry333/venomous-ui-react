import { render, screen } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import MenuList from "./MenuList.component";
import { MENU_LIST_ELEMENT_MAP, type MenuListRef } from "./MenuList.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Menu.List", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    render(
      <MenuList>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </MenuList>,
      { wrapper },
    );

    expect(screen.getByText("Item 1")).toBeDefined();
    expect(screen.getByText("Item 2")).toBeDefined();
    expect(screen.getByText("Item 3")).toBeDefined();
  });

  it("renders as ul by default", () => {
    const { container } = render(
      <MenuList>
        <li>Content</li>
      </MenuList>,
      { wrapper },
    );

    const menuList = container.querySelector<MenuListRef>(`ul[class*='${COMPONENT_CLASSNAME_NAMES.MenuList}']`);
    expect(menuList).toBeDefined();
    expect(menuList?.tagName).toBe("UL");
  });

  it("renders as ol when as='ol'", () => {
    const { container } = render(
      <MenuList as={MENU_LIST_ELEMENT_MAP.OL}>
        <li>Content</li>
      </MenuList>,
      { wrapper },
    );

    const menuList = container.querySelector<MenuListRef>(`ol[class*='${COMPONENT_CLASSNAME_NAMES.MenuList}']`);
    expect(menuList).toBeDefined();
    expect(menuList?.tagName).toBe("OL");
  });

  it("renders as dl when as='dl'", () => {
    const { container } = render(
      <MenuList as={MENU_LIST_ELEMENT_MAP.DL}>
        <dt>Term</dt>
        <dd>Definition</dd>
      </MenuList>,
      { wrapper },
    );

    const menuList = container.querySelector<MenuListRef>(`dl[class*='${COMPONENT_CLASSNAME_NAMES.MenuList}']`);
    expect(menuList).toBeDefined();
    expect(menuList?.tagName).toBe("DL");
  });

  it("uses column layout by default", () => {
    const { container } = render(
      <MenuList>
        <li>Item</li>
      </MenuList>,
      { wrapper },
    );

    const menuList = container.querySelector<MenuListRef>(`ul[class*='${COMPONENT_CLASSNAME_NAMES.MenuList}']`);
    expect(menuList?.style.flexDirection).toBe("column");
  });

  it("uses row layout when column=false", () => {
    const { container } = render(
      <MenuList column={false}>
        <li>Item</li>
      </MenuList>,
      { wrapper },
    );

    const menuList = container.querySelector<MenuListRef>(`ul[class*='${COMPONENT_CLASSNAME_NAMES.MenuList}']`);
    expect(menuList?.style.flexDirection).toBe("row");
  });

  it("applies default spacing of 8px", () => {
    const { container } = render(
      <MenuList>
        <li>Item</li>
      </MenuList>,
      { wrapper },
    );

    const menuList = container.querySelector<MenuListRef>(`ul[class*='${COMPONENT_CLASSNAME_NAMES.MenuList}']`);
    expect(menuList?.style.gap).toBe("8px");
  });

  it("applies custom spacing", () => {
    const { container } = render(
      <MenuList spacing={16}>
        <li>Item</li>
      </MenuList>,
      { wrapper },
    );

    const menuList = container.querySelector<MenuListRef>(`ul[class*='${COMPONENT_CLASSNAME_NAMES.MenuList}']`);
    expect(menuList?.style.gap).toBe("16px");
  });

  it("applies custom className", () => {
    const { container } = render(
      <MenuList className="custom-class">
        <li>Item</li>
      </MenuList>,
      { wrapper },
    );

    const menuList = container.querySelector<MenuListRef>(`ul[class*='${COMPONENT_CLASSNAME_NAMES.MenuList}']`);
    expect(menuList?.className).toContain("custom-class");
    expect(menuList?.className).toContain(COMPONENT_CLASSNAME_NAMES.MenuList);
  });

  it("applies custom styles", () => {
    const { container } = render(
      <MenuList style={{ padding: "20px" }}>
        <li>Item</li>
      </MenuList>,
      { wrapper },
    );

    const menuList = container.querySelector<MenuListRef>(`ul[class*='${COMPONENT_CLASSNAME_NAMES.MenuList}']`);
    expect(menuList?.style.padding).toBe("20px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLUListElement>();

    render(
      <MenuList ref={ref}>
        <li>Item</li>
      </MenuList>,
      { wrapper },
    );

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("UL");
  });

  it("forwards ref correctly for ol", () => {
    const ref = React.createRef<HTMLOListElement>();

    render(
      <MenuList as={MENU_LIST_ELEMENT_MAP.OL} ref={ref}>
        <li>Item</li>
      </MenuList>,
      { wrapper },
    );

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("OL");
  });

  it("forwards ref correctly for dl", () => {
    const ref = React.createRef<HTMLDListElement>();

    render(
      <MenuList as={MENU_LIST_ELEMENT_MAP.DL} ref={ref}>
        <dt>Term</dt>
      </MenuList>,
      { wrapper },
    );

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("DL");
  });

  it("displays correct displayName", () => {
    expect(MenuList.displayName).toBe(COMPONENT_DISPLAY_NAMES.MenuList);
  });

  it("renders component correctly", () => {
    const { container } = render(
      <MenuList>
        <li>Test Item</li>
      </MenuList>,
      { wrapper },
    );

    const menuList = container.querySelector<MenuListRef>(`ul[class*='${COMPONENT_CLASSNAME_NAMES.MenuList}']`);
    expect(menuList).toBeDefined();
  });

  it("renders multiple items in column layout", () => {
    const { container } = render(
      <MenuList>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </MenuList>,
      { wrapper },
    );

    const menuList = container.querySelector<MenuListRef>(`ul[class*='${COMPONENT_CLASSNAME_NAMES.MenuList}']`);
    expect(menuList?.children.length).toBe(3);
    expect(menuList?.style.flexDirection).toBe("column");
  });

  it("renders multiple items in row layout", () => {
    const { container } = render(
      <MenuList column={false}>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </MenuList>,
      { wrapper },
    );

    const menuList = container.querySelector<MenuListRef>(`ul[class*='${COMPONENT_CLASSNAME_NAMES.MenuList}']`);
    expect(menuList?.children.length).toBe(3);
    expect(menuList?.style.flexDirection).toBe("row");
  });

  it("applies display flex", () => {
    const { container } = render(
      <MenuList>
        <li>Item</li>
      </MenuList>,
      { wrapper },
    );

    const menuList = container.querySelector<MenuListRef>(`ul[class*='${COMPONENT_CLASSNAME_NAMES.MenuList}']`);
    expect(menuList?.style.display).toBe("flex");
  });
});
