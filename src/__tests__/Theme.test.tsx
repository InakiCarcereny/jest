import { render, screen, fireEvent } from "../app/test-utils";
import { Theme } from "../app/components/Theme";

describe("<Theme />", () => {
  it("render text correctly", () => {
    render(<Theme />);
    const text = screen.getByText("Theme: light");
    expect(text).toBeInTheDocument();
  });

  it("renders the toggle button", () => {
    render(<Theme />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("toggles the theme", () => {
    render(<Theme />);
    const text = screen.getByText("Theme: light");
    expect(text).toBeInTheDocument();

    const button = screen.getByRole("button", {
      name: "Toggle theme",
    });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const textChanged = screen.getByText("Theme: dark");
    expect(textChanged).toBeInTheDocument();
  });
});
