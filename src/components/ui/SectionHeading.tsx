import { cn } from "@/lib/utils/clsx";

interface SectionHeadingProps {
  text: string;
  className?: string;
}
export default function SectionHeading({
  text,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-center text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-indigo-200 via-slate-200 to-indigo-400",
        className,
      )}
    >
      {text}
    </h2>
  );
}
