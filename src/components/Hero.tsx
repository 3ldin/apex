"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.querySelectorAll<HTMLElement>(".fade-up").forEach((node, i) => {
      node.style.animation = `fadeUp 0.7s ease ${i * 120}ms forwards`;
    });
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-apex-blue via-apex-mid to-[#071320]" />

      {/* Diagonal accent stripe */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "repeating-linear-gradient(135deg, transparent, transparent 80px, #1E90FF 80px, #1E90FF 82px)",
        }}
      />

      {/* Radial glow behind headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-15 blur-3xl bg-apex-accent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-28 pb-20">
        {/* Tag line */}
        <div className="fade-up opacity-start inline-flex items-center gap-2 border border-apex-accent/40 bg-apex-accent/10 text-apex-bright text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-apex-bright animate-pulse" />
          Residential &amp; Commercial
        </div>

        {/* Headline */}
        <h1 className="fade-up opacity-start font-display text-5xl sm:text-7xl lg:text-8xl text-white uppercase leading-none tracking-tight mb-6">
          We Make Surfaces{" "}
          <span className="text-gradient block mt-2">Look New Again</span>
        </h1>

        {/* Sub-headline */}
        <p className="fade-up opacity-start max-w-2xl mx-auto text-apex-steel text-lg sm:text-xl leading-relaxed mb-10">
          Apex Surface Solutions delivers powerful, professional pressure washing
          across driveways, decks, roofs, siding, and commercial properties —
          leaving every surface spotless.
        </p>

        {/* CTAs */}
        <div className="fade-up opacity-start flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-apex-accent hover:bg-apex-bright text-white font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded transition-all duration-200 shadow-lg shadow-apex-accent/30 hover:shadow-apex-bright/40 hover:-translate-y-0.5"
          >
            Get a Free Quote
          </a>
          <a
            href="#services"
            className="border border-white/30 hover:border-white/60 text-white font-semibold text-sm tracking-wider uppercase px-8 py-4 rounded transition-all duration-200 hover:-translate-y-0.5"
          >
            View Services
          </a>
        </div>

        {/* Trust badges */}
        <div className="fade-up opacity-start mt-16 flex flex-wrap justify-center gap-8 text-apex-steel text-sm">
          {[
            { icon: "✦", text: "Fully Insured" },
            { icon: "✦", text: "Eco-Friendly Solutions" },
            { icon: "✦", text: "Same-Day Estimates" },
            { icon: "✦", text: "Satisfaction Guaranteed" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2">
              <span className="text-apex-accent text-xs">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-apex-blue to-transparent" />
    </section>
  );
}
