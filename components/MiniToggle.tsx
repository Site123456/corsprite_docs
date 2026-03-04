"use client";
import React, { useState } from "react";

interface Props {
  initialOn?: boolean;
  dark: boolean;
  onChange?: (on: boolean) => void;
}

export default function MiniToggle({ initialOn = true, dark, onChange }: Props) {
  const [on, setOn] = useState(initialOn);

  return (
    <button
      type="button"
      onClick={() => {
        const next = !on;
        setOn(next);
        if (onChange) onChange(next);
      }}
      className={`
        relative flex h-6 w-11 items-center rounded-full transition-all duration-300
        ${
          on
            ? dark
              ? "bg-emerald-400/90 shadow-[0_0_12px_rgba(16,185,129,0.45)]"
              : "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.35)]"
            : dark
              ? "bg-neutral-700/60"
              : "bg-neutral-300/70"
        }
      `}
    >
      <span
        className={`
          absolute h-5 w-5 rounded-full shadow-md transition-all duration-300
          ${dark ? "bg-neutral-200" : "bg-white"}
          ${on ? "translate-x-5" : "translate-x-1"}
        `}
      />
    </button>
  );
}
