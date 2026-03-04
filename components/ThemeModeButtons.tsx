"use client";
import React, { type ComponentType } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { Theme } from "../app/hooks/useTheme";

interface Props {
  theme: Theme;
  setTheme: (t: Theme) => void;
  dark: boolean;
}

const options: { value: Theme; label: string; icon: ComponentType<{ size?: number }> }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
];

export default function ThemeModeButtons({ theme, setTheme, dark }: Props) {
  return (
    <div className="flex rounded-full bg-black/5 p-1 dark:bg-white/10">
      {options.map(({ value, label, icon: Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            className={`
              flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] transition
              ${
                active
                  ? dark
                    ? "bg-white text-neutral-950"
                    : "bg-neutral-900 text-white"
                  : dark
                  ? "text-neutral-300"
                  : "text-neutral-700"
              }
            `}
          >
            <Icon size={11} />
            <span>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
