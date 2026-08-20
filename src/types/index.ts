export interface Tariff {
  id: string;
  name: string;
  pricePerMin: string;
  description: string;
  features: string[];
  cars: string;
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  iconName: 'Building2' | 'Navigation' | 'Package' | 'Plane';
  title: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  iconName: 'Clock' | 'UserCheck' | 'CreditCard';
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormData {
  pickup: string;
  dropoff: string;
  tariff: string;
  phone: string;
}
