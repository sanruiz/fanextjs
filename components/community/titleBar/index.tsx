"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ResidentReviewScore from "@/components/residentReviewScore";
import FormattedPrice from "@/lib/auxilary/formattedPrice";
import GenerateDollarSymbols from "@/lib/auxilary/generateDollarSymbols";
import SVGRightArrow from "@/components/icons/svgRightArrow";
import ChevronRightCircle from "@/components/icons/chevron-right-circle";
import ChevronLeftCircle from "@/components/icons/chevron-left-circle";
import { Community } from "@/types/common";
import { DEVICE_TYPES } from "@/lib/constants";
import PricingButton from "@/components/community/pricingButton";

function Address({ community, customCss }: { community: Community, customCss?: string }) {
  return (
    <div className={`address mt-4 md:mt-0 md:w-fit md:pr-3 ${customCss ? customCss : ""}`}>
      <h1 className="text-base m-0 font-semibold leading-5 md:truncate">{community.name}</h1>
      <p className="text-faDimGray font-openSans underline text-sm md:text-base md:no-underline md:leading-5">
        {community.address_1}, {community.city} {community.state},{" "}
        {community.zip}{" "}
      </p>
      <hr className="divider md:hidden" />
    </div>
  );
}

function HeaderContainer({
  community,
  deviceType,
  isSticky
}: {
  community: Community;
  deviceType: string;
  isSticky: boolean;
}) {
  return (deviceType === DEVICE_TYPES.desktop) ? (
    <HeaderDesktop community={community} isSticky={isSticky} />
  ) : (
      <HeaderMobile community={community} hideSkeleton={deviceType === DEVICE_TYPES.desktop} />
  );
}

function HeaderDesktop({
  community,
  isSticky
}: {
  community: Community;
  isSticky: boolean;
}) {
  return (
    <div
      id="titleBar"
      className={`bg-background1 z-10 ${isSticky
        ? "drop-shadow-md hover:drop-shadow-xl fixed top-14 w-screen left-0 right-0 mx-auto py-6"
        : "relative py-4"
        }`}
    >
      <div
        className={`container mx-auto max-w-6xl ${isSticky ? "pl-2 pr-6" : ""
          } flex justify-between items-center`}
      >
        <Address community={community} />
        <div className="flex items-center justify-center md:border-x-2 border-faSilver md:px-3">
          <Score community={community} />
          <Price community={community} />
        </div>
        <div className="pricing-button flex items-center justify-end mb-4 md:mb-0">
          <PricingButton />
        </div>
      </div>
    </div>
  )
}

function HeaderMobile({ community, hideSkeleton }: { community: Community; hideSkeleton : boolean; }) {
  return (
    <>
      <Skeleton community={community} hide={hideSkeleton} />
      <Address community={community} customCss="md:hidden" />
      <Score community={community} customCss="md:hidden" />
      <GalleryButton community={community} customCss="md:hidden" />
      <Price community={community} customCss="md:hidden" />
      <div className="pricing-button flex items-center justify-end mb-4 md:mb-0 md:hidden">
        <PricingButton customClass="w-full" />
      </div>
    </>
  );
}

function GalleryButton({ community, customCss }: { community: Community, customCss?: string }) {
  const galleryImages = community?.images?.gallery || [];
  const countImages = galleryImages.length;
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return countImages ? (
    <>
      <button
        className={`gallery-images flex items-center place-self-end self-center border-l border-faSilver pl-3 py-3 ${customCss ? customCss : ""}`}
        onClick={handleOpenModal}
      >
        <span className="underline text-sm">See Gallery ({countImages})</span>
        <SVGRightArrow width={12} height={12} stroke="#525252" />
      </button>
      {isModalOpen && (
        <GalleryModal community={community} onClose={handleCloseModal} />
      )}
    </>
  ) : (
    ""
  );
}

