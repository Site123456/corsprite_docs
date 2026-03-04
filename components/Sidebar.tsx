"use client";
import React, { type ReactNode, type ComponentType } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface SidebarLinkProps {
  href: string;
  label: string;
  icon?: ComponentType<{ size?: number }>;
  active?: boolean;
  dark: boolean;
}

export function SidebarLink({
  href,
  label,
  icon: Icon,
  active,
  dark,
}: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium transition
      ${
        active
          ? dark
            ? "bg-white/15 text-neutral-50 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
            : "bg-black/5 text-neutral-900 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
          : dark
          ? "text-neutral-400 hover:bg-white/7 hover:text-neutral-50"
          : "text-neutral-500 hover:bg-black/5 hover:text-neutral-900"
      }`}
    >
      {Icon && (
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-lg
          ${
            active
              ? dark
                ? "bg-white/20 text-neutral-50"
                : "bg-black text-white"
              : dark
              ? "bg-white/10 text-neutral-100 group-hover:bg-white/20"
              : "bg-black/5 text-neutral-700 group-hover:bg-black/10"
          }`}
        >
          <Icon size={14} />
        </span>
      )}
      <span>{label}</span>
    </Link>
  );
}

interface SidebarGroupProps {
  label: string;
  icon?: ComponentType<{ size?: number }>;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
  dark: boolean;
}

export function SidebarGroup({
  label,
  icon: Icon,
  open,
  onToggle,
  children,
  dark,
}: SidebarGroupProps) {
  return (
    <div className="mt-1">
      <button
        onClick={onToggle}
        className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition
        ${dark ? "text-neutral-300 hover:bg-white/7" : "text-neutral-700 hover:bg-black/5"}`}
      >
        <span className="flex items-center gap-3">
          {Icon && (
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-lg
              ${dark ? "bg-white/10 text-neutral-200" : "bg-black/5 text-neutral-800"}`}
            >
              <Icon size={14} />
            </span>
          )}
          {label}
        </span>
        <span className={dark ? "text-neutral-500" : "text-neutral-500"}>
          {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </span>
      </button>

      <div
        className={`ml-8 mt-1 flex flex-col gap-1 overflow-hidden text-[11px] transition-all duration-250
        ${dark ? "text-neutral-400" : "text-neutral-600"}
        ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {children}
      </div>
    </div>
  );
}

export function SectionLabel({
  label,
  className = "",
  dark,
}: {
  label: string;
  className?: string;
  dark: boolean;
}) {
  return (
    <div
      className={`mb-1 px-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${className}
      ${dark ? "text-neutral-500" : "text-neutral-500"}`}
    >
      {label}
    </div>
  );
}
