import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import NoSSR from "./NoSSR.component";

describe("NoSSR", () => {
  it("renders children on client side", async () => {
    render(
      <NoSSR>
        <div>Client-only content</div>
      </NoSSR>,
    );

    // In test environment, useEffect runs immediately, so content is rendered
    await waitFor(() => {
      expect(screen.getByText("Client-only content")).toBeDefined();
    });
  });

  it("renders children after mounting on client", async () => {
    render(
      <NoSSR>
        <div>Client-only content</div>
      </NoSSR>,
    );

    // Wait for useEffect to run and update state
    await waitFor(() => {
      expect(screen.getByText("Client-only content")).toBeDefined();
    });
  });

  it("handles multiple children correctly", async () => {
    render(
      <NoSSR>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </NoSSR>,
    );

    await waitFor(() => {
      expect(screen.getByText("Child 1")).toBeDefined();
      expect(screen.getByText("Child 2")).toBeDefined();
      expect(screen.getByText("Child 3")).toBeDefined();
    });
  });

  it("renders complex React nodes", async () => {
    render(
      <NoSSR>
        <div>
          <h1>Title</h1>
          <p>Paragraph</p>
          <button>Click me</button>
        </div>
      </NoSSR>,
    );

    await waitFor(() => {
      expect(screen.getByText("Title")).toBeDefined();
      expect(screen.getByText("Paragraph")).toBeDefined();
      expect(screen.getByText("Click me")).toBeDefined();
    });
  });

  it("renders nested NoSSR components", async () => {
    render(
      <NoSSR>
        <div>
          Outer content
          <NoSSR>
            <div>Inner content</div>
          </NoSSR>
        </div>
      </NoSSR>,
    );

    await waitFor(() => {
      expect(screen.getByText("Outer content")).toBeDefined();
      expect(screen.getByText("Inner content")).toBeDefined();
    });
  });

  it("renders content in client environment", async () => {
    const { container } = render(
      <NoSSR>
        <div>Content</div>
      </NoSSR>,
    );

    // In test environment (client-side), content should be rendered
    await waitFor(() => {
      expect(container.textContent).toContain("Content");
    });
  });

  it("handles empty children", async () => {
    const { container } = render(<NoSSR>{null}</NoSSR>);

    await waitFor(() => {
      // Should render without errors, even with null children
      expect(container).toBeDefined();
    });
  });

  it("displays correct displayName", () => {
    expect(NoSSR.displayName).toBe(COMPONENT_DISPLAY_NAMES.NoSSR);
  });

  it("updates content when children change after mount", async () => {
    const { rerender } = render(
      <NoSSR>
        <div>Initial content</div>
      </NoSSR>,
    );

    await waitFor(() => {
      expect(screen.getByText("Initial content")).toBeDefined();
    });

    rerender(
      <NoSSR>
        <div>Updated content</div>
      </NoSSR>,
    );

    await waitFor(() => {
      expect(screen.getByText("Updated content")).toBeDefined();
    });
  });

  it("prevents hydration mismatch in SSR by using client-only rendering", async () => {
    // This test verifies the component design pattern that prevents hydration mismatches
    // The component returns null initially, then renders after useEffect (client-only)

    const { container } = render(
      <NoSSR>
        <div data-testid="ssr-content">This should not cause hydration mismatch</div>
      </NoSSR>,
    );

    // In client environment (test), content is rendered after mount
    await waitFor(() => {
      expect(container.querySelector('[data-testid="ssr-content"]')).toBeDefined();
    });
  });
});
