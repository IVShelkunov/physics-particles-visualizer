import HeroSection from "@/components/shared/HeroSection";
import InfoSection from "@/components/shared/InfoSection";
import TechStack from "@/components/shared/TechStack";
import SvgChart from "@/components/ui/SvgChart";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-indigo-500/30">
      <HeroSection />
      <section className="relative z-10 bg-slate-950 border-t border-slate-900/50">
        <div className="py-20 md:py-32 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <InfoSection />
          <SvgChart />
        </div>
      </section>
      <TechStack />
    </div>
  );
}
