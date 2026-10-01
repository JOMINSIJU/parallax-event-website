import { EVENT_CONFIG } from "@/data/event-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#030308]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-display font-bold tracking-[0.15em] text-white mb-2">
              {EVENT_CONFIG.name}
            </h3>
            <p className="text-sm tracking-[0.2em] text-[#38bdf8]/60 uppercase mb-4">
              {EVENT_CONFIG.type}
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              {EVENT_CONFIG.date} {EVENT_CONFIG.year} • {EVENT_CONFIG.institution.name}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-xs tracking-[0.3em] text-slate-500 uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {EVENT_CONFIG.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Info */}
          <div className="md:col-span-1">
            <h4 className="text-xs tracking-[0.3em] text-slate-500 uppercase mb-6">
              Event Info
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-[#38bdf8] mt-0.5">◆</span>
                <span>{EVENT_CONFIG.date} {EVENT_CONFIG.year}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38bdf8] mt-0.5">◆</span>
                <span>{EVENT_CONFIG.venue.hall}, {EVENT_CONFIG.venue.floor}, {EVENT_CONFIG.venue.block}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38bdf8] mt-0.5">◆</span>
                <span>{EVENT_CONFIG.venue.campus}, {EVENT_CONFIG.venue.area}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#38bdf8] mt-0.5">◆</span>
                <span>{EVENT_CONFIG.venue.institution}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.04]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600">
              &copy; {currentYear} {EVENT_CONFIG.name} • {EVENT_CONFIG.institution.name}
            </p>
            <p className="text-xs text-slate-600 tracking-wider">
              {EVENT_CONFIG.type} • {EVENT_CONFIG.date} {EVENT_CONFIG.year}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
