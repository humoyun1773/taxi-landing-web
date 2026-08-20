export interface Tariff {
  id: string;
  name: string;
  badge?: string;
  startPrice: string;
  perKm: string;
  freeWait: string;
  description: string;
  cars: string;
  features: string[];
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  iconName: 'Navigation' | 'Route' | 'PackageCheck' | 'PlaneTakeoff' | 'ShieldAlert' | 'Sparkles';
  title: string;
  subtitle: string;
  description: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  iconName: 'Smartphone' | 'MapPin' | 'Car' | 'Smile';
}

export interface RegionData {
  id: string;
  name: string;
  center: string;
  activeCars: number;
  avgArrival: string;
  coords: { x: number; y: number };
}

export interface SafetyItem {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TechPillar {
  id: string;
  iconName: 'Cpu' | 'Zap' | 'Shield' | 'Globe' | 'Compass' | 'Layers';
  title: string;
  description: string;
}
