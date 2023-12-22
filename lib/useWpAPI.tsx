import { type } from "os";
import { AssistedState } from "../types/common";
import { cache } from "react";

const WP_API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.WORDPRESS_API_URL ?? ""
    : process.env.WORDPRESS_API_URL_STG ?? "";


/**
 * Sends a query to the WP API
 *
 * @param query : string
 * @param variables : Record<string, any>
 * @returns json.data: any
 *
 */

export const fetch_WP_API = cache(
  async (
    query: string,
    { variables }: { variables?: any } = {}
  ): Promise<any> => {
    const headers = { "Content-Type": "application/json" };

    try {
      const response = await fetch(WP_API_URL, {
        headers,
        method: "POST",
        body: JSON.stringify({
          query,
          variables,
        }),
      });
      const json = await response.json();
      return json.data;
    } catch (error) {
      console.error("An error occurred:", error);
      return;
    }
  }
);

/**
 * fetches one state from the wordpress API by slug
 *
 * @param stateSlug : string
 * @returns AssistedState : AssistedState object  (see types/common.tsx)
 */
export async function getAssistedState(
  stateSlug: string
): Promise<AssistedState> {
  try {
    const data = await fetch_WP_API(
      `query GetAssistedState($slug: [String]) {
        assistedStates(where: {slug: $slug}) {
          nodes {
            id
            slug
            name
            description
            seo {
              metaDesc
              title
              opengraphTitle
              opengraphUrl
              opengraphDescription
            }
            assistedCommunityState {
              contents
              detailedDescription
              facilitiesInformation
              fieldGroupName
            }
          }
        }
      }`,
      {
        variables: { slug: stateSlug },
      }
    );

    if (!data) {
      console.error("Failed to fetch AssistedState WP-API");
      return {} as AssistedState;
    }

    const states = data?.assistedStates.nodes;
    const simplifiedStates: AssistedState[] = states?.map(
      (state: { assistedCities: { nodes: any } }) => {
        return {
          ...state,
          assistedCities: state?.assistedCities?.nodes,
        };
      }
    );

    return simplifiedStates[0]; // Return the first AssistedState object
  } catch (error) {
    // console.log("Error fetching AssistedState WP API: ", error);
    throw error; // Propagate the error so it can be handled by the caller
  }
}

/**
 * Fetches a city from the WordPress API by its title and its associated state slug.
 *
 * @param cityTitle : string
 * @param stateSlug : string
 * @returns AssistedCity : AssistedCity object (the exact type should be defined similarly to AssistedState in types/common.tsx)
 */
export async function getCityByState(
  cityTitle: string,
  stateSlug: string
): Promise<AssistedCity> {
  try {
    const data = await fetch_WP_API(
      `query GetCityByState($cityTitle: String, $stateSlug: [String]) {
        assistedCities(
          where: {
            title: $cityTitle, 
            taxQuery: {
              relation: AND, 
              taxArray: {
                taxonomy: ASSISTEDSTATE, 
                terms: $stateSlug, 
                field: SLUG, 
                operator: AND
              }
            }
          }
        ) {
          edges {
            node {
              id
              title
              slug
              content
              seo {
                title
                metaDesc
              }
              assistedStates {
                nodes {
                  name
                  slug
                }
              }
            }
          }
        }
      }`,
      {
        variables: { cityTitle, stateSlug },
      }
    );

    if (!data) {
      console.error("Failed to fetch CityByState WP-API");
      return {} as AssistedCity;
    }

    const rawCities = data.assistedCities.edges;


    const assistedCities = rawCities.map((edge: { node: any; }) => {
      const node = edge.node;
      return {
        id: node.id,
        title: node.title,
        slug: node.slug,
        content: node.content,
        seo: {
          title: node.seo.title,
          metaDesc: node.seo.metaDesc,
        },
        state: node.assistedStates.nodes[0]
          ? {
            name: node.assistedStates.nodes[0].name,
            slug: node.assistedStates.nodes[0].slug,
          }
          : null,
      };
    });

    return assistedCities[0]; // Return the first AssistedCity object

  } catch (error) {
    // console.log("Error fetching CityByState WP API: ", error);
    throw error; // Propagate the error so it can be handled by the caller
  }
}

/**
 * Fetches a city from the WordPress API by its title and its associated state slug.
 *
 * @param community_url : string
 * @returns AssistedCommunity : AssistedCity object (the exact type should be defined similarly to AssistedState in types/common.tsx)
 */
export async function getCommunityWP(
  community_url: string
): Promise<AssistedCommunityWP> {
  try {
    const data = await fetch_WP_API(
      `query GetAssistedCommunityById($id_u: ID!) {
        assistedCommunity(id: $id_u, idType: URI) {
            id
            title
            slug
            content
            communityDetail {
                mappedCommUuid
                communityDescription
                placeId
            }
            seo {
                title
                metaDesc
            }
        }
    }`,
      {
        variables: { id_u: community_url },
      }
    );

    if (!data) {
      console.error("Failed to fetch ComunityWP WP-API");
      return {} as AssistedCommunityWP;
    }

    const communityWP = data?.assistedCommunity;

    return communityWP; // Return the first AssistedState object
  } catch (error) {
    // console.log("Error fetching ComunityWP WP API: ", error);
    throw error; // Propagate the error so it can be handled by the caller
  }
}

type AssistedCity = {
  id: string;
  title: string;
  slug: string;
  content: string;
  seo: SEO;
  state: State;
};
type SEO = {
  title: string;
  metaDesc: string;
};

type State = {
  name: string;
  slug: string;
};

type CommunityDetail = {
  mappedCommUuid: string;
  communityDescription: string | null;
  placeId: string;
};

type AssistedCommunityWP = {
  id: string;
  slug: string;
  content: string;
  communityDetail: CommunityDetail;
  description: string;
  seo: SEO;
};

/**
 * Fetches care types description from the WordPress API
 *
 * @param careType : string
 * @returns careType : careType object
 */
export async function getCaretypeWP(
  careType: string
) {
  try {
    const data = await fetch_WP_API(
      `query GetPageByTitle($caret: String!) {
        pageBy(uri: $caret) {
            slug
            title
            content
            assistedCommunity {
                overview
                fieldGroupName
                link
                medicaidWaiver
                seniorCareNeeds
            }
        }
    }`,
      {
        variables: { caret: careType },
      }
    );

    if (!data) {
      console.error("Failed to fetch CaretypeWP WP-API");
      return {} as AssistedCommunityWP;
    }

    const careTypeWP = data?.pageBy;

    return careTypeWP; // Return the first AssistedState object
  } catch (error) {
    // console.log("Error fetching ComunityWP WP API: ", error);
    throw error; // Propagate the error so it can be handled by the caller
  }
}
