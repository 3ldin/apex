"use client";
import { useState } from "react";
import { site } from "@/data/site";

const input =
  "w-full bg-apex-blue border border-white/15 focus:border-apex-accent rounded px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-colors";
const label = "block text-apex-steel text-xs uppercase tracking-wider mb-2";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (site.web3formsKey === "YOUR_ACCESS_KEY") {
      console.warn("Contact form: add your Web3Forms access key in src/data/site.ts");
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const data = Object.fromEntries(new FormData(e.currentTarget).entries());
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: site.web3formsKey,
          subject: `New quote request: ${data.service || "General"} - ${data.name}`,
          from_name: site.name,
          replyto: data.email || undefined,
        }),
      });
      const json = await res.json();
      setStatus(json.success ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-apex-blue py-24 px-6 pb-32 md:pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-apex-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">Get Started</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white uppercase tracking-tight">Request a Free Quote</h2>
          <div className="w-16 h-0.5 bg-apex-accent mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-xl text-white uppercase tracking-wide mb-6">Reach Us Directly</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">📞</span>
                  <div>
                    <p className="text-apex-steel text-xs uppercase tracking-wider mb-0.5">Call or Text</p>
                    <a href={site.phoneHref} className="text-white hover:text-apex-accent transition-colors text-lg font-semibold">
                      {site.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">✉️</span>
                  <div>
                    <p className="text-apex-steel text-xs uppercase tracking-wider mb-0.5">Email</p>
                    <a href={site.emailHref} className="text-white hover:text-apex-accent transition-colors text-sm break-all">
                      {site.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">📍</span>
                  <div>
                    <p className="text-apex-steel text-xs uppercase tracking-wider mb-0.5">Service Area</p>
                    <p className="text-white text-sm">{site.serviceArea}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">🕒</span>
                  <div>
                    <p className="text-apex-steel text-xs uppercase tracking-wider mb-0.5">Availability</p>
                    <p className="text-white text-sm">{site.hours}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-apex-mid border border-white/10 rounded-lg p-5">
              <p className="text-white text-sm font-semibold mb-2">✦ Free, No-Obligation Estimates</p>
              <p className="text-apex-steel text-sm leading-relaxed">
                Send a request or just text us a photo of the job. We&apos;ll get back to you quickly with a quote.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {status === "done" ? (
              <div className="h-full flex items-center justify-center bg-apex-mid border border-apex-accent/30 rounded-xl p-12 text-center">
                <div>
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display text-2xl text-white uppercase tracking-wide mb-3">Request Received!</h3>
                  <p className="text-apex-steel">Thanks for reaching out. We&apos;ll be in touch shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-apex-mid border border-white/10 rounded-xl p-8 space-y-5">
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={label}>Full Name *</label>
                    <input type="text" name="name" required placeholder="John Smith" className={input} />
                  </div>
                  <div>
                    <label className={label}>Phone Number *</label>
                    <input type="tel" name="phone" required placeholder="(555) 555-5555" className={input} />
                  </div>
                </div>
                <div>
                  <label className={label}>Email (optional)</label>
                  <input type="email" name="email" placeholder="you@email.com" className={input} />
                </div>
                <div>
                  <label className={label}>Service Needed</label>
                  <select name="service" defaultValue="" className={`${input} text-white`}>
                    <option value="" disabled>Select a service…</option>
                    <option>Snow Removal</option>
                    <option>Carpet Cleaning (Interior / Exterior)</option>
                    <option>Driveway / Concrete Washing</option>
                    <option>Deck / Patio</option>
                    <option>House Siding</option>
                    <option>Roof Soft Wash</option>
                    <option>Commercial Property</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className={label}>Tell Us About the Job</label>
                  <textarea name="message" rows={4} placeholder="Property address, size, any specific concerns…" className={`${input} resize-none`} />
                </div>
                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong. Please call or text us at {site.phoneDisplay}.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-apex-accent hover:bg-apex-bright disabled:opacity-60 text-white font-semibold text-sm tracking-wider uppercase py-4 rounded transition-all duration-200 shadow-lg shadow-apex-accent/20"
                >
                  {status === "sending" ? "Sending…" : "Send My Request →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
