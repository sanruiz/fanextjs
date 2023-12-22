import { Community } from "@/types/common";
import { deslugify } from "@/lib/auxilary/slugify";
import GenerateDollarSymbols from "@/lib/auxilary/generateDollarSymbols";

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.URL_PROD ?? ""
    : process.env.URL_LOCAL ?? "";

function formatDate() {
  const date = new Date();
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function generateSEOtitle(communityName: string) {
  const formattedDate = formatDate();
  return `${communityName} - ${formattedDate} Pricing (UPDATED)`;
}

// function generateDescription(community: Community) {
function generateDescription(community: Community) {
  const primaryCareType = deslugify(community.care_type);
  // Function to determine whether to use 'a' or 'an'
  const indefiniteArticle = (word: String) => {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(word[0].toLowerCase()) ? "an" : "a";
  };
  return `${community.name} is ${indefiniteArticle(
    primaryCareType
  )} ${primaryCareType} facility in ${community.city}, ${
    community.state
  }. Learn about pricing and amenities, read reviews, and see photos of the facility.`;
}

export function generateMeta(community: Community) {
  const SEOtitle = generateSEOtitle(community.name);
  const description = generateDescription(community);
  const canonical = community.community_url;

  return {
    title: SEOtitle,
    description: description,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: SEOtitle,
      description: description,
      url: canonical,
      images: [
        {
          url:
            community?.images?.image_url ||
            (community?.images?.gallery && community.images.gallery[0]) ||
            "https://familyassets.s3.amazonaws.com/img/default_facebook.jpg",
          width: 640,
          height: 320,
        },
      ],
      siteName: "Family Assets",
      locale: "en_US",
      type: "article",
    },
  };
}

export function generateJsonLD(community: Community) {
  const jsonLD = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: community?.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: community?.address_1,
      addressLocality: community?.city,
      addressRegion: community?.state,
      postalCode: community?.zip,
      addressCountry: "United States",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: community?.location?.lat,
      longitude: community?.location?.lon,
    },
    image:
      community?.images?.image_url ||
      (community?.images?.gallery && community.images.gallery[0]) ||
      "https://familyassets.s3.amazonaws.com/img/default_facebook.jpg",
    priceRange: GenerateDollarSymbols({
      dma_min: community?.pricing?.dma_min_price,
      dma_max: community?.pricing?.dma_max_price,
      average_cost: community?.pricing?.community_average_price,
      lean: true,
    }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: community?.reviews.average_rating,
      ratingCount: community?.reviews.review_count,
      bestRating: "10",
      worstRating: "1",
      author: {
        "@type": "Organization",
        name: "FamilyAssets",
        url: baseURL,
        brand: {
          "@type": "Brand",
          name: "FamilyAssets Senior Care Experts",
          url: "http://www.familyassets.com",
        },
      },
      url: community?.community_url,
    },
  };

  const jsonLDWebPage = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": community?.community_url,
        url: community?.community_url,
        name: generateSEOtitle(community.name),
        isPartOf: { "@id": "https://www.familyassets.com/#website" },
        datePublished: "2022-12-16T16:33:17+00:00",
        dateModified: "2023-03-09T04:06:10+00:00",
        description: generateDescription(community),
        breadcrumb: {
          "@id": `${community?.community_url}#breadcrumb`,
        },
        inLanguage: "en-US",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [community?.community_url],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${community?.community_url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": baseURL,
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": baseURL + "/" + community?.care_type,
              name: community?.care_type,
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id":
                baseURL + "/" + community?.care_type + "/" + community?.state,
              name: community?.state,
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@id":
                baseURL +
                "/" +
                community?.care_type +
                "/" +
                community?.state +
                "/" +
                community?.city,
              name: community?.city,
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@id":
                baseURL +
                "/" +
                community?.care_type +
                "/" +
                community?.state +
                "/" +
                community?.city +
                "/" +
                community?.slug,
              name: community?.name,
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.familyassets.com/#website",
        url: "https://www.familyassets.com/",
        name: "Family Assets",
        description: "",
        publisher: { "@id": "https://www.familyassets.com/#organization" },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://www.familyassets.com/?s={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://www.familyassets.com/#organization",
        name: "Family Assets",
        url: "https://www.familyassets.com/",
        logo: {
          "@type": "ImageObject",
          inLanguage: "en-US",
          "@id": "https://www.familyassets.com/#/schema/logo/image/",
          url: "https://cdn.familyassets.com/wp-content/uploads/2022/09/logo.png?strip=all&lossy=1&ssl=1",
          contentUrl:
            "https://cdn.familyassets.com/wp-content/uploads/2022/09/logo.png?strip=all&lossy=1&ssl=1",
          width: 326,
          height: 56,
          caption: "Family Assets",
        },
        image: { "@id": "https://www.familyassets.com/#/schema/logo/image/" },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLDWebPage) }}
      />
    </>
  );
}
