import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Beranda",    href: "#hero" },
  { label: "Tentang",   href: "#tentang" },
  { label: "Ayat Harian", href: "#ayat" },
  { label: "Pastor",    href: "#pastor" },
  { label: "Aktivitas", href: "#aktivitas" },
  { label: "Jadwal Misa", href: "#jadwal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-navy-deep/97 backdrop-blur-xl border-gold/20"
          : "bg-navy-deep/80 backdrop-blur-md border-gold/10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-gold/40 rounded-sm flex items-center justify-center text-gold text-sm group-hover:border-gold/80 transition-colors">
            ✝
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-white text-[15px] font-medium tracking-wide leading-tight">
              Paroki Santo Agustinus
            </p>
            <p className="text-gold/60 text-[10px] tracking-[0.18em] uppercase">
              Purbalingga · Est. 1936
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/60 hover:text-gold text-[11.5px] tracking-[0.12em] uppercase font-light transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.25 p-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-gold transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-px bg-gold transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-gold transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy-deep/98 border-t border-gold/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-gold text-[12px] tracking-[0.14em] uppercase py-1 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}