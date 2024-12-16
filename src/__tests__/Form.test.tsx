import { render, screen } from "@testing-library/react";
import { Form } from "../app/components/Form";

describe("<Form />", () => {
  it("renders the form", () => {
    render(<Form />);
    const h1Element = screen.getByRole("heading", {
      level: 1,
    });
    expect(h1Element).toBeInTheDocument();

    const h2Element = screen.getByRole("heading", {
      level: 2,
    });
    expect(h2Element).toBeInTheDocument();

    const pElement = screen.getByText("This is a paragraph");
    expect(pElement).toBeInTheDocument();

    const pElementRegex = screen.getByText(/This is a paragraph/i);
    expect(pElementRegex).toBeInTheDocument();

    const pElementFunction = screen.getByText((content: string) =>
      content.includes("This is a paragraph")
    );
    expect(pElementFunction).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const spanElement = screen.getByTitle("age");
    expect(spanElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("Image");
    expect(imageElement).toBeInTheDocument();

    const divElement = screen.getByTestId("custom-element");
    expect(divElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    const emailElement = screen.getByPlaceholderText("example@example.com");
    expect(emailElement).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
