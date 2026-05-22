// Gallery — replace the placeholder divs with <Image> components pointing to your actual before/after photos.
// Suggested folder: /public/gallery/  e.g. /public/gallery/driveway-before.jpg

const placeholders = [
  { label: "Driveway — Before & After", accent: "from-slate-700 to-slate-900" },
  { label: "Deck Restoration", accent: "from-stone-700 to-stone-900" },
  { label: "House Siding", accent: "from-zinc-700 to-zinc-900" },
  { label: "Concrete Patio", accent: "from-neutral-700 to-neutral-900" },
  { label: "Commercial Building", accent: "from-slate-600 to-slate-800" },
  { label: "Roof Soft Wash", accent: "from-stone-600 to-stone-800" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-apex-blue py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-apex-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            Our Work
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
            Before &amp; After
          </h2>
          <div className="w-16 h-0.5 bg-apex-accent mx-auto mt-6" />
          <p className="text-apex-steel mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Real results from real jobs. Add your before/after photos here to
            let your work speak for itself.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholders.map((p) => (
            <div
              key={p.label}
              className={`relative rounded-lg overflow-hidden bg-gradient-to-br ${p.accent} aspect-[4/3] flex items-end border border-white/8`}
            >
              {/* 
                Replace this div with:
                <Image
                  src="/gallery/your-photo.jpg"
                  alt={p.label}
                  fill
                  className="object-cover"
                />
              */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 font-display text-lg uppercase tracking-wider text-center px-4">
                  Add Photo Here
                </span>
              </div>
              <div className="relative z-10 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">{p.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
