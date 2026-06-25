import { presentData } from "@/lib/landing-page-data/present/constant";
import ActionButton from "../ui/ActionButton";

export default function PresentCard() {
  return (
    <div className="flex flex-col p-4  z-30 items-center gap-4">
      <p className="z-10 text-xs font-thin border border-indigo-100 font-mono tracking-widest px-3 py-1">
        {presentData.subTitle}
      </p>
      <h1 className=" z-10 text-3xl lg:text-5xl text-center font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-slate-200 to-indigo-400 mb-4">
        {presentData.title}
      </h1>
      {presentData.decription}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 z-10 %">
        {presentData.links.map((link) => (
          <ActionButton
            key={link.id}
            type={link.type}
            link={link.href}
            text={link.text}
          />
        ))}
      </div>
    </div>
  );
}
