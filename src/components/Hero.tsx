import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Zap, ArrowRight, Star, ShieldCheck, MapPin, Clock, Navigation, Award, Layers, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 140 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const carParallaxX = useTransform(smoothMouseX, [-500, 500], [-12, 12]);
  const carParallaxY = useTransform(smoothMouseY, [-500, 500], [-8, 8]);

  const [isDesktop, setIsDesktop] = useState(true);

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
      {/* Ambient Lighting, Road Trails & Cinematic Background Car Glow */}
      <div className="hero-bg-network">
        <div className="hero-radial-glow primary-glow"></div>
        <div className="hero-radial-glow secondary-glow"></div>
        <div className="hero-car-bg-ambient"></div>
        <div className="light-trail-container">
          <div className="light-trail trail-1"></div>
          <div className="light-trail trail-2"></div>
          <div className="light-trail trail-3"></div>
        </div>
      </div>

      <div className="container hero-container">
        {/* Left Column: Premium Typography & Project CTAs */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hero-badge"
          >
            <Zap size={14} />
            <span>O'zbekiston Bo'ylab №1 Intellektual Taksi Ekotizimi</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title"
          >
            Yangi Avlod <br />
            Taksi Platformasi — <br />
            <span className="gradient-text-gold">Urgimchak Taxi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="hero-desc"
          >
            Sun'iy intellekt asosida ishlovchi aqlli marshrutlash, 100% xavfsiz safarlar va butun O'zbekistonni birlashtiruvchi yagona zamonaviy transport ekotizimi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hero-buttons"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary"
            >
              <span>Loyiha Bilan Tanishish</span>
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href="#tech"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-glass"
            >
              <Layers size={16} />
              <span>Texnologiyalar</span>
            </motion.a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
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
                  <Star key={i} size={14} fill="#FACC15" color="#FACC15" />
                ))}
                <span className="rating-num">4.9 / 5.0</span>
              </div>
              <p>500 000 dan ortiq mamnun yo'lovchilar va haydovchilar</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Premium Fleet & Cinematic Car Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hero-visual-column"
        >
          <div className="hero-showcase-card">
            {/* Cinematic Luxury Taxi Car Frame with Glowing Aura */}
            <motion.div
              style={{ x: carParallaxX, y: carParallaxY }}
              className="hero-car-image-box"
            >
              <div className="car-image-overlay-gradient"></div>
              <img
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=85"
                alt="Urgimchak Taxi Luxury Fleet"
                className="hero-car-img"
              />
              
              <div className="car-overlay-badge">
                <Sparkles size={14} style={{ display: 'inline', marginRight: 4 }} />
                Premium VIP Ekotizim
              </div>

              <div className="car-overlay-arrival">
                <Clock size={14} />
                ~3 daqiqada yetib kelish
              </div>

              <div className="car-bottom-glow-strip"></div>
            </motion.div>

            {/* Tech Feature Highlights Bento Grid */}
            <div className="hero-tech-pills-grid">
              <div className="hero-pill-item">
                <div className="hero-pill-icon-wrap gold">
                  <Navigation size={18} />
                </div>
                <div>
                  <strong>Intellektual Marshrut</strong>
                  <span>Tirbandlikni chetlab o'tish</span>
                </div>
              </div>

              <div className="hero-pill-item">
                <div className="hero-pill-icon-wrap green">
                  <MapPin size={18} />
                </div>
                <div>
                  <strong>12 Viloyat Qamrovi</strong>
                  <span>Shaharlararo qulay safarlar</span>
                </div>
              </div>

              <div className="hero-pill-item">
                <div className="hero-pill-icon-wrap gold">
                  <Award size={18} />
                </div>
                <div>
                  <strong>5% Eng Past Komissiya</strong>
                  <span>Haydovchilar uchun qulay shart</span>
                </div>
              </div>

              <div className="hero-pill-item">
                <div className="hero-pill-icon-wrap green">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <strong>100% Xavfsizlik & SOS</strong>
                  <span>24/7 jonli telemetriya</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
