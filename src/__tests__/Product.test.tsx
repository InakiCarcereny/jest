import { render, screen } from "@testing-library/react";
import { Product } from "../app/components/Product";

describe("<Product />", () => {
  it("renders the product", () => {
    render(<Product name="Product 1" price={100} />);
    const product = screen.getByText("name: Product 1");
    expect(product).toBeInTheDocument();
  });

  it("renders the product with a price", () => {
    render(<Product name="Product 1" price={100} />);
    const product = screen.getByText("price: 100");
    expect(product).toBeInTheDocument();
  });
});
