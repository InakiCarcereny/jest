import { Contador } from "./components/Contador";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center text-xl font-semibold">
      hola mundo
      <Contador />
      <Contador />
      <button>Click me</button>
      <input type="search" placeholder="search..." />
    </div>
  );
}
