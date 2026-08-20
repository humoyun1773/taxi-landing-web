import { Tariff, ServiceItem, StepItem, RegionData, SafetyItem, StatItem, FAQItem, TechPillar } from '../types';

export const statsData: StatItem[] = [
  {
    id: 'stat1',
    value: 500,
    suffix: 'K+',
    label: 'Faol Foydalanuvchilar',
    description: 'Har oy platformadan foydalanuvchi yo\'lovchilar',
  },
  {
    id: 'stat2',
    value: 3,
    suffix: ' Min',
    label: 'O\'rtacha Yetib Kelish',
    description: 'AI taqsimlash orqali eng yaqin mashina',
  },
  {
    id: 'stat3',
    value: 12,
    suffix: ' Viloyat',
    label: 'Qamrov Hududi',
    description: 'Butun O\'zbekiston bo\'ylab yagona integratsiya',
  },
  {
    id: 'stat4',
    value: 99.8,
    suffix: '%',
    decimals: 1,
    label: 'Xavfsiz Qatnovlar',
    description: 'Real vaqtli telemetriya va AI nazorati',
  },
];

export const techPillarsData: TechPillar[] = [
  {
    id: 'tp1',
    iconName: 'Cpu',
    title: 'Neyrotarmoqli AI Taqsimot',
    description: 'Har bir buyurtma soniyaning ulushlarida tirbandlik, masofa va haydovchi reytingiga qarab eng optimal tarzda yo\'naltiriladi.',
  },
  {
    id: 'tp2',
    iconName: 'Zap',
    title: 'Dinamik va Shaffof Narxlash',
    description: 'Hech qanday kutilmagan to\'lovlarsiz, ob-havo va yo\'l holatini hisobga oluvchi aniq va hamyonbop algoritmlar.',
  },
  {
    id: 'tp3',
    iconName: 'Shield',
    title: '24/7 Smart Telemetriya & SOS',
    description: 'Avtomobil harakati, tezlik chegarasi va marshrut og\'ishlari sun\'iy intellekt tomonidan to\'liq xavfsizlik nazoratida bo\'ladi.',
  },
  {
    id: 'tp4',
    iconName: 'Globe',
    title: 'Yagona Shaharlararo Tarmoq',
    description: 'Toshkentdan barcha viloyatlarga qulay vaqtda, ishonchli haydovchilar bilan tezkor shaharlararo transport aloqasi.',
  },
  {
    id: 'tp5',
    iconName: 'Compass',
    title: 'Intellektual Marshrutlash',
    description: 'Shahar tirbandliklarini chetlab o\'tuvchi va vaqtni 30% gacha tejovchi moslashuvchan yo\'l algoritmi.',
  },
  {
    id: 'tp6',
    iconName: 'Layers',
    title: 'Keng Ko\'lamli Ekotizim',
    description: 'Yo\'lovchi tashish, yuk yetkazish, korporativ qatnov va aeroport transferlarini qamrab oluvchi yaxlit platforma.',
  },
];

