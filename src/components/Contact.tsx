"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your preferred form handler:
    // - Formspree (free): replace action URL with https://formspree.io/f/YOUR_ID
    // - EmailJS: call EmailJS SDK here
    // - Resend API route: POST to /api/contact
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-apex-blue py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-apex-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            Get Started
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">
            Request a Free Quote
          </h2>
          <div className="w-16 h-0.5 bg-apex-accent mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-xl text-white uppercase tracking-wide mb-6">
                Reach Us Directly
              </h3>
              <div className="space-y-5">
                {[
                  { icon: "📞", label: "Phone", value: "(570) 555-0100", href: "tel:+15705550100" },
                  { icon: "✉️", label: "Email", value: "info@apexsurfacesolutions.com", href: "mailto:info@apexsurfacesolutions.com" },
                  { icon: "📍", label: "Service Area", value: "Pocono Mountains & Surrounding Areas", href: null },
                  { icon: "🕒", label: "Hours", value: "Mon–Sat: 7am – 6pm", href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-apex-steel text-xs uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-apex-accent transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-apex-mid border border-white/8 rounded-lg p-5">
              <p className="text-white text-sm font-semibold mb-2">
                ✦ Same-Day Estimates
              </p>
              <p className="text-apex-steel text-sm leading-relaxed">
                Submit your request and we'll get back to you within a few
                hours with a free, no-obligation quote.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center bg-apex-mid border border-apex-accent/30 rounded-xl p-12 text-center">
                <div>
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-3">
                    Message Received!
                  </h3>
                  <p className="text-apex-steel">
                    Thanks for reaching out. We'll be in touch shortly with your
                    free estimate.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-apex-mid border border-white/8 rounded-xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-apex-steel text-xs uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-apex-blue border border-white/15 focus:border-apex-accent rounded px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-apex-steel text-xs uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(570) 555-0100"
                      className="w-full bg-apex-blue border border-white/15 focus:border-apex-accent rounded px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-apex-steel text-xs uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full bg-apex-blue border border-white/15 focus:border-apex-accent rounded px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-apex-steel text-xs uppercase tracking-wider mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-apex-blue border border-white/15 focus:border-apex-accent rounded px-4 py-3 text-sm outline-none transition-colors text-white"
                  >
                    <option value="" className="text-white/50">Select a service…</option>
                    <option>Driveway / Concrete</option>
                    <option>Deck / Patio</option>
                    <option>House Siding</option>
                    <option>Roof Soft Wash</option>
                    <option>Commercial Property</option>
                    <option>Vehicles / Equipment</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-apex-steel text-xs uppercase tracking-wider mb-2">
                    Tell Us About the Job
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Property address, square footage, any specific concerns…"
                    className="w-full bg-apex-blue border border-white/15 focus:border-apex-accent rounded px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-apex-accent hover:bg-apex-bright text-white font-semibold text-sm tracking-wider uppercase py-4 rounded transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-apex-accent/20"
                >
                  Send My Request →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
