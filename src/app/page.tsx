import ActionButton from "@/components/ui/ActionButton";

export default function Home() {
  return (
    <main className="relative flex min-h-screen overflow-hidden flex-col items-center justify-center bg-slate-950 text-white p-6 gap-2">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-125 h-125 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <p className="text-xs font-thin border border-indigo-100 font-mono tracking-widest px-3 py-1">
        NEXT.JS + CANVAS API EXPERIMENT
      </p>
      <h1 className="text-5xl text-center font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-slate-200 to-indigo-400 mb-4">
        Physics engine on Canvas
      </h1>
      <p className="text-slate-400 mb-8 max-w-md text-center">
        Optimizing Particle Rendering from{" "}
        <code className="text-indigo-400">
          O(N<sup>2</sup>)
        </code>
        to <code className="text-indigo-400">O(N \log N)</code> Using Recursive
        <code className="text-indigo-400"> Quadtree</code>.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <ActionButton
          variant="main"
          text="Run the simulation"
          link="/simulation"
        />
        <ActionButton
          variant="secondary"
          text="Source code"
          link="https://github.com/IVShelkunov/physics-particles-visualizer"
        />
      </div>
    </main>
  );
}
