import ScoreCard from "../ui/ScoreCard";

export default function InfoSection() {
  return (
    <div className="col-span-1 md:col-start-1 flex flex-col gap-6">
      <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
        The Engineering Bottleneck
      </span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Quadratic computation
        <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-200 to-indigo-400">
          barrier O(N²)
        </span>
      </h2>
      <p className="text-slate-400 leading-relaxed text-sm md:text-base">
        In a standard simulation, collision checking requires comparing each
        particle with every other particle. As the number of objects increases,
        the processor load increases exponentially.
      </p>
      <div className="grid grid-cols-2 gap-4 my-2">
        <ScoreCard color="red" title="No optimization" score={15.4} />
        <ScoreCard color="green" title="With quadtree" score={1.2} />
      </div>
      <p className="text-slate-400 leading-relaxed text-sm">
        The Quadtree algorithm dynamically partitions 2D space into recursive
        quadrants. This transforms global collision detection into a local one,
        reducing the complexity to
        <code className="text-indigo-300 font-mono bg-indigo-950/60 px-1.5 py-0.5 rounded mx-1 text-xs font-semibold">
          O(N log N)
        </code>
        .
      </p>
    </div>
  );
}
