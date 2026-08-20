import { Tariff, ServiceItem, StepItem, RegionData, SafetyItem, StatItem, FAQItem } from '../types';

export const statsData: StatItem[] = [
  {
    id: 'stat1',
    value: 500,
    suffix: 'K+',
    label: 'Faol Foydalanuvchilar',
    description: 'Har oy Urgimchak Taxi bilan safar qiluvchilar',
  },
  {
    id: 'stat2',
    value: 3,
    suffix: ' Min',
    label: 'O\'rtacha Kelish Vaqti',
    description: 'Shaharning istalgan nuqtasida tezkor mashina',
  },
  {
    id: 'stat3',
    value: 12,
    suffix: ' Viloyat',
    label: 'Qamrov Hududi',
    description: 'Butun O\'zbekiston bo\'ylab uzluksiz tarmoq',
  },
  {
    id: 'stat4',
    value: 99.4,
    suffix: '%',
    decimals: 1,
    label: 'Xavfsiz Qatnovlar',
    description: 'Yuqori xavfsizlik va nazorat kafolati',
  },
];

export const tariffsData: Tariff[] = [
  {
    id: 'eco',
    name: 'Ekonom',
    badge: 'Hamyonbop',
    startPrice: '10 000',
    perKm: '1 800',
    freeWait: '3 daqiqa',
    description: 'Shahar bo\'ylab kundalik qisqa va qulay safarlar uchun eng tejamkor variant.',
    cars: 'Cobalt, Nexia 3, Spark',
    features: [
      'Boshlang\'ich: 10 000 so\'m (1.5 km)',
      'Har 1 km uchun: 1 800 so\'m',
      '3 daqiqa bepul kutish',
      '24/7 tezkor xizmat',
    ],
  },
  {
    id: 'comfort',
    name: 'Komfort',
    badge: 'Eng Mashhur',
    startPrice: '16 000',
    perKm: '2 600',
    freeWait: '5 daqiqa',
    description: 'Konditsionerli, toza va yumshoq yurishga ega zamonaviy yangi avtomobillar.',
    cars: 'Tracker 2, Onix, Gentra Elegant',
    isPopular: true,
    features: [
      'Boshlang\'ich: 16 000 so\'m (2 km)',
      'Har 1 km uchun: 2 600 so\'m',
      'Konditsioner & Wi-Fi',
      '5 daqiqa bepul kutish',
      'Tajribali va muloyim haydovchilar',
    ],
  },
  {
    id: 'business',
    name: 'Biznes & Premium',
    badge: 'Yuqori Klass',
    startPrice: '30 000',
    perKm: '4 500',
    freeWait: '10 daqiqa',
    description: 'Muhim biznes uchrashuvlar, hurmatli mehmonlar va maxsus tadbirlar uchun.',
    cars: 'Malibu 2, BYD Han / Song Plus, Kia K5',
    features: [
      'Boshlang\'ich: 30 000 so\'m (3 km)',
      'Har 1 km uchun: 4 500 so\'m',
      '10 daqiqa bepul kutish',
      'Suv, zaryadlovchi va sokin muhit',
      'Eng yuqori reytingli haydovchilar',
    ],
  },
  {
    id: 'delivery',
    name: 'Ekspress Kuryer',
    badge: 'Eshikkacha',
    startPrice: '12 000',
    perKm: '2 000',
    freeWait: '5 daqiqa',
    description: 'Hujjatlar, posilkalar, taomlar va sovg\'alarni xavfsiz va tezkor yetkazib berish.',
    cars: 'Barcha toifadagi transport',
    features: [
      'Boshlang\'ich: 12 000 so\'m',
      'Har 1 km uchun: 2 000 so\'m',
      'Posilkani real vaqtda kuzatish',
      'Fotohisobot va kod orqali topshirish',
    ],
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'city-ride',
    iconName: 'Navigation',
    title: 'Shahar Ichida Tezkor Qatnov',
    subtitle: 'Tirbandliksiz optimal yo\'llar',
    description: 'Intellektual marshrutlash algoritmi orqali eng yaqin haydovchi 2-4 daqiqada yetib keladi.',
  },
  {
    id: 'intercity',
    iconName: 'Route',
    title: 'Shaharlararo Qulay Qatnov',
    subtitle: 'Viloyatlararo to\'g\'ridan-to\'g\'ri',
    description: 'Toshkentdan barcha viloyat markazlariga va qaytishga ishonchli, tekshirilgan haydovchilar bilan boring.',
  },
  {
    id: 'delivery',
    iconName: 'PackageCheck',
    title: 'Ekspress Posilka & Yetkazish',
    subtitle: 'Qo\'ldan-qo\'lga xavfsiz servis',
    description: 'Shoshilinch hujjatlar va qimmatbaho buyumlarni kafolatli va tez fursatda manzilga yetkazamiz.',
  },
  {
    id: 'airport',
    iconName: 'PlaneTakeoff',
    title: 'Aeroport va Vokzal Transfer',
    subtitle: 'O\'z vaqtida kutib olish',
    description: 'Reys kechiksa ham kutib turuvchi, bagajga yordamlashuvchi maxsus transfer xizmati.',
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
    title: 'Korporativ Mijozlar Uchun',
    subtitle: 'Kompaniyalar uchun qulay yechim',
    description: 'Xodimlar qatnovi uchun yagona hisob-faktura, shaffof hisobotlar va korporativ chegirmalar.',
  },
];

