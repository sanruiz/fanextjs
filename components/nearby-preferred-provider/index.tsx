import React from "react";
import IconPreferredProvider from "@/components/icons/icon-preferred-provider";
import ResidentReviewScore from "../residentReviewScore";
import Image from "next/image";
import { NearbyCommunity } from "@/types/common";
import Link from "next/link";
import FormattedPrice from "@/lib/auxilary/formattedPrice";

const NearbyPreferredProviders = ({
  nearbyCommunity,
  careType,
}: {
  nearbyCommunity: NearbyCommunity[] | undefined;
  careType: string;
}) => {
  return nearbyCommunity?.length ? (
    <div className="pt-6 flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <IconPreferredProvider width={"42"} height={"42"} />

        <h2 className="text-xl leading-5 font-semibold">
          Consider Nearby Preferred Providers
        </h2>
      </div>
      <div
        className="flex flex-col gap-2 md:flex-row md:gap-4 md:items-start md:self-stretch"
        style={{
          flex: 1,
        }}
      >
        {nearbyCommunity?.map((community: NearbyCommunity) => (
          <CardNearbyPreferredProviders
            key={community.name}
            community={community}
            careType={careType}
          />
        ))}
      </div>
    </div>
  ) : null;
};

export const CardNearbyPreferredProviders = ({
  community,
  careType,
}: {
  community: NearbyCommunity;
  careType: string;
}) => {
  return (
    <Link
      href={`/${careType}/${community.community_url}`}
      title={`${community.name}, ${community.city}, ${community.state}`}
      className="border-solid border md:w-1/3  bg-white border-faSilver p-4 rounded-lg self-stretch flex flex-col items-stretch gap-4 list-disc text-faDavysGray "
    >
      <div className="flex gap-2 self-stretch items-end">
        <div className="w-[3.75rem] h-[3.75rem] relative rounded overflow-hidden">
          <Image
            src={community?.image_url ?? "/image2.svg"}
            alt={community?.name}
            fill
            className="rounded"
          />
        </div>
        <div className="flex flex-col justify-end items-start">
          <h3 className="text-faDavysGray h-full text-base m-0 line-clamp-2">
            {community.name}
          </h3>
          <p className="text-faDavysGray text-xs leading-4 font-normal underline line-clamp-1">
            {community.address_1} {community.address_2}
          </p>
        </div>
      </div>
      <div className="flex items-center self-stretch justify-between">
        <ResidentReviewScore reviews={community.reviews} />
        <div className="flex flex-col justify-center items-end">
          <p className="text-xs font-normal leading-4 text-faDavysGray">
            Starting price
          </p>
          <p className="text-base leading-normal font-bold text-faDavysGray">
            <FormattedPrice>
              {community.pricing.community_average_price || 0}
            </FormattedPrice>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NearbyPreferredProviders;
