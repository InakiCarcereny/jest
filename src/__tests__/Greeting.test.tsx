import { render, screen } from "@testing-library/react";
import { Greeting } from "../app/components/Greeting";

describe("<Greeting />", () => {
  it("renders the greeting", () => {
    render(<Greeting />);
    const greeting = screen.getByText("Hello");
    expect(greeting).toBeInTheDocument();
  });

  it("renders the greeting with a name", () => {
    render(<Greeting name="John" />);
    const greeting = screen.getByText("Hello John");
    expect(greeting).toBeInTheDocument();
  });
});
