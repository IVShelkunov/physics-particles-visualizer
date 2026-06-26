import SvgChart from "../ui/SvgChart";
import InfoSection from "./InfoSection";

export default function ChallengeSection() {
  return (
    <section className="relative z-10 bg-slate-950 border-t border-slate-900/50">
      <div className="py-20 md:py-32 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <InfoSection />
        <SvgChart />
      </div>
    </section>
  );
}
