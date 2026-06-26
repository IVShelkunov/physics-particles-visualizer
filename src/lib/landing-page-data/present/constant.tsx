import { IPresent } from "./types";

export const presentData: IPresent = {
  subTitle: "NEXT.JS + CANVAS API EXPERIMENT",
  title: "Physics engine on Canvas",
  decription: (
    <p className="z-10  text-slate-400 lg:mb-8  max-w-md text-center">
      Optimizing Particle Rendering from{" "}
      <code className="text-indigo-400">
        O(N<sup>2</sup>)
      </code>
      to{" "}
      <code className="text-indigo-400 font-mono  bg-indigo-950/60">
        O(N log N){" "}
      </code>
      Using Recursive
      <code className="text-indigo-400"> Quadtree</code>.
    </p>
  ),
  links: [
    { id: 1, type: "main", text: "Run the simulation", href: "/simulation" },
    {
      id: 2,
      type: "secondary",
      text: "Source code",
      href: "https://github.com/IVShelkunov/physics-particles-visualizer",
    },
  ],
};
