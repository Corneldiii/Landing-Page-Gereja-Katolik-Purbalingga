export default function Footer() {
  return (
    <footer
      className="py-14 px-6 text-center border-t border-[#C8A96E]/12"
      style={{ background: "#111525" }}
    >
      <p className="font-display text-[#C8A96E]/25 leading-none mb-4" style={{ fontSize: "2.8rem" }}>✝</p>
      <p className="font-display text-white/80 text-lg font-light mb-2">
        Paroki Santo Petrus & Paulus — Semarang
      </p>
      <div className="w-10 h-px bg-[#C8A96E]/25 mx-auto my-4" />
      <div className="text-white/30 text-[12.5px] leading-[1.9] tracking-[0.05em]">
        <p>Jl. Pemuda No. 24, Semarang Tengah, Jawa Tengah 50131</p>
        <p>Telp: (024) 354-1234 &nbsp;·&nbsp; Email: sekretariat@paroki-petruspaulus-smg.id</p>
      </div>
      <p className="text-white/15 text-[11px] tracking-[0.16em] uppercase mt-6">
        Gloria in Excelsis Deo · Et in Terra Pax
      </p>
    </footer>
  );
}