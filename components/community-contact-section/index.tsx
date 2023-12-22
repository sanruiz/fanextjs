import React from "react";
import ContactLink from "@/components/contact-link";

type CommunityContactSectionProps = {
  text: string;
  phone?: string;
};
const CommunityContactSection = ({
  text,
  phone,
}: CommunityContactSectionProps) => {
  return (
    <section className="text-base font-light pb-4">
      <p>
        {text}
        <ContactLink phoneNumber={phone} />
      </p>
    </section>
  );
};

export default CommunityContactSection;
