import { render, screen, waitFor } from "@testing-library/react";

import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";

import Dialog from "./Dialog.component";
import type { DialogRef } from "./Dialog.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Dialog", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders children correctly when open", async () => {
    render(
      <Dialog open>
        <div>Dialog Content</div>
      </Dialog>,
      { wrapper },
    );

    await waitFor(() => {
      expect(screen.getByText("Dialog Content")).toBeDefined();
    });
  });

  it("renders as div by default", async () => {
    const { baseElement } = render(<Dialog open>Content</Dialog>, { wrapper });

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      expect(dialog).toBeDefined();
      expect(dialog?.tagName).toBe("DIV");
    });
  });

  it("renders as section when as='section'", async () => {
    const { baseElement } = render(
      <Dialog open as="section">
        Content
      </Dialog>,
      { wrapper },
    );

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`section[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      expect(dialog).toBeDefined();
      expect(dialog?.tagName).toBe("SECTION");
    });
  });

  it("does not render children when closed", async () => {
    const { baseElement } = render(
      <Dialog open={false}>
        <div>Dialog Content</div>
      </Dialog>,
      { wrapper },
    );

    await waitFor(() => {
      // Dialog might be in DOM but hidden by Transition
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      // If dialog exists, parent should have opacity 0
      if (dialog) {
        const parent = dialog.parentElement;
        expect(parent?.style.opacity).toBe("0");
      }
    });
  });

  it("applies default maxWidth of XS", async () => {
    const { baseElement } = render(<Dialog open>Content</Dialog>, { wrapper });

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      expect(dialog?.style.maxWidth).toBe("575px");
    });
  });

  it("applies custom maxWidth", async () => {
    const { baseElement } = render(
      <Dialog open maxWidth="MD">
        Content
      </Dialog>,
      { wrapper },
    );

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      expect(dialog?.style.maxWidth).toBe("1023px");
    });
  });

  it("applies card-based styles", async () => {
    const { baseElement } = render(<Dialog open>Content</Dialog>, { wrapper });

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      expect(dialog?.style.borderRadius).toBeTruthy();
      expect(dialog?.style.padding).toBeTruthy();
    });
  });

  it("applies position relative", async () => {
    const { baseElement } = render(<Dialog open>Content</Dialog>, { wrapper });

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      expect(dialog?.style.position).toBe("relative");
    });
  });

  it("applies overflow auto", async () => {
    const { baseElement } = render(<Dialog open>Content</Dialog>, { wrapper });

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      expect(dialog?.style.overflow).toBe("auto");
    });
  });

  it("applies user-select text", async () => {
    const { baseElement } = render(<Dialog open>Content</Dialog>, { wrapper });

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      expect(dialog?.style.userSelect).toBe("text");
    });
  });

  it("applies box shadow", async () => {
    const { baseElement } = render(<Dialog open>Content</Dialog>, { wrapper });

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      expect(dialog?.style.boxShadow).toBeTruthy();
    });
  });

  it("renders with Portal", async () => {
    const { baseElement } = render(<Dialog open>Content</Dialog>, { wrapper });

    await waitFor(() => {
      // Portal should render to document.body
      expect(baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`)).toBeDefined();
    });
  });

  it("renders with Backdrop", async () => {
    const { baseElement } = render(<Dialog open>Content</Dialog>, { wrapper });

    await waitFor(() => {
      const backdrop = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
      expect(backdrop).toBeDefined();
    });
  });

  it("calls onClickBackdrop when backdrop is clicked and autoClose is true", async () => {
    const onClickBackdrop = vi.fn();
    const { baseElement } = render(
      <Dialog open onClickBackdrop={onClickBackdrop}>
        Content
      </Dialog>,
      { wrapper },
    );

    await waitFor(() => {
      const backdrop = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
      backdrop?.click();

      expect(onClickBackdrop).toHaveBeenCalled();
    });
  });

  it("does not call onClickBackdrop when autoCloseOnClickBackdrop is false", async () => {
    const onClickBackdrop = vi.fn();
    const { baseElement } = render(
      <Dialog open autoCloseOnClickBackdrop={false} onClickBackdrop={onClickBackdrop}>
        Content
      </Dialog>,
      { wrapper },
    );

    await waitFor(() => {
      const backdrop = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Backdrop}']`);
      backdrop?.click();

      expect(onClickBackdrop).not.toHaveBeenCalled();
    });
  });

  it("does not call onClickBackdrop when clicking dialog content", async () => {
    const onClickBackdrop = vi.fn();
    const { baseElement } = render(
      <Dialog open onClickBackdrop={onClickBackdrop}>
        <div data-testid="dialog-content">Content</div>
      </Dialog>,
      { wrapper },
    );

    await waitFor(() => {
      const content = baseElement.querySelector('[data-testid="dialog-content"]');
      content?.dispatchEvent(new MouseEvent("click", { bubbles: true }));

      expect(onClickBackdrop).not.toHaveBeenCalled();
    });
  });

  it("applies custom className", async () => {
    const { baseElement } = render(
      <Dialog open className="custom-class">
        Content
      </Dialog>,
      { wrapper },
    );

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      expect(dialog?.className).toContain("custom-class");
      expect(dialog?.className).toContain(COMPONENT_CLASSNAME_NAMES.Dialog);
    });
  });

  it("applies custom styles", async () => {
    const { baseElement } = render(
      <Dialog open style={{ padding: "50px" }}>
        Content
      </Dialog>,
      { wrapper },
    );

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      expect(dialog?.style.padding).toBe("50px");
    });
  });

  it("forwards ref correctly", async () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <Dialog open ref={ref}>
        Content
      </Dialog>,
      { wrapper },
    );

    await waitFor(() => {
      expect(ref.current).toBeDefined();
      expect(ref.current?.tagName).toBe("DIV");
    });
  });

  it("passes through HTML attributes", async () => {
    const { baseElement } = render(
      <Dialog open data-testid="test-dialog" aria-label="Test dialog">
        Content
      </Dialog>,
      { wrapper },
    );

    await waitFor(() => {
      const dialog = baseElement.querySelector('[data-testid="test-dialog"]');
      expect(dialog).toBeDefined();
      expect(dialog?.getAttribute("aria-label")).toBe("Test dialog");
    });
  });

  it("displays correct displayName", () => {
    expect(Dialog.displayName).toBe(COMPONENT_DISPLAY_NAMES.Dialog);
  });

  it("applies base styles correctly", async () => {
    const { baseElement } = render(<Dialog open>Content</Dialog>, { wrapper });

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      expect(dialog?.style.boxSizing).toBe("border-box");
      expect((dialog?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
    });
  });

  it("merges custom style with component styles", async () => {
    const { baseElement } = render(
      <Dialog open style={{ borderRadius: "16px" }}>
        Content
      </Dialog>,
      { wrapper },
    );

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      // Custom style should override default style
      expect(dialog?.style.borderRadius).toBe("16px");
      // Base styles should still apply
      expect(dialog?.style.boxSizing).toBe("border-box");
    });
  });

  it("supports custom styles via Theme.Provider", async () => {
    const customStyles = {
      Dialog: {
        padding: "40px",
        backgroundColor: "rgb(240, 240, 240)",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { baseElement } = render(<Dialog open>Content</Dialog>, { wrapper: customWrapper });

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      expect(dialog?.style.padding).toBe("40px");
      expect(dialog?.style.backgroundColor).toBe("rgb(240, 240, 240)");
    });
  });

  it("toggles visibility when open changes", async () => {
    const { baseElement, rerender } = render(<Dialog>Content</Dialog>, { wrapper });

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      if (dialog) {
        const parent = dialog.parentElement;
        expect(parent?.style.opacity).toBe("0");
      }
    });

    rerender(
      <Theme.Provider>
        <Dialog open>Content</Dialog>
      </Theme.Provider>,
    );

    await waitFor(() => {
      const dialogAfter = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      const parentAfter = dialogAfter?.parentElement;
      expect(parentAfter?.style.opacity).toBe("1");
    });
  });

  it("renders with Transition.Scale animation", async () => {
    const { baseElement } = render(<Dialog open>Content</Dialog>, { wrapper });

    await waitFor(() => {
      const dialog = baseElement.querySelector<DialogRef>(`div[class*='${COMPONENT_CLASSNAME_NAMES.Dialog}']`);
      const parent = dialog?.parentElement;
      // Transition.Scale applies transform
      expect(parent?.style.transform).toBeTruthy();
    });
  });
});
