import { cn } from "@/lib/utils/clsx";

interface ScoreCardProps {
  color: "red" | "green";
  title: string;
  score: number;
}
export default function ScoreCard({ color, title, score }: ScoreCardProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-xl border",
        color === "red"
          ? " border-red-500/20 bg-red-950/10"
          : "border-emerald-500/20 bg-emerald-950/10",
      )}
    >
      <div
        className={cn(
          "text-xs font-mono uppercase",
          color === "red" ? "text-red-400 mb-1" : "text-emerald-400 ",
        )}
      >
        {title}
      </div>
      <div
        className={cn(
          "text-2xl font-bold font-mono",
          color === "red" ? "text-red-500" : "text-emerald-400",
        )}
      >
        ~{score} ms
      </div>
      <p className="text-[10px] text-slate-500 mt-1">
        Calc Time / 1000 particles
      </p>
    </div>
  );
}
