"use client";
import { Community } from "@/types/common";
import React, { useState } from "react";

import Image from "next/image";
import { RANDOM_IMAGES } from "@/lib/constants";
import { GalleryModal } from "@/components/community/titleBar";
import SVGRightArrow from "@/components/icons/svgRightArrow";
const GalleryComponent = ({ community }: { community: Community }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const getRandomImages = () => {
    const randomImages = [];
    for (let i = 0; i < 3; i++) {
      randomImages.push(
        `https://familyassets.s3.amazonaws.com/img/${
          RANDOM_IMAGES[Math.floor(Math.random() * RANDOM_IMAGES.length)]
        }`
      );
    }
    return randomImages;
  };

  const imagesList = community.images.gallery || [];

  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const renderImages = () => {
    const imageCount = imagesList.length;
    const RenderDefaultImages = () => {
      const mainImage = imagesList[0];
      const sideImages = imagesList.slice(1, 5); // Adjust this as per your array length
      const handleImageClick = (image: string) => {
        setSelectedImage(image);
        handleOpenModal();
      }

      return (
        <div className="md:columns-2 columns-1 gap-2">
          <div className="colums-1">
            <div className="mt-1 relative">
              <Image
                src={mainImage}
                width={556}
                height={278}
                onClick={() => handleImageClick(mainImage)}
                className="aspect-video cursor-pointer"
                alt={`${community.name} - Gallery Image 1`}
                placeholder="blur"
                priority
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2P2/HgAEuAI75vNl7AAAAABJRU5ErkJggg=="
              />
              <span onClick={() => handleImageClick(mainImage)} className="cursor-pointer absolute pl-3 pr-2 pt-1 pb-1 bottom-0 right-0 hidden md:block bg-white bg-opacity-70  rounded-tl-lg text-sm font-bold">
                See Gallery ({imageCount})<SVGRightArrow height={10} width={12} stroke="#525252" className="inline ml-0" />
              </span>
            </div>
          </div>
          <div className="columns-2 gap-2 hidden md:block">
            {sideImages.map((image, index) => (
              <div key={index} className={`${index % 2 === 0 ? "mb-2" : ""}`}>
                <Image
                  onClick={() => handleImageClick(image)}
                  src={image}
                  width={274}
                  height={137}
                  className="aspect-video cursor-pointer"
                  alt={`${community.name} - Gallery Image ${index + 2}`}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk2P2/HgAEuAI75vNl7AAAAABJRU5ErkJggg=="
                />
              </div>
            ))}
          </div>
        </div>
      );
    };

    switch (imageCount) {
      case 0:
        return (
          <>
            <div className="columns-3 gap-2">
              <div className="colums-1">
                <div className="aspect-w-1 aspect-h-1">
                  <Image
                    src={getRandomImages()[0]}
                    className="w-full"
                    alt={`${community.name} - Gallery Image 1`}
                    width={600}
                    height={600}
                  />
                </div>
              </div>
              {getRandomImages()
                .slice(1, 3)
                .map((image, index) => (
                  <div key={index}>
                    <div className="aspect-w-1 aspect-h-1">
                      <Image
                        src={image}
                        className="w-full"
                        alt={`${community.name} - Gallery Image ${index + 2}`}
                        width={600}
                        height={600}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </>
        );

      case 1:
        return (
          <div className="columns-1">
            <div className="gallery-full">
              <Image
                src={imagesList[0]}
                className="w-full"
                width={1200}
                height={1200}
                alt={`${community.name} - Gallery Image 1`}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="columns-2">
            {imagesList.slice(0, 2).map((image, index) => (
              <div className="aspect-w-1 aspect-h-1" key={index}>
                <Image
                  src={image}
                  width={600}
                  height={600}
                  className="w-full"
                  alt={`${community.name} - Gallery Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        );

      case 3:
        return (
          <>
            <div className="columns-3 gap-2">
              <div className="colums-1">
                <div className="aspect-w-1 aspect-h-1">
                  <Image
                    src={imagesList[0]}
                    className="w-full"
                    alt={`${community.name} - Gallery Image 1`}
                    width={600}
                    height={600}
                  />
                </div>
              </div>
              {imagesList.slice(1, 3).map((image, index) => (
                <div key={index}>
                  <div className="aspect-w-1 aspect-h-1">
                    <Image
                      src={image}
                      className="w-full"
                      alt={`${community.name} - Gallery Image ${index + 2}`}
                      width={600}
                      height={600}
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        );

      default:
        return RenderDefaultImages();
    }
  };

  return (
    <>
      <div className="gallery">
        <div className="md:pb-6 block">{renderImages()}</div>
        {/* Gallery Mobile View */}
        {/* Mobile view implementation */}
        {/* Gallery Mobile View */}
      </div>

      {isModalOpen && (
        <GalleryModal community={community} onClose={handleCloseModal} selectedImage={selectedImage} />
      )}
    </>
  );
};

export default GalleryComponent;
