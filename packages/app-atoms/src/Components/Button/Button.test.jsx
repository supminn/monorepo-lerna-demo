import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { afterEach, describe, expect, test } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);

describe("Button", () => {
  test("renders a button with the correct text", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

afterEach(() => {
  cleanup();
});
