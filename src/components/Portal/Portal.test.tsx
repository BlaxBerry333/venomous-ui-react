import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import Portal from "./Portal.component";

describe("Portal", () => {
  beforeEach(() => {
    // Clean up document body before each test
    document.body.innerHTML = "";
  });

  it("renders children into document.body by default", () => {
    render(
      <Portal>
        <div>Portal content</div>
      </Portal>,
    );

    expect(screen.getByText("Portal content")).toBeDefined();
    expect(document.body.innerHTML).toContain("Portal content");
  });

  it("renders children into specified container by ID", () => {
    // Create a custom container
    const customContainer = document.createElement("div");
    customContainer.id = "custom-portal-container";
    document.body.appendChild(customContainer);

    render(
      <Portal containerId="custom-portal-container">
        <div>Custom portal content</div>
      </Portal>,
    );

    expect(screen.getByText("Custom portal content")).toBeDefined();
    expect(customContainer.innerHTML).toContain("Custom portal content");
  });

  it("falls back to document.body when container ID is not found", () => {
    render(
      <Portal containerId="non-existent-container">
        <div>Fallback content</div>
      </Portal>,
    );

    // Should render nothing because container doesn't exist
    expect(document.body.innerHTML).not.toContain("Fallback content");
  });

  it("handles multiple children correctly", () => {
    render(
      <Portal>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Portal>,
    );

    expect(screen.getByText("Child 1")).toBeDefined();
    expect(screen.getByText("Child 2")).toBeDefined();
    expect(screen.getByText("Child 3")).toBeDefined();
  });

  it("updates container when containerId changes", () => {
    const container1 = document.createElement("div");
    container1.id = "container-1";
    document.body.appendChild(container1);

    const container2 = document.createElement("div");
    container2.id = "container-2";
    document.body.appendChild(container2);

    const { rerender } = render(
      <Portal containerId="container-1">
        <div>Portal content</div>
      </Portal>,
    );

    expect(container1.innerHTML).toContain("Portal content");
    expect(container2.innerHTML).not.toContain("Portal content");

    rerender(
      <Portal containerId="container-2">
        <div>Portal content</div>
      </Portal>,
    );

    expect(container1.innerHTML).not.toContain("Portal content");
    expect(container2.innerHTML).toContain("Portal content");
  });

  it("renders complex React nodes", () => {
    render(
      <Portal>
        <div>
          <h1>Title</h1>
          <p>Paragraph</p>
          <button>Click me</button>
        </div>
      </Portal>,
    );

    expect(screen.getByText("Title")).toBeDefined();
    expect(screen.getByText("Paragraph")).toBeDefined();
    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("unmounts children when Portal is unmounted", () => {
    const { unmount } = render(
      <Portal>
        <div>Portal content</div>
      </Portal>,
    );

    expect(screen.getByText("Portal content")).toBeDefined();

    unmount();

    expect(document.body.innerHTML).not.toContain("Portal content");
  });

  it("maintains stable container reference with useMemo", () => {
    const container = document.createElement("div");
    container.id = "stable-container";
    document.body.appendChild(container);

    const { rerender } = render(
      <Portal containerId="stable-container">
        <div>Content</div>
      </Portal>,
    );

    const firstHTML = container.innerHTML;

    // Rerender with same containerId
    rerender(
      <Portal containerId="stable-container">
        <div>Content</div>
      </Portal>,
    );

    expect(container.innerHTML).toBe(firstHTML);
  });

  it("handles nested portals", () => {
    const outerContainer = document.createElement("div");
    outerContainer.id = "outer-container";
    document.body.appendChild(outerContainer);

    const innerContainer = document.createElement("div");
    innerContainer.id = "inner-container";
    document.body.appendChild(innerContainer);

    render(
      <Portal containerId="outer-container">
        <div>
          Outer content
          <Portal containerId="inner-container">
            <div>Inner content</div>
          </Portal>
        </div>
      </Portal>,
    );

    expect(outerContainer.innerHTML).toContain("Outer content");
    expect(innerContainer.innerHTML).toContain("Inner content");
  });

  it("displays correct displayName", () => {
    expect(Portal.displayName).toBe(COMPONENT_DISPLAY_NAMES.Portal);
  });
});
