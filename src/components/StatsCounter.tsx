import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const StatsCounter: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const stats = [
    {
      id: 'stat1',
      icon: Users,
      value: 500,
      suffix: 'K+',
      label: t('stats.users'),
      description: t('stats.users_desc'),
    },
    {
      id: 'stat2',
      icon: Clock,
      value: 3,
      suffix: ' Min',
      label: t('stats.arrival'),
      description: t('stats.arrival_desc'),
    },
    {
      id: 'stat3',
      icon: MapPin,
      value: 12,
      suffix: '',
      label: t('stats.coverage'),
      description: t('stats.coverage_desc'),
    },
    {
      id: 'stat4',
      icon: ShieldCheck,
      value: 99.8,
      decimals: 1,
      suffix: '%',
      label: t('stats.safety'),
      description: t('stats.safety_desc'),
    },
  ];

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="stat-card"
            >
              <div className="stat-icon-glow">
                <stat.icon size={24} />
              </div>
              <div className="stat-number">
                <Counter target={stat.value} decimals={stat.decimals || 0} start={isInView} />
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-desc">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter: React.FC<{ target: number; decimals: number; start: boolean }> = ({
  target,
  decimals,
  start,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const duration = 1800;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeProgress * target;

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [start, target]);

  return <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}</span>;
};
