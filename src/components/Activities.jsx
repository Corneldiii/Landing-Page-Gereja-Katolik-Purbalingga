import { useState } from "react";

const TABS = [
  { key: "minggu",     label: "Minggu Ini" },
  { key: "rutin",      label: "Kegiatan Rutin" },
  { key: "kategorial", label: "Kategorial" },
];

const ACTIVITIES = {
  minggu: [
    {
      icon: "🕯️",
      day: "Minggu, 18 Mei",
      name: "Perayaan Ekaristi Minggu",
      badge: "Hari ini",
      time: "06:00 · 08:00 · 10:00 · 17:00",
      desc: "Misa Mingguan dengan perarakan, khotbah, dan berkat penutup. Hadir lebih awal untuk mengambil tempat duduk.",
    },
    {
      icon: "📖",
      day: "Selasa, 20 Mei",
      name: "Kelompok Kitab Suci",
      time: "19:00 – 21:00 · Aula Paroki",
      desc: "Pendalaman Injil Lukas bersama Rm. Antonius. Terbuka untuk semua umat. Bawa Alkitab masing-masing.",
    },
    {
      icon: "🌹",
      day: "Rabu, 21 Mei",
      name: "Doa Rosario Bersama",
      time: "17:30 · Kapel Maria",
      desc: "Doa Rosario Peristiwa Cahaya dipimpin oleh Legio Maria. Semua umat, terutama kaum ibu, diundang hadir.",
    },
    {
      icon: "🙏",
      day: "Kamis, 22 Mei",
      name: "Adorasi Ekaristi",
      time: "19:00 – 21:00 · Gereja Utama",
      desc: "Satu jam hening bersama Tuhan dalam Adorasi Sakramen Mahakudus. Dipimpin oleh komunitas Taizé Semarang.",
    },
    {
      icon: "🎵",
      day: "Sabtu, 24 Mei",
      name: "Latihan Koor Paroki",
      time: "10:00 – 12:00 · Aula",
      desc: "Persiapan liturgi Minggu Pentakosta. Koor Agustinus dan Koor Cantate bergabung dalam sesi latihan gabungan.",
    },
    {
      icon: "👶",
      day: "Sabtu, 24 Mei",
      name: "Bina Iman Anak (BIA)",
      time: "08:00 – 10:00 · Ruang Katekese",
      desc: "Pendidikan iman anak usia 6–12 tahun dengan metode cerita, lagu rohani, dan kegiatan kreatif.",
    },
  ],
  rutin: [
    {
      icon: "✝️",
      day: "Setiap Hari",
      name: "Misa Harian",
      time: "06:00 · Kapel Sakramen",
      desc: "Perayaan Ekaristi harian singkat ±30 menit. Tersedia juga ibadat pagi bagi yang tidak sempat mengikuti misa.",
    },
    {
      icon: "💬",
      day: "Rabu & Jumat",
      name: "Confessio (Pengakuan Dosa)",
      time: "17:00 – 18:00 · Kamar Pengakuan",
      desc: "Sakramen Rekonsiliasi bersama Romo Borgia dan Romo Paulus. Khusus Jumat pertama setiap bulan diadakan misa khusus.",
    },
    {
      icon: "📿",
      day: "Setiap Jumat",
      name: "Jalan Salib",
      time: "18:00 · Taman Doa",
      desc: "Devosi Jalan Salib dipimpin bergantian oleh kelompok kategorial. Dilanjutkan dengan doa penutup bersama.",
    },
    {
      icon: "🤝",
      day: "Sabtu ke-2 Setiap Bulan",
      name: "Rapat Dewan Paroki",
      time: "09:00 – 11:00 · Pastoran",
      desc: "Koordinasi pastoral dan program paroki bersama dewan. Umat yang ingin menyampaikan aspirasi dapat hadir.",
    },
  ],
  kategorial: [
    {
      icon: "🌟",
      day: "OMK — Setiap Jumat",
      name: "Orang Muda Katolik",
      time: "19:00 · Aula Paroki",
      desc: "Komunitas muda dengan sharing iman, rekoleksi bulanan, aksi sosial, dan pertukaran budaya. Usia 16–35 tahun.",
    },
    {
      icon: "👩",
      day: "WK — Sabtu ke-1",
      name: "Wanita Katolik RI",
      time: "10:00 · Ruang Serbaguna",
      desc: "Perkumpulan ibu-ibu Katolik aktif dalam pelayanan sosial, bazaar amal, kunjungan panti asuhan, dan pemberdayaan keluarga.",
    },
    {
      icon: "👨",
      day: "PKKK — Sabtu ke-3",
      name: "Pria Katolik & Keluarga",
      time: "08:00 · Aula",
      desc: "Forum bapak-bapak Katolik untuk pendalaman iman, diskusi keluarga, dan kegiatan sosial komunitas.",
    },
    {
      icon: "🎶",
      day: "Koor — Rabu & Sabtu",
      name: "Paduan Suara Paroki",
      time: "19:00 · Aula Musik",
      desc: "Dua kelompok: Koor Agustinus (dewasa) dan Cantate Domino (remaja). Terbuka bagi yang ingin melayani liturgi.",
    },
    {
      icon: "✨",
      day: "Legio Maria — Setiap Senin",
      name: "Legio Maria",
      time: "16:00 · Kapel Maria",
      desc: "Kelompok devosi kepada Bunda Maria, aktif mengunjungi umat sakit dan melakukan karya apostolik harian.",
    },
    {
      icon: "📚",
      day: "RCIA — Setiap Kamis",
      name: "Kelas Katekumen (RCIA)",
      time: "19:00 · Ruang Katekese",
      desc: "Program penerimaan calon anggota Gereja Katolik. Terbuka bagi yang ingin mengenal iman Katolik lebih dalam.",
    },
  ],
};