export const stepsData: StepItem[] = [
  {
    number: '01',
    title: 'Manzilni Belgilang',
    description: 'Ilovada yoki saytda hozirgi joylashuv va boradigan manzilni kiriting.',
    iconName: 'MapPin',
  },
  {
    number: '02',
    title: 'Tarifni Tanlang',
    description: 'Ekonom, Komfort yoki Biznes toifalaridan o\'zingizga mosini tanlang va narxni oldindan ko\'ring.',
    iconName: 'Smartphone',
  },
  {
    number: '03',
    title: 'Mashina 3 Daqiqada Yetib Keladi',
    description: 'Eng yaqin tajribali haydovchi qabul qiladi va xaritada real vaqtda harakatlanadi.',
    iconName: 'Car',
  },
  {
    number: '04',
    title: 'Qulay va Xavfsiz Safar',
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
    title: '100% Tekshirilgan Haydovchilar',
    description: 'Har bir haydovchining shaxsiyati, haydovchilik guvohnomasi va sudlanmaganlik holati tekshiriladi.',
    tag: 'Tekshiruv',
  },
  {
    id: 's2',
    title: 'Real Vaqt GPS Nazorati',
    description: 'Har bir safar sun\'iy intellekt nazorati ostida amalga oshiriladi va marshrut og\'ishlari aniqlanadi.',
    tag: 'Telemetriya',
  },
  {
    id: 's3',
    title: 'Marshrutni Yaqinlarga Ulashish',
    description: 'Safar boshlanganda bitta tugma orqali oila a\'zolaringizga jonli joylashuv havolasini yuborishingiz mumkin.',
    tag: 'Live Share',
  },
  {
    id: 's4',
    title: '24/7 Favqulodda SOS Tugmasi',
    description: 'Ilovada doimiy faol SOS tugmasi orqali tezkor yordam xizmati va dispetcherga xabar yuboriladi.',
    tag: 'SOS Himoya',
  },
];

export const faqData: FAQItem[] = [
  {
    id: 'faq1',
    category: 'Buyurtma',
    question: 'Taksi necha daqiqada yetib keladi va qanday hisoblanadi?',
    answer: 'Urgimchak Taxi sun\'iy intellektli taqsimlash tizimi orqali buyurtma qabul qilingan zahoti eng yaqin haydovchiga yo\'naltiriladi. O\'rtacha yetib kelish vaqti 2-4 daqiqani tashkil etadi.',
  },
  {
    id: 'faq2',
    category: 'To\'lov',
    question: 'Qanday to\'lov turlari mavjud va kartadan avtomatik yechiladimi?',
    answer: 'Siz to\'lovni naqd pul, Humo, Uzcard, Visa, Mastercard, shuningdek Payme, Click va ilovadagi shaxsiy balans orqali amalga oshirishingiz mumkin. Karta bog\'langan bo\'lsa, safar yakunida to\'lov xavfsiz tarzda avtomatik yechiladi.',
  },
  {
    id: 'faq3',
    category: 'Shaharlararo',
    question: 'Shaharlararo qatnov uchun oldindan bron qilsa bo\'ladimi?',
    answer: 'Ha, albatta! Siz istalgan vaqtga oldindan Toshkentdan Samarqand, Buxoro, Farg\'ona, Andijon va boshqa barcha viloyatlarga qulay vaqt uchun buyurtma berishingiz mumkin.',
  },
  {
    id: 'faq4',
    category: 'Haydovchilar',
    question: 'Haydovchi sifatida ishlash uchun qanday talablar mavjud?',
    answer: 'Urgimchak Taxi haydovchisi bo\'lish uchun kamida 2 yillik haydovchilik staji, texnik soz holatdagi avtomobil va smartfon kerak bo\'ladi. Ro\'yxatdan o\'tish 10 daqiqa vaqt oladi va komissiya atigi 5% ni tashkil qiladi.',
  },
  {
    id: 'faq5',
    category: 'Xavfsizlik',
    question: 'Mashinada biror buyumni unutib qoldirsam nima qilishim kerak?',
    answer: 'Ilova ichidagi safarlar tarixidan to\'g\'ridan-to\'g\'ri haydovchi bilan bog\'lanishingiz yoki 24/7 qo\'llab-quvvatlash markazimiz (+998 71 200-00-00) orqali xabar berishingiz mumkin. Buyumingiz zudlik bilan qaytariladi.',
  },
];
