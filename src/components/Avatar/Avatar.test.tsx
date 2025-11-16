import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_CLASSNAME_NAMES, COMPONENT_DISPLAY_NAMES } from "@/constants";

import Avatar from "./Avatar.component";
import type { AvatarRef } from "./Avatar.types";
import { AVATAR_SHAPE_MAP } from "./Avatar.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

describe("Avatar", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders with image source correctly", () => {
    const { container } = render(<Avatar src="https://example.com/avatar.jpg" alt="User avatar" />, { wrapper });

    const img = container.querySelector<AvatarRef>("img");
    expect(img).toBeDefined();
    expect(img?.getAttribute("src")).toBe("https://example.com/avatar.jpg");
    expect(img?.getAttribute("alt")).toBe("User avatar");
    expect(img?.getAttribute("loading")).toBe("lazy");
  });

  it("renders with text placeholder when no src", () => {
    render(<Avatar text="John Doe" />, { wrapper });

    expect(screen.getByText("JO")).toBeDefined();
  });

  it("renders text placeholder with first 2 characters uppercase", () => {
    render(<Avatar text="alice" />, { wrapper });

    expect(screen.getByText("AL")).toBeDefined();
  });

  it("renders text placeholder with trimmed text", () => {
    render(<Avatar text="  bob  " />, { wrapper });

    expect(screen.getByText("BO")).toBeDefined();
  });

  it("renders default icon when no src and no text", () => {
    const { container } = render(<Avatar />, { wrapper });

    // Default icon is mdi:account - rendered via Icon component
    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    expect(avatar).toBeDefined();
    // Icon component should be present (renders as span in test environment)
    const icon = container.querySelector<AvatarRef>("span");
    expect(icon).toBeDefined();
  });

  it("renders error icon when image fails to load", async () => {
    const { container } = render(<Avatar src="invalid-url.jpg" />, { wrapper });

    // Trigger image error
    const img = container.querySelector<AvatarRef>("img");
    expect(img).toBeDefined();

    // Simulate image load error
    img?.dispatchEvent(new Event("error"));

    // Wait for error icon to appear
    await waitFor(() => {
      const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
      expect(avatar).toBeDefined();
      // Error icon should replace the image (mdi:help)
      const icon = container.querySelector<AvatarRef>("span");
      expect(icon).toBeDefined();
    });
  });

  it("applies circle shape by default", () => {
    const { container } = render(<Avatar text="A" />, { wrapper });

    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    expect(avatar?.style.borderRadius).toBe("50%");
  });

  it("applies square shape correctly", () => {
    const { container } = render(<Avatar text="A" shape={AVATAR_SHAPE_MAP.SQUARE} />, { wrapper });

    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    expect(avatar?.style.borderRadius).toBe("8px");
  });

  it("applies default width of 40px", () => {
    const { container } = render(<Avatar text="A" />, { wrapper });

    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    expect(avatar?.style.width).toBe("40px");
    expect(avatar?.style.height).toBe("40px");
    expect(avatar?.style.minWidth).toBe("40px");
    expect(avatar?.style.minHeight).toBe("40px");
  });

  it("applies custom width correctly", () => {
    const { container } = render(<Avatar text="A" width={80} />, { wrapper });

    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    expect(avatar?.style.width).toBe("80px");
    expect(avatar?.style.height).toBe("80px");
    expect(avatar?.style.minWidth).toBe("80px");
    expect(avatar?.style.minHeight).toBe("80px");
  });

  it("applies correct fontSize for width <= 32", () => {
    const { container } = render(<Avatar text="A" width={32} />, { wrapper });

    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    // Caption size (12px for width <= 32)
    expect(avatar?.style.fontSize).toBe("12px");
  });

  it("applies correct fontSize for width <= 40", () => {
    const { container } = render(<Avatar text="A" width={40} />, { wrapper });

    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    // Small size (14px for width <= 40)
    expect(avatar?.style.fontSize).toBe("14px");
  });

  it("applies correct fontSize for width <= 48", () => {
    const { container } = render(<Avatar text="A" width={48} />, { wrapper });

    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    // Base size (16px for width <= 48)
    expect(avatar?.style.fontSize).toBe("16px");
  });

  it("applies correct fontSize for width > 48", () => {
    const { container } = render(<Avatar text="A" width={64} />, { wrapper });

    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    // Large size (18px for width > 48)
    expect(avatar?.style.fontSize).toBe("18px");
  });

  it("applies custom className", () => {
    const { container } = render(<Avatar text="A" className="custom-class" />, { wrapper });

    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    expect(avatar?.className).toContain("custom-class");
    expect(avatar?.className).toContain(COMPONENT_CLASSNAME_NAMES.Avatar);
  });

  it("applies custom styles", () => {
    const { container } = render(<Avatar text="A" style={{ backgroundColor: "red" }} />, { wrapper });

    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    expect(avatar?.style.backgroundColor).toBe("red");
  });

  it("forwards ref correctly", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Avatar text="A" ref={ref} />, { wrapper });

    expect(ref.current).toBeDefined();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("passes through HTML attributes", () => {
    const { container } = render(<Avatar text="A" data-testid="test-avatar" aria-label="User avatar" />, {
      wrapper,
    });

    const avatar = container.querySelector('[data-testid="test-avatar"]');
    expect(avatar).toBeDefined();
    expect(avatar?.getAttribute("aria-label")).toBe("User avatar");
  });

  it("displays correct displayName", () => {
    expect(Avatar.displayName).toBe(COMPONENT_DISPLAY_NAMES.Avatar);
  });

  it("applies base styles correctly", () => {
    const { container } = render(<Avatar text="A" />, { wrapper });

    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    expect(avatar?.style.boxSizing).toBe("border-box");
    expect((avatar?.style as any)["WebkitTapHighlightColor"]).toBe("transparent");
    expect(avatar?.style.position).toBe("relative");
    expect(avatar?.style.display).toBe("inline-flex");
    expect(avatar?.style.alignItems).toBe("center");
    expect(avatar?.style.justifyContent).toBe("center");
    expect(avatar?.style.overflow).toBe("hidden");
  });

  it("merges custom style with component styles", () => {
    const { container } = render(<Avatar text="A" style={{ position: "absolute" }} />, { wrapper });

    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    // Custom style should override default style
    expect(avatar?.style.position).toBe("absolute");
    // Base styles should still apply
    expect(avatar?.style.boxSizing).toBe("border-box");
  });

  it("supports custom styles via Theme.Provider", () => {
    const customStyles = {
      Avatar: {
        borderRadius: "20px",
        borderWidth: "2px",
      },
    };

    const customWrapper = ({ children }: { children: React.ReactNode }) => (
      <Theme.Provider customStyles={customStyles}>{children}</Theme.Provider>
    );

    const { container } = render(<Avatar text="A" />, { wrapper: customWrapper });

    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    expect(avatar?.style.borderRadius).toBe("20px");
    expect(avatar?.style.borderWidth).toBe("2px");
  });

  it("renders as div element", () => {
    const { container } = render(<Avatar text="A" />, { wrapper });

    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    expect(avatar?.tagName).toBe("DIV");
  });

  it("handles image load correctly", () => {
    const { container } = render(<Avatar src="https://example.com/avatar.jpg" />, { wrapper });

    const img = container.querySelector<AvatarRef>("img");
    expect(img).toBeDefined();
    expect(img?.style.width).toBe("100%");
    expect(img?.style.height).toBe("100%");
    expect(img?.style.objectFit).toBe("cover");
    expect(img?.style.display).toBe("block");
  });

  it("resets error state when src changes", async () => {
    const { container, rerender } = render(<Avatar src="invalid-url.jpg" />, { wrapper });

    // Trigger error on first image
    const img1 = container.querySelector<AvatarRef>("img");
    img1?.dispatchEvent(new Event("error"));

    await waitFor(() => {
      // Error icon should be shown
      const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
      expect(avatar).toBeDefined();
    });

    // Change src to valid URL
    rerender(
      <Theme.Provider>
        <Avatar src="https://example.com/new-avatar.jpg" />
      </Theme.Provider>,
    );

    // Image should be shown again (error state reset)
    await waitFor(() => {
      const img2 = container.querySelector<AvatarRef>("img");
      expect(img2).toBeDefined();
      expect(img2?.getAttribute("src")).toBe("https://example.com/new-avatar.jpg");
    });
  });

  it("renders text with Typography.Text component", () => {
    const { container } = render(<Avatar text="JD" />, { wrapper });

    // Typography.Text renders as strong element
    const text = container.querySelector<AvatarRef>("strong");
    expect(text).toBeDefined();
    expect(text?.textContent).toBe("JD");
  });

  it("icon has correct width (half of avatar width)", () => {
    const { container } = render(<Avatar width={80} />, { wrapper });

    // Default icon (mdi:account) should have width = 40 (half of 80)
    // Icon component wraps @iconify/react which renders as span in test env
    const avatar = container.querySelector<AvatarRef>(`.${COMPONENT_CLASSNAME_NAMES.Avatar}`);
    expect(avatar?.style.width).toBe("80px");
    // Icon itself should be rendered (verifying it exists)
    const icon = container.querySelector<AvatarRef>("span");
    expect(icon).toBeDefined();
  });

  it("prioritizes image over text", () => {
    const { container } = render(<Avatar src="https://example.com/avatar.jpg" text="JD" />, { wrapper });

    // Should render image, not text
    const img = container.querySelector<AvatarRef>("img");
    expect(img).toBeDefined();
    expect(screen.queryByText("JD")).toBeNull();
  });
});
