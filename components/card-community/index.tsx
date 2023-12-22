import { CARE_TYPES_COLORS } from "@/lib/constants";
import { Community } from "@/types/common";
import ButtonLink from "@/components/buttons/buttonLink";
import GenerateDollarSymbols from "@/lib/auxilary/generateDollarSymbols";
import Heart from "@/components/heart";
import HelpInformationIcon from "@/components/help-information-icon";
import Image from "next/image";
import Score from "@/components/score";
import {slugify} from "@/lib/auxilary/slugify";
import FormattedPrice from "@/lib/auxilary/formattedPrice";
import PreferedBadgeCard from "@/components/preferred-badge";
import "./card-community.styles.css";
import Link from "next/link";

export default function CardCommunity({
  community,
  careType
}: {
  community: Community;
  careType: string;
}) {

  return (
    <div className="max-w-2xl mx-auto bg-white border-[0.5px] border-link rounded-lg overflow-hidden z-0 md:max-w-5xl pt-4 my-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:basis-1/3 mt-5 relative">
          {community.reviews.average_rating >= 1 && (
            <div className="-mb-[28px] -mt-[28px] ml-4">
              <Heart size="large">
                {parseFloat(community.reviews.average_rating.toFixed(1))}
              </Heart>
            </div>
          )}
          {community.images && (
            <Link
              title={`${community.name}, ${community.city}, ${community.state}`}
              href={`/${careType}/${community.community_url}/`}
            >
              <Image
                className={`object-cover w-full md:w-72 h-60 md:h-full md:-ml-4 border-t-4 ${
                  CARE_TYPES_COLORS[
                    careType || slugify(community.primary_care_type || community.care_type || "assisted-living" )
                  ] ?? "navy"
                }`}
                src={community.images.image_url || community.images.icon || ""}
                alt={community.name}
                height={288}
                width={288}
              />
            </Link>
          )}
          {community.preferred && <PreferedBadgeCard />}
        </div>
        
        <div className="pt-5 md:basis-2/3 mx-4 md:ml-0 pb-4">
          <ul className="flex flex-row md:flex-row flex-wrap m-0 p-0 ml-0 list-['•']">
            {community.additional_care_types.map((care_type: string) => (
              <li
                key={slugify(care_type)}
                id={slugify(care_type)}
                className={`capitalize text-sm font-semibold pl-1 mx-2 ${
                  CARE_TYPES_COLORS[slugify(care_type)]
                } `}
              >
                {care_type.replace(/-/g, " ")}
              </li>
            ))}
          </ul>
          <h1 className="capitalize tracking-wide text-2xl my-0 leading-7 mb-0 font-bold text-ellipsis">
            <Link
              className="text-navy hover:text-link"
              title={`${community.name}, ${community.city}, ${community.state}`}
              href={`/${careType}/${community.community_url}/`}
            >
              {community.name}
            </Link>
          </h1>
          <address className="block my-0 text-sm leading-tight not-italic capitalize">
            {community.address_1}, {community.city}, {community.state},{" "}
            {community.zip}
          </address>
          {community.highlights && (
            <div className="capitalize text-sm my-1 leading-4 font-bold text-seafoam">
              {community.highlights.join(", ")}
            </div>
          )}

          <div className="mt-1 flex gap-2 flex-nowrap">
            <div>
              <span className="text-seafoam text-3xl font-bold">
                <FormattedPrice>{community.pricing?.community_average_price || 0}</FormattedPrice>
              </span>
            </div>

            <div className="p-2 pr-0">
              <div className=" text-xs font-normal leading-3 max-w-max">
                Average monthly cost <br/> before discounts
              </div>
            </div>
            <div>
              <GenerateDollarSymbols
                dma_min={community.pricing.dma_min_price}
                dma_max={community.pricing.dma_max_price}
                average_cost={community.pricing.community_average_price}
              />
            </div>
          </div>

          {community.reviews.average_rating >= 1 && (
            <div className="flex flex-row items-center justify-start gap-4">
              <div>
                <Heart size="small">
                  {parseFloat(community.reviews.average_rating.toFixed(1))}
                </Heart>
              </div>

              <div className="text-xs font-normal leading-3">
                <small className="text-xs">Resident Review Score</small>
                <h6 className="m-0 font-bold text-lg leading-3">
                  <Score score={community.reviews.reviews_number} />
                </h6>
              </div>

              <HelpInformationIcon
                text="Resident Review Score is calculated from the reviews and other custom
          metrics gathered on this community."
              />
            </div>
          )}

          <div className="mt-2 flex gap-4 flex-col md:flex-row">
            <ButtonLink
              variant="primary"
              href={`/${careType}/${community.community_url}/#get-pricing`}
              text={"Get your best Price"}
              title="Get your best Price"
            />
            <ButtonLink
              variant="secondary"
              href={`/${careType}/${community.community_url}/`}
              text={"See Details"}
              title="See Details"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