export const tariffsData: Tariff[] = [
  {
    id: 'eco',
    name: 'Ekonom Klass',
    badge: 'Hamyonbop',
    startPrice: '10 000',
    perKm: '1 800',
    freeWait: '3 daqiqa',
    description: 'Kundalik qisqa shahar qatnovlari uchun tejamkor va qulay tanlov.',
    cars: 'Cobalt, Nexia 3, Spark',
    features: [
      'Boshlang\'ich: 10 000 so\'m (1.5 km)',
      'Har 1 km uchun: 1 800 so\'m',
      '3 daqiqa bepul kutish vaqti',
      'Toza va soz holatdagi avtomobillar',
      '24/7 tezkor xizmat',
    ],
  },
  {
    id: 'comfort',
    name: 'Komfort+ Klass',
    badge: 'Eng Ommabop',
    startPrice: '16 000',
    perKm: '2 600',
    freeWait: '5 daqiqa',
    description: 'Konditsionerli, sokin va yangi avtomobillarda yuqori qulaylikdagi safarlar.',
    cars: 'Tracker 2, Onix, Gentra Elegant',
    isPopular: true,
    features: [
      'Boshlang\'ich: 16 000 so\'m (2 km)',
      'Har 1 km uchun: 2 600 so\'m',
      'Konditsioner, salfetkalar va Wi-Fi',
      '5 daqiqa bepul kutish',
      'Yuqori reytingli tajribali haydovchilar',
    ],
  },
  {
    id: 'business',
    name: 'Biznes VIP Klass',
    badge: 'Premium Servis',
    startPrice: '30 000',
    perKm: '4 500',
    freeWait: '10 daqiqa',
    description: 'Muhim biznes uchrashuvlar, hurmatli mehmonlar va tantanali tadbirlar uchun.',
    cars: 'Malibu 2, BYD Han / Song Plus, Kia K5',
    features: [
      'Boshlang\'ich: 30 000 so\'m (3 km)',
      'Har 1 km uchun: 4 500 so\'m',
      '10 daqiqa bepul kutish',
      'Ichimlik suvi, telefon zaryadlagichlari',
      'Eng elita haydovchilar va sokin muhit',
    ],
  },
  {
    id: 'delivery',
    name: 'Ekspress Kuryer',
    badge: 'Tezkor Yetkazish',
    startPrice: '12 000',
    perKm: '2 000',
    freeWait: '5 daqiqa',
    description: 'Muhim hujjatlar, posilkalar va sovg\'alarni kafolatli eshikkacha yetkazish.',
    cars: 'Tezkor shahar kuryerlari',
    features: [
      'Boshlang\'ich: 12 000 so\'m',
      'Har 1 km uchun: 2 000 so\'m',
      'Posilkani real vaqtda xaritada kuzatish',
      'Maxfiy SMS kod orqali topshirish',
      '100% yetkazib berish kafolati',
    ],
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'city-ride',
    iconName: 'Navigation',
    title: 'Shahar Ichida Tezkor Qatnov',
    subtitle: 'Tirbandliksiz optimal yo\'llar',
    description: 'Intellektual marshrutlash algoritmi orqali eng yaqin haydovchi 2-4 daqiqada siz tomon yo\'l oladi.',
  },
  {
    id: 'intercity',
    iconName: 'Route',
    title: 'Shaharlararo Qulay Qatnov',
    subtitle: 'Viloyatlararo to\'g\'ridan-to\'g\'ri',
    description: 'Toshkentdan barcha viloyat markazlariga qulay vaqtda, tekshirilgan haydovchilar bilan xavfsiz boring.',
  },
  {
    id: 'delivery',
    iconName: 'PackageCheck',
    title: 'Ekspress Posilka & Yetkazish',
    subtitle: 'Qo\'ldan-qo\'lga xavfsiz servis',
    description: 'Shoshilinch hujjatlar va qimmatbaho buyumlarni kafolatli va tez fursatda belgilangan manzilga yetkazamiz.',
  },
  {
    id: 'airport',
    iconName: 'PlaneTakeoff',
    title: 'Aeroport va Vokzal Transfer',
    subtitle: 'O\'z vaqtida kutib olish',
    description: 'Reys kechiksa ham kutib turuvchi, yuklaringizga yordamlashuvchi maxsus transfer xizmati.',
  },
  {
    id: 'safety-assist',
    iconName: 'ShieldAlert',
    title: 'Xavfsizlik va SOS Tizimi',
    subtitle: '24/7 jonli monitoring',
    description: 'Safar davomida marshrutni yaqinlaringizga ulashish va favqulodda yordam tugmasi mavjud.',
  },
  {
    id: 'corporate',
    iconName: 'Sparkles',
    title: 'Korporativ Biznes Hamkorlik',
    subtitle: 'Kompaniyalar uchun qulay yechim',
    description: 'Kompaniya xodimlari qatnovi uchun yagona hisob-faktura, shaffof hisobotlar va maxsus tariflar.',
  },
];

export const stepsData: StepItem[] = [
  {
    number: '01',
    title: 'Ilovani Oching va Manzilni Tanlang',
    description: 'Smartfon ilovasida yoki saytda boshlang\'ich va boradigan manzilni belgilang.',
    iconName: 'MapPin',
  },
  {
    number: '02',
    title: 'Qulay Tarifni Tanlang',
    description: 'Ekonom, Komfort+, Biznes yoki Kuryer toifalaridan birini tanlab, narxni oldindan ko\'ring.',
    iconName: 'Smartphone',
  },
  {
    number: '03',
    title: 'Mashina 3 Daqiqada Yetib Keladi',
    description: 'AI algoritmi eng yaqin haydovchini biriktiradi va mashina xaritada real vaqtda harakatlanadi.',
    iconName: 'Car',
  },
  {
    number: '04',
    title: 'Xavfsiz va Qulay Safardan Rohatlaning',
    description: 'Manzilga yetgach, to\'lovni naqd pul, Payme, Click yoki Humo/Uzcard orqali amalga oshiring.',
    iconName: 'Smile',
  },
];

