import React from 'react';
import '../styles/GlowingButton.css';

interface GlowingButtonProps {
  onClick: () => void;
  className?: string;
}

export default function GlowingButton({ onClick, className = '' }: GlowingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`glowing-button ${className}`}
      aria-label="Learn why outsourcing makes sense"
    >
      Why Outsourcing Makes Sense
    </button>
  );
}