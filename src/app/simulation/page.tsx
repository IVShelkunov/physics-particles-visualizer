"use client";
import SimulationManager from "@/components/shared/SimulationManager";
import dynamic from "next/dynamic";
import Link from "next/link";

const CanvasContainer = dynamic(
  () => import("@/components/shared/CanvasContainer"),
  {
    ssr: false,
  },
);

export default function SimulationPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-950 text-white p-6">
      <header className="w-full max-w-5xl flex justify-between items-center py-4">
        <Link
          href="/"
          className="text-slate-400 hover:text-white transition-colors"
        >
          ← Back to home
        </Link>
        <h1 className="text-xl font-bold">Simulation window</h1>
      </header>
      <SimulationManager />
      <footer className="text-sm text-slate-500">Next.js + Canvas API</footer>
    </main>
  );
}
