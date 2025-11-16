import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import TransitionScale from "./Transition.Scale.component";
import type { TransitionScaleRef } from "./Transition.Scale.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Transition.Scale", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    render(
      <TransitionScale visible>
        <div>Scale Content</div>
      </TransitionScale>,
      { wrapper },
    );

    expect(screen.getByText("Scale Content")).toBeDefined();
  });

  it("renders as div by default", () => {
    const { container } = render(<TransitionScale visible>Content</TransitionScale>, { wrapper });

    const scale = container.querySelector<TransitionScaleRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionScale}']`,
    );
    expect(scale).toBeDefined();
    expect(scale?.tagName).toBe("DIV");
  });

  it("applies scale(1) when visible is true", async () => {
    const { container } = render(<TransitionScale visible>Content</TransitionScale>, { wrapper });

    await waitFor(() => {
      const scale = container.querySelector<TransitionScaleRef>(
        `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionScale}']`,
      );
      expect(scale?.style.transform).toContain("scale(1)");
      expect(scale?.style.opacity).toBe("1");
    });
  });

  it("applies scale(0) when visible is false", () => {
    const { container } = render(<TransitionScale visible={false}>Content</TransitionScale>, { wrapper });

    const scale = container.querySelector<TransitionScaleRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionScale}']`,
    );
    expect(scale?.style.transform).toContain("scale(0)");
    expect(scale?.style.opacity).toBe("0");
  });

  it("applies default duration of 200ms", () => {
    const { container } = render(<TransitionScale visible>Content</TransitionScale>, { wrapper });

    const scale = container.querySelector<TransitionScaleRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionScale}']`,
    );
    expect(scale?.style.transition).toContain("200ms");
  });

  it("applies custom duration", () => {
    const { container } = render(
      <TransitionScale visible duration={500}>
        Content
      </TransitionScale>,
      { wrapper },
    );

    const scale = container.querySelector<TransitionScaleRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionScale}']`,
    );
    expect(scale?.style.transition).toContain("500ms");
  });

  it("calls onFinish when transition completes", async () => {
    const onFinish = vi.fn();

    const { rerender } = render(
      <TransitionScale visible={false} duration={100} onFinish={onFinish}>
        Content
      </TransitionScale>,
      { wrapper },
    );

    rerender(
      <Theme.Provider>
        <TransitionScale visible duration={100} onFinish={onFinish}>
          Content
        </TransitionScale>
      </Theme.Provider>,
    );

    await waitFor(
      () => {
        expect(onFinish).toHaveBeenCalled();
      },
      { timeout: 300 },
    );
  });

  it("toggles visibility when visible changes", async () => {
    const { container, rerender } = render(<TransitionScale visible={false}>Content</TransitionScale>, { wrapper });

    let scale = container.querySelector<TransitionScaleRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionScale}']`,
    );
    expect(scale?.style.transform).toContain("scale(0)");
    expect(scale?.style.opacity).toBe("0");

    rerender(
      <Theme.Provider>
        <TransitionScale visible>Content</TransitionScale>
      </Theme.Provider>,
    );

    await waitFor(() => {
      scale = container.querySelector<TransitionScaleRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionScale}']`);
      expect(scale?.style.transform).toContain("scale(1)");
      expect(scale?.style.opacity).toBe("1");
    });
  });

  it("applies custom className", () => {
    const { container } = render(
      <TransitionScale visible className="custom-class">
        Content
      </TransitionScale>,
      { wrapper },
    );

    const scale = container.querySelector<TransitionScaleRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionScale}']`,
    );
    expect(scale?.className).toContain("custom-class");
    expect(scale?.className).toContain(COMPONENT_CLASSNAME_NAMES.TransitionScale);
  });

  it("applies custom styles", () => {
    const { container } = render(
      <TransitionScale visible style={{ padding: "20px" }}>
        Content
      </TransitionScale>,
      { wrapper },
    );

    const scale = container.querySelector<TransitionScaleRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionScale}']`,
    );
    expect(scale?.style.padding).toBe("20px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <TransitionScale visible ref={ref}>
        Content
      </TransitionScale>,
      { wrapper },
    );

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("renders component correctly", () => {
    const { container } = render(<TransitionScale visible>Content</TransitionScale>, { wrapper });

    const scale = container.querySelector<TransitionScaleRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionScale}']`,
    );
    expect(scale).toBeDefined();
  });

  it("displays correct displayName", () => {
    expect(TransitionScale.displayName).toBe(COMPONENT_DISPLAY_NAMES.TransitionScale);
  });

  it("applies transition properties correctly", () => {
    const { container } = render(
      <TransitionScale visible duration={300}>
        Content
      </TransitionScale>,
      { wrapper },
    );

    const scale = container.querySelector<TransitionScaleRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionScale}']`,
    );
    expect(scale?.style.transition).toContain("transform");
    expect(scale?.style.transition).toContain("opacity");
    expect(scale?.style.transition).toContain("ease-in-out");
  });

  it("applies transform-origin center", () => {
    const { container } = render(<TransitionScale visible>Content</TransitionScale>, { wrapper });

    const scale = container.querySelector<TransitionScaleRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionScale}']`,
    );
    expect(scale?.style.transformOrigin).toBe("center");
  });

  it("renders empty children correctly", () => {
    const { container } = render(<TransitionScale visible>{null}</TransitionScale>, { wrapper });

    const scale = container.querySelector<TransitionScaleRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionScale}']`,
    );
    expect(scale).toBeDefined();
    expect(scale?.textContent).toBe("");
  });
});
