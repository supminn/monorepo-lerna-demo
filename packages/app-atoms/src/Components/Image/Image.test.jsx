import { render, screen } from "@testing-library/react";
import { Image } from "./Image";
import { describe, expect, test } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
// import "jest-styled-components";

describe("Image", () => {
  test("renders an image with the correct size", () => {
    render(<Image src="test.jpg" title="Test image" size="small" />);
    const imageElement = screen.getByAltText(/test image/i);
    expect(imageElement).toBeInTheDocument();
    // expect(imageElement).toHaveStyleRule("width: 6rem");
  });
});
