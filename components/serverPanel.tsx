"use client";
import React, { useState } from "react";
import { SettingsSectionLabel, SettingsRow } from "./SettingsPanel";
import { Monitor, ChevronLeft, ChevronRight } from "lucide-react";
import MiniToggle from "./MiniToggle";
import Image from "next/image";

interface Props {
dark: boolean;
}

export default function ServerPanel({ dark }: Props) {
  const [step, setStep] = useState(1);
  const [queueEnabled, setQueueEnabled] = useState(false);
  const [maxUsers, setMaxUsers] = useState(1);
  const [cpuLimit, setCpuLimit] = useState(90);
  const [gpuLimit, setGpuLimit] = useState(100);
  const [memoryLimit, setMemoryLimit] = useState(8000);
  const [vramLimit, setVramLimit] = useState(2000);

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="flex flex-col pe-4">

      <div className="p-4 mb-4 text-sm text-white/80 bg-orange-600 rounded-2xl shadow-inner" role="alert">
        <span className="font-medium block text-white">Access restricted!</span> The following features are currently closed and only available to a limited number of users. We are working hard to expand access soon. Stay tuned for updates!
      </div>
      {step === 1 && (
        <>

          <SettingsSectionLabel label="It's free download configuration file now" dark={dark} />
          <div
            className={`
              flex items-center gap-4 mt-2 rounded-2xl border p-4 md:p-5 shadow-sm transition-colors
              ${dark
                  ? "border-white/10 bg-neutral-900/80"
                  : "border-black/5 bg-white/80"}
            `}
          >
            <div
              className={`
                flex h-10 w-10 p-2 items-center justify-center rounded-xl backdrop-blur-sm
                ${dark ? "bg-white/10 text-neutral-200" : "bg-black/5 text-neutral-700"}
              `}
            >
              <Monitor size={18} />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-medium leading-tight">
                Download configuration file for free
              </span>
              <span
                className={`
                  text-[11px] leading-tight
                  ${dark ? "text-neutral-400" : "text-neutral-600"}
                `}
              >
                Alpha is now full!
              </span>
            </div>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <SettingsSectionLabel label="Queue settings" dark={dark} />
          <div
            className={`rounded-2xl border p-4 shadow-sm transition-colors my-4
              ${dark ? 'border-white/10 bg-neutral-900/80' : 'border-black/5 bg-white/80'}`}
          >
            <SettingsRow
              icon={Monitor}
              title="Enable queue"
              description="When the active user count exceeds the limit, new users will wait"
              dark={dark}
            >
              <MiniToggle dark={dark} initialOn={queueEnabled} onChange={() => setQueueEnabled((v) => !v)} />
            </SettingsRow>

            {queueEnabled && (
              <SettingsRow
                title="Max users before queue"
                description="Threshold for triggering the queue"
                dark={dark}
              >
                <input
                  type="number"
                  min={1}
                  max={1000}
                  value={maxUsers}
                  onChange={(e) => setMaxUsers(Number(e.target.value))}
                  className="w-20 rounded-md border px-2 py-1 text-xs"
                />
              </SettingsRow>
            )}
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <SettingsSectionLabel label="Resource management" dark={dark} />
          <div
            className={`rounded-2xl border p-4 shadow-sm transition-colors my-4
              ${dark ? 'border-white/10 bg-neutral-900/80' : 'border-black/5 bg-white/80'}`}
          >
            <SettingsRow title="CPU (%)" description="Limit CPU usage percentage" dark={dark}>
              <input
                type="number"
                min={1}
                max={80}
                value={cpuLimit}
                onChange={(e) => setCpuLimit(Number(e.target.value))}
                className="w-16 rounded-md border px-2 py-1 text-xs"
              />
            </SettingsRow>
            <SettingsRow title="GPU (%)" description="Limit GPU usage percentage" dark={dark}>
              <input
                type="number"
                min={1}
                max={100}
                value={gpuLimit}
                onChange={(e) => setGpuLimit(Number(e.target.value))}
                className="w-16 rounded-md border px-2 py-1 text-xs"
              />
            </SettingsRow>
            <SettingsRow title="VRAM (MB)" description="Limit Vram usage in MB" dark={dark}>
              <input
                type="number"
                min={1000}
                value={vramLimit}
                onChange={(e) => setVramLimit(Number(e.target.value))}
                className="w-16 rounded-md border px-2 py-1 text-xs"
              />
            </SettingsRow>
            <SettingsRow title="Memory (MB)" description="Maximum RAM allocated" dark={dark}>
              <input
                type="number"
                min={1000}
                value={memoryLimit}
                onChange={(e) => setMemoryLimit(Number(e.target.value))}
                className="w-24 rounded-md border px-2 py-1 text-xs"
              />
            </SettingsRow>
          </div>
          <div className="text-xs">
            <p className="mb-3">
              Resource limitations are enforced to ensure optimal system performance and
              prevent instability caused by resource exhaustion. 
              <span className="font-semibold">
                Exceeding these limits may result in degraded performance, crashes, or service interruption.
              </span>
            </p>
            <p><strong>Configured Limits:</strong></p>
            <ul className="list-disc list-inside ml-2">
              <li>CPU: {cpuLimit}%</li>
              <li>GPU: {gpuLimit}%</li>
              <li>VRAM: {vramLimit} MB</li>
              <li>Memory (RAM): {memoryLimit} MB</li>
            </ul>
            <p><strong>Allowed Thresholds:</strong></p>
            <ul className="list-disc list-inside ml-2">
              <li>Max users: 1000 recommended is 1</li>
              <li>RAM: Minimum 1000 MB</li>
              <li>VRAM: Minimum 2000 MB</li>
              <li>GPU: Maximum 100%</li>
              <li>CPU: Maximum 90%</li>
            </ul>

            <p className="mt-3 text-red-400 font-medium">
              🚨 Warning: If any configured value does not respect the thresholds above,
              the system may become unstable or unresponsive. Please ensure that all limits are set within the allowed ranges to maintain a stable hosting environment. This limitaition is due to CORSPRITE itself which is base on C++, Python and GO, and we are working on improving this in the future updates. We recommend starting with conservative limits and adjusting as needed based on your server's performance and workload requirements.
            </p>
          </div>
        </>
      )}

      {/* navigation buttons */}
      <div className="flex justify-between my-4">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className="flex items-center gap-1 text-xs font-medium text-neutral-500 disabled:opacity-50"
        >
          <ChevronLeft size={14} /> Previous
        </button>
        <button
          onClick={nextStep}
          disabled={step === 3}
          className="flex items-center gap-1 text-xs font-medium text-neutral-500 disabled:opacity-50"
        >
          {step === 3 ? 'Install setup files' : 'Next'} <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
