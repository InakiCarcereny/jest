import { Product } from "./Product";

const PRODUCTS = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
  },
];

export function Products() {
  return (
    <div>
      {PRODUCTS.map((product) => {
        return (
          <Product key={product.id} name={product.name} price={product.price} />
        );
      })}
    </div>
  );
}
