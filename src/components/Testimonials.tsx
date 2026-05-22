const testimonials = [
  {
    name: "Mike R.",
    location: "Homeowner",
    quote:
      "Apex completely transformed my driveway. Years of oil stains and grime gone in one visit. Incredibly professional and the results were better than I expected.",
    stars: 5,
  },
  {
    name: "Sarah T.",
    location: "Property Manager",
    quote:
      "We use Apex for all of our rental properties. They're always on time, price is fair, and the work is consistently excellent. Highly recommend for anyone managing multiple properties.",
    stars: 5,
  },
  {
    name: "Dave M.",
    location: "Small Business Owner",
    quote:
      "Had them clean our storefront and parking lot — the difference was night and day. Scheduled around our store hours without any hassle.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#071320] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-apex-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            What Clients Say
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
            Testimonials
          </h2>
          <div className="w-16 h-0.5 bg-apex-accent mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-apex-mid border border-white/8 rounded-xl p-7 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              <blockquote className="text-apex-steel text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="border-t border-white/8 pt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-apex-accent/20 border border-apex-accent/30 flex items-center justify-center text-apex-accent text-xs font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-apex-steel text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
