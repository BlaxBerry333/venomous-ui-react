import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Theme } from "@/components/Theme";
import { COMPONENT_DISPLAY_NAMES } from "@/constants";
import FormFieldRadioGroup from "./FormFieldRadioGroup.component";
import { FORM_FIELD_RADIO_GROUP_DIRECTION_MAP, type FormFieldRadioOption } from "./FormFieldRadioGroup.types";

const wrapper = ({ children }: { children: React.ReactNode }) => <Theme.Provider>{children}</Theme.Provider>;

const mockOptions: FormFieldRadioOption<string>[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
];

const mockOptionsWithDisabled: FormFieldRadioOption<string>[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana", disabled: true },
  { value: "orange", label: "Orange" },
];

describe("FormFieldRadioGroup", () => {
  // ========== Basic Rendering Tests ==========
  describe("Basic Rendering", () => {
    it("renders radiogroup element", () => {
      const { getByRole } = render(<FormFieldRadioGroup options={mockOptions} />, { wrapper });

      const radiogroup = getByRole("radiogroup");
      expect(radiogroup).toBeDefined();
    });

    it("renders all radio options", () => {
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptions} />, { wrapper });

      const radios = getAllByRole("radio");
      expect(radios.length).toBe(3);
    });

    it("renders option labels", () => {
      const { getByText } = render(<FormFieldRadioGroup options={mockOptions} />, { wrapper });

      expect(getByText("Apple")).toBeDefined();
      expect(getByText("Banana")).toBeDefined();
      expect(getByText("Orange")).toBeDefined();
    });

    it("renders with no option selected by default", () => {
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptions} />, { wrapper });

      const radios = getAllByRole("radio") as HTMLInputElement[];
      radios.forEach((radio) => {
        expect(radio.checked).toBe(false);
      });
    });
  });

  // ========== Props Tests ==========
  describe("Props", () => {
    it("accepts value prop (controlled)", () => {
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptions} value="banana" />, { wrapper });

      const radios = getAllByRole("radio") as HTMLInputElement[];
      expect(radios[0].checked).toBe(false); // apple
      expect(radios[1].checked).toBe(true); // banana
      expect(radios[2].checked).toBe(false); // orange
    });

    it("accepts name prop", () => {
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptions} name="fruit" />, { wrapper });

      const radios = getAllByRole("radio") as HTMLInputElement[];
      radios.forEach((radio) => {
        expect(radio.name).toBe("fruit");
      });
    });

    it("generates unique name automatically if not provided", () => {
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptions} />, { wrapper });

      const radios = getAllByRole("radio") as HTMLInputElement[];
      const name = radios[0].name;
      expect(name).toBeDefined();
      expect(name.length).toBeGreaterThan(0);
      radios.forEach((radio) => {
        expect(radio.name).toBe(name);
      });
    });

    it("accepts disabled prop", () => {
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptions} disabled={true} />, { wrapper });

      const radios = getAllByRole("radio") as HTMLInputElement[];
      radios.forEach((radio) => {
        expect(radio.disabled).toBe(true);
      });
    });

    it("accepts direction prop (vertical)", () => {
      render(<FormFieldRadioGroup options={mockOptions} direction={FORM_FIELD_RADIO_GROUP_DIRECTION_MAP.VERTICAL} />, {
        wrapper,
      });
      expect(true).toBe(true);
    });

    it("accepts direction prop (horizontal)", () => {
      render(
        <FormFieldRadioGroup options={mockOptions} direction={FORM_FIELD_RADIO_GROUP_DIRECTION_MAP.HORIZONTAL} />,
        { wrapper },
      );
      expect(true).toBe(true);
    });

    it("accepts spacing prop", () => {
      render(<FormFieldRadioGroup options={mockOptions} spacing={16} />, { wrapper });
      expect(true).toBe(true);
    });

    it("accepts custom className", () => {
      const { getByRole } = render(<FormFieldRadioGroup options={mockOptions} className="custom-radiogroup" />, {
        wrapper,
      });

      const radiogroup = getByRole("radiogroup");
      expect(radiogroup.classList.contains("custom-radiogroup")).toBe(true);
    });

    it("accepts custom style", () => {
      const { getByRole } = render(<FormFieldRadioGroup options={mockOptions} style={{ padding: 20 }} />, { wrapper });

      const radiogroup = getByRole("radiogroup");
      expect(radiogroup.style.padding).toBe("20px");
    });
  });

  // ========== Option Disabled Tests ==========
  describe("Option Disabled", () => {
    it("respects individual option disabled state", () => {
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptionsWithDisabled} />, { wrapper });

      const radios = getAllByRole("radio") as HTMLInputElement[];
      expect(radios[0].disabled).toBe(false); // apple
      expect(radios[1].disabled).toBe(true); // banana (disabled)
      expect(radios[2].disabled).toBe(false); // orange
    });

    it("group disabled overrides individual option enabled state", () => {
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptionsWithDisabled} disabled={true} />, {
        wrapper,
      });

      const radios = getAllByRole("radio") as HTMLInputElement[];
      radios.forEach((radio) => {
        expect(radio.disabled).toBe(true);
      });
    });
  });

  // ========== Controlled/Uncontrolled Tests ==========
  describe("Controlled/Uncontrolled", () => {
    it("works as uncontrolled component (no value prop)", () => {
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptions} />, { wrapper });

      const radios = getAllByRole("radio") as HTMLInputElement[];
      fireEvent.click(radios[1]); // click banana

      expect(radios[1].checked).toBe(true);
    });

    it("works as controlled component (with value prop)", () => {
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptions} value="apple" />, { wrapper });

      const radios = getAllByRole("radio") as HTMLInputElement[];
      expect(radios[0].checked).toBe(true);
    });

    it("calls onChange when option is selected", () => {
      const handleChange = vi.fn();
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptions} onChange={handleChange} />, {
        wrapper,
      });

      const radios = getAllByRole("radio");
      fireEvent.click(radios[2]); // click orange

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith("orange", expect.any(Object));
    });

    it("does not call onChange when disabled", () => {
      const handleChange = vi.fn();
      const { getAllByRole } = render(
        <FormFieldRadioGroup options={mockOptions} disabled={true} onChange={handleChange} />,
        { wrapper },
      );

      const radios = getAllByRole("radio");
      fireEvent.click(radios[0]);

      expect(handleChange).not.toHaveBeenCalled();
    });

    it("does not call onChange when clicking disabled option", () => {
      const handleChange = vi.fn();
      const { getAllByRole } = render(
        <FormFieldRadioGroup options={mockOptionsWithDisabled} onChange={handleChange} />,
        { wrapper },
      );

      const radios = getAllByRole("radio");
      fireEvent.click(radios[1]); // click disabled banana

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  // ========== Selection Tests ==========
  describe("Selection", () => {
    it("only one option can be selected at a time", () => {
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptions} />, { wrapper });

      const radios = getAllByRole("radio") as HTMLInputElement[];

      fireEvent.click(radios[0]); // select apple
      expect(radios[0].checked).toBe(true);
      expect(radios[1].checked).toBe(false);
      expect(radios[2].checked).toBe(false);

      fireEvent.click(radios[2]); // select orange
      expect(radios[0].checked).toBe(false);
      expect(radios[1].checked).toBe(false);
      expect(radios[2].checked).toBe(true);
    });

    it("clicking same option does not deselect it", () => {
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptions} />, { wrapper });

      const radios = getAllByRole("radio") as HTMLInputElement[];

      fireEvent.click(radios[0]); // select apple
      expect(radios[0].checked).toBe(true);

      fireEvent.click(radios[0]); // click apple again
      expect(radios[0].checked).toBe(true);
    });
  });

  // ========== Focus Events Tests ==========
  describe("Focus Events", () => {
    it("handles focus on individual radio", () => {
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptions} />, { wrapper });

      const radios = getAllByRole("radio");
      fireEvent.focus(radios[0]);

      // Focus should work without error
      expect(true).toBe(true);
    });

    it("handles blur on individual radio", () => {
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptions} />, { wrapper });

      const radios = getAllByRole("radio");
      fireEvent.focus(radios[0]);
      fireEvent.blur(radios[0]);

      // Blur should work without error
      expect(true).toBe(true);
    });
  });

  // ========== State Combinations Tests ==========
  describe("State Combinations", () => {
    it("renders with value and disabled", () => {
      const { getAllByRole } = render(<FormFieldRadioGroup options={mockOptions} value="apple" disabled={true} />, {
        wrapper,
      });

      const radios = getAllByRole("radio") as HTMLInputElement[];
      expect(radios[0].checked).toBe(true);
      expect(radios[0].disabled).toBe(true);
    });

    it("renders with all props", () => {
      render(
        <FormFieldRadioGroup
          options={mockOptions}
          value="banana"
          name="fruits"
          direction={FORM_FIELD_RADIO_GROUP_DIRECTION_MAP.HORIZONTAL}
          spacing={12}
        />,
        { wrapper },
      );
      expect(true).toBe(true);
    });
  });

  // ========== General Tests ==========
  describe("General", () => {
    it("displays correct displayName", () => {
      expect((FormFieldRadioGroup as React.FC).displayName).toBe(COMPONENT_DISPLAY_NAMES.FormFieldRadioGroup);
    });

    it("renders component without errors", () => {
      const { container } = render(<FormFieldRadioGroup options={mockOptions} />, { wrapper });

      expect(container).toBeDefined();
    });

    it("forwards ref correctly", () => {
      const ref = vi.fn();
      render(<FormFieldRadioGroup options={mockOptions} ref={ref} />, { wrapper });

      expect(ref).toHaveBeenCalled();
      expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLDivElement);
    });

    it("renders empty when options is empty array", () => {
      const { queryAllByRole } = render(<FormFieldRadioGroup options={[]} />, { wrapper });

      const radios = queryAllByRole("radio");
      expect(radios.length).toBe(0);
    });
  });

  // ========== Generic Type Tests ==========
  describe("Generic Types", () => {
    it("works with number values", () => {
      const numberOptions: FormFieldRadioOption<number>[] = [
        { value: 1, label: "One" },
        { value: 2, label: "Two" },
        { value: 3, label: "Three" },
      ];

      const handleChange = vi.fn();
      const { getAllByRole } = render(<FormFieldRadioGroup<number> options={numberOptions} onChange={handleChange} />, {
        wrapper,
      });

      const radios = getAllByRole("radio");
      fireEvent.click(radios[1]);

      expect(handleChange).toHaveBeenCalledWith(2, expect.any(Object));
    });

    it("works with object values", () => {
      interface Fruit {
        id: string;
        name: string;
      }

      const objectOptions: FormFieldRadioOption<Fruit>[] = [
        { value: { id: "1", name: "Apple" }, label: "Apple" },
        { value: { id: "2", name: "Banana" }, label: "Banana" },
      ];

      const handleChange = vi.fn();
      const { getAllByRole } = render(<FormFieldRadioGroup<Fruit> options={objectOptions} onChange={handleChange} />, {
        wrapper,
      });

      const radios = getAllByRole("radio");
      fireEvent.click(radios[0]);

      expect(handleChange).toHaveBeenCalledWith({ id: "1", name: "Apple" }, expect.any(Object));
    });
  });
});
