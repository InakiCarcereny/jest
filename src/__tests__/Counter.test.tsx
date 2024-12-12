import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "../app/components/Counter";

describe("Counter", () => {
  it("renders the counter", () => {
    render(<Counter />);
    const counter = screen.getByText("counter: 0");
    expect(counter).toBeInTheDocument();
  });

  it("increments the counter", () => {
    render(<Counter />);
    const increment = screen.getByText("increment");
    fireEvent.click(increment);

    const counter = screen.getByText("counter: 1");
    expect(counter).toBeInTheDocument();
  });
});
