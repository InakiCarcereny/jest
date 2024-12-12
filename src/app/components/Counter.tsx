import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col">
      <p>counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}
