// Generated with Ion on 2/19/2024, 9:26:36 AM
// Figma Link: https://www.figma.com/file/LncZWxVTpD4svqEUVk63pC?node-id=3149:176
import React, { useState, useEffect } from 'react';

type TremorLineProps = {
  count?: "3" | "1" | "2" | "4" | "5";
  className?: string;
};

function TremorLine({ count = "1", className = "" }: TremorLineProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation after component mounts
    setIsMounted(true);
  }, []);

  const styles: React.CSSProperties = {
    opacity: isMounted ? 1 : 0,
    transition: 'opacity 0.8s ease-in-out, transform 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    cursor: 'pointer',
    display: 'inline-block',
  };

  return (
    <img
      src={`imgsrc|3149:177|count=${count}`}
      alt={`count=${count}`}
      className={className}
      style={styles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
}

export default TremorLine;