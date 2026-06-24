import ActionButton from "../ui/ActionButton";

export default function PresentCard() {
  return (
    <div className="flex flex-col p-4 rounded-2xl bg-slate-950/30 z-30 items-center gap-4">
      <p className="z-10 text-xs font-thin border border-indigo-100 font-mono tracking-widest px-3 py-1">
        NEXT.JS + CANVAS API EXPERIMENT
      </p>
      <h1 className=" z-10 text-3xl lg:text-5xl text-center font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-slate-200 to-indigo-400 mb-4">
        Physics engine on Canvas
      </h1>
      <p className="z-10  text-slate-400 lg:mb-8  max-w-md text-center">
        Optimizing Particle Rendering from{" "}
        <code className="text-indigo-400">
          O(N<sup>2</sup>)
        </code>
        to
        <code className="text-indigo-400 font-mono  bg-indigo-950/60">
          O(N log N)
        </code>
        Using Recursive
        <code className="text-indigo-400"> Quadtree</code>.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 z-10 %">
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
    </div>
  );
}
