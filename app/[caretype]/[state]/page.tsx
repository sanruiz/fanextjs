import { slugify, deslugify } from "@/lib/auxilary/slugify";
import { Suspense } from "react";
import { getStateInfo } from "@/lib/useApi";
import CommunitiesList from "@/components/communities-list";
import Breadcrumbs from "@/components/breadcrumbs";
import Searchblock from "@/components/searchblock";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import RightArrow from "@/components/icons/right-arrow";
import CommunityListFallback from "@/components/community-list-fallback";
import Link from "next/link";
import { generateBreadcrumb } from "@/lib/auxilary/breadcrumb";
const urlProd = process.env.URL_PROD;
import "../page.styles.css";

// Return a list of `params` to populate the [state] dynamic segment
export async function generateStaticParams() {
  const states = [
    { state: "Alabama" },
    { state: "Alaska" },
    { state: "Arizona" },
    { state: "Arkansas" },
    { state: "British Columbia" },
    { state: "California" },
    { state: "Colorado" },
    { state: "Connecticut" },
    { state: "Delaware" },
    { state: "District of Columbia" },
    { state: "Florida" },
    { state: "Georgia" },
    { state: "Hawaii" },
    { state: "Idaho" },
    { state: "Illinois" },
    { state: "Indiana" },
    { state: "Iowa" },
    { state: "Kansas" },
    { state: "Kentucky" },
    { state: "Louisiana" },
    { state: "Maine" },
    { state: "Manitoba" },
    { state: "Maryland" },
    { state: "Massachusetts" },
    { state: "Michigan" },
    { state: "Minnesota" },
    { state: "Mississippi" },
    { state: "Missouri" },
    { state: "Montana" },
    { state: "Nebraska" },
    { state: "Nevada" },
    { state: "New Hampshire" },
    { state: "New Jersey" },
    { state: "New Mexico" },
    { state: "New York" },
    { state: "North Carolina" },
    { state: "North Dakota" },
    { state: "Ohio" },
    { state: "Oklahoma" },
    { state: "Ontario" },
    { state: "Oregon" },
    { state: "Pennsylvania" },
    { state: "Rhode Island" },
    { state: "Saskatchewan" },
    { state: "South Carolina" },
    { state: "South Dakota" },
    { state: "Tennessee" },
    { state: "Texas" },
    { state: "Utah" },
    { state: "Vermont" },
    { state: "Virginia" },
    { state: "Washington" },
    { state: "West Virginia" },
    { state: "Wisconsin" },
    { state: "Wyoming" }
  ];

  return states.map((item) => ({
    state: slugify(item.state),
  }));
}

export async function generateMetadata({
  params: { caretype, state },
}: {
  params: {
    caretype: string,
    state: string;
  };
}): Promise<Metadata> {
  state = slugify(state);
  const careType = slugify(caretype);
  const careTypeLong = deslugify(careType);
  const assistedStateData = await getStateInfo(state, careType);

  if (!assistedStateData?.long_state) return notFound();

  return {
    title: `${careTypeLong} in ${assistedStateData?.long_state} - Family Assets`,
    description:
      `All about ${careTypeLong} in ${assistedStateData?.long_state}. Learn about ${careTypeLong} rules and regulations in ${assistedStateData?.long_state} and find ${careTypeLong} facilities in ${assistedStateData?.long_state} near you.`,
    alternates: {
      canonical: `${urlProd}${careType}/${assistedStateData?.slug}/`,
    },
    openGraph: {
      title: `${careTypeLong} in ${assistedStateData?.long_state} - Family Assets`,

      description:
        `All about ${careTypeLong} in ${assistedStateData?.long_state}. Learn about ${careTypeLong} rules and regulations in ${assistedStateData?.long_state} and find ${careTypeLong} facilities in ${assistedStateData?.long_state} near you.`,
      url:
        `${urlProd}${careType}/${assistedStateData?.slug}/`,
      siteName: "Family Assets",
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function Page({
  params,
}: {
  params: {
    caretype: string,
    state: string;
  };
}) {
  const state = slugify(params.state);
  const careType = slugify(params.caretype);
  const careTypeLong = deslugify(careType);
  const assistedStateData = await getStateInfo(state, careType);
  if (!assistedStateData?.long_state) return notFound();

  const breadcrumbItems = generateBreadcrumb({
    careType: {
      name: careTypeLong,
      slug: careType
    },
    state: {
      name: assistedStateData.long_state,
      slug: assistedStateData.slug
    }
  });

  return (
    <Suspense fallback={"loading..."}>
      <div className="container mx-auto max-w-3xl px-4">
        <Breadcrumbs items={breadcrumbItems} />

        <article className="">
          <h1 className="font-bold my-2 mb-10">
            {assistedStateData?.long_state} {careTypeLong}
          </h1>

          <div
            className="mb-10"
            dangerouslySetInnerHTML={{
              __html: assistedStateData?.descriptions?.[0] || '',
            }}
          />
        </article>
      </div>

      <Searchblock careType={careType} />

      <div className="container mx-auto max-w-3xl pt-8 px-4">
        <h2 id="communities" className="  text-darknavy capitalize">
          Top Ranked {careTypeLong} Facilities in {assistedStateData?.long_state}
        </h2>
        <hr className="my-12 " />
        <div
          className="mb-10"
          dangerouslySetInnerHTML={{
            __html: assistedStateData?.descriptions?.[1] || "",
          }}
        />

        <Suspense fallback={<CommunityListFallback />}>
          <CommunitiesList communities={assistedStateData.communities} careType={careType} />
        </Suspense>
      </div>

      <div className="w-full bg-highlight p-10 py-16">
        <div className="container mx-auto max-w-3xl mb-10">
          <h2>{assistedStateData?.long_state} {careTypeLong} </h2>
          <hr className="mt-6 mb-12 " />
          <ul className="columns-2 md:columns-3">
            {assistedStateData.cities?.list
              ?.slice()
              .sort((a, b) => a.city.localeCompare(b.city))
              .map((community,index ) => (
                <li className="mb-2.5 capitalize" key={community?.city_slug+index}>
                  <Link
                    className="font-semibold"
                    href={`/${assistedStateData?.care_type}/${assistedStateData?.slug}/${community?.city_slug}`}
                    key={community?.city_slug}
                    title={`${careTypeLong} in ${community?.city}, ${assistedStateData?.long_state}`}
                  >
                    {community?.city.toLowerCase()}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="w-full bg-link p-10 py-16">
        <div className="container mx-auto max-w-3xl mb-10 text-background1">
          <div className="grid grid-flow-row md:grid-cols-3 justify-items-center">
            <div className="col-span-2">
              <h3>Find the best senior care and resources for your needs</h3>
              <p>
                Access hundreds of resources, chat with our experts and compare
                care options to find the solution that&apos;s right for you and
                your loved ones.
              </p>
            </div>
            <div className="m-auto pt-4 md:pt-0">
              <div className="bg-background1 group border-primary border hover:bg-background2 px-5 py-4 text-sm h-fit leading-5 rounded-md font-semibold ease-in-out duration-700">
                <Link href="/resources/" className=" text-primary">
                  <div className="flex align-middle items-center justify-center capitalize">
                    Find care & resources <RightArrow className="h-[14px] stroke-primary" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
