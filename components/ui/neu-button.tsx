import React from 'react';
import { cn } from '@/lib/utils';

interface NeuButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  target?: string;
  rel?: string;
}

export const NeuButton = ({ 
  children, 
  variant = 'primary', 
  className,
  href,
  onClick,
  type = 'button',
  target,
  rel
}: NeuButtonProps) => {
  const baseStyles = "px-6 py-3 font-medium transition-all duration-150 text-[14px]";
  
  const variants = {
    primary: "bg-[#0ea5e9] text-white shadow-[3px_3px_0px_#0c4a6e] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]",
    outline: "bg-transparent text-white border-2 border-[#333] shadow-[3px_3px_0px_#333] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] hover:border-[#0ea5e9]"
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default NeuButton;
