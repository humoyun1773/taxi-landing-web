import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { tariffsData } from '../data/mockData';
import { Check, Sparkles, CarFront } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export const Tariffs: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTariff, setSelectedTariff] = useState('comfort');

  return (
    <section className="tariffs section light-dark-bg" id="tariffs">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">{t('tariffs.subtitle')}</span>
          <h2>{t('tariffs.title')}</h2>
          <p>{t('tariffs.desc')}</p>
        </div>

        <div className="tariffs-grid">
          {tariffsData.map((tariff, idx) => {
            const isSelected = selectedTariff === tariff.id;
            return (
              <motion.div
                key={tariff.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedTariff(tariff.id)}
              >
                <Card
                  className={`shadcn-tariff-card relative cursor-pointer overflow-hidden ${
                    tariff.isPopular ? 'popular-card border-amber-500/50 shadow-lg' : ''
                  } ${isSelected ? 'ring-2 ring-amber-400 border-amber-400' : ''}`}
                >
                  {tariff.isPopular && (
                    <div className="popular-ribbon">
                      <Sparkles size={12} /> {t('tariffs.popular')}
                    </div>
                  )}

                  <CardHeader className="pb-3 pt-5 px-5">
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="text-lg font-bold">{tariff.name}</CardTitle>
                      <Badge variant="gold" className="text-[11px] py-0 px-2">
                        {tariff.cars.split(',')[0]}
                      </Badge>
                    </div>

                    <div className="tariff-price-wrap pt-2">
                      <span className="price-val text-2xl font-black">{tariff.startPrice}</span>
                      <span className="price-cur text-xs text-muted-foreground ml-1">
                        {t('tariffs.from')}
                      </span>
                    </div>

                    <CardDescription className="text-xs line-clamp-2 leading-relaxed pt-1">
                      {tariff.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-5 pb-5 pt-1">
                    <div className="shadcn-features-list space-y-2 border-t border-border/40 pt-3">
                      {tariff.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-secondary-foreground">
                          <div className="check-bullet shrink-0">
                            <Check size={12} />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}

                      <div className="flex items-center gap-2 text-xs text-secondary-foreground pt-1">
                        <div className="check-bullet car-bullet shrink-0">
                          <CarFront size={12} />
                        </div>
                        <span className="truncate font-medium">{tariff.cars}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
