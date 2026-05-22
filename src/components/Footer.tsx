import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#040d18] border-t border-white/8 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo-white.png" alt="Apex Surface Solutions" width={140} height={35} className="h-9 w-auto" />
            </div>
            {/* logo-black.png available for any future light-background use */}
            <p className="text-apex-steel text-xs leading-relaxed">
              Professional pressure washing for residential and commercial
              properties in the Tri State Area.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white uppercase tracking-wider text-sm mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-apex-steel text-xs">
              {[
                "Driveway & Concrete",
                "Deck & Patio",
                "Building Exteriors",
                "Roof Soft Wash",
                "Commercial",
                "Vehicles & Equipment",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white uppercase tracking-wider text-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-apex-steel text-xs">
              <li>
                <a href="tel:+15705550100" className="hover:text-white transition-colors">
                  (570) 555-0100
                </a>
              </li>
              <li>
                <a href="mailto:info@apexsurfacesolutions.com" className="hover:text-white transition-colors">
                  info@apexsurfacesolutions.com
                </a>
              </li>
              <li>NY, NJ, PA, CT &amp; Surrounding Areas</li>
              <li>24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-apex-steel text-xs">
            © {new Date().getFullYear()} Apex Surface Solutions. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            
          </p>
        </div>
      </div>
    </footer>
  );
}
