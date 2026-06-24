import InfoSection from "@/components/shared/InfoSection";
import PresentCard from "@/components/shared/PresentCard";
import CircuitBackground from "@/components/ui/CircuitBackground";
import SvgChart from "@/components/ui/SvgChart";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-indigo-500/30">
      <header className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center p-6">
        <CircuitBackground />
        <div className="z-10 absolute top-1/4 left-1/2 -translate-x-1/2 w-125 h-125 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <PresentCard />
      </header>
      <section className="relative z-10 bg-slate-950 border-t border-slate-900/50">
        <div className="py-20 md:py-32 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <InfoSection />
          <SvgChart />
        </div>
      </section>
    </div>
  );
}
