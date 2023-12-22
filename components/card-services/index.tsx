import Image from "next/image";
import React from "react";
import ButtonLink from '@/components/buttons/buttonLink';

type ServiceT = {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageMobile?: string;
};

const ServiceCard = ({
  title,
  subtitle,
  description,
  imageUrl,
  imageMobile,
}: ServiceT) => {
  return (
    <div className="p-5 flex flex-col md:flex-row md:max-h-52 md:items-center bg-white border border-gray-200 rounded-lg shadow-md">
      <Image
        className="hidden md:block md:pb-16 mx-3"
        src={imageUrl}
        alt={`image ${title}`}
        width={60}
        height={60}
      />

      <div className="md:hidden pl-4">
        <Image
          src={imageMobile || imageUrl}
          alt={`image ${title}`}
          width={80}
          height={80}
        />
      </div>
      <div className="px-4">
        <div>
          <h5 className="text-3xl md:text-xl font-bold mb-0">{title}</h5>
          <p className="text-md md:text-xs font-bold pb-3">{subtitle}</p>
        </div>
        <p className="text-md md:text-sm mb-3">{description}</p>
        <div className="mt-2 flex gap-4 md:flex-row md:w-56">
          <ButtonLink href="#" text={"Find Out More"} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
