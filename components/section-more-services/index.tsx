import React from "react";
import ServiceCard from '@/components/card-services';
import { DATA_SERVICES_CARD } from "./utils";

export default function SectionMoreServices() {
  const mobileServices = DATA_SERVICES_CARD.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl md:text-2xl font-bold m-0">
        Explore more services that match your needs.
      </h2>
      <p className="text-xl md:text-base pb-8">
        Based on what you’ve told us, we’ve selected services from us and our
        partners that you might find helpful.
      </p>
      <div className="flex flex-wrap">
        {mobileServices.map((service, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 pb-4 flex flex-col"
          >
            <ServiceCard key={index} {...service} />
          </div>
        ))}

        {DATA_SERVICES_CARD.map((service, index) => (
          <div
            key={index}
            className="hidden md:block md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 pb-4"
          >
            <ServiceCard key={index} {...service} />
          </div>
        ))}
      </div>
    </div>
  );
}
