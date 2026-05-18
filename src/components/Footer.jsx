export default function Footer() {
  return (
    <footer
      className="py-14 px-6 text-center border-t border-gold/12"
      style={{ background: "#111525" }}
    >
      <p className="font-display text-gold/25 leading-none mb-4" style={{ fontSize: "2.8rem" }}>✝</p>
      <p className="font-display text-white/80 text-lg font-light mb-2">
        Paroki Santo Agustinus — Purbalingga
      </p>
      <div className="w-10 h-px bg-gold/25 mx-auto my-4" />
      <div className="text-white/30 text-[12.5px] leading-[1.9] tracking-[0.05em]">
        <p>Jl. Jend. Sudirman No.188, Bancar, Kec. Purbalingga, Kabupaten Purbalingga, Jawa Tengah 53316</p>
        <p>Telp: (0281) 891127 &nbsp;·&nbsp; Email: sekretariat@parokisantoagustinus.id</p>
      </div>
      <p className="text-white/15 text-[11px] tracking-[0.16em] uppercase mt-6">
        Gloria in Excelsis Deo · Et in Terra Pax
      </p>
    </footer>
  );
}