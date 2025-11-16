import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import TransitionFade from "./Transition.Fade.component";
import type { TransitionFadeRef } from "./Transition.Fade.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Transition.Fade", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    render(
      <TransitionFade visible>
        <div>Fade Content</div>
      </TransitionFade>,
      { wrapper },
    );

    expect(screen.getByText("Fade Content")).toBeDefined();
  });

  it("renders as div by default", () => {
    const { container } = render(<TransitionFade visible>Content</TransitionFade>, { wrapper });

    const fade = container.querySelector<TransitionFadeRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionFade}']`,
    );
    expect(fade).toBeDefined();
    expect(fade?.tagName).toBe("DIV");
  });

  it("applies opacity 1 when visible is true", async () => {
    const { container } = render(<TransitionFade visible>Content</TransitionFade>, { wrapper });

    await waitFor(() => {
      const fade = container.querySelector<TransitionFadeRef>(
        `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionFade}']`,
      );
      expect(fade?.style.opacity).toBe("1");
    });
  });

  it("applies opacity 0 when visible is false", () => {
    const { container } = render(<TransitionFade visible={false}>Content</TransitionFade>, { wrapper });

    const fade = container.querySelector<TransitionFadeRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionFade}']`,
    );
    expect(fade?.style.opacity).toBe("0");
  });

  it("applies default duration of 200ms", () => {
    const { container } = render(<TransitionFade visible>Content</TransitionFade>, { wrapper });

    const fade = container.querySelector<TransitionFadeRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionFade}']`,
    );
    expect(fade?.style.transition).toContain("200ms");
  });

  it("applies custom duration", () => {
    const { container } = render(
      <TransitionFade visible duration={500}>
        Content
      </TransitionFade>,
      { wrapper },
    );

    const fade = container.querySelector<TransitionFadeRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionFade}']`,
    );
    expect(fade?.style.transition).toContain("500ms");
  });

  it("calls onFinish when transition completes", async () => {
    const onFinish = vi.fn();

    const { rerender } = render(
      <TransitionFade visible={false} duration={100} onFinish={onFinish}>
        Content
      </TransitionFade>,
      { wrapper },
    );

    rerender(
      <Theme.Provider>
        <TransitionFade visible duration={100} onFinish={onFinish}>
          Content
        </TransitionFade>
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
    const { container, rerender } = render(<TransitionFade visible={false}>Content</TransitionFade>, { wrapper });

    let fade = container.querySelector<TransitionFadeRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionFade}']`);
    expect(fade?.style.opacity).toBe("0");

    rerender(
      <Theme.Provider>
        <TransitionFade visible>Content</TransitionFade>
      </Theme.Provider>,
    );

    await waitFor(() => {
      fade = container.querySelector<TransitionFadeRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionFade}']`);
      expect(fade?.style.opacity).toBe("1");
    });
  });

  it("applies custom className", () => {
    const { container } = render(
      <TransitionFade visible className="custom-class">
        Content
      </TransitionFade>,
      { wrapper },
    );

    const fade = container.querySelector<TransitionFadeRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionFade}']`,
    );
    expect(fade?.className).toContain("custom-class");
    expect(fade?.className).toContain(COMPONENT_CLASSNAME_NAMES.TransitionFade);
  });

  it("applies custom styles", () => {
    const { container } = render(
      <TransitionFade visible style={{ padding: "20px" }}>
        Content
      </TransitionFade>,
      { wrapper },
    );

    const fade = container.querySelector<TransitionFadeRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionFade}']`,
    );
    expect(fade?.style.padding).toBe("20px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <TransitionFade visible ref={ref}>
        Content
      </TransitionFade>,
      { wrapper },
    );

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("renders component correctly", () => {
    const { container } = render(<TransitionFade visible>Content</TransitionFade>, { wrapper });

    const fade = container.querySelector<TransitionFadeRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionFade}']`,
    );
    expect(fade).toBeDefined();
  });

  it("displays correct displayName", () => {
    expect(TransitionFade.displayName).toBe(COMPONENT_DISPLAY_NAMES.TransitionFade);
  });

  it("applies transition property correctly", () => {
    const { container } = render(
      <TransitionFade visible duration={300}>
        Content
      </TransitionFade>,
      { wrapper },
    );

    const fade = container.querySelector<TransitionFadeRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionFade}']`,
    );
    expect(fade?.style.transition).toContain("opacity");
    expect(fade?.style.transition).toContain("ease-in-out");
  });

  it("renders empty children correctly", () => {
    const { container } = render(<TransitionFade visible>{null}</TransitionFade>, { wrapper });

    const fade = container.querySelector<TransitionFadeRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionFade}']`,
    );
    expect(fade).toBeDefined();
    expect(fade?.textContent).toBe("");
  });
});
