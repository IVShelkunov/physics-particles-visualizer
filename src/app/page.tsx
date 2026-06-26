import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/shared/HeroSection";
import InfoSection from "@/components/shared/InfoSection";
import TechStack from "@/components/shared/TechStack";
import SvgChart from "@/components/ui/SvgChart";

export default function Home() {
  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-indigo-500/30">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.09] mix-blend-overlay z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <HeroSection />
      <section className="relative z-10 bg-slate-950 border-t border-slate-900/50">
        <div className="py-20 md:py-32 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <InfoSection />
          <SvgChart />
        </div>
      </section>
      <TechStack />
      <Footer />
    </div>
  );
}
