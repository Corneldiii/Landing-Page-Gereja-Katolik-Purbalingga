export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1A1F35 0%, #2D3354 60%, #1f2e4a 100%)" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A96E' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Ornament rings */}
      <div className="absolute w-150 h-150 rounded-full border border-gold/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute w-100 h-100 rounded-full border border-gold/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute w-55 h-55 rounded-full border border-gold/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6 animate-[fade-up_1.2s_ease_both]">
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-sm px-5 py-2 mb-8">
          <span className="text-gold text-[11px] tracking-[0.2em] uppercase">✦ Selamat Datang ✦</span>
        </div>

        <h1 className="font-display text-white font-light leading-[1.12] mb-2" style={{ fontSize: "clamp(2.8rem, 7vw, 4.5rem)" }}>
          Paroki Santo
          <br />
          <em className="italic text-gold-light">Agustinus</em>
        </h1>

        <p className="text-white/40 text-[12px] tracking-[0.18em] uppercase font-light mt-4 mb-2">
          Gereja Katolik — Purbalingga
        </p>

        <div className="w-14 h-px bg-gold/50 mx-auto my-6" />

        <p className="text-white/50 text-[13px] tracking-[0.08em]">
          Jl. Jend. Sudirman No.188, Bancar, Kec. Purbalingga, Kabupaten Purbalingga, Jawa Tengah
        </p>

        <div className="flex items-center justify-center gap-4 mt-10">
          <a
            href="#ayat"
            className="bg-gold text-navy text-[11px] tracking-[0.16em] uppercase font-medium px-7 py-3 rounded-sm hover:bg-gold-light transition-colors duration-200"
          >
            Ayat Hari Ini
          </a>
          <a
            href="#jadwal"
            className="border border-gold/40 text-gold text-[11px] tracking-[0.16em] uppercase font-light px-7 py-3 rounded-sm hover:border-gold transition-colors duration-200"
          >
            Jadwal Misa
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase">Gulir</span>
        <div className="w-px h-10 bg-linear-to-b from-transparent to-gold animate-scroll" />
      </div>
    </section>
  );
}