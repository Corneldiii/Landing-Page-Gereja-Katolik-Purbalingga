const stats = [
  { num: "1.000+", label: "Umat Aktif" },
  { num: "89",    label: "Tahun Berdiri" },
  { num: "3",      label: "Misa Per Minggu" },
  { num: "15+",    label: "Kelompok Kategorial" },
];

export default function About() {
  return (
    <section id="tentang" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-[10.5px] tracking-[0.22em] uppercase text-gold-dark font-medium mb-2">
            Tentang Paroki
          </p>
          <h2 className="font-display text-navy font-light leading-tight mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
            Rumah Iman <em className="italic text-gold-dark">Sejak 1936</em>
          </h2>

          {/* Ornament divider */}
          <div className="flex items-center gap-3 mb-7">
            <div className="flex-1 h-px bg-gold/25" />
            <span className="text-gold text-sm">✦</span>
            <div className="flex-1 h-px bg-gold/25" />
          </div>

          <p className="text-[#7A7065] text-[15px] leading-[1.9] font-light mb-4">
           Paroki Santo Agustinus Purbalingga adalah komunitas umat Katolik yang telah melayani dan mendampingi kehidupan rohani umat di wilayah Purbalingga dan sekitarnya sejak tahun 1936. Paroki ini menjadi rumah doa dan tempat perjumpaan iman bagi ribuan umat dari berbagai generasi di Kabupaten Purbalingga, Jawa Tengah.
          </p>
          <p className="text-[#7A7065] text-[15px] leading-[1.9] font-light">
           Paroki Santo Agustinus hadir untuk mengajak setiap jiwa hadir di hadirat Tuhan, bertumbuh dalam kasih Kristus, serta berbagi pelayanan dan kasih kepada sesama melalui doa, sakramen, dan karya nyata di tengah masyarakat.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5 mt-10">
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-gold-light pl-5">
                <p className="font-display text-navy font-normal leading-none" style={{ fontSize: "2.4rem" }}>
                  {s.num}
                </p>
                <p className="text-[#7A7065] text-[11px] tracking-[0.14em] uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div
          className="hidden lg:flex flex-col items-center justify-center rounded-sm h-96 relative overflow-hidden border border-gold/20"
          style={{ background: "linear-gradient(145deg, #1A1F35, #2D3354)" }}
        >
          <div className="absolute w-72 h-72 rounded-full border border-gold/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute w-48 h-48 rounded-full border border-gold/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <p className="font-display text-gold/40 relative z-10" style={{ fontSize: "5rem", lineHeight: 1 }}>✝</p>
          <p className="font-display text-white/50 text-[15px] font-light tracking-widest text-center mt-4 relative z-10">
            Paroki Santo Agustinus
            <br />
            <span className="text-gold/50 text-[11px] tracking-[0.18em]">Est. 1936 · Purbalingga</span>
          </p>
        </div>
      </div>
    </section>
  );
}