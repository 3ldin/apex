import Image from "next/image";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#040d18] border-t border-white/10 py-12 px-6 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <Image src="/logo-white.png" alt={site.name} width={315} height={138} className="h-32 w-auto mb-4" />
            <p className="text-apex-steel text-xs leading-relaxed">
              Pressure/Soft washing, carpet cleaning, and snow removal for residential and commercial properties.
            </p>
          </div>
          <div>
            <h4 className="font-display text-white uppercase tracking-wider text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-apex-steel text-xs">
              {["Snow Removal", "Driveway & Concrete", "Deck & Patio", "Building Exteriors", "Roof Soft Wash", "Carpet Cleaning", "Commercial"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-white uppercase tracking-wider text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-apex-steel text-xs">
              <li><a href={site.phoneHref} className="hover:text-white transition-colors">{site.phoneDisplay}</a></li>
              <li><a href={site.emailHref} className="hover:text-white transition-colors break-all">{site.email}</a></li>
              <li>Serving {site.serviceArea}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6">
          <p className="text-apex-steel text-xs">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
