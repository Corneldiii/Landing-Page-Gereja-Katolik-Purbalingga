const SCHEDULES = [
  {
    day: "Senin – Sabtu",
    highlight: false,
    masses: [
      { time: "05.30", type: "Misa Harian" },
    ],
  },
  {
    day: "✦ Sabtu Sore ✦",
    highlight: true,
    masses: [
      { time: "18.00", type: "Vigili Minggu" },
    ],
  },
  {
    day: "✦ Minggu ✦",
    highlight: true,
    masses: [
      { time: "07.00", type: "Misa Utama" }
    ],
  }
];

export default function MassSchedule() {
  return (
    <section
      id="jadwal"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #111525 0%, #1A1F35 100%)" }}
    >
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-gold/5 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full border border-gold/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="text-[10.5px] tracking-[0.22em] uppercase text-gold-light/60 font-medium mb-3">
            Liturgi
          </p>
          <h2 className="font-display text-white font-light leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
            Jadwal <em className="italic text-gold-light">Misa</em>
          </h2>
          <div className="flex items-center gap-3 max-w-xs mx-auto">
            <div className="flex-1 h-px bg-gold/20" />
            <span className="text-gold/60 text-sm">✦</span>
            <div className="flex-1 h-px bg-gold/20" />
          </div>
        </div>

        {/* Schedule grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3   gap-5 mb-10">
          {SCHEDULES.map((s) => (
            <div
              key={s.day}
              className={`rounded-sm p-7 text-center border transition-all duration-200 hover:scale-[1.02] ${
                s.highlight
                  ? "border-gold/50 bg-gold/6"
                  : "border-gold/18 bg-white/2 hover:bg-gold/4 hover:border-gold/35"
              }`}
            >
              <p className={`text-[10px] tracking-[0.22em] uppercase mb-5 ${s.highlight ? "text-gold-light" : "text-gold"}`}>
                {s.day}
              </p>
              <div className="flex flex-col gap-4">
                {s.masses.map((m) => (
                  <div key={m.time}>
                    <p className="font-display text-white font-light" style={{ fontSize: "1.7rem", lineHeight: 1 }}>
                      {m.time}
                    </p>
                    <p className="text-gold/55 text-[11px] tracking-widest mt-1">{m.type}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Info note */}
        <div className="max-w-xl mx-auto border border-gold/15 rounded-sm bg-white/2 p-6 text-center">
          <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-2">Informasi</p>
          <p className="text-cream/55 text-[13.5px] leading-[1.8] font-light">
            Jadwal dapat berubah pada Hari Raya Gereja. Harap konfirmasi melalui pengumuman resmi paroki atau papan pengumuman gereja.
          </p>
        </div>
      </div>
    </section>
  );
}