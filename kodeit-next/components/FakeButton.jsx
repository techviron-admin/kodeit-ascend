"use client";

import { useState } from "react";

export default function FakeButton({
  className = "btn-grad",
  done = "Done",
  children,
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className={className}
      disabled={clicked}
      onClick={() => setClicked(true)}
    >
      {clicked ? `\u2713 ${done}` : children}
    </button>
  );
}
