import Breadcrumbs from "@/components/breadcrumbs";
import { slugify, deslugify } from "@/lib/auxilary/slugify";
import RightArrow from "@/components/icons/right-arrow";
import Searchblock from "@/components/searchblock";
import { getCaretypeWP } from "@/lib/useWpAPI";
import { getCareTypeStateList } from "@/lib/useApi";
import Link from "next/link";
import { Metadata } from "next";
import "./page.styles.css";
import { generateBreadcrumb } from "@/lib/auxilary/breadcrumb";
const urlProd = process.env.URL_PROD;

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { caretype: "assisted-living" },
    { caretype: "continuing-care-retirement-communities" },
    { caretype: "home-care" },
    { caretype: "independent-living" },
    { caretype: "memory-care" },
    { caretype: "nursing-homes" },
  ];
}

export default async function Page({
  params: { caretype },
}: {
  params: {
    caretype: string;
  };
}) {
  const states = await getCareTypeStateList(caretype);
  ///Assisted Living Near Me
  const careType = slugify(caretype);
  const careTypeLong = deslugify(careType);
  const careTypeData = await getCaretypeWP(careType);

  const breadcrumbItems = generateBreadcrumb({
    careType: {
      name: careTypeLong,
      slug: careType,
    },
  });

  return (
    <>
      <div className="container mx-auto max-w-3xl px-4">
        <Breadcrumbs items={breadcrumbItems} />

        <h1 className="font-bold my-2 mb-10">
          Find the Best {careTypeLong} Near Me
        </h1>
      </div>
      <div className="container mx-auto max-w-3xl px-4">
        <article className="">
          <div
            className="mb-10"
            dangerouslySetInnerHTML={{
              __html: careTypeData?.assistedCommunity?.overview || "",
            }}
          />
        </article>
      </div>

      <Searchblock careType={careType} />

      <div className="w-full bg-highlight p-10 py-16">
        <div className="container mx-auto max-w-3xl">
          <h3 className="">{careTypeLong} by state</h3>
          <hr className="mt-6 mb-12 " />
          <ul className="columns-2 md:columns-3">
            {states.states.map((state) => (
              <li className="mb-2.5 capitalize" key={state.state_slug}>
                <Link
                  href={`/${careType}/${state.state_slug}`}
                  className="font-semibold"
                >
                  {state.long_state}
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
                    Find care & resources{" "}
                    <RightArrow className="h-[14px] stroke-primary" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({
  params: { caretype },
}: {
  params: {
    caretype: string;
    state: string;
  };
}): Promise<Metadata> {
  const careType = slugify(caretype);
  const careTypeLong = deslugify(careType);

  return {
    title: `${careTypeLong} Near Me - Family Assets`,
    description: `All about ${careTypeLong} facilities - learn about cost, what to expect, read reviews and find ${careTypeLong} near you.`,
    alternates: {
      canonical: `${urlProd}${careType}/`,
    },
    openGraph: {
      title: `${careTypeLong} Near Me - Family Assets`,

      description: `All about ${careTypeLong} facilities - learn about cost, what to expect, read reviews and find ${careTypeLong} near you.`,
      url: `${urlProd}${careType}/`,
      siteName: "Family Assets",
      locale: "en_US",
      type: "article",
    },
  };
}