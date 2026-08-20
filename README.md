# 🚕 TaxiGo - React & TypeScript Taxi Landing Page

Ushbu loyiha taksi va transport xizmatlari uchun **React 18 + TypeScript + Vite + Lucide Icons** texnologiyalari asosida yaratilgan zamonaviy, modulli va yuqori tezlikda ishlovchi Landing Page hisoblanadi.

---

## 📁 Loyiha Arxitekturasi (Project Architecture)

```text
taxi-landing-page/
├── 📂 public/                   # Statik ochiq fayllar
├── 📂 src/
│   ├── 📂 components/           # UI Komponentlar
│   │   ├── 📄 Navbar.tsx        # Navigatsiya paneli va mobil menyu
│   │   ├── 📄 Hero.tsx          # Asosiy banner va statistika
│   │   ├── 📄 BookingForm.tsx   # Interaktiv tezkor taksi buyurtma formasi
│   │   ├── 📄 Services.tsx      # Xizmat turlari (shahar, viloyat, aeroport, kuryer)
│   │   ├── 📄 Tariffs.tsx       # Narx va tariflar kartalari (Standart, Komfort, Biznes)
│   │   ├── 📄 Features.tsx      # Afzalliklarimiz (24/7, tajribali haydovchilar, to'lovlar)
│   │   ├── 📄 DriverCTA.tsx     # Haydovchilarni ishga taklif qilish banneri
│   │   ├── 📄 AppDownload.tsx   # Mobil ilova yuklab olish bo'limi
│   │   ├── 📄 FAQ.tsx           # Savol-javoblar (Accordion)
│   │   └── 📄 Footer.tsx        # Aloqa ma'lumotlari va tarmoq havolalari
│   │
│   ├── 📂 data/
│   │   └── 📄 mockData.ts       # Dinamik ma'lumotlar (tariflar, xizmatlar, savollar)
│   │
│   ├── 📂 types/
│   │   └── 📄 index.ts          # TypeScript interfeyslari va turlari
│   │
│   ├── 📄 App.tsx               # Asosiy sahifa konteyneri
│   ├── 📄 main.tsx              # React DOM render qilish nuqtasi
│   └── 📄 index.css             # Asosiy CSS stillar va responsive dizayn
│
├── 📄 index.html                # HTML entry point
├── 📄 package.json              # Loyiha kutubxonalari va scriptlar
├── 📄 tsconfig.json             # TypeScript konfiguratsiyasi
├── 📄 vite.config.ts            # Vite konfiguratsiyasi
├── 📄 .gitignore                # Git e'tiborsiz qoldiradigan fayllar
└── 📄 README.md                 # Loyiha qo'llanmasi
```

---

## 🚀 Ishga Tushirish (Quick Start)

### 1. Bog'liqliklarni o'rnatish:
```bash
npm install
```

### 2. Dasturni rivojlantirish (Development) rejimida ishga tushirish:
```bash
npm run dev
```

### 3. Production uchun build qilish:
```bash
npm run build
```

---

## ✨ Asosiy Xususiyatlar

- ⚡ **Vite + React + TypeScript**: Maksimal tezlik, kod xavfsizligi va qulay arxitektura.
- 🎯 **Tezkor Buyurtma (Booking Widget)**: Qayerdan / Qayerga borishni kiritish, tarif bo'yicha narxni hisoblash va buyurtma yuborish.
- 🎨 **Zamonaviy UI & Ikonlar**: `lucide-react` zamonaviy SVG ikonlari va silliq animatsiyalar.
- 📱 **To'liq Responsive**: Mobil smartfonlar, planshetlar va noutbuklar uchun to'liq moslashgan.
- 🧩 **Modulli Komponentlar**: Har bir qism alohida TypeScript komponenti sifatida ajratilgan va osongina o'zgartirish mumkin.
