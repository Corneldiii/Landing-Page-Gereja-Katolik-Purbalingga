import { useEffect, useState } from "react";

// Fungsi untuk mendapatkan tanggal hari ini secara dinamis
const DAYS = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const MONTHS = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

function getToday() {
    const now = new Date();
    return `${DAYS[now.getDay()]}, ${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`;
}

function SparkleIcon({ className = "" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" opacity="0.9" />
            <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z" opacity="0.7" />
            <path d="M5 16l.6 1.8L7.4 18.4l-1.8.6L5 20.8l-.6-1.8L2.6 18.4l1.8-.6L5 16z" opacity="0.5" />
        </svg>
    );
}

export default function DailyVerse() {
    const TODAY = getToday();

    // State untuk menyimpan data
    const [verse, setVerse] = useState("");
    const [ref, setRef] = useState("");
    const [renungan, setRenungan] = useState([]);
    
    // State untuk status loading dan error
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchRenungan = async () => {
            setLoading(true);
            setError("");
            
            try {
                // Mengambil key dari file .env
                const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
                
                // Fetch langsung ke Google API
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: `Hari ini adalah ${TODAY}.
Tolong berikan:
1. Satu ayat Alkitab yang relevan dengan hari ini (dari kalender liturgi Katolik jika memungkinkan)
2. Renungan singkat 2-3 paragraf dalam bahasa Indonesia

Format responsmu HANYA dalam JSON dengan struktur ini:
{"verse":"teks ayat di sini","ref":"Kitab pasal:ayat","renungan":"paragraf 1\\n\\nparagraf 2\\n\\nparagraf 3"}`
                            }]
                        }],
                        generationConfig: {
                            responseMimeType: "application/json",
                        }
                    }),
                });

                if (!response.ok) {
                    throw new Error("Gagal menghubungi server");
                }

                const data = await response.json();
                
                // Ekstrak teks respons dari struktur JSON Gemini
                const rawText = data.candidates[0].content.parts[0].text;
                const parsed = JSON.parse(rawText);

                setVerse(parsed.verse);
                setRef(parsed.ref);
                // Pecah paragraf berdasarkan double newline
                setRenungan(parsed.renungan.split("\n\n"));
            } catch (err) {
                console.error(err);
                setError("Maaf, gagal mengambil renungan hari ini. Silakan muat ulang halaman.");
            } finally {
                setLoading(false);
            }
        };

        fetchRenungan();
    }, [TODAY]);

    return (
        <section
            id="ayat"
            className="py-24 px-6 relative overflow-hidden"
            style={{ background: "linear-gradient(160deg, #1A1F35 0%, #2D3354 100%)" }}
        >
            {/* Decorative circles */}
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

                {/* AREA LOADING & KONTEN */}
                <div className="min-h-[400px]">
                    {loading ? (
                        // TAMPILAN SAAT LOADING (Spinner Muter)
                        <div className="flex flex-col items-center justify-center h-full py-20 gap-6">
                            <div className="w-10 h-10 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
                            <p className="text-gold-light/60 text-[11px] tracking-[0.2em] uppercase font-light">
                                Menyiapkan Renungan...
                            </p>
                        </div>
                    ) : error ? (
                        // TAMPILAN SAAT ERROR
                        <div className="py-20">
                            <p className="text-red-400/80 font-light">{error}</p>
                            <button 
                                onClick={() => window.location.reload()} 
                                className="mt-4 px-4 py-2 border border-gold/30 text-gold text-sm rounded-sm hover:bg-gold/10 transition-colors"
                            >
                                Coba Lagi
                            </button>
                        </div>
                    ) : (
                        // TAMPILAN SAAT DATA BERHASIL DIAMBIL
                        <div className="animate-in fade-in duration-1000">
                            {/* Verse */}
                            <p className="font-display text-gold/15 leading-none -mb-6 text-[5.5rem] select-none">"</p>
                            <blockquote className="font-display text-cream font-light italic leading-relaxed mb-6 px-4" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.7rem)" }}>
                                {verse}
                            </blockquote>
                            <p className="text-gold text-[12px] tracking-[0.18em] uppercase mb-10">
                                — {ref} —
                            </p>

                            {/* Reflection box */}
                            <div className="text-left border border-gold/18 rounded-sm bg-white/3 p-8">
                                <span className="text-gold text-[10px] tracking-[0.22em] uppercase block mb-5">
                                    ✝ Renungan Hari Ini
                                </span>
                                <div className="space-y-4">
                                    {renungan.map((para, i) => (
                                        <p key={i} className="text-cream/70 text-[14.5px] leading-[1.9] font-light">
                                            {i === renungan.length - 1 ? (
                                                <>{para} <em className="italic text-gold-light/80">Ad maiorem Dei gloriam.</em></>
                                            ) : (
                                                para
                                            )}
                                        </p>
                                    ))}
                                </div>

                                {/* Author / Footer */}
                                <div className="flex items-center gap-1.5 text-gold-light mt-10">
                                    <SparkleIcon className="w-3 h-3" />
                                    <span className="text-[9.5px] tracking-[0.12em] uppercase">Digenerate oleh Gemini AI</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}