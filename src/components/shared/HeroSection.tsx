import CircuitBackground from "../ui/CircuitBackground";
import PresentCard from "./PresentCard";

export default function HeroSection() {
  return (
    <header className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center p-6">
      <CircuitBackground />
      <div className="z-10 absolute top-1/4 left-1/2 -translate-x-1/2 w-125 h-125 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <PresentCard />
    </header>
  );
}
