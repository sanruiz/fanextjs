"use client";
import React, { useState } from "react";
import ChevronDown from "../icons/chevron-down";

type DescriptionWhitReadMoreProps = {
  description: string;
  maxLength: number;
};
export const DescriptionWhithReadMore = ({
  description,
  maxLength,
}: DescriptionWhitReadMoreProps) => {
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // Ensure description is a string
  const descriptionText = typeof description === 'string' ? description : '';

  const words = descriptionText.split(" ");
  const limitedDescription = showFullDescription
    ? words.join(" ")
    : words.slice(0, maxLength).join(" ");

  const showReadMoreButton = words.length > maxLength;

  return (
    <article>
      <div
        className="text-faDimGray text-base font-normal"
        dangerouslySetInnerHTML={{
          __html: limitedDescription || "",
        }}
      />
      {showReadMoreButton && (
        <button
          onClick={toggleDescription}
          className="pt-2 text-gray-600 font-medium underline cursor-pointer flex items-end"
        >
          {showFullDescription ? "Read less" : "Read more"}
          <ChevronDown
            width={23}
            height={25}
            color="#525252"
            className={`${showFullDescription ? "transform rotate-180" : ""}`}
          />
        </button>
      )}
    </article>
  );
};