import { useState } from "react";

export function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>The modal is: {open ? "open" : "closed"}</h1>
      <button onClick={() => setOpen(!open)}>Toggle</button>
    </div>
  );
}
