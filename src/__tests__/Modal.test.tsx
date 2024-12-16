import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "../app/components/Modal";

describe("<Modal />", () => {
  it("renders the modal", () => {
    render(<Modal />);
    const h1Element = screen.getByRole("heading", {
      level: 1,
    });
    expect(h1Element).toBeInTheDocument();
  });

  it("renders the modal toggle", () => {
    render(<Modal />);
    const buttonElement = screen.getByRole("button", {
      name: "Toggle",
    });
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    const h1Element = screen.getByRole("heading");
    expect(h1Element).toHaveTextContent("The modal is: open");
  });
});
