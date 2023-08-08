import { render } from "@testing-library/react";
import { Input } from "./Input";
import { describe, expect, test } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("Input component", () => {
  test("renders a textarea when mutliLine prop is true", () => {
    const { container } = render(<Input mutliLine />);
    expect(container.firstChild.tagName).toBe("TEXTAREA");
  });

  test("renders an input when mutliLine prop is false", () => {
    const { container } = render(<Input />);
    expect(container.firstChild.tagName).toBe("INPUT");
  });
});
