import React from "react";

type infoRowT = {
  label?: string;
  value: string;
  variant?: "small" | "medium" | "large";
};

const variantStyles = {
  small: "text-sm",
  medium: "text-md",
  large: "text-lg",
};

const InfoRow = ({ label, value, variant = "small" }: infoRowT) => {
  return (
    <div className="flex justify-between pb-2 sm:justify-center sm:pb-0">
      <p>{label}</p>
      <p className={`${variantStyles[variant]} text-link`}>{value}</p>
    </div>
  );
};

export default InfoRow;