function ActivityCard({ activity }) {
  return (
    <div className="bg-white border border-[#C8A96E]/25 rounded-sm p-5 flex gap-4 items-start hover:border-[#C8A96E]/60 transition-colors duration-200 group">
      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1A1F35] to-[#2D3354] flex items-center justify-center text-lg flex-shrink-0">
        {activity.icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] tracking-[0.16em] uppercase text-[#9A7A45] mb-0.5">{activity.day}</p>
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <h4 className="font-display text-[#1A1F35] text-[1.05rem] font-medium leading-tight">{activity.name}</h4>
          {activity.badge && (
            <span className="text-[9px] tracking-[0.1em] uppercase bg-green-50 text-green-700 border border-green-200 rounded-sm px-2 py-0.5 font-medium">
              {activity.badge}
            </span>
          )}
        </div>
        <p className="text-[#7A7065] text-[12px] flex items-center gap-1.5 mb-2">
          <span className="text-[#C8A96E]/70">⏰</span> {activity.time}
        </p>
        <p className="text-[#7A7065] text-[13px] leading-[1.7] font-light">{activity.desc}</p>
      </div>
    </div>
  );
}

export default function Activities() {
  const [activeTab, setActiveTab] = useState("minggu");

  return (
    <section id="aktivitas" className="py-24 bg-[#F0EAE0] px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10.5px] tracking-[0.22em] uppercase text-[#9A7A45] font-medium mb-2">
          Kehidupan Paroki
        </p>
        <h2 className="font-display text-[#1A1F35] font-light leading-tight mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
          Aktivitas & <em className="italic text-[#9A7A45]">Kegiatan</em>
        </h2>
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-[#C8A96E]/25" />
          <span className="text-[#C8A96E] text-sm">✦</span>
          <div className="flex-1 h-px bg-[#C8A96E]/25" />
        </div>

        {/* Tabs */}
        <div className="flex border border-[#C8A96E]/25 rounded-sm overflow-hidden w-fit mb-8">
          {TABS.map((tab, i) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 text-[11px] tracking-[0.12em] uppercase font-normal transition-all duration-200 ${
                i < TABS.length - 1 ? "border-r border-[#C8A96E]/25" : ""
              } ${
                activeTab === tab.key
                  ? "bg-[#1A1F35] text-[#C8A96E]"
                  : "bg-transparent text-[#7A7065] hover:text-[#1A1F35]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACTIVITIES[activeTab].map((activity) => (
            <ActivityCard key={activity.name} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}