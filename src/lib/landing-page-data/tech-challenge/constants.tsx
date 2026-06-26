import { IChallenge } from "./types";

export const challengeData: IChallenge = {
  subtitle: "The Engineering Bottleneck",
  title: "Quadratic computation barrier O(N²)",
  description:
    "In a standard simulation, collision checking requires comparing each particle with every other particle. As the number of objects increases, the processor load increases exponentially.",
  scrores: [
    { id: 1, title: "No optimization", value: 15.4, color: "red" },
    { id: 2, title: "With quadtree", value: 1.2, color: "green" },
  ],
  conclusion: (
    <p className="text-slate-400 leading-relaxed text-sm">
      The Quadtree algorithm dynamically partitions 2D space into recursive
      quadrants. This transforms global collision detection into a local one,
      reducing the complexity to
      <code className="text-indigo-300 font-mono bg-indigo-950/60 px-1.5 py-0.5 rounded mx-1 text-xs font-semibold">
        O(N log N)
      </code>
      .
    </p>
  ),
};
