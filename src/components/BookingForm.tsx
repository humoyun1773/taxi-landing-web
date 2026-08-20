import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { MapPin, Flag, Layers, Phone, Send, CheckCircle2, Sparkles, Clock } from 'lucide-react';
import { BookingFormData } from '../types';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    pickup: '',
    dropoff: '',
    tariff: 'comfort',
    phone: '',
    passengerCount: 1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const tariffRates: Record<string, { label: string; base: number; perKm: number; estKm: number }> = {
    eco: { label: 'Ekonom', base: 10000, perKm: 1800, estKm: 5 },
    comfort: { label: 'Komfort', base: 16000, perKm: 2600, estKm: 5 },
    business: { label: 'Biznes', base: 30000, perKm: 4500, estKm: 5 },
    delivery: { label: 'Kuryer', base: 12000, perKm: 2000, estKm: 5 },
  };

  const calculatePrice = () => {
    const rate = tariffRates[formData.tariff] || tariffRates.comfort;
    const est = rate.base + rate.perKm * rate.estKm;
    return new Intl.NumberFormat('uz-UZ').format(est) + " so'm";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#FBBF24', '#10B981', '#FFFFFF'],
      });
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      pickup: '',
      dropoff: '',
      tariff: 'comfort',
      phone: '',
      passengerCount: 1,
    });
    setSubmitted(false);
  };

  return (
    <div className="booking-box-container">
      <div className="booking-glow-border"></div>
      <div className="booking-box">
        <div className="box-header">
          <div className="header-title">
            <span className="live-indicator">
              <span className="pulse-ping"></span>
              <span className="pulse-dot"></span>
            </span>
            <h3>Tezkor Taksi Buyurtmasi</h3>
          </div>
          <span className="active-cars-badge">
            <Clock size={12} /> 2-3 daqiqada yetadi
          </span>
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="booking-success"
            >
              <div className="success-icon-wrapper">
                <CheckCircle2 size={42} className="success-icon" />
              </div>
              <h4>Buyurtma Muvaffaqiyatli Qabul Qilindi!</h4>
              <div className="success-route-card">
                <div className="route-row">
                  <span className="dot-origin"></span>
                  <span className="route-text">{formData.pickup}</span>
                </div>
                <div className="route-line"></div>
                <div className="route-row">
                  <span className="dot-dest"></span>
                  <span className="route-text">{formData.dropoff}</span>
                </div>
              </div>

              <div className="order-details-pills">
                <span className="pill">Tarif: {tariffRates[formData.tariff]?.label}</span>
                <span className="pill">Tel: {formData.phone}</span>
                <span className="pill price-pill">{calculatePrice()}</span>
              </div>

              <p className="success-sub">
                Haydovchi tayinlandi va zudlik bilan yo'lga chiqdi. SMS xabarnoma yuborildi.
              </p>

              <button onClick={handleReset} className="btn btn-outline btn-block" style={{ marginTop: '16px' }}>
                Yangi buyurtma berish
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="booking-form"
            >
              {/* Pickup Input */}
              <div className="input-group">
                <label htmlFor="pickup">
                  <MapPin size={15} className="input-icon origin" /> Qayerdan olasiz?
                </label>
                <div className="input-field-wrapper">
                  <input
                    id="pickup"
                    type="text"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    placeholder="Masalan: Chorsu bozori yoki Amir Temur xiyoboni"
                    required
                  />
                  <button
                    type="button"
                    className="locate-btn"
                    title="Mening joylashuvim"
                    onClick={() => setFormData((prev) => ({ ...prev, pickup: 'Hozirgi joylashuvim (GPS)' }))}
                  >
                    GPS
                  </button>
                </div>
              </div>

              {/* Dropoff Input */}
              <div className="input-group">
                <label htmlFor="dropoff">
                  <Flag size={15} className="input-icon dest" /> Qayerga borasiz?
                </label>
                <input
                  id="dropoff"
                  type="text"
                  name="dropoff"
                  value={formData.dropoff}
                  onChange={handleChange}
                  placeholder="Masalan: Toshkent Xalqaro Aeroporti"
                  required
                />
              </div>

              {/* Tariff & Options */}
              <div className="form-row-dual">
                <div className="input-group flex-1">
                  <label htmlFor="tariff">
                    <Layers size={15} className="input-icon" /> Tarif toifasi
                  </label>
                  <select id="tariff" name="tariff" value={formData.tariff} onChange={handleChange}>
                    <option value="eco">Ekonom (10 000 so'm)</option>
                    <option value="comfort">Komfort (16 000 so'm) ★</option>
                    <option value="business">Biznes (30 000 so'm)</option>
                    <option value="delivery">Kuryer (12 000 so'm)</option>
                  </select>
                </div>

                <div className="input-group flex-1">
                  <label htmlFor="phone">
                    <Phone size={15} className="input-icon" /> Telefon raqam
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+998 (90) 123-45-67"
                    required
                  />
                </div>
              </div>

              {/* Price Estimate Live Bar */}
              <div className="fare-estimate-card">
                <div className="fare-info">
                  <span className="fare-label">Taxminiy narx:</span>
                  <span className="fare-badge">Tirbandlik hisobga olingan</span>
                </div>
                <div className="fare-amount">{calculatePrice()}</div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-block submit-btn"
              >
                {isSubmitting ? (
                  <span className="loading-spinner"></span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Hozir Chaqirish</span>
                    <Sparkles size={16} className="btn-sparkle" />
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
