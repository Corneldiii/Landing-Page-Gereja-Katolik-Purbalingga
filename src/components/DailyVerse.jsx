const TODAY = "Minggu, 18 Mei 2026";

const VERSE = {
  text: "Sebab begitu besar kasih Allah akan dunia ini, sehingga Ia telah mengaruniakan Anak-Nya yang tunggal, supaya setiap orang yang percaya kepada-Nya tidak binasa, melainkan beroleh hidup yang kekal.",
  ref: "Yohanes 3:16",
};

const REFLECTION = `Saudara-saudari terkasih dalam Kristus, ayat hari ini mengingatkan kita bahwa kasih Allah bukan sesuatu yang perlu kita raih atau perjuangkan — Ia telah lebih dahulu memberikan diri-Nya. Dalam kesibukan dan kepenatan hari-hari kita, sering kali kita lupa bahwa kita sudah dicintai tanpa syarat oleh Sang Pencipta.

Hari ini, marilah kita meluangkan waktu untuk merasakan kehadiran kasih Allah itu secara nyata. Bukan melalui perbuatan besar, tetapi melalui hal-hal kecil: sebuah senyuman tulus kepada sesama, sebuah doa dari hati yang sungguh, atau sebuah tindakan kebaikan yang tidak mengharapkan balasan.

Karena kita yang telah menerima kasih itu, dipanggil pula untuk menjadi salurannya bagi dunia sekitar kita.`;

export default function DailyVerse() {
  return (
    <section
      id="ayat"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1A1F35 0%, #2D3354 100%)" }}
    >
      {/* Decorative circle */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-gold/6 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border border-gold/6 pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Header */}
        <p className="text-[10.5px] tracking-[0.22em] uppercase text-gold-light/70 font-medium mb-3">
          Sabda Tuhan
        </p>
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 rounded-sm px-5 py-2 mb-6">
          <span className="text-gold text-[11px] tracking-[0.16em]">✦ {TODAY} ✦</span>
        </div>
        <h2 className="font-display text-white font-light leading-tight mb-10" style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)" }}>
          Ayat & Renungan <em className="italic text-gold-light">Harian</em>
        </h2>

        {/* Ornament */}
        <div className="flex items-center gap-3 mb-10 max-w-xs mx-auto">
          <div className="flex-1 h-px bg-gold/20" />
          <span className="text-gold/60 text-sm">✦</span>
          <div className="flex-1 h-px bg-gold/20" />
        </div>

        {/* Verse */}
        <p className="font-display text-gold/15 leading-none -mb-6 text-[5.5rem] select-none">"</p>
        <blockquote className="font-display text-cream font-light italic leading-relaxed mb-6 px-4" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)" }}>
          {VERSE.text}
        </blockquote>
        <p className="text-gold text-[12px] tracking-[0.18em] uppercase mb-10">
          — {VERSE.ref} —
        </p>

        {/* Reflection box */}
        <div className="text-left border border-gold/18 rounded-sm bg-white/3 p-8">
          <span className="text-gold text-[10px] tracking-[0.22em] uppercase block mb-5">
            ✝ Renungan Hari Ini
          </span>
          <div className="space-y-4">
            {REFLECTION.split("\n\n").map((para, i) => (
              <p key={i} className="text-cream/70 text-[14.5px] leading-[1.9] font-light">
                {i === REFLECTION.split("\n\n").length - 1 ? (
                  <>{para} <em className="italic text-gold-light/80">Ad maiorem Dei gloriam.</em></>
                ) : para}
              </p>
            ))}
          </div>

          {/* Author */}
          <div className="mt-7 pt-6 border-t border-gold/12 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center font-display text-gold text-lg">
              F
            </div>
            <div>
              <p className="text-white text-[13px] font-medium">RD. FX. Handy Kristian Adi Putra, Pr.</p>
              <p className="text-gold/55 text-[11px] tracking-[0.08em]">Pastor Paroki</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}