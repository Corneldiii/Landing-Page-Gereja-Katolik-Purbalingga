const PRIESTS = [
  {
    initials: "FB",
    role: "Pastor Paroki",
    name: "RD. FX. Handy Kristian Adi Putra, Pr.",
    bio: "Ditahbiskan pada tahun 1998, Romo Borgia telah melayani di berbagai paroki di Jawa Tengah selama 26 tahun. Beliau dikenal dengan khotbah yang inspiratif dan pendampingan spiritual yang penuh kasih.",
    tags: ["Spiritualitas Ignatian", "Pembinaan Iman", "Konseling"],
    bgFrom: "#1A1F35",
    bgTo: "#2D3354",
  },
  {
    initials: "AB",
    role: "Pastor Vikaris",
    name: "Rm. Kristoforus Wasito",
    bio: "Bergabung dengan paroki sejak 2019, Romo Antonius berfokus pada pelayanan kaum muda dan evangelisasi digital. Beliau aktif mendampingi OMK dan komunitas mahasiswa Katolik di sekitar paroki.",
    tags: ["Katekese", "Evangelisasi", "Pendidikan Iman"],
    bgFrom: "#1f2e4a",
    bgTo: "#1A1F35",
  },
  {
    initials: "PK",
    role: "Pastor Rekan",
    name: "Rm. Paulus Kristianto, CM",
    bio: "Romo Paulus adalah spesialis katekese dan pendidikan iman. Beliau mengelola program Bina Iman, kelas baptisan dewasa (RCIA), serta pembinaan calon komuni pertama dan krisma.",
    tags: ["Katekese", "RCIA", "Pendidikan Iman"],
    bgFrom: "#2D3354",
    bgTo: "#1f2e4a",
  },
];

function PriestCard({ priest }) {
  return (
    <div className="bg-white border border-gold/25 rounded-sm overflow-hidden group hover:-translate-y-1 transition-transform duration-300 hover:shadow-[0_20px_60px_rgba(26,31,53,0.12)]">
      {/* Photo area */}
      <div
        className="h-56 flex items-center justify-center relative overflow-hidden"
        style={{ background: `linear-gradient(145deg, ${priest.bgFrom}, ${priest.bgTo})` }}
      >
        <div className="absolute w-48 h-48 rounded-full border border-gold/8" />
        <div className="absolute w-32 h-32 rounded-full border border-gold/10" />
        <div className="w-24 h-24 rounded-full bg-gold/10 border-2 border-gold-light/40 flex items-center justify-center font-display text-gold-light text-2xl font-medium relative z-10">
          {priest.initials}
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <p className="text-[10px] tracking-[0.2em] uppercase text-gold-dark mb-1">{priest.role}</p>
        <h3 className="font-display text-navy text-xl font-medium mb-3">{priest.name}</h3>
        <p className="text-[#7A7065] text-[13.5px] leading-[1.8] font-light mb-4">{priest.bio}</p>
        <div className="flex flex-wrap gap-1.5">
          {priest.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-widest bg-cream-dark text-[#7A7065] rounded-sm px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Priests() {
  return (
    <section id="pastor" className="py-24 bg-cream px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10.5px] tracking-[0.22em] uppercase text-gold-dark font-medium mb-2">
          Tim Pastoral
        </p>
        <h2 className="font-display text-navy font-light leading-tight mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
          Para <em className="italic text-gold-dark">Pastor Paroki</em>
        </h2>
        <div className="flex items-center gap-3 mb-12">
          <div className="flex-1 h-px bg-gold/25" />
          <span className="text-gold text-sm">✦</span>
          <div className="flex-1 h-px bg-gold/25" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRIESTS.map((p) => (
            <PriestCard key={p.name} priest={p} />
          ))}
        </div>
      </div>
    </section>
  );
}