"use client";
import { DescriptionWhithReadMore } from "@/components/description-whit-read-more";
import SVGStar from "@/components/icons/star";
import SVGRightArrow from "@/components/icons/svgRightArrow";
import { Community, CommunityReviews, Review } from "@/types/common";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ChevronDown from "@/components/icons/chevron-down";

import "./review.styles.css";

const AddReviewForm = dynamic(() => import("@/components/add-review-form"));

export default function ReviewsShow({
  communityReviews,
  community,
}: {
  communityReviews: CommunityReviews;
  community: Community;
}) {
  const allReviews = communityReviews.reviews;
  const reviewsToShow = 6;
  const [reviews, setReviews] = useState<Review[]>([]);
  const [remainingReviews, setRemainingReviews] = useState<Review[]>([]);
  const [showAllCards, setShowAllCards] = useState<boolean>(allReviews.length > reviewsToShow ? true : false);
  const [showModal, setShowModal] = useState<boolean>(false);


  useEffect(() => {
    if (allReviews) {
      setReviews(allReviews.slice(0, reviewsToShow));
      setRemainingReviews(allReviews.length > reviewsToShow ? allReviews.slice(reviewsToShow) : []);
    }
  }, [allReviews]);

  const toggleCards = () => {
    const nextReviews = remainingReviews.slice(0, reviewsToShow);
    (remainingReviews.length <= reviewsToShow) && setShowAllCards(!showAllCards);
    setReviews((prevReviews) => showAllCards ? [...prevReviews, ...nextReviews] : nextReviews);
    setRemainingReviews(remainingReviews.slice(reviewsToShow));
  };

  const handleShowModal = () => {
    setShowModal((showModal) => !showModal);
  };

  const handleSortReviews = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortBy = e.target.value;

    let sortedReviews: Review[];

    if (sortBy === "Rated Highest") {
      sortedReviews = [...reviews].sort(
        (a, b) => Number(b.rating_value) - Number(a.rating_value)
      );
    } else if (sortBy === "Rated Lowest") {
      sortedReviews = [...reviews].sort(
        (a, b) => Number(a.rating_value) - Number(b.rating_value)
      );
    } else {
      sortedReviews = communityReviews.reviews;
    }

    setReviews(sortedReviews);
  };

  return (
    <>
      {showModal && (
        <AddReviewForm
          handleShowModal={handleShowModal}
          community={community}
        />
      )}
      <section className="bg-white pt-6 pb-20">
        <div className="flex flex-col container mx-auto max-w-6xl px-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <h2 className="font-semibold md:font-bold text-4xl md:text-2xl m-0 pb-5">Reviews</h2>

            <div className="pb-5 flex justify-around gap-4">
              <button
                onClick={handleShowModal}
                className="bg-seafoam hover:bg-link px-5 py-4 text-sm leading-5 rounded-md font-semibold text-background1 ease-in-out duration-700"
              >
                <span className="flex align-middle items-center justify-center capitalize">
                  Add Your Review
                  <SVGRightArrow width={15} height={12} stroke={"#FFFFFF"} />
                </span>
              </button>
              <select
                className="bg-transparent text-faDavysGray text-base font-semibold rounded-lg pl-4 pr-10 py-4 border-solid border-faDarkGray border hover:bg-highlight rev"
                onChange={handleSortReviews}
                defaultValue={"Most Recent"}
              >
                <option value="Most Recent">Most Recent</option>
                <option value="Rated Highest">Rated Highest</option>
                <option value="Rated Lowest">Rated Lowest</option>
              </select>
            </div>
          </div>

          <hr className="border-solid border-faSilver mb-5 p-0" />

          <div className="grid grid-cols-1 gap-y-4 gap-x-14 md:grid-cols-2">
            {reviews.map((review: Review, index: number) => (
              <ReviewCard key={`${review.source}-${index}`} review={review} />
            ))}
          </div>
          <hr className="border-dotted border-faSilver mb-5 p-0" />

          {showAllCards && (
            <button
              onClick={toggleCards}
              className="pt-2 text-gray-600 font-medium underline cursor-pointer flex items-end"
            >
              Show more reviews
              <ChevronDown width={23} height={25} color="#525252" />
            </button>
          )}
        </div>
      </section>
    </>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const maxStars = 5;
  const normalizedRating = parseFloat(review?.rating_value ?? "0");
  const starRating = Math.round((normalizedRating / 10) * maxStars);

  return (
    <div className="py-4 flex flex-col gap-2">
      <div className="flex flex-col text-faDavysGray text-base">
        <p className="font-bold m-0">{review?.reviewer_name}</p>
        <p className="font-bold m-0">
          Source <span className="font-normal">-</span>{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={review?.review_source_link ?? "#"}
            className="underline text-faDavysGray inline-flex items-center justify-center font-normal"
          >
            {" "}
            Original Review
            <SVGRightArrow width={10} height={8} stroke={"#525252"} />
          </Link>
        </p>
        <p className="font-bold m-0">{review?.date}</p>
      </div>
      <div className="flex">
        {Array.from({ length: maxStars }, (_, index) => (
          <SVGStar
            key={index}
            width={24}
            height={24}
            fill={index < starRating ? "#4F6CC4" : "#0000003B"} // Cambia el color según el índice
          />
        ))}
      </div>

      <DescriptionWhithReadMore
        description={review?.review_text}
        maxLength={50}
      />
    </div>
  );
}
