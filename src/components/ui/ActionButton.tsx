import { cn } from "@/lib/utils/clsx";
import Link from "next/link";

interface ActionButtonProps {
  variant: "main" | "secondary";
  text: string;
  link: string;
}
export default function ActionButton({
  variant,
  text,
  link,
}: ActionButtonProps) {
  return (
    <Link
      target={variant === "secondary" ? "_blank" : "_self"}
      href={link}
      className={cn(
        "px-6 py-3 font-semibold transition-all duration-200 rounded-lg transform inline-block hover:scale-105 active:scale-95",
        variant === "main" && " bg-indigo-600 hover:bg-indigo-500",
        variant === "secondary" &&
          " bg-slate-900/40 border border-slate-800 hover:border-slate-400",
      )}
    >
      {text}
    </Link>
  );
}
