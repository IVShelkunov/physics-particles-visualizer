"use client";

import { cn } from "@/lib/utils/clsx";

interface ControlWidgetProps {
  isPaused: boolean;
  onTogglePaused: (value: boolean) => void;
  particleCount: number;
  onChangeParticleCount: (value: number) => void;
  isColliding: boolean;
  onToggleColliding: (value: boolean) => void;
}
export default function ControlWidget({
  isPaused,
  onTogglePaused,
  particleCount,
  onChangeParticleCount,
  isColliding,
  onToggleColliding,
}: ControlWidgetProps) {
  return (
    <section className="flex flex-col w-full lg:w-72 p-6 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-2xl gap-6 shadow-[0_0_30px_rgba(99,102,241,0.1)]">
      <button
        onClick={() => onTogglePaused(!isPaused)}
        className={cn(
          "cursor-pointer w-full py-3 px-4 rounded-xl font-bold tracking-wider uppercase text-sm border transition-all duration-300 active:scale-95",
          isPaused
            ? "bg-emerald-600/20 border-emerald-500/40 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:bg-emerald-600/30 hover:border-emerald-500/60"
            : "bg-indigo-600/20 border-indigo-500/40 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)] hover:bg-indigo-600/30 hover:border-indigo-500/60",
        )}
      >
        {isPaused ? "▶ Start" : "⏸ Pause"}
      </button>
      <div className="flex flex-col gap-2">
        <input
          type="range"
          min={10}
          max={1000}
          id="quantity"
          value={particleCount}
          onChange={(e) => onChangeParticleCount(Number(e.target.value))}
          className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        />
        <div className="flex justify-between items-center">
          <label
            htmlFor="quantity"
            className="text-xs font-semibold text-slate-400 uppercase tracking-widest"
          >
            Particle quantity
          </label>
          <span className="text-xs font-mono font-bold px-2 py-0.5 bg-indigo-950/60 border border-indigo-500/30 rounded text-indigo-400">
            {particleCount.toString().padStart(4, "0")}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="relative flex items-center">
          <input
            id="onCollission"
            type="checkbox"
            checked={isColliding}
            onChange={(e) => onToggleColliding(e.target.checked)}
            className="w-4 h-4 rounded border-slate-800 bg-slate-900 text-indigo-600 focus:ring-indigo-500/30 focus:ring-offset-0 cursor-pointer accent-indigo-500"
          />
        </div>

        <label
          htmlFor="onCollision"
          className="text-xs font-semibold text-slate-400 uppercase tracking-widest cursor-pointer group-hover:text-slate-300 transition-colors select-none"
        >
          Enable collisions
        </label>
      </div>
    </section>
  );
}
