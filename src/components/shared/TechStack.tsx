import { techStack } from "@/lib/landing-page-data/tech-stack/constants";
import TechCard from "./TechCard";
import SubHeading from "../ui/SubHeading";
import SectionHeading from "../ui/SectionHeading";

export default function TechStack() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 p-6">
      <SubHeading text="build with precision" />
      <SectionHeading text="Technology Stack & Architecture" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStack.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </div>
    </section>
  );
}
