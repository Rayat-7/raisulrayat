import React from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  children, 
  delay = 0, 
  className = "" 
}) => {
  return (
    <div 
      className={`animate-slide-down ${className}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedText;