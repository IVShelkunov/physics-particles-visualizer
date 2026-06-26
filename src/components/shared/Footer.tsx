import { presentData } from "@/lib/landing-page-data/present/constant";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/60 py-10 text-slate-500 text-xs md:text-sm p-6">
      <div className="flex justify-between md:flex-row flex-col-reverse gap-6">
        <div>© 2026 Physics Particles Visualizer. All rights reserved.</div>
        <div className="uppercase transition-all duration-200 ">
          {presentData.links.map((link) => (
            <span key={link.id} className="inline-flex items-center">
              <Link
                href={link.href}
                className="hover:text-slate-200 transition-colors"
              >
                {link.text}
              </Link>
              {link.id !== presentData.links.length && (
                <span className="text-slate-700 mx-2 select-none">/</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
