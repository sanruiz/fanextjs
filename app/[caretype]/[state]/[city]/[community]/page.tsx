import { getCommunity } from "@/lib/useApi";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { DescriptionWhithReadMore } from "@/components/description-whit-read-more";
import { DynamicLeadGenForm } from "@/components/leadGenApp";
import Amenities from "@/components/community/amenities";
import Churches from "@/components/community/churches";
import CommunityContactSection from "@/components/community-contact-section";
import ComunityHeader from "@/components/community/header";
import Hospitals from "@/components/community/hospitals";
import MedicAidBar from "@/components/community/medicaidBar";
import NearbyPreferredProviders from "@/components/nearby-preferred-provider";
import NearbySlider from "@/components/community/nearbySlider";
import PricingCompared from "@/components/pricing-compared";
import ResidentReviewScoreBlock from "@/components/community/residentReviewScoreBlock";
import RoomPricing from "@/components/community/roomPricing";
import StickyBarFooter from "@/components/community/stickyBarFooter";
import ReviewsBlock from "@/components/community/reviewsBlock";
import PersonalCareAddons from "@/components/community/roomPricing/personalCareAddons";
import {
  CARE_TYPE_PHONE_NUMBERS,
  PHONE_NUMBERS,
} from "@/lib/constants";
import GtagEvent from "@/components/community/gtagEvent";
import AnualData from "@/components/community/anualData";

import { generateJsonLD, generateMeta } from "./auxilary";
import { slugify } from "@/lib/auxilary/slugify";
import "./page.styles.css";
import LeadGenProvider from "@/providers/leadGen";

export const dynamic = 'force-static';

export async function generateMetadata({
  params: { caretype, city, community: _community, state },
}: {
  params: {
    caretype: string;
    state: string;
    city: string;
    community: string;
  };
}): Promise<Metadata> {
  const stateSlug = slugify(state);
  const citySlug = slugify(city);
  const communitySlug = slugify(_community);
  const careType = slugify(caretype);

  const community = await getCommunity(
    careType,
    stateSlug,
    citySlug,
    communitySlug
  );
  if (!community?.name) return notFound();

  return generateMeta(community);
}

export default async function Page({
  params: { caretype, city, community: _community, state },
}: {
  params: {
    caretype: string;
    state: string;
    city: string;
    community: string;
  };
}) {
  const stateSlug = slugify(state);
  const citySlug = slugify(city);
  const communitySlug = slugify(_community);
  const careType = slugify(caretype);
  const community = await getCommunity(
    careType,
    stateSlug,
    citySlug,
    communitySlug
  );
  const communityMetadata = generateJsonLD(community);
  const corpPhoneNumber = community?.corporate_partner?.cc_partner
    ? PHONE_NUMBERS.PARTNER_PHONE_NUMBER
    : CARE_TYPE_PHONE_NUMBERS[careType];
  const content_display =
    community?.family_assets_text !== null &&
      community?.family_assets_text !== undefined &&
      community?.family_assets_text !== ""
      ? community?.family_assets_text
      : community?.content || "";

  return (
    <LeadGenProvider>
      {communityMetadata}
      <ComunityHeader
        community={community}
        careType={careType}
      />
      <div className="container mx-auto max-w-6xl px-4">
        <DescriptionWhithReadMore
          description={content_display}
          maxLength={50}
        />

        <hr className="border-dotted border-faSilver my-6 p-0" />

        <CommunityContactSection
          text="Call for personalized pricing, availability, and touring"
          phone={corpPhoneNumber}
        />

        {community?.phone && community?.phone !== "" && (
          <CommunityContactSection
            text=" If you would like to discuss employment, business-related inquiries, or
        inquire about a current resident, call this line:"
            phone={community?.phone}
          />
        )}

        {!community.preferred &&
          community.nearby_preferred_communities &&
          community.nearby_preferred_communities.length > 0 && (
            <NearbyPreferredProviders
              nearbyCommunity={community.nearby_preferred_communities}
              careType={careType}
            />
          )}

        <div id="Pricing" className="scroll-mt-40">
          {!community.src_room_fields && (
            <>
              <PricingCompared
                community={community}
                careType={careType}
              />
              <div className="shadow-lg rounded-lg mt-6 mb-16">
                <DynamicLeadGenForm
                  careType={careType}
                  usageContext="onPage"
                  isModalOpen={true}
                />
              </div>
            </>
          )}

          {community.src_room_fields &&
            community.src_room_fields.pricings.length > 0 && (
              <div className="rounded-lg bg-white shadow-lg py-8 px-4 mt-6 mb-6 w-full h-full">
                <RoomPricing
                  community={community}
                  careType={careType}
                />

                <DynamicLeadGenForm
                  careType={careType}
                  usageContext="onPage"
                  isModalOpen={true}
                />

                <hr className="border-dotted border-faSilver my-6 p-0" />

                <PersonalCareAddons />
              </div>
            )}

          {community.src_room_fields &&
            community.src_room_fields.pricings.length == 0 && (
              <>
                <PricingCompared
                  community={community}
                  careType={careType}
                />
                <div className="shadow-lg rounded-lg mt-6 mb-16">
                  <DynamicLeadGenForm
                    careType={careType}
                    usageContext="onPage"
                    isModalOpen={true}
                  />
                </div>
              </>
            )}
        </div>

        <MedicAidBar state={stateSlug}  careType={careType} />
      </div>

      <Suspense fallback={"Loading Reviews..."}>
        <ResidentReviewScoreBlock community={community} />
        <ReviewsBlock community={community} />
      </Suspense>

      {community.annual_data && community.care_type == "nursing-homes" && (
        <AnualData community={community} />
      )}

      {community.amenities && Object.keys(community.amenities).length > 0 && (
        <div className="container mx-auto max-w-6xl px-4">
          <Amenities community={community} />
        </div>
      )}

      <div className="bg-white">
        <Hospitals community={community} />
        <Churches community={community} />
      </div>

      {community.nearby_communities &&
        community.nearby_communities.length > 0 && (
          <div className="container mx-auto max-w-6xl px-4">
            <NearbySlider
              nearbyCommunities={community.nearby_communities}
              careType={careType}
              cityName={community.city}
              citySlug={citySlug}
              stateSlug={stateSlug}
            />
          </div>
        )}

      <StickyBarFooter number={corpPhoneNumber} />
      <GtagEvent community={community} />
    </LeadGenProvider>
  );
}
