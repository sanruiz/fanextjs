import React from "react";
import PreferedBadge from "@/components/preferred-badge";
import Image from "next/image";

type TableCellT = {
  data: {
    name: string;
    isPreferredBadge: boolean;
    image: string;
  }[];
};

const PreferredBadgeImage: React.FC<TableCellT> = ({ data }) => {
  return (
    <React.Fragment>
      {data.map((item, index) => (
        <td
          key={item.name + index}
          className="relative h-56 whitespace-normal pr-5 pt-6"
        >
          {item.isPreferredBadge && <PreferedBadge />}
          <Image
            src={item.image}
            alt="house image"
            width={500}
            height={500}
            className={"w-full h-full px-1"}
          />
        </td>
      ))}
    </React.Fragment>
  );
};

export default PreferredBadgeImage;
