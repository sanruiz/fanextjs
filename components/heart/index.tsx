import React from "react";

import "./heart.styles.css";
type HeartProps = {
  size: HeartSize;
  children: React.ReactNode;
  variant?: 'bgBlue';
};
type HeartSize = "small" | "medium" | "large";

export default function Heart({ size, variant, children }: HeartProps) {
  return (
    <div className={`heart-${size} ${variant && variant}`}>
      <span className="font-montserrat">{children}</span>
    </div>
  );
}
