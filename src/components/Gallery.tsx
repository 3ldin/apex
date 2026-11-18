import Image from "next/image";
import { pairs, exteriors, carpet } from "@/data/photos";
import BeforeAfter from "@/components/BeforeAfter";

export default function Gallery() {
  if (pairs.length + exteriors.length === 0) return null;
  return (
    <section id="gallery" className="bg-apex-blue py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-apex-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">Our Work</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">Real Results</h2>
          <div className="w-16 h-0.5 bg-apex-accent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pairs.map((p) => (
            <div key={p.title} className="bg-apex-mid border border-white/10 rounded-xl p-4">
              {p.mode === "slider" ? (
                <BeforeAfter before={p.before} after={p.after} alt={p.title} />
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { src: p.before, tag: "Before", cls: "bg-black/60" },
                    { src: p.after, tag: "After", cls: "bg-apex-accent" },
                  ].map((i) => (
                    <div key={i.tag} className="relative aspect-[3/4] overflow-hidden rounded-lg">
                      <Image src={i.src} alt={`${p.title} - ${i.tag.toLowerCase()}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                      <span className={`absolute top-2 left-2 text-[10px] font-semibold tracking-[0.25em] uppercase text-white px-3 py-1 rounded-full ${i.cls}`}>
                        {i.tag}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <div className="px-1 pt-4 pb-1">
                <h3 className="font-display text-lg text-white uppercase tracking-wider">{p.title}</h3>
                <p className="text-apex-steel text-sm mt-1">{p.caption}</p>
              </div>
            </div>
          ))}

          <div className="bg-apex-mid border border-white/10 rounded-xl p-4">
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
              <Image src={carpet.src} alt={carpet.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" style={{ objectPosition: "center 65%" }} />
            </div>
            <div className="px-1 pt-4 pb-1">
              <h3 className="font-display text-lg text-white uppercase tracking-wider">Carpet Cleaning</h3>
              <p className="text-apex-steel text-sm mt-1">Entrance carpet and steps, deep cleaned</p>
            </div>
          </div>

          {exteriors.length > 0 && (
            <div className="md:col-span-2 bg-apex-mid border border-white/10 rounded-xl p-4">
              <div className="grid grid-cols-2 gap-2">
                {exteriors.map((e) => (
                  <div key={e.src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image src={e.src} alt={e.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="px-1 pt-4 pb-1">
                <h3 className="font-display text-lg text-white uppercase tracking-wider">Commercial Exteriors</h3>
                <p className="text-apex-steel text-sm mt-1">High-rise, stone and glass building exteriors</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
