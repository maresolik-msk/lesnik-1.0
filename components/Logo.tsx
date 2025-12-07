import React from 'react';

interface LogoProps {
  className?: string;
  fill?: string;
  stroke?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", fill = "currentColor", stroke = "none" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lesnik Logo"
    >
      {/* Organic Background Circle/Shape */}
      <path 
        d="M50 95C74.8528 95 95 74.8528 95 50C95 25.1472 74.8528 5 50 5C25.1472 5 5 25.1472 5 50C5 74.8528 25.1472 95 50 95Z" 
        fill={fill}
      />
      
      {/* Fern/Spiral Pattern - White Negative Space */}
      <path 
        d="M50 82C35 82 22 72 22 52C22 30 38 18 52 18C68 18 78 28 78 45C78 60 68 68 58 68C50 68 46 60 46 52C46 45 50 40 55 40C58 40 60 42 60 45" 
        stroke={stroke === "none" ? (fill === "#F9F7F3" ? "#4A5F4F" : "#F9F7F3") : stroke} 
        strokeWidth="6" 
        strokeLinecap="round"
      />
      
      {/* Decorative Tribal Diamonds */}
      <path d="M35 70L38 65L41 70L38 75L35 70Z" fill={stroke === "none" ? (fill === "#F9F7F3" ? "#4A5F4F" : "#F9F7F3") : stroke} />
      <path d="M50 28L53 23L56 28L53 33L50 28Z" fill={stroke === "none" ? (fill === "#F9F7F3" ? "#4A5F4F" : "#F9F7F3") : stroke} />
    </svg>
  );
};

export default Logo;