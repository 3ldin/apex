const services = [
  {
    icon: "❄️",
    title: "Snow Removal",
    desc: "Reliable plowing, shoveling, and de-icing so your driveway, walkways, and lot are safe and clear when it matters.",
    features: ["Driveway & lot plowing", "Walkways & steps", "Salting & de-icing"],
    featured: true,
  },
  {
    icon: "🏠",
    title: "Driveway & Concrete",
    desc: "Blast away oil stains, tire marks, algae, and years of grime from concrete, asphalt, and paver surfaces.",
    features: ["Concrete & asphalt", "Pavers & brick", "Oil & rust removal"],
  },
  {
    icon: "🌊",
    title: "Deck & Patio",
    desc: "Restore wood, composite, and stone outdoor surfaces safely - no warping, no damage, just clean results.",
    features: ["Wood decks", "Composite decking", "Stone & slate patios"],
  },
  {
    icon: "🏢",
    title: "Building Exteriors",
    desc: "From vinyl siding and stucco to brick facades, we make your home or business look sharp from the street.",
    features: ["Siding & stucco", "Brick & masonry", "Fences & walls"],
  },
  {
    icon: "🏗️",
    title: "Roof Soft Wash",
    desc: "Gentle low-pressure soft washing removes moss, lichen, and black streaks without damaging shingles.",
    features: ["Asphalt shingles", "Tile roofs", "Moss & algae treatment"],
  },
  {
    icon: "🧼",
    title: "Carpet Cleaning",
    desc: "Deep cleaning for indoor carpets and rugs, plus exterior and entrance carpeting, runners, and steps.",
    features: ["Interior carpets & rugs", "Exterior & entrance carpet", "Stain & odor removal"],
  },
  {
    icon: "🏭",
    title: "Commercial",
    desc: "Storefronts, parking lots, and building exteriors, kept clean and clear year-round around your business hours.",
    features: ["Storefronts & lots", "Fleet & equipment washing", "Commercial snow contracts"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-apex-blue py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-apex-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">What We Do</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">Our Services</h2>
          <div className="w-16 h-0.5 bg-apex-accent mx-auto mt-6" />
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-apex-mid border rounded-lg p-7 hover:border-apex-accent/40 transition-all duration-300 hover:-translate-y-1 ${
                s.featured ? "border-apex-accent/50" : "border-white/10"
              }`}
            >
              {s.featured && (
                <span className="absolute top-4 right-4 text-[10px] font-semibold tracking-widest uppercase bg-apex-accent text-white px-2 py-1 rounded">
                  Winter
                </span>
              )}
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="font-display text-xl text-white uppercase tracking-wider mb-3">{s.title}</h3>
              <p className="text-apex-steel text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-1.5">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-apex-steel">
                    <span className="text-apex-accent">-</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
