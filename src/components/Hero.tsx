import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ShieldCheck, Zap, ArrowRight, Play, Star, MapPin } from 'lucide-react';
import { BookingForm } from './BookingForm';

export const Hero: React.FC = () => {
  // Desktop Mouse Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end cinematic feel
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax transforms
  const taxiX = useTransform(smoothMouseX, [-500, 500], [-10, 10]);
  const taxiY = useTransform(smoothMouseY, [-500, 500], [-6, 6]);
  const card1X = useTransform(smoothMouseX, [-500, 500], [-14, 14]);
  const card1Y = useTransform(smoothMouseY, [-500, 500], [10, -10]);
  const card2X = useTransform(smoothMouseX, [-500, 500], [12, -12]);
  const card2Y = useTransform(smoothMouseY, [-500, 500], [-8, 8]);
  const bgGlowX = useTransform(smoothMouseX, [-500, 500], [-25, 25]);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section className="hero" id="home" onMouseMove={handleMouseMove}>
      {/* Dynamic Background Motion Elements */}
      <div className="hero-bg-network">
        <div className="spider-grid-overlay"></div>
        {/* Animated Yellow Light Trail (Looping speed effect) */}
        <div className="light-trail-container">
          <div className="light-trail trail-1"></div>
          <div className="light-trail trail-2"></div>
          <div className="light-trail trail-3"></div>
        </div>

        {/* Ambient Radial Glows */}
        <motion.div
          style={{ x: isDesktop ? bgGlowX : 0 }}
          className="hero-radial-glow primary-glow"
        ></motion.div>
        <div className="hero-radial-glow secondary-glow"></div>
      </div>

      <div className="container hero-container">
        {/* Left Column: Hero Typography & CTA */}
        <div className="hero-content">
          {/* Step 1: Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="badge hero-badge"
          >
            <Zap size={14} className="badge-zap" />
            <span>O'zbekiston Bo'ylab №1 Intellektual Taksi Tizimi</span>
          </motion.div>

          {/* Step 2: Line-based Headline Reveal */}
          <div className="hero-title-wrapper">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title"
            >
              Manzilingizga <br />
              <span className="gradient-text-yellow">Tezkor, Xavfsiz</span> <br />
              Yetib Boring.
            </motion.h1>
          </div>

          {/* Step 3: Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="hero-desc"
          >
            Urgimchak Taxi sun'iy intellekt orqali eng maqbul yo'llarni tanlaydi, avtomobil 3 daqiqada eshigingiz oldida bo'ladi va shaffof narxlarda xizmat ko'rsatadi.
          </motion.p>

          {/* Step 4: CTA Buttons & Micro-interactions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="hero-buttons"
          >
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary magnetic-btn"
            >
              <span>Hozir Buyurtma Berish</span>
              <ArrowRight size={18} className="btn-arrow-motion" />
            </motion.a>

            <motion.a
              href="#app"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-glass"
            >
              <Play size={16} />
              <span>Ilovani Yuklab Olish</span>
            </motion.a>
          </motion.div>

          {/* Live Trust Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="hero-trust-bar"
          >
            <div className="avatar-group">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Mijoz fikri" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Mijoz fikri" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="Mijoz fikri" />
              <div className="avatar-count">+500K</div>
            </div>
            <div className="trust-info">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
                <span className="rating-num">4.9 / 5.0</span>
              </div>
              <p>500 000 dan ortiq mamnun yo'lovchilar</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Hero Visual & Interactive Booking */}
        <div className="hero-visual-column">
          {/* Step 5: Taxi Visual with Scale Breathing & 3D Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              x: isDesktop ? taxiX : 0,
              y: isDesktop ? taxiY : 0,
            }}
            className="hero-taxi-presentation"
          >
            {/* Ambient Taxi Car Card */}
            <div className="taxi-glow-backdrop"></div>

            {/* Step 6: Floating UI Cards */}
            <motion.div
              style={{
                x: isDesktop ? card1X : 0,
                y: isDesktop ? card1Y : 0,
              }}
              className="floating-badge-card float-top-left"
            >
              <div className="card-icon-pulse">
                <ShieldCheck size={20} className="text-amber" />
              </div>
              <div>
                <strong>100% Xavfsiz</strong>
                <p>AI Nazorati & SOS</p>
              </div>
            </motion.div>

            <motion.div
              style={{
                x: isDesktop ? card2X : 0,
                y: isDesktop ? card2Y : 0,
              }}
              className="floating-badge-card float-bottom-right"
            >
              <div className="card-icon-pulse arrival">
                <MapPin size={20} className="text-emerald" />
              </div>
              <div>
                <strong>3 Daqiqada</strong>
                <p>O'rtacha yetib kelish</p>
              </div>
            </motion.div>

            {/* Booking Form Widget Embedded in Hero */}
            <div id="booking">
              <BookingForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
