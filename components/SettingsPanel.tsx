"use client";
import React, { type ReactNode, type ComponentType } from "react";
import { Bell, Shield } from "lucide-react";

export function SettingsSectionLabel({
  label,
  dark,
}: {
  label: string;
  dark: boolean;
}) {
  return (
    <div
      className={`text-[11px] font-semibold uppercase tracking-[0.18em]
      ${dark ? "text-neutral-500" : "text-neutral-500"}`}
    >
      {label}
    </div>
  );
}

export function SettingsRow({
  icon: Icon,
  title,
  description,
  children,
  dark,
}: {
  icon?: ComponentType<{ size?: number }>;
  title: string;
  description: string;
  children: ReactNode;
  dark: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        {Icon && (
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-2xl
            ${dark ? "bg-white/10 text-neutral-100" : "bg-neutral-100 text-neutral-700"}`}
          >
            <Icon size={14} />
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-xs font-medium">{title}</span>
          <span
            className={`text-[11px] ${
              dark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            {description}
          </span>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
