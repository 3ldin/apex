import { site } from "@/data/site";
import WashBackground from "@/components/WashBackground";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-apex-blue via-apex-mid to-[#071320]" />
      <WashBackground />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "repeating-linear-gradient(135deg, transparent, transparent 80px, #1E90FF 80px, #1E90FF 82px)",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-15 blur-3xl bg-apex-accent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-44 pb-24">
        <div
          className="inline-flex items-center gap-2 border border-apex-accent/40 bg-apex-accent/10 text-apex-bright text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8"
          style={{ animation: "fadeUp 0.6s ease 0ms both" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-apex-bright animate-pulse" />
          Pressure/Soft Washing · Carpet Cleaning · Snow Removal
        </div>

        <h1
          className="font-display text-5xl sm:text-7xl lg:text-8xl text-white uppercase leading-none tracking-tight mb-6"
          style={{ animation: "fadeUp 0.6s ease 120ms both" }}
        >
          We Make Surfaces{" "}
          <span className="text-gradient block mt-2">Look New Again</span>
        </h1>

        <p
          className="max-w-2xl mx-auto text-apex-steel text-lg sm:text-xl leading-relaxed mb-10"
          style={{ animation: "fadeUp 0.6s ease 240ms both" }}
        >
          Professional pressure/soft washing, interior and exterior carpet cleaning, and
          reliable snow removal when winter hits. Residential and commercial, all year long.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: "fadeUp 0.6s ease 360ms both" }}
        >
          <a
            href="#contact"
            className="bg-apex-accent hover:bg-apex-bright text-white font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded transition-all duration-200 shadow-lg shadow-apex-accent/30 hover:-translate-y-0.5"
          >
            Get a Free Quote
          </a>
          <a
            href={site.phoneHref}
            className="border border-white/30 hover:border-white/60 text-white font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5"
          >
            Call {site.phoneDisplay}
          </a>
        </div>

        <div
          className="mt-16 flex flex-wrap justify-center gap-8 text-apex-steel text-sm"
          style={{ animation: "fadeUp 0.6s ease 480ms both" }}
        >
          {["Residential & Commercial", "Free Estimates", "Year-Round Service"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <span className="text-apex-accent text-xs">✦</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-apex-blue to-transparent" />
    </section>
  );
}
