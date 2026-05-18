# Paroki Santo Petrus & Paulus — Landing Page

Website landing page gereja Katolik dibangun dengan **React 19 + Tailwind CSS v4 + Vite**.

## Struktur File

```
gereja-katolik-landing/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # Entry point React
    ├── App.jsx               # Root component, menyusun semua section
    ├── index.css             # Tailwind v4 + custom theme tokens
    └── components/
        ├── Navbar.jsx        # Navigasi sticky + mobile menu
        ├── Hero.jsx          # Hero fullscreen dengan ornamen
        ├── About.jsx         # Profil & statistik paroki
        ├── DailyVerse.jsx    # Ayat harian + renungan
        ├── Priests.jsx       # Profil para pastor
        ├── Activities.jsx    # Kegiatan dengan tab filter
        ├── MassSchedule.jsx  # Jadwal misa mingguan
        └── Footer.jsx        # Footer dengan info kontak
```



## Kustomisasi

### Ganti nama gereja / alamat
Edit teks di `Navbar.jsx`, `Hero.jsx`, `About.jsx`, dan `Footer.jsx`.

### Ubah ayat & renungan harian
Edit konstanta `VERSE` dan `REFLECTION` di `DailyVerse.jsx`.

### Tambah / ubah pastor
Edit array `PRIESTS` di `Priests.jsx`.

### Tambah / ubah kegiatan
Edit objek `ACTIVITIES` di `Activities.jsx`.

### Ubah jadwal misa
Edit array `SCHEDULES` di `MassSchedule.jsx`.

## Design System

| Token             | Nilai       | Kegunaan                   |
|------------------|-------------|----------------------------|
| `--color-gold`   | `#C8A96E`   | Aksen utama (emas)         |
| `--color-navy`   | `#1A1F35`   | Background gelap           |
| `--color-cream`  | `#FAF7F2`   | Background terang          |
| `--font-display` | Cormorant Garamond | Heading & display   |
| `--font-body`    | Jost        | Body text & UI             |

## Tech Stack

- **React 19** — UI library
- **Tailwind CSS v4** — Utility-first styling dengan `@tailwindcss/vite`
- **Vite 6** — Build tool & dev server