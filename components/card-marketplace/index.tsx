import Image from "next/image";
import React from "react";
import ButtonLink from "@/components/buttons/buttonLink";

type ServiceT = {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imageDescription: string;
  textButton: string;
};
const CardMarketplace = ({
  title,
  subtitle,
  description,
  imageUrl,
  imageDescription,
  textButton,
}: ServiceT) => {
  return (
    <div className="w-full p-6 flex flex-col md:flex-row md:items-center bg-white border border-gray-200 md:max-w-none rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="ml-6 md:ml-0 w-full">
        <Image
          className="w-52 "
          src={imageUrl}
          alt={imageDescription}
          width={200}
          height={165}
        />
      </div>
      <div className="mt-4 md:mt-0  md:ml-4">
        <div className="font-semibold">
          <h5 className="text-4xl md:text-2xl mb-0">{title}</h5>
          <p className="text-sm pb-3">{subtitle}</p>
        </div>
        <p className="md:text-sm pb-3">{description}</p>
        <div className="mt-2 flex gap-4 md:flex-row">
          <ButtonLink text={textButton} href="#" variant="secondary" />
        </div>
      </div>
    </div>
  );
};

export default CardMarketplace;
