import { NearbyCommunity } from "@/types/common";
import AditionalCareTypes from "@/components/community/aditionalCareType";
import FormattedPrice from "@/lib/auxilary/formattedPrice";
import GenerateDollarSymbols from "@/lib/auxilary/generateDollarSymbols";
import ButtonLink from "@/components/buttons/buttonLink";
import Image from "next/image";
import PreferedBadgeCard from "@/components/preferred-badge";
import ResidentReviewScore from "@/components/residentReviewScore";
import Link from "next/link";

export default function SliderCard({
  nearbyCommunity, careType
}: {
  nearbyCommunity: NearbyCommunity;
  careType: string;
}) {
  return (
    <section className="slide_card bg-white border rounded-lg shadow-xl mx-2 my-4 pt-0 h-full flex-col flex overflow-hidden justify-between">
      <div>
        <div className="px-2 py-2">
          <ResidentReviewScore reviews={nearbyCommunity.reviews} position="top" />
        </div>
        <div className="image aspect-video relative">
          <Link
            title={`${nearbyCommunity.name}, ${nearbyCommunity.city}, ${nearbyCommunity.state}`}
            href={`/${careType}/${nearbyCommunity.community_url}`}
          > <Image
              src={nearbyCommunity?.image_url || "#"}
              alt={nearbyCommunity.name}
              fill
              className="aspect-video"
            />
          </Link>
          <PreferedBadgeCard />
        </div>
        <div className="p-4 flex-col">
        <Link
            title={`${nearbyCommunity.name}, ${nearbyCommunity.city}, ${nearbyCommunity.state}`}
            href={`/${careType}/${nearbyCommunity.community_url}`}
            className="font-semibold text-base font-montserrat leading-4 text-faDavysGray block mb-1"
           >
            {nearbyCommunity.name}
          </Link>
          <p className="m-0 leading-5">
            {nearbyCommunity.address_1}, {nearbyCommunity.city}{" "}
            {nearbyCommunity.state}, {nearbyCommunity.zip}
          </p>
          <hr className="border-dotted border-faSilver my-4 p-0" />
          <div className="flex justify-between">
            <div className="starting-price">
              <p>Starting at</p>
              <p className="font-bold font-openSans text-xl">
                <FormattedPrice>
                  {nearbyCommunity?.pricing?.min_price?.toString() || 0}
                </FormattedPrice>
              </p>
            </div>
            <div className="dollar-simbol">
              For this area{" "}
              <GenerateDollarSymbols
                dma_min={nearbyCommunity.pricing.dma_min_price}
                dma_max={nearbyCommunity.pricing.dma_max_price}
                average_cost={nearbyCommunity.pricing.community_average_price}
                new
              />{" "}
            </div>
          </div>
          <hr className="border-dotted border-faSilver my-4 p-0" />
          <AditionalCareTypes
            careTypes={nearbyCommunity?.additional_care_types}
          />
        </div>
      </div>
      <div className="p-4 flex justify-self-end">
        <ButtonLink
          href={`/${careType}/${nearbyCommunity.community_url}`}
          text="View Community"
        />
      </div>
    </section>
  );
}
