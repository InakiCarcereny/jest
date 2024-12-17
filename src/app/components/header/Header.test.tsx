import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("<Header />", () => {
  it("renders the header", () => {
    render(<Header />);
    const h1Element = screen.getByRole("heading", {
      level: 1,
    });
    expect(h1Element).toBeInTheDocument();
  });
});
