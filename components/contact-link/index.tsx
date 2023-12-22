import React from "react";
import FormatPhoneNumber from "@/lib/auxilary/formatPhoneNumber";
type ContactLinkProps = {
  phoneNumber?: string;
};

const ContactLink = ({ phoneNumber }: ContactLinkProps) => {
  if (!phoneNumber) {
    phoneNumber = "1(877) 000-0000";
  }
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");
  return (
    <a
      className="text-gray-800 font-medium underline pl-2"
      href={`tel:${formattedPhoneNumber}`}
    >
      {<FormatPhoneNumber>{phoneNumber}</FormatPhoneNumber>}
    </a>
  );
};

export default ContactLink;
