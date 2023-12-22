import React from "react";

interface FormattedPriceProps {
  children: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export default function FormattedPrice({
  children: price = 0,
  ...props
}: FormattedPriceProps) {
  // Format the price
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(typeof price === "number" ? price : parseFloat(price.toString()));

  return <span {...props}>{formattedPrice}</span>;
}
