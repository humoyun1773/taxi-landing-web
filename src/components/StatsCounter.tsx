import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { statsData } from '../data/mockData';
import { Users, Clock, Globe2, ShieldCheck } from 'lucide-react';

const statIcons = [Users, Clock, Globe2, ShieldCheck];

const AnimatedNumber: React.FC<{ value: number; decimals?: number; duration?: number }> = ({
  value,
  decimals = 0,
  duration = 1.6,
}) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = easeProgress * value;
      setCurrent(val);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCurrent(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {decimals > 0 ? current.toFixed(decimals) : Math.round(current).toLocaleString()}
    </span>
  );
};

export const StatsCounter: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="stat-card"
              >
                <div className="stat-icon-glow">
                  <Icon size={24} className="stat-icon" />
                </div>
                <div className="stat-number-wrapper">
                  <h3 className="stat-number">
                    <AnimatedNumber value={stat.value} decimals={stat.decimals} />
                    <span className="stat-suffix">{stat.suffix}</span>
                  </h3>
                </div>
                <h4 className="stat-label">{stat.label}</h4>
                <p className="stat-desc">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
