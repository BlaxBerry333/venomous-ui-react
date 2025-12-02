import { render, screen, waitFor } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";

import Drawer from "./Drawer.component";
import type { DrawerRef } from "./Drawer.types";
import { DRAWER_PLACEMENT_MAP } from "./Drawer.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Drawer", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly when open", async () => {
    render(
      <Drawer open>
        <div>Drawer Content</div>
      </Drawer>,
      { wrapper },
    );

    await waitFor(() => {
      expect(screen.getByText("Drawer Content")).toBeDefined();
    });
  });

  it("renders as div by default", async () => {
    const { baseElement } = render(<Drawer open>Content</Drawer>, { wrapper });

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer).toBeDefined();
      expect(drawer?.tagName).toBe("DIV");
    });
  });

  it("renders as section when as='section'", async () => {
    const { baseElement } = render(
      <Drawer open as="section">
        Content
      </Drawer>,
      { wrapper },
    );

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`section[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer).toBeDefined();
      expect(drawer?.tagName).toBe("SECTION");
    });
  });

  it("renders as nav when as='nav'", async () => {
    const { baseElement } = render(
      <Drawer open as="nav">
        Content
      </Drawer>,
      { wrapper },
    );

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`nav[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer).toBeDefined();
      expect(drawer?.tagName).toBe("NAV");
    });
  });

  it("is closed by default", async () => {
    const { baseElement } = render(<Drawer>Content</Drawer>, { wrapper });

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      if (drawer) {
        expect(drawer.style.visibility).toBe("hidden");
        expect(drawer.style.opacity).toBe("0");
      }
    });
  });

  it("applies default placement of left", async () => {
    const { baseElement } = render(<Drawer open>Content</Drawer>, { wrapper });

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer?.style.left).toBe("0px");
      expect(drawer?.style.top).toBe("0px");
      expect(drawer?.style.bottom).toBe("0px");
    });
  });

  it("applies left placement styles", async () => {
    const { baseElement } = render(
      <Drawer open placement={DRAWER_PLACEMENT_MAP.LEFT}>
        Content
      </Drawer>,
      { wrapper },
    );

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer?.style.position).toBe("fixed");
      expect(drawer?.style.left).toBe("0px");
      expect(drawer?.style.width).toBe("400px");
      expect(drawer?.style.maxWidth).toBe("85vw");
    });
  });

  it("applies right placement styles", async () => {
    const { baseElement } = render(
      <Drawer open placement={DRAWER_PLACEMENT_MAP.RIGHT}>
        Content
      </Drawer>,
      { wrapper },
    );

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer?.style.position).toBe("fixed");
      expect(drawer?.style.right).toBe("0px");
      expect(drawer?.style.width).toBe("400px");
    });
  });

  it("applies top placement styles", async () => {
    const { baseElement } = render(
      <Drawer open placement={DRAWER_PLACEMENT_MAP.TOP}>
        Content
      </Drawer>,
      { wrapper },
    );

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer?.style.position).toBe("fixed");
      expect(drawer?.style.left).toBe("0px");
      expect(drawer?.style.right).toBe("0px");
      expect(drawer?.style.width).toBe("100vw");
      expect(drawer?.style.height).toBe("50vh");
    });
  });

  it("applies bottom placement styles", async () => {
    const { baseElement } = render(
      <Drawer open placement={DRAWER_PLACEMENT_MAP.BOTTOM}>
        Content
      </Drawer>,
      { wrapper },
    );

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer?.style.position).toBe("fixed");
      expect(drawer?.style.bottom).toBe("0px");
      expect(drawer?.style.left).toBe("0px");
      expect(drawer?.style.right).toBe("0px");
    });
  });

  it("applies transition styles", async () => {
    const { baseElement } = render(<Drawer open>Content</Drawer>, { wrapper });

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer?.style.transition).toContain("transform");
      expect(drawer?.style.transition).toContain("opacity");
    });
  });

  it("applies transform based on placement when open", async () => {
    const { baseElement } = render(
      <Drawer open placement={DRAWER_PLACEMENT_MAP.LEFT}>
        Content
      </Drawer>,
      { wrapper },
    );

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer?.style.transform).toBe("translateX(0)");
    });
  });

  it("applies user-select text", async () => {
    const { baseElement } = render(<Drawer open>Content</Drawer>, { wrapper });

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer?.style.userSelect).toBe("text");
    });
  });

  it("applies overflow-y auto", async () => {
    const { baseElement } = render(<Drawer open>Content</Drawer>, { wrapper });

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer?.style.overflowY).toBe("auto");
    });
  });

  it("applies default padding", async () => {
    const { baseElement } = render(<Drawer open>Content</Drawer>, { wrapper });

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer?.style.padding).toBe("16px");
    });
  });

  it("applies box shadow", async () => {
    const { baseElement } = render(<Drawer open>Content</Drawer>, { wrapper });

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer?.style.boxShadow).toBeTruthy();
    });
  });

  it("renders with Portal", async () => {
    const { baseElement } = render(<Drawer open>Content</Drawer>, { wrapper });

    await waitFor(() => {
      expect(baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`)).toBeDefined();
    });
  });

  it("renders with Backdrop", async () => {
    const { baseElement } = render(<Drawer open>Content</Drawer>, { wrapper });

    await waitFor(() => {
      const backdrop = baseElement.querySelector<HTMLElement>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
      expect(backdrop).toBeDefined();
    });
  });

  it("calls onClickBackdrop when backdrop is clicked and autoClose is true", async () => {
    const onClickBackdrop = vi.fn();
    const { baseElement } = render(
      <Drawer open onClickBackdrop={onClickBackdrop}>
        Content
      </Drawer>,
      { wrapper },
    );

    await waitFor(() => {
      const backdrop = baseElement.querySelector<HTMLElement>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
      backdrop?.click();

      expect(onClickBackdrop).toHaveBeenCalled();
    });
  });

  it("does not call onClickBackdrop when autoCloseOnClickBackdrop is false", async () => {
    const onClickBackdrop = vi.fn();
    const { baseElement } = render(
      <Drawer open autoCloseOnClickBackdrop={false} onClickBackdrop={onClickBackdrop}>
        Content
      </Drawer>,
      { wrapper },
    );

    await waitFor(() => {
      const backdrop = baseElement.querySelector<HTMLElement>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
      backdrop?.click();

      expect(onClickBackdrop).not.toHaveBeenCalled();
    });
  });

  it("does not call onClickBackdrop when clicking drawer content", async () => {
    const onClickBackdrop = vi.fn();
    const { baseElement } = render(
      <Drawer open onClickBackdrop={onClickBackdrop}>
        <div data-testid="drawer-content">Content</div>
      </Drawer>,
      { wrapper },
    );

    await waitFor(() => {
      const content = baseElement.querySelector('[data-testid="drawer-content"]');
      content?.dispatchEvent(new MouseEvent("click", { bubbles: true }));

      expect(onClickBackdrop).not.toHaveBeenCalled();
    });
  });

  it("applies custom className", async () => {
    const { baseElement } = render(
      <Drawer open className="custom-class">
        Content
      </Drawer>,
      { wrapper },
    );

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer?.className).toContain("custom-class");
      expect(drawer?.className).toContain(COMPONENT_CLASSNAME_NAMES.Drawer);
    });
  });

  it("applies custom styles", async () => {
    const { baseElement } = render(
      <Drawer open style={{ padding: "50px" }}>
        Content
      </Drawer>,
      { wrapper },
    );

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer?.style.padding).toBe("50px");
    });
  });

  it("forwards ref correctly", async () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <Drawer open ref={ref}>
        Content
      </Drawer>,
      { wrapper },
    );

    await waitFor(() => {
      expect(ref.current).toBeDefined();
      expect(ref.current?.tagName).toBe("DIV");
    });
  });

  it("passes through HTML attributes", async () => {
    const { baseElement } = render(
      <Drawer open data-testid="test-drawer" aria-label="Test drawer">
        Content
      </Drawer>,
      { wrapper },
    );

    await waitFor(() => {
      const drawer = baseElement.querySelector('[data-testid="test-drawer"]');
      expect(drawer).toBeDefined();
      expect(drawer?.getAttribute("aria-label")).toBe("Test drawer");
    });
  });

  it("displays correct displayName", () => {
    expect(Drawer.displayName).toBe(COMPONENT_DISPLAY_NAMES.Drawer);
  });

  it("supports custom styles via Theme.Provider", async () => {
    const customComponentProps = {
      Drawer: {
        style: {
          padding: "40px",
          backgroundColor: "rgb(240, 240, 240)",
        },
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customComponentProps={customComponentProps}>{children}</Theme.Provider>
    );

    const { baseElement } = render(<Drawer open>Content</Drawer>, { wrapper: customWrapper });

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer?.style.padding).toBe("40px");
      expect(drawer?.style.backgroundColor).toBe("rgb(240, 240, 240)");
    });
  });

  it("toggles visibility when open changes", async () => {
    const { baseElement, rerender } = render(<Drawer>Content</Drawer>, { wrapper });

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      if (drawer) {
        expect(drawer.style.visibility).toBe("hidden");
        expect(drawer.style.opacity).toBe("0");
      }
    });

    rerender(
      <Theme.Provider>
        <Drawer open>Content</Drawer>
      </Theme.Provider>,
    );

    await waitFor(() => {
      const drawerAfter = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawerAfter?.style.visibility).toBe("visible");
      expect(drawerAfter?.style.opacity).toBe("1");
    });
  });

  it("applies pointer-events none when closed", async () => {
    const { baseElement } = render(<Drawer>Content</Drawer>, { wrapper });

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      if (drawer) {
        expect(drawer.style.pointerEvents).toBe("none");
      }
    });
  });

  it("applies pointer-events auto when open", async () => {
    const { baseElement } = render(<Drawer open>Content</Drawer>, { wrapper });

    await waitFor(() => {
      const drawer = baseElement.querySelector<DrawerRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Drawer}']`);
      expect(drawer?.style.pointerEvents).toBe("auto");
    });
  });
});
