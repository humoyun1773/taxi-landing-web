import { Tariff, ServiceItem, FeatureItem, FAQItem } from '../types';

export const tariffsData: Tariff[] = [
  {
    id: 'standard',
    name: 'Standart',
    pricePerMin: '12 000 so\'m',
    description: 'Kundalik qisqa sayohatlar uchun qulay va tejamkor tanlov',
    features: [
      'Boshlang\'ich narx: 12 000 so\'m (2 km)',
      'Har 1 km uchun: 2 000 so\'m',
      'Kutish vaqti: 3 daqiqa bepul',
    ],
    cars: 'Cobalt, Nexia 3, Gentra',
  },
  {
    id: 'comfort',
    name: 'Komfort',
    pricePerMin: '18 000 so\'m',
    description: 'Konditsionerli va zamonaviy yangi avtomobillar',
    features: [
      'Boshlang\'ich narx: 18 000 so\'m (2 km)',
      'Har 1 km uchun: 2 800 so\'m',
      'Kutish vaqti: 5 daqiqa bepul',
    ],
    cars: 'Tracker 2, Onix, Kia K5',
    isPopular: true,
  },
  {
    id: 'business',
    name: 'Biznes',
    pricePerMin: '30 000 so\'m',
    description: 'Biznes uchrashuvlar va maxsus mehmonlar uchun premium servis',
    features: [
      'Boshlang\'ich narx: 30 000 so\'m (3 km)',
      'Har 1 km uchun: 4 500 so\'m',
      'Kutish vaqti: 10 daqiqa bepul',
    ],
    cars: 'Malibu 2, BYD Han, Mercedes-Benz',
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'city',
    iconName: 'Building2',
    title: 'Shahar ichida qatnov',
    description: 'Tirbandlikda vaqt yo\'qotmang. Tezkor marshrutlar orqali manzilingizga o\'z vaqtida yetib boring.',
  },
  {
    id: 'intercity',
    iconName: 'Navigation',
    title: 'Shaharlararo qatnov',
    description: 'Viloyatlar va shaharlar o\'rtasida qulay, xavfsiz va arzon narxlarda sayohat qiling.',
  },
  {
    id: 'delivery',
    iconName: 'Package',
    title: 'Kuryerlik va Yetkazish',
    description: 'Hujjatlar, posilkalar va sovg\'alarni bir manzildan ikkinchisiga eshikkacha yetkazib beramiz.',
  },
  {
    id: 'airport',
    iconName: 'Plane',
    title: 'Aeroport transfer',
    description: 'Aeroport yoki vokzaldan kutib olish va kuzatib qo\'yish uchun oldindan buyurtma xizmati.',
  },
];

export const featuresData: FeatureItem[] = [
  {
    id: 'f1',
    iconName: 'Clock',
    title: '24/7 Uzluksiz xizmat',
    description: 'Kunning istalgan vaqtida tezkor buyurtma bering, avtomobil bir necha daqiqada yetib boradi.',
  },
  {
    id: 'f2',
    iconName: 'UserCheck',
    title: 'Tajribali haydovchilar',
    description: 'Barcha haydovchilarimiz qat\'iy tekshiruvdan va maxsus tayyorgarlikdan o\'tgan.',
  },
  {
    id: 'f3',
    iconName: 'CreditCard',
    title: 'Oson to\'lov usullari',
    description: 'Naqd pul, Uzcard, Humo, Visa va ilova orqali bir bosishda to\'lov qiling.',
  },
];

export const faqData: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Taksi necha daqiqada yetib keladi?',
    answer: 'Odatda shahar markazida avtomobil 2-5 daqiqa ichida yetib keladi. Qatnov tig\'iz vaqtlarda ham yaqin atrofdagi eng maqbul haydovchi darhol yo\'naltiriladi.',
  },
  {
    id: 'faq2',
    question: 'To\'lovni qanday usullarda amalga oshirish mumkin?',
    answer: 'Siz to\'lovni naqd pulda, Uzcard, Humo, Visa kartalari hamda Payme, Click yoki to\'g\'ridan-to\'g\'ri mobil ilovamiz balansi orqali amalga oshirishingiz mumkin.',
  },
  {
    id: 'faq3',
    question: 'Shaharlararo taksi buyurtma qilsa bo\'ladimi?',
    answer: 'Ha, albatta! Siz Samarqand, Buxoro, Andijon, Farg\'ona va O\'zbekistonning boshqa viloyatlariga oldindan yoki hoziroq taksi chaqirishingiz mumkin.',
  },
  {
    id: 'faq4',
    question: 'Haydovchi sifatida qanday ro\'yxatdan o\'tish mumkin?',
    answer: 'Bizning saytimiz orqali yoki operatorimizga telefon qilib (yoki ilovani yuklab olib "Haydovchi bo\'lish" bo\'limi orqali) 10 daqiqa ichida ro\'yxatdan o\'tishingiz mumkin.',
  },
];
