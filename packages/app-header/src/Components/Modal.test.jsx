import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import Modal from "./Modal";

describe("Modal", () => {
  test("renders the modal with the correct title and buttons", () => {
    render(
      <Modal show={true} title="Test Modal" onCloseModal={() => {}}>
        <div>Test Content</div>
      </Modal>
    );
    const modalTitle = screen.getByText("Test Modal");
    const closeButton = screen.getByRole("button", { name: "Close" });
    const modalContent = screen.getByText("Test Content");
    expect(modalTitle).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
  });
});
