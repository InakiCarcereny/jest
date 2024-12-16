import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "../app/components/Counter";

describe("Counter", () => {
  it("renders the counter", () => {
    render(<Counter />);
    const counter = screen.getByText("counter: 0");
    expect(counter).toBeInTheDocument();
  });

  it("renders a count of 0", () => {
    render(<Counter />);
    const counter = screen.getByRole("paragraph");
    expect(counter).toHaveTextContent("counter: 0");
  });

  it("increments the counter", () => {
    render(<Counter />);
    const increment = screen.getByText("increment");
    fireEvent.click(increment);

    const counter = screen.getByText("counter: 1");
    expect(counter).toBeInTheDocument();
  });

  it("increments the counter", () => {
    render(<Counter />);
    const increment = screen.getByText("increment");
    for (let i = 0; i < 2; i++) {
      fireEvent.click(increment);
    }

    const counter = screen.getByText("counter: 2");
    expect(counter).toBeInTheDocument();
  });

  it("sets the value of the counter", () => {
    render(<Counter />);
    const input = screen.getByRole("spinbutton");
    fireEvent.change(input, { target: { value: 10 } });
    expect(input).toHaveValue(10);
  });
});
