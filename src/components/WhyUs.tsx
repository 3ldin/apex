const stats = [
  { value: "500+", label: "Jobs Completed" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "5★", label: "Average Rating" },
  { value: "1-Day", label: "Turnaround" },
];

const reasons = [
  {
    title: "Fully Insured & Licensed",
    desc: "We carry full liability insurance so you never take on risk when you hire us. Your property is always protected.",
  },
  {
    title: "Eco-Friendly Products",
    desc: "Our biodegradable detergents are safe for your plants, pets, and the water table — powerful clean, responsible chemistry.",
  },
  {
    title: "Professional Equipment",
    desc: "Industrial-grade pressure washers and surface cleaners deliver results you simply can't get from consumer equipment.",
  },
  {
    title: "Transparent Pricing",
    desc: "Upfront quotes with zero hidden fees. You know exactly what you're paying before we touch your property.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#071320] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/8 border border-white/8 rounded-xl overflow-hidden mb-20">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-apex-mid py-8 px-6 text-center"
            >
              <div className="font-display text-4xl text-apex-accent tracking-wide mb-1">
                {s.value}
              </div>
              <div className="text-apex-steel text-xs tracking-widest uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-apex-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              Why Apex
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight leading-none mb-6">
              The Apex
              <span className="text-gradient block">Difference</span>
            </h2>
            <p className="text-apex-steel leading-relaxed mb-8">
              There are a lot of pressure washing companies out there. What sets
              Apex Surface Solutions apart is our obsession with doing the job
              right — every time, for every client. We treat your property like
              it's our own.
            </p>
            <a
              href="#contact"
              className="inline-block bg-apex-accent hover:bg-apex-bright text-white font-semibold text-sm tracking-wider uppercase px-7 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5"
            >
              Book a Free Estimate
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-apex-mid border border-white/8 rounded-lg p-6 hover:border-apex-accent/30 transition-colors duration-200"
              >
                <div className="w-8 h-0.5 bg-apex-accent mb-4" />
                <h3 className="text-white font-semibold text-sm mb-2 tracking-wide">
                  {r.title}
                </h3>
                <p className="text-apex-steel text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
