import { ITech } from "@/lib/landing-page-data/tech-stack/types";

interface TechCardProps {
  tech: ITech;
}
export default function TechCard({ tech }: TechCardProps) {
  return (
    <div className="relative flex flex-col pt-16 p-8 bg-slate-900/30 border border-slate-900 rounded-2xl hover:border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.04)] group">
      <div className="absolute top-4 left-4 px-2.5 py-0.5 border border-indigo-500/10 bg-indigo-950/20 rounded-md text-[10px] font-mono font-bold text-indigo-400/80 uppercase tracking-widest">
        {tech.abbr}
      </div>
      <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors duration-300">
        {tech.title}
      </h3>
      <p className="text-xs text-slate-400 leading-relaxed">
        {tech.description}
      </p>
    </div>
  );
}
