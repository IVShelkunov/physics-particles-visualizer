export default function SvgChart() {
  return (
    <div className="md:col-start-2 col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-sm flex flex-col">
      <svg viewBox="0 0 300 200" className="w-full h-auto">
        {/*axis Y */}
        <line
          x1={5}
          y1={195}
          x2={5}
          y2={5}
          className="stroke-slate-600 stroke-1"
        />
        {/*axis X */}
        <line
          x1={5}
          y1={195}
          x2={295}
          y2={195}
          className="stroke-slate-600 stroke-1"
        />
        {/*gridx */}
        <line
          x1="5"
          y1="43"
          x2="295"
          y2="43"
          className="stroke-slate-800/60"
          strokeDasharray="4 4"
        />
        <line
          x1="5"
          y1="81"
          x2="295"
          y2="81"
          className="stroke-slate-800/60"
          strokeDasharray="4 4"
        />
        <line
          x1="5"
          y1="119"
          x2="295"
          y2="119"
          className="stroke-slate-800/60"
          strokeDasharray="4 4"
        />
        <line
          x1="5"
          y1="157"
          x2="295"
          y2="157"
          className="stroke-slate-800/60"
          strokeDasharray="4 4"
        />
        <text x={10} y={15} className="fill-sky-400 text-xs">
          {"Operations / Time".toUpperCase()}
        </text>
        <text x={215} y={185} className="fill-amber-600 text-xs">
          {"N (Particles)".toUpperCase()}
        </text>
        {/*curves */}
        <path
          d="M 5 193  Q 180 170,280 30"
          className="fill-none stroke-red-500/20 stroke-[6px] "
        />
        <path
          d="M 5 193  Q 180 170,280 30"
          className="fill-none stroke-red-500 stroke-2 "
        />
        <path
          d="M 5 193 Q 150 150, 280 125"
          className="fill-none stroke-emerald-500/20 stroke-[6px]"
        />
        <path
          d="M 5 193 Q 150 150, 280 125"
          className="fill-none stroke-emerald-500 stroke-2"
        />
        {/*bottleneck Line */}
        <line
          x1="120"
          y1="30"
          x2="120"
          y2="195"
          className="stroke-amber-500/40 stroke-1"
          strokeDasharray="4 4"
        />
        <text x="125" y="40" className="fill-amber-500/60 text-[8px] font-mono">
          Performance Drop
        </text>
      </svg>
      <div className="flex flex-col md:flex-row items-start justify-center gap-4">
        <div className="flex gap-2 justify-center items-center">
          <div className=" inline-block w-4 h-4 rounded-full bg-red-500"></div>
          <span>Naive O(N²)</span>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <div className=" inline-block w-4 h-4 rounded-full bg-emerald-500"></div>
          <span>Optimized O(N log N)</span>
        </div>
      </div>
    </div>
  );
}
