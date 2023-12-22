"use client";
import { useState, useEffect } from "react";
import { NearbyCommunity } from "@/types/common";
import SliderCard from "@/components/community/nearbySlider/sliderCard";
import ChevronRightCircle from "@/components/icons/chevron-right-circle";
import ChevronLeftCircle from "@/components/icons/chevron-left-circle";
import { deslugify } from "@/lib/auxilary/slugify";
import useIsMobile from "../../../hooks/useIsMobile";
import Link from "next/link";

export default function NearbySlider({
  nearbyCommunities,
  careType,
  cityName,
  citySlug,
  stateSlug,
}: {
  nearbyCommunities: NearbyCommunity[];
  careType: string;
  cityName: string;
  citySlug: string;
  stateSlug: string;
}) {
  const isMobile = useIsMobile();
  const careTypeLong = deslugify(careType);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // New state for handling fade effect
  const totalSlides = nearbyCommunities.length;
  const slidesToPass = isMobile ? 1 : 3;

  useEffect(() => {
    // Trigger fade-in effect on currentIndex change
    setFade(true);
    const timer = setTimeout(() => setFade(false), 300); // 300ms for fade effect duration

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = (prevIndex + slidesToPass) % totalSlides;
      return nextIndex;
    });
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => {
      let prevIndexAdjusted = prevIndex - slidesToPass;
      if (prevIndexAdjusted < 0) {
        prevIndexAdjusted = totalSlides + prevIndexAdjusted;
      }
      return prevIndexAdjusted;
    });
  };

  return (
    <section className="nearby-slider my-20 relative px-11">
      <Link
        href={`/${careType}/${stateSlug}/${citySlug}`}
        className="text-faDavysGray"
      >
        <h3 className="text-center mb-6 text-4xl">
          {careTypeLong} Communities Near {cityName}
        </h3>
      </Link>
      {nearbyCommunities.length > slidesToPass && (
        <>
          <button
            onClick={goToNextSlide}
            className="absolute top-1/2 right-7 transform translate-x-1/2 -translate-y-1/2 z-1 w-8 h-8"
            aria-label="Next Slide"
          >
            <ChevronRightCircle
              width={30}
              height={30}
              className="stroke-slate-500 text-slate-950"
            />
          </button>
          <button
            onClick={goToPrevSlide}
            className="absolute top-1/2 left-7 transform -translate-y-1/2 -translate-x-1/2 z-1 w-8 h-8"
            aria-label="Previous Slide"
          >
            <ChevronLeftCircle
              width={30}
              height={30}
              className="stroke-slate-500 text-slate-950"
            />
          </button>
        </>
      )}
      <div
        className={`nearby-slider__wrapper md:flex transition-all  duration-0 ${
          fade ? "opacity-0" : "opacity-100  ease-in-out duration-700"
        }`}
      >
        {nearbyCommunities.map((community, index) => (
          <div
            key={index}
            className={`md:w-1/3 w-full  ${
              index < currentIndex || index >= currentIndex + slidesToPass
                ? "hidden"
                : ""
            } transition-opacity duration-700`}
          >
            <SliderCard nearbyCommunity={community} careType={careType} />
          </div>
        ))}
      </div>
    </section>
  );
}
