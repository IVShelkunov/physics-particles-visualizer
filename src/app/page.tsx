import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Physics engine on Canvas</h1>
      <p className="text-slate-400 mb-8 max-w-md text-center">
        Optimizing particle rendering performance using the Quadtree algorithm.
      </p>
      <Link
        href="/simulation"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-lg font-semibold"
      >
        Run the simulation
      </Link>
    </main>
  );
}
