import { challengeData } from "@/lib/landing-page-data/tech-challenge/constants";
import ScoreCard from "../ui/ScoreCard";
import SectionHeading from "../ui/SectionHeading";
import SubHeading from "../ui/SubHeading";

export default function InfoSection() {
  return (
    <div className="col-span-1 md:col-start-1 flex flex-col gap-6">
      <SubHeading text={challengeData.subtitle} />
      <SectionHeading className="text-left" text={challengeData.title} />
      <p className="text-slate-400 leading-relaxed text-sm md:text-base">
        {challengeData.description}
      </p>
      <div className="grid grid-cols-2 gap-4 my-2">
        {challengeData.scrores.map((score) => (
          <ScoreCard key={score.id} score={score} />
        ))}
      </div>
      {challengeData.conclusion}
    </div>
  );
}
