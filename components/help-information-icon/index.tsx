import React from "react";
import InfoCircle from "@/components/icons/info-circle";

type HelpInformationIconT = {
  text: string;
};

export default function HelpInformationIcon({ text }: HelpInformationIconT) {
  return (
    <div className="relative flex flex-col items-center group">
      <InfoCircle />
      <div className="absolute bottom-0 z-10 flex-col items-center hidden mb-6 group-hover:flex">
        <span className="relative z-10 p-2 text-xs w-56 leading-1 text-white whitespace-no-wrap bg-black shadow-lg">
          {text}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
      </div>
    </div>
  );
}
