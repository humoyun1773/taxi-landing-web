import React from 'react';
import { TaxiCheckerboard } from './ui/TaxiCheckerboard';

export const TaxiMarquee: React.FC = () => {
  return (
    <div className="taxi-marquee-section">
      <TaxiCheckerboard height={22} />
    </div>
  );
};
