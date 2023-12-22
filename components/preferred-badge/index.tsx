import React from "react";
import IconPreferredProvider from "@/components/icons/icon-preferred-provider";

export default function PreferedBadgeCard() {
  return (
    <div className="absolute px-2 pt-2 pb-1 bottom-0 start-4 bg-navy flex  rounded-t-lg items-center">
      <IconPreferredProvider width={25} height={25} className="pr-1" />
      <p
        className="text-highlight font-semibold text-xs px-1"
        style={{ lineHeight: "1.2" }}
      >
        Preferred Provider
      </p>
    </div>
  );
}

export function PreferedBadge() {
  return (
    <div className="prefered-badge bg-navy mt-auto flex max-w-fit rounded-lg items-center py-1 px-2 float-left mr-4">
      <IconPreferredProvider width={19} height={19} className="pr-1" />
      <span className="text-highlight font-bold text-xs font-montserrat">
        Preferred Provider
      </span>
    </div>
  );
}
