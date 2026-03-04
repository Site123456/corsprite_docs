"use client";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null;

export default function BetaCountdown() {
  const target = new Date("2026-07-01T00:00:00+01:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(null);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        my-10 px-6 py-5 rounded-xl border-l-8 border-red-600
        bg-red-500/10 backdrop-blur-md
        shadow-[0_0_30px_-8px_rgba(255,0,0,0.35)]
        transition-all duration-300
        max-w-4xl mx-auto
      "
      role="alert"
    >

      {timeLeft ? (
        <p className="text-sm md:text-lg lg:text-xl opacity-90 leading-relaxed">
          Beta will start in:
          <span
            className="
              font-mono font-bold tracking-tight ml-2
              text-base md:text-xl lg:text-2xl
            "
          >
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </span>
        </p>
      ) : (
        <p className="font-mono text-base md:text-lg lg:text-xl mt-1">
          Beta Phase should be live soon! Stay tuned for updates.
        </p>
      )}
    </div>
  );
}