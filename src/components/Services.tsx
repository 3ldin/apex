const services = [
  {
    icon: "🏠",
    title: "Driveway & Concrete",
    desc: "Blast away oil stains, tire marks, algae, and years of grime from concrete, asphalt, and paver surfaces.",
    features: ["Concrete & asphalt", "Pavers & brick", "Oil & rust removal"],
  },
  {
    icon: "🌊",
    title: "Deck & Patio",
    desc: "Restore wood, composite, and stone outdoor surfaces safely — no warping, no damage, just clean results.",
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
    icon: "🏭",
    title: "Commercial",
    desc: "Keep your storefront, parking lot, and building exterior pristine. Flexible scheduling around your business hours.",
    features: ["Storefronts", "Parking structures", "Warehouses & fleets"],
  },
  {
    icon: "🚗",
    title: "Vehicles & Equipment",
    desc: "Heavy-duty cleaning for fleet vehicles, trailers, construction equipment, and dumpster pads.",
    features: ["Fleet vehicles", "Construction equipment", "Dumpster pads"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-apex-blue py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-apex-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
            Our Services
          </h2>
          <div className="w-16 h-0.5 bg-apex-accent mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-apex-mid border border-white/8 rounded-lg p-7 hover:border-apex-accent/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-apex-accent to-transparent rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="font-display text-xl text-white uppercase tracking-wider mb-3">
                {s.title}
              </h3>
              <p className="text-apex-steel text-sm leading-relaxed mb-5">
                {s.desc}
              </p>
              <ul className="space-y-1.5">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-apex-steel"
                  >
                    <span className="text-apex-accent">—</span>
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
