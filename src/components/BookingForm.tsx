import React, { useState } from 'react';
import { MapPin, Flag, Layers, Phone, Send, CheckCircle2 } from 'lucide-react';
import { BookingFormData } from '../types';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    pickup: '',
    dropoff: '',
    tariff: 'standard',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const tariffPrices: Record<string, string> = {
    standard: '15 000 so\'m',
    comfort: '22 000 so\'m',
    business: '38 000 so\'m',
    delivery: '12 000 so\'m',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      pickup: '',
      dropoff: '',
      tariff: 'standard',
      phone: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="booking-box">
      <div className="box-header">
        <h3>Tezkor Buyurtma</h3>
        <span className="pulse-dot"></span>
      </div>

      {submitted ? (
        <div className="booking-success">
          <CheckCircle2 size={48} className="success-icon" />
          <h4>Buyurtmangiz qabul qilindi!</h4>
          <p>
            <strong>{formData.pickup}</strong> dan <strong>{formData.dropoff}</strong> ga.
          </p>
          <p className="success-sub">
            Haydovchi 2-3 daqiqa ichida siz bilan (<strong>{formData.phone}</strong>) bog'lanadi.
          </p>
          <button onClick={handleReset} className="btn btn-primary btn-block" style={{ marginTop: '16px' }}>
            Yangi buyurtma
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="input-group">
            <label>
              <MapPin size={16} /> Qayerdan
            </label>
            <input
              type="text"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              placeholder="Masalan: Chorsu bozori"
              required
            />
          </div>

          <div className="input-group">
            <label>
              <Flag size={16} /> Qayerga
            </label>
            <input
              type="text"
              name="dropoff"
              value={formData.dropoff}
              onChange={handleChange}
              placeholder="Masalan: Toshkent City"
              required
            />
          </div>

          <div className="input-group">
            <label>
              <Layers size={16} /> Tarif turi
            </label>
            <select name="tariff" value={formData.tariff} onChange={handleChange}>
              <option value="standard">Standart (12 000 so'mdan)</option>
              <option value="comfort">Komfort (18 000 so'mdan)</option>
              <option value="business">Biznes (30 000 so'mdan)</option>
              <option value="delivery">Yetkazib berish (10 000 so'mdan)</option>
            </select>
          </div>

          <div className="input-group">
            <label>
              <Phone size={16} /> Telefon raqamingiz
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+998 (90) 123-45-67"
              required
            />
          </div>

          <div className="fare-estimate">
            <span>Taxminiy narx:</span>
            <strong>{tariffPrices[formData.tariff]}</strong>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            <Send size={18} /> Buyurtma berish
          </button>
        </form>
      )}
    </div>
  );
};
