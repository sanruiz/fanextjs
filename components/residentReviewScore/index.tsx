import { Reviews } from "@/types/common";
import Score from "@/components/score";
import Heart from "../icons/heart";

export default function ResidentReviewScore({ reviews, position }: { reviews: Reviews, position?: string }) {
  const reviewCss = position === "top" ? "font-normal w-full text-sm" : "font-semibold md:font-normal w-full text-xl/6 md:text-xl";
  const lovedCss = position === "top" ? "text-base" : "text-2xl/9 md:text-2xl";
  const heartCss = position === "top" ? "" : "scale-125 md:scale-1";

  const displayRating = reviews.average_rating < 1 ? "N/A" : parseFloat(reviews.average_rating.toFixed(1));

  return (
    <div className="flex flex-col">
      <div className={`${reviewCss} leading-3`}>Resident Review Score</div>
      <div className={`flex flex-row items-center ${lovedCss}`}>
        <Heart height={16} width={18} className={`mr-1 ${heartCss}`} />
        <div className="font-semibold">{displayRating}</div>
        <span className="text-faSilver font-light mx-1"> | </span>
        <Score score={reviews.reviews_number} />
      </div>
    </div>
  );
}
