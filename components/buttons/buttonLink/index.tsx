import Link from "next/link";
import React from "react";

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  variant?: "primary" | "secondary";
}

const variantStyles = {
  primary: "bg-seafoam hover:bg-link text-background1",
  secondary: "bg-highlight hover:bg-background2 border border-navy text-primary",
};

function ButtonLink({ href = "#", text, className, variant = "primary", ...props }: ButtonLinkProps) {
  const combinedClassName = `${className || ""} px-8 py-2 text-sm leading-5 rounded-lg font-semibold w-full ease-in-out duration-700 ${variantStyles[variant]}`;

  return (
    <Link {...props} className={combinedClassName} href={href} passHref>
        <span className="flex align-middle items-center justify-center capitalize">{text}</span>
    </Link>
  );
}

export default ButtonLink;