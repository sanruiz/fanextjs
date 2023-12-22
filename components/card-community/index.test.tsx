import { render, screen, fireEvent } from "@testing-library/react";
import CardCommunity from "./"; // Asegúrate de ajustar la importación según la ubicación real de tu componente
import { Community } from "@/types/common";
import "@testing-library/jest-dom";

describe("CardCommunity", () => {
  // Crear una comunidad de muestra para usar en las pruebas
  const mockCommunity = {
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
      score: 9.714285714285714,
    },
    images: {
      image_url:
        "https://media.familyassets.com/community_images/c31c93e2-483f-4913-822f-b27095bf5ebc/familyassets/main-d0fbd649f2a1931635c1686c22f7e983.jpeg?format=auto&width=694&height=290",
    },
    community_url: "texas/corsicana/brookdale-corsicana",
  };

  test("renderiza correctamente los elementos", () => {
    render(<CardCommunity community={mockCommunity} careType="assisted-living" />);

    // Verify specific elements are in the component
    expect(screen.getByText(mockCommunity.name)).toBeInTheDocument();
    expect(
      screen.getByText("3329 West 7th Avenue, Corsicana, TX, 75110")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Outdoor Areas, Beauty & Barber, Pool, Social Outings, Washer & Dryer in Unit"
      )
    ).toBeInTheDocument();
  });

  test("navega al hacer clic en un enlace", () => {
    render(<CardCommunity community={mockCommunity} careType="assisted-living" />);

    // Buscar el enlace dentro del DOM y obtener su atributo href
    const link = screen.getByText(mockCommunity.name).closest('a')|| document.createElement('a');
    const href = link.getAttribute('href');

    // Verificar que el atributo href coincida con la URL esperada
    expect(href).toBe(`/assisted-living/${mockCommunity.community_url}`);
  });

});
