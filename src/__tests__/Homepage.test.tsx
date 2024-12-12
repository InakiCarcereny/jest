import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import { Contador } from "@/app/components/Contador";

describe("Home Page", () => {
  it("renders the homepage", () => {
    render(<Home />);
    expect(screen.getByText("hola mundo")).toBeInTheDocument();
  });

  it("renders the counter", () => {
    render(<Contador />);
    expect(screen.getByText("contador")).toBeInTheDocument();
  });

  it("renders the counter", () => {
    render(<Contador />);
    const contador = screen.getByText("contador");
    expect(contador).toBeInTheDocument();
  });

  it("renders the button", () => {
    render(<Home />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders the button says click me", () => {
    render(<Home />);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("renders the input placeholder search...", () => {
    render(<Home />);
    expect(screen.getByPlaceholderText("search...")).toBeInTheDocument();
  });
});
