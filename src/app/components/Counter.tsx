import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <div className="flex flex-col">
      <p>counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />

      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
}
