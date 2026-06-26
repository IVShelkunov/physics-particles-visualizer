import { IScore } from "@/lib/landing-page-data/tech-challenge/types";
import { cn } from "@/lib/utils/clsx";

interface ScoreCardProps {
  score: IScore;
}
export default function ScoreCard({ score }: ScoreCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1  items-start justify-between md:p-4 p-2 rounded-xl border",
        score.color === "red"
          ? " border-red-500/20 bg-red-950/10"
          : "border-emerald-500/20 bg-emerald-950/10",
      )}
    >
      <div
        className={cn(
          "text-xs font-mono uppercase",
          score.color === "red" ? "text-red-400 mb-1" : "text-emerald-400 ",
        )}
      >
        {score.title}
      </div>
      <div
        className={cn(
          "md:text-2xl text-xl font-bold font-mono",
          score.color === "red" ? "text-red-500" : "text-emerald-400",
        )}
      >
        ~{score.value} ms
      </div>
      <p className="text-[10px] text-slate-500 mt-1">
        Calc Time / 1000 particles
      </p>
    </div>
  );
}
