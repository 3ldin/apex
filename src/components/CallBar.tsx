import { site } from "@/data/site";

// Sticky call/text bar - mobile only
export default function CallBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 bg-apex-blue border-t border-white/15">
      <a href={site.phoneHref} className="py-4 text-center text-white font-semibold text-sm uppercase tracking-wider bg-apex-accent">
        Call Now
      </a>
      <a href={site.smsHref} className="py-4 text-center text-white font-semibold text-sm uppercase tracking-wider">
        Text Us
      </a>
    </div>
  );
}
