import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`relative inline-block bg-clip-text ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        color: "transparent",
        backgroundImage:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.2) 100%)",
        backgroundSize: "200% 100%",
        animationDuration: animationDuration,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
