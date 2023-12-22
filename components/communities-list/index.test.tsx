import { render, screen } from "@testing-library/react";
import CommunitiesList from "./index"; //
import "@testing-library/jest-dom";
import { Community } from "@/types/common";

const mockCommunities: Community[] = [
  {
    mapped_comm_uuid: "c31c93e2-483f-4913-822f-b27095bf5ebc",
    corporate_name: "Brookdale Senior Living",
    name: "Brookdale Corsicana",
    slug: "brookdale-corsicana",
    care_type: "assisted-living",
    additional_care_types: ["assisted-living"],
    google_place_id: "ChIJtVRjJpkuT4YRDdYNALaW6SQ",
    address_1: "3329 West 7th Avenue",
    address_2: "None",
    city: "Corsicana",
    city_slug: "corsicana",
    state: "TX",
    state_slug: "texas",
    zip: "75110",
    deactivated: false,
    preferred: true,
    corporate_partner: {
      cc_partner: true,
      tf_client: false,
      preferred: false,
    },
    community_partner: {
      elf_partner: null,
      preferred: true,
    },
    pricing: {
      statewide_average: 4590.0,
      dma_min_price: 2550.0,
      dma_max_price: 6640.0,
      average_price_dma: 4595.0,
      min_price: 3860.0,
      max_price: 3915.0,
      community_average_price: 3894.0,
      average_monthly_price_within_25miles: 5273.0,
    },
    highlights: [
      "Outdoor Areas",
      "Beauty & Barber",
      "Pool",
      "Social Outings",
      "Washer & Dryer in Unit",
    ],
    location: {
      lat: 32.0731021,
      lon: -96.49926939999999,
    },
    reviews: {
      reviews_number: 1,
      review_count: 14,
      average_rating: 9.714285714285714,
    },
    images: {
      image_url:
        "https://media.familyassets.com/community_images/c31c93e2-483f-4913-822f-b27095bf5ebc/familyassets/main-d0fbd649f2a1931635c1686c22f7e983.jpeg?format=auto&width=694&height=290",
    },
    community_url: "texas/corsicana/brookdale-corsicana",
  },
  {
    mapped_comm_uuid: "f9f8d8ef-b745-4530-b6f4-0fed8e878a95",
    corporate_name: null,
    name: "Arabella of Athens",
    slug: "arabella-of-athens",
    care_type: "assisted-living",
    additional_care_types: [
      "assisted-living",
      "memory-care",
      "senior-living",
      "independent-living",
    ],
    google_place_id: "ChIJl2u4sLT9SIYRHb-Q_YpsNV4",
    address_1: "413 Gibson Rd",
    address_2: null,
    city: "Athens",
    city_slug: "athens",
    state: "TX",
    state_slug: "texas",
    zip: "75751",
    deactivated: false,
    preferred: true,
    corporate_partner: {
      cc_partner: false,
      tf_client: false,
      preferred: false,
    },
    community_partner: {
      elf_partner: true,
      preferred: true,
    },
    pricing: {
      statewide_average: 4590.0,
      dma_min_price: 2550.0,
      dma_max_price: 6640.0,
      average_price_dma: 4595.0,
      min_price: 3455.0,
      max_price: 5005.0,
      community_average_price: 4230.0,
      average_monthly_price_within_25miles: 5133.0,
    },
    highlights: [
      "Pet Friendly",
      "Pool",
      "Clubs & Communities",
      "Restaurant Style Dining",
      "Outdoor Areas",
    ],
    location: {
      lat: 32.1768523,
      lon: -95.83971679999999,
    },
    reviews: {
      reviews_number: 1,
      review_count: 13,
      average_rating: 9.538461538461538,
    },
    images: {
      image_url:
        "https://media.familyassets.com/community_images/f9f8d8ef-b745-4530-b6f4-0fed8e878a95/familyassets/main-1c1f75135b50bc3d14ad32ed2dad7c93.jpeg?format=auto&width=694&height=290",
    },
    community_url: "texas/athens/arabella-of-athens",
  },
  {
    mapped_comm_uuid: "53e18a6b-b3f6-4091-ab43-ac0c6bd8515d",
    corporate_name: "Brookdale Senior Living",
    name: "Brookdale Palestine",
    slug: "brookdale-palestine",
    care_type: "assisted-living",
    additional_care_types: ["assisted-living"],
    google_place_id: "ChIJl8CT8mBkSIYRz-aLFk_KNKE",
    address_1: "101 Trinity Court",
    address_2: "",
    city: "Palestine",
    city_slug: "palestine",
    state: "TX",
    state_slug: "texas",
    zip: "75801",
    deactivated: false,
    preferred: true,
    corporate_partner: {
      cc_partner: true,
      tf_client: false,
      preferred: false,
    },
    community_partner: null,
    pricing: {
      statewide_average: 4590.0,
      dma_min_price: 2550.0,
      dma_max_price: 6640.0,
      average_price_dma: 4595.0,
      min_price: 2565.0,
      max_price: 3990.0,
      community_average_price: 3510.0,
      average_monthly_price_within_25miles: 5176.0,
    },
    highlights: [
      "Outdoor Areas",
      "Beauty & Barber",
      "Washer & Dryer in Unit",
      "Pool",
      "Activity Center",
    ],
    location: {
      lat: 31.7357852,
      lon: -95.62603999999999,
    },
    reviews: {
      reviews_number: 1,
      review_count: 11,
      average_rating: 9.0,
    },
    images: {
      image_url:
        "https://media.familyassets.com/community_images/53e18a6b-b3f6-4091-ab43-ac0c6bd8515d/familyassets/main-2dcebe0e3de71ee3eaf3f7e9c1d73656.jpeg?format=auto&width=694&height=290",
    },
    community_url: "texas/palestine/brookdale-palestine",
  },
];

describe("CommunitiesList", () => {
  test("shows a message if there are no communities", () => {
    const mockCommunities: Community[] = [];
    render(<CommunitiesList communities={mockCommunities} />);
    const messageElement = screen.getByText("No communities to show");
    expect(messageElement).toBeInTheDocument();
  });

  test("shows a message if communities is undefine", () => {
    render(<CommunitiesList communities={undefined} />);
    const loadingElement = screen.getByText("No communities to show");
    expect(loadingElement).toBeInTheDocument();
  });

  test("renders a list of communities", () => {
    render(<CommunitiesList communities={mockCommunities} />);
    // Assert that each community is displayed
    mockCommunities.forEach((community) => {
      const communityElement = screen.getByText(community.name);
      expect(communityElement).toBeInTheDocument();
    });
  });
});
