import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import TransitionSlide from "./Transition.Slide.component";
import { TRANSITION_SLIDE_DIRECTION_MAP } from "./Transition.Slide.types";

type TransitionSlideRef = HTMLDivElement;

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Transition.Slide", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly", () => {
    render(
      <TransitionSlide visible>
        <div>Slide Content</div>
      </TransitionSlide>,
      { wrapper },
    );

    expect(screen.getByText("Slide Content")).toBeDefined();
  });

  it("renders as div by default", () => {
    const { container } = render(<TransitionSlide visible>Content</TransitionSlide>, { wrapper });

    const slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide).toBeDefined();
    expect(slide?.tagName).toBe("DIV");
  });

  it("applies translate(0, 0) when visible is true with right direction", async () => {
    const { container } = render(
      <TransitionSlide visible direction={TRANSITION_SLIDE_DIRECTION_MAP.RIGHT}>
        Content
      </TransitionSlide>,
      { wrapper },
    );

    await waitFor(() => {
      const slide = container.querySelector<TransitionSlideRef>(
        `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
      );
      expect(slide?.style.transform).toContain("translate(0");
      expect(slide?.style.opacity).toBe("1");
    });
  });

  it("applies translate with distance when visible is false with right direction", () => {
    const { container } = render(
      <TransitionSlide visible={false} direction={TRANSITION_SLIDE_DIRECTION_MAP.RIGHT} distance={100}>
        Content
      </TransitionSlide>,
      { wrapper },
    );

    const slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide?.style.transform).toContain("translate(100px");
    expect(slide?.style.opacity).toBe("0");
  });

  it("applies translate with negative distance when direction is left", () => {
    const { container } = render(
      <TransitionSlide visible={false} direction={TRANSITION_SLIDE_DIRECTION_MAP.LEFT} distance={100}>
        Content
      </TransitionSlide>,
      { wrapper },
    );

    const slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide?.style.transform).toContain("translate(-100px");
  });

  it("applies translate with distance when direction is down", () => {
    const { container } = render(
      <TransitionSlide visible={false} direction={TRANSITION_SLIDE_DIRECTION_MAP.DOWN} distance={100}>
        Content
      </TransitionSlide>,
      { wrapper },
    );

    const slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide?.style.transform).toContain("translate(0, 100px)");
  });

  it("applies translate with negative distance when direction is up", () => {
    const { container } = render(
      <TransitionSlide visible={false} direction={TRANSITION_SLIDE_DIRECTION_MAP.UP} distance={100}>
        Content
      </TransitionSlide>,
      { wrapper },
    );

    const slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide?.style.transform).toContain("translate(0, -100px)");
  });

  it("applies default duration of 200ms", () => {
    const { container } = render(<TransitionSlide visible>Content</TransitionSlide>, { wrapper });

    const slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide?.style.transition).toContain("200ms");
  });

  it("applies custom duration", () => {
    const { container } = render(
      <TransitionSlide visible duration={500}>
        Content
      </TransitionSlide>,
      { wrapper },
    );

    const slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide?.style.transition).toContain("500ms");
  });

  it("applies default distance of 100px", () => {
    const { container } = render(<TransitionSlide visible={false}>Content</TransitionSlide>, { wrapper });

    const slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide?.style.transform).toContain("100px");
  });

  it("applies custom distance", () => {
    const { container } = render(
      <TransitionSlide visible={false} distance={200}>
        Content
      </TransitionSlide>,
      { wrapper },
    );

    const slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide?.style.transform).toContain("200px");
  });

  it("calls onFinish when transition completes", async () => {
    const onFinish = vi.fn();

    const { rerender } = render(
      <TransitionSlide visible={false} duration={100} onFinish={onFinish}>
        Content
      </TransitionSlide>,
      { wrapper },
    );

    rerender(
      <Theme.Provider>
        <TransitionSlide visible duration={100} onFinish={onFinish}>
          Content
        </TransitionSlide>
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
    const { container, rerender } = render(
      <TransitionSlide visible={false} direction={TRANSITION_SLIDE_DIRECTION_MAP.RIGHT}>
        Content
      </TransitionSlide>,
      { wrapper },
    );

    let slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide?.style.opacity).toBe("0");

    rerender(
      <Theme.Provider>
        <TransitionSlide visible direction={TRANSITION_SLIDE_DIRECTION_MAP.RIGHT}>
          Content
        </TransitionSlide>
      </Theme.Provider>,
    );

    await waitFor(() => {
      slide = container.querySelector<TransitionSlideRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`);
      expect(slide?.style.opacity).toBe("1");
    });
  });

  it("applies custom className", () => {
    const { container } = render(
      <TransitionSlide visible className="custom-class">
        Content
      </TransitionSlide>,
      { wrapper },
    );

    const slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide?.className).toContain("custom-class");
    expect(slide?.className).toContain(COMPONENT_CLASSNAME_NAMES.TransitionSlide);
  });

  it("applies custom styles", () => {
    const { container } = render(
      <TransitionSlide visible style={{ padding: "20px" }}>
        Content
      </TransitionSlide>,
      { wrapper },
    );

    const slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide?.style.padding).toBe("20px");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <TransitionSlide visible ref={ref}>
        Content
      </TransitionSlide>,
      { wrapper },
    );

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("renders component correctly", () => {
    const { container } = render(<TransitionSlide visible>Content</TransitionSlide>, { wrapper });

    const slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide).toBeDefined();
  });

  it("displays correct displayName", () => {
    expect(TransitionSlide.displayName).toBe(COMPONENT_DISPLAY_NAMES.TransitionSlide);
  });

  it("applies transition properties correctly", () => {
    const { container } = render(
      <TransitionSlide visible duration={300}>
        Content
      </TransitionSlide>,
      { wrapper },
    );

    const slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide?.style.transition).toContain("transform");
    expect(slide?.style.transition).toContain("opacity");
    expect(slide?.style.transition).toContain("ease-in-out");
  });

  it("combines direction and distance correctly", () => {
    const { container } = render(
      <TransitionSlide visible={false} direction={TRANSITION_SLIDE_DIRECTION_MAP.LEFT} distance={50}>
        Content
      </TransitionSlide>,
      { wrapper },
    );

    const slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide?.style.transform).toContain("translate(-50px");
  });

  it("renders empty children correctly", () => {
    const { container } = render(<TransitionSlide visible>{null}</TransitionSlide>, { wrapper });

    const slide = container.querySelector<TransitionSlideRef>(
      `div[class*='${COMPONENT_CLASSNAME_NAMES.TransitionSlide}']`,
    );
    expect(slide).toBeDefined();
    expect(slide?.textContent).toBe("");
  });
});
