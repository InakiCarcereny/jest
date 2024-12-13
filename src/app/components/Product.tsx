interface ProductProps {
  name: string;
  price: number;
}

export function Product({ name, price }: ProductProps) {
  return (
    <div>
      <span>name: {name}</span>
      <span>price: {price}</span>
    </div>
  );
}