export function GalleryModal({
  community,
  onClose,
  selectedImage
}: {
  community: Community;
  onClose: React.MouseEventHandler<HTMLElement>;
  selectedImage?: string | null;
}) {
  const imagesList = community?.images?.gallery || [];
  const [currentIndex, setCurrentIndex] = useState(selectedImage ? imagesList.indexOf(selectedImage) : 0);
  const [fade, setFade] = useState(true); // New state for handling fade effect
  const totalImages = imagesList.length;

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => {
      let nextIndex = (prevIndex + 1) % totalImages;
      return nextIndex;
    });
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => {
      let prevIndexAdjusted = prevIndex - 1;
      if (prevIndexAdjusted < 0) {
        prevIndexAdjusted = totalImages + prevIndexAdjusted;
      }
      return prevIndexAdjusted;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setFade(false), 300);
    setFade(true);
    document.documentElement.classList.add("overflow-hidden");
    document.body.classList.add("overflow-hidden");

    return () => {
      clearTimeout(timer);
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [currentIndex]);
  return (
    <div
      className="fixed top-0 left-0 right-0 w-full h-full max-w-[100vw] max-h-[100vh] bg-black bg-opacity-75 transition-opacity flex justify-center items-center z-30"
      onClick={onClose}
    >
      <div
        className="relative p-4 rounded-lg max-w-[95%] max-h-[95%] bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-4">
          <button
            className="text-white bg-seafoam hover:bg-link focus:outline-none focus:ring-2 focus:ring-seafoam focus:ring-opacity-50 rounded-sm font-semibold text-lg p-0 px-2"
            onClick={onClose}
          >
            X
          </button>
          <span
            className="text-lg ml-auto"
          >
            {currentIndex + 1} / {totalImages}
          </span>
        </div>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-5 transform translate-x-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full"
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
          className="absolute top-1/2 left-5 transform -translate-y-1/2 -translate-x-1/2 z-10 bg-white p-1 rounded-full"
          aria-label="Previous Slide"
        >
          <ChevronLeftCircle
            width={30}
            height={30}
            className="stroke-slate-500 text-slate-950"
          />
        </button>
        <div
          className={`transition-opacity duration-700 ${fade ? "opacity-0" : "opacity-100"
            }`}
        >
          {imagesList.map((image, index) => (
            <div
              key={index}
              className={`w-full transition-opacity duration-700 ${index < currentIndex || index >= currentIndex + 1
                ? "hidden"
                : ""
                }`}
            >
              <Image
                src={image}
                height={800}
                width={800}
                className="aspect-video"
                alt={`${community.name} - Gallery Image ${index}`}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2P2/HgAEuAI75vNl7AAAAABJRU5ErkJggg=="
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Price({ community, customCss }: { community: Community, customCss?: string }) {
  return (
    <a href="#Pricing" className={`text-inherit md:w-auto md:min-w-max ${customCss ? customCss : ""}`}>
      <hr className="divider md:hidden" />
      <div className="price flex items-center justify-between md:justify-normal mb-4 md:mb-0">
        <div className="md:border-x-2 md:border-faSilver md:px-3">
          <div className="display-inline text-sm leading-3">Starting price</div>

          <p className="font-bold text-xl font-openSans">
            <FormattedPrice>{community.pricing.min_price || 0}</FormattedPrice>
          </p>
        </div>
        <div className="flex items-center md:pl-4 md:block">
          <div className="display-inline text-sm leading-3">For this area</div>
          <GenerateDollarSymbols
            dma_min={community.pricing.dma_min_price}
            dma_max={community.pricing.dma_max_price}
            average_cost={community.pricing.community_average_price}
            new
          />
        </div>
      </div>{" "}
    </a>
  );
}

function Score({ community, customCss }: { community: Community, customCss?: string }) {
  return (
    <div className={`score flex items-center md:whitespace-nowrap md:mr-3 pt-1 md:pt-0 ${customCss ? customCss : ""}`}>
      <a href="#ResidentReviewScore" className="text-inherit w-full">
        <ResidentReviewScore reviews={community.reviews} position="top" />
      </a>
    </div>
  );
}

function Skeleton({ community, hide }: { community: Community, hide: boolean; }) {
  return !hide ? (
    <div className="hidden md:block w-full h-14 mb-4">
      <HeaderDesktop community={community} isSticky={false} />
    </div>
  ) : null;
}

export default function TitleBar({
  community
}: {
  community: Community
}) {

  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [deviceType, setDeviceType] = useState<string>("");

  useEffect(() => {
    const titleBarElement = document.getElementById("titleBar") || {
      offsetTop: 0,
      offsetHeight: 0,
    };

    if (window) {
      const isMobile = window.innerWidth < 768;

      const deviceType = isMobile ? DEVICE_TYPES.mobile : DEVICE_TYPES.desktop;

      setDeviceType(deviceType);
    }

    const handleScroll = () => {
      // Check if the title bar should be sticky based on the scroll position
      if (window.scrollY > titleBarElement.offsetHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderContainer
        community={community}
        deviceType={deviceType}
        isSticky={isSticky}
      />
    </>
  );
}