export const regionsData: RegionData[] = [
  { id: 'tashkent', name: 'Toshkent shahri & viloyati', center: 'Toshkent', activeCars: 4200, avgArrival: '2.5 min', coords: { x: 74, y: 32 } },
  { id: 'samarkand', name: 'Samarqand viloyati', center: 'Samarqand', activeCars: 1850, avgArrival: '3.1 min', coords: { x: 55, y: 55 } },
  { id: 'bukhara', name: 'Buxoro viloyati', center: 'Buxoro', activeCars: 1200, avgArrival: '3.4 min', coords: { x: 42, y: 52 } },
  { id: 'fergana', name: 'Farg\'ona viloyati', center: 'Farg\'ona', activeCars: 1600, avgArrival: '2.9 min', coords: { x: 88, y: 44 } },
  { id: 'andijan', name: 'Andijon viloyati', center: 'Andijon', activeCars: 1450, avgArrival: '3.0 min', coords: { x: 93, y: 38 } },
  { id: 'namangan', name: 'Namangan viloyati', center: 'Namangan', activeCars: 1300, avgArrival: '3.2 min', coords: { x: 86, y: 33 } },
  { id: 'khorezm', name: 'Xorazm viloyati', center: 'Urganch', activeCars: 850, avgArrival: '3.8 min', coords: { x: 26, y: 36 } },
  { id: 'kashkadarya', name: 'Qashqadaryo viloyati', center: 'Qarshi', activeCars: 980, avgArrival: '3.6 min', coords: { x: 54, y: 70 } },
  { id: 'surkhandarya', name: 'Surxondaryo viloyati', center: 'Termiz', activeCars: 750, avgArrival: '4.0 min', coords: { x: 62, y: 84 } },
  { id: 'navoiy', name: 'Navoiy viloyati', center: 'Navoiy', activeCars: 700, avgArrival: '3.9 min', coords: { x: 47, y: 41 } },
  { id: 'jizzakh', name: 'Jizzax viloyati', center: 'Jizzax', activeCars: 620, avgArrival: '3.5 min', coords: { x: 64, y: 45 } },
  { id: 'syrdarya', name: 'Sirdaryo viloyati', center: 'Guliston', activeCars: 540, avgArrival: '3.7 min', coords: { x: 71, y: 40 } },
];

export const safetyData: SafetyItem[] = [
  {
    id: 's1',
    title: '100% Tekshirilgan Professional Haydovchilar',
    description: 'Har bir haydovchining shaxsiyati, haydovchilik guvohnomasi va sudlanmaganlik holati qat\'iy tekshiriladi.',
    tag: 'Tekshiruv',
  },
  {
    id: 's2',
    title: 'Real Vaqtli GPS va Sun\'iy Intellekt Nazorati',
    description: 'Har bir safar telemetriya orqali kuzatiladi, marshrut og\'ishlari va tezlik oshirilishi avtomatik aniqlanadi.',
    tag: 'Telemetriya',
  },
  {
    id: 's3',
    title: 'Jonli Marshrutni Yaqinlarga Ulashish',
    description: 'Safar boshlanganda bitta tugma orqali oila a\'zolaringizga jonli joylashuv havolasini yuborishingiz mumkin.',
    tag: 'Live Share',
  },
  {
    id: 's4',
    title: '24/7 Favqulodda SOS Himoya Tizimi',
    description: 'Ilovada doimiy faol SOS tugmasi orqali tezkor yordam xizmati va dispetcherlar bilan bir zumda bog\'lanish.',
    tag: 'SOS Himoya',
  },
];

export const faqData: FAQItem[] = [
  {
    id: 'faq1',
    category: 'Loyiha Haqida',
    question: 'Urgimchak Taxi loyihasining boshqa taksilardan qanday farqi bor?',
    answer: 'Urgimchak Taxi — bu shunchaki ilova emas, balki sun\'iy intellekt bilan ishlovchi yagona transport ekotizimidir. Biz tirbandliklarni 30% gacha kamaytiruvchi aqlli marshrutlash, 5% eng past haydovchi komissiyasi, yuqori xavfsizlik va butun O\'zbekistonni birlashtiruvchi viloyatlararo tarmoqni taqdim etamiz.',
  },
  {
    id: 'faq2',
    category: 'To\'lov',
    question: 'Platformada to\'lovlar qanday amalga oshiriladi?',
    answer: 'Foydalanuvchilar naqd pul, Humo, Uzcard, Visa, Mastercard hamda Payme, Click va shaxsiy ilova balansi orqali to\'lov qilishlari mumkin. Safar narxi boshidanoq aniq ko\'rsatiladi va hech qanday yashirin komissiyalar bo\'lmaydi.',
  },
  {
    id: 'faq3',
    category: 'Shaharlararo',
    question: 'Shaharlararo yo\'nalishlarda safar qilish qanday tashkil etilgan?',
    answer: 'Urgimchak Taxi orqali Toshkentdan Samarqand, Buxoro, Andijon, Farg\'ona va boshqa barcha viloyatlarga oldindan qulay vaqtga mashina bron qilish mumkin. Barcha mashinalar texnik ko\'rikdan o\'tgan va konditsioner bilan jihozlangan.',
  },
  {
    id: 'faq4',
    category: 'Haydovchilar',
    question: 'Haydovchilar uchun hamkorlik shartlari qanday?',
    answer: 'Urgimchak Taxi haydovchilardan eng past 5% komissiya oladi. Kunlik ishlangan mablag\' 24/7 istalgan vaqtda kartaga yechiladi, erkin ish grafigi va haftalik qo\'shimcha bonuslar mavjud.',
  },
  {
    id: 'faq5',
    category: 'Xavfsizlik',
    question: 'Yo\'lovchilar xavfsizligi qanday kafolatlanadi?',
    answer: 'Barcha safarlar GPS va AI telemetriya orqali doimiy monitoring qilinadi. Ilovada marshrutni yaqinlarga jonli ulashish va 24/7 ishlovchi SOS tugmasi mavjud. Shuningdek, 24/7 qo\'llab-quvvatlash markazimiz (+998 71 200-00-00) doim aloqada.',
  },
];
