interface GreetingProps {
  name?: string;
}

export function Greeting({ name }: GreetingProps) {
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}
