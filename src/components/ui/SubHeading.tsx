import { cn } from "@/lib/utils/clsx";

interface SubHeadingProps {
  text: string;
  className?: string;
}
export default function SubHeading({ text, className }: SubHeadingProps) {
  return (
    <p
      className={cn(
        "text-xs font-mono uppercase tracking-widest text-indigo-400",
        className,
      )}
    >
      {text}
    </p>
  );
}
