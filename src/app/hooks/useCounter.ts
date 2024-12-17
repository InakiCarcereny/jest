"use client";

import { useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);

  const inrement = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, inrement, decrement };
}
