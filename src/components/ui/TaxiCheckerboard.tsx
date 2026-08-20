import React from 'react';

interface TaxiCheckerboardProps {
  className?: string;
  height?: number;
}

export const TaxiCheckerboard: React.FC<TaxiCheckerboardProps> = ({
  className = '',
  height = 24,
}) => {
  return (
    <div
      className={`taxi-checkerboard-wrapper ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    />
  );
};
