import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCityInfo } from "@/lib/useApi";
import FilterSection from "@/components/filter-section";
import Breadcrumbs from "@/components/breadcrumbs";
import { slugify, deslugify } from "@/lib/auxilary/slugify";
import { generateBreadcrumb } from "@/lib/auxilary/breadcrumb";

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.URL_PROD ?? ""
    : process.env.URL_LOCAL ?? "";

export const dynamic = 'force-static';

export async function generateMetadata({
  params: { caretype, city, state },
}: {
  params: {
    caretype: string;
    state: string;
    city: string
  };
}): Promise<Metadata> {
  state = slugify(state);
  city = slugify(city);
  const careType = slugify(caretype);
  const careTypeLong = deslugify(careType);

  const dataToSend = { filters: {} };
  const assistedCityData = await getCityInfo(
    state,
    city,
    careType,
    dataToSend
  );

  if (!assistedCityData?.found) return notFound();
  return {
    title:
      `${careTypeLong} Communities in ${assistedCityData?.city_info?.city}, ${assistedCityData?.city_info?.long_state} - Family Assets`,
    description:
      `Directory of ${careTypeLong} communities in ${assistedCityData?.city_info?.city}, ${assistedCityData?.city_info?.long_state}. Learn about pricing, and read reviews for facilities in the area.`,
    alternates: {
      canonical: `${baseURL}${careType}/${assistedCityData?.city_info?.state_slug}/${assistedCityData?.city_info?.city_slug}/`,
    },
    openGraph: {
      title:
        `${careTypeLong} Communities in ${assistedCityData?.city_info?.city}, ${assistedCityData?.city_info?.long_state} - Family Assets`,
      description:
        `Directory of ${careTypeLong} communities in ${assistedCityData?.city_info?.city}, ${assistedCityData?.city_info?.long_state}. Learn about pricing, and read reviews for facilities in the area.`,
      url: `${baseURL}${careType}/${assistedCityData?.city_info?.state_slug}/${assistedCityData?.city_info?.city_slug}/`,
      siteName: "Family Assets",
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function Page({
  params: { caretype, city, state },
}: {
  params: {
    caretype: string;
    state: string;
    city: string
  };
}) {
  state = slugify(state);
  city = slugify(city);
  const careType = slugify(caretype);
  const careTypeLong = deslugify(careType);

  const dataToSend = { filters: {} };
  const assistedCityData = await getCityInfo(
    state,
    city,
    careType,
    dataToSend
  );

  const communities = assistedCityData?.communities || [];

  const breadcrumbItems = generateBreadcrumb({
    careType: {
      name: careTypeLong,
      slug: careType
    },
    state: {
      name: assistedCityData?.city_info?.state,
      slug: assistedCityData?.city_info?.state_slug
    },
    city: {
      name: assistedCityData?.city_info?.city,
      slug: assistedCityData?.city_info?.city_slug,
    }
  });

  return (
    <div className="container mx-auto max-w-6xl px-4">
      <Breadcrumbs items={breadcrumbItems} />
      <h1>
        {careTypeLong} in {assistedCityData?.city_info?.city},{" "}
        {assistedCityData?.city_info?.state}
      </h1>
      <div
        className="mb-8"
        dangerouslySetInnerHTML={{
          __html: assistedCityData?.city_info?.description || "",
        }}
      />

      <Suspense>
        <FilterSection initialCommunities={communities} careType={careType} />
      </Suspense>
    </div>
  );
}
