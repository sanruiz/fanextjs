import {
  LeadResponse,
  StateInfoResponse,
  TopCommunitiesResponse,
  CityInfoResponse,
  CityCommunitiesResponse,
  Community,
  CommunityReviews,
  CareTypeStateList
} from "@/types/common";

import { notFound } from "next/navigation";

const isProduction = process.env.NODE_ENV === "production";

export const CCDS_API_URL = isProduction
  ? process.env.CCDS_API_URL
  : process.env.CCDS_API_URL_STG;
export const CCDS_API_COMPLEMENT = isProduction
  ? process.env.CCDS_API_COMPLEMENT
  : process.env.CCDS_API_COMPLEMENT_STG;

/*
 * Fetches data from the CCDS API
 * @param endpoint : string
 * @param apiToken : string, optional
 * @param method : "GET" | "POST" | "PUT" | "DELETE", optional
 * @param data : any, optional
 * @returns data : any
 */
export const fetchData = async (
  endpoint: string,
  apiToken?: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  requestData?: any // Additional data to be sent in the request body
): Promise<any> => {
  const headers = new Headers({
    "Content-Type": "application/json",
    accept: "application/json",
  });

  // If an apiToken is provided, set it in headers
  if (apiToken) {
    headers.append("x-api-chat-token", apiToken);
  } else if (process.env.CCDS_API_TOKEN) {
    headers.append("x-api-chat-token", process.env.CCDS_API_TOKEN);
  }
  headers.append("hostname", CCDS_API_COMPLEMENT || "");
  try {
    const requestOptions: RequestInit = {
      method,
      headers,
    };

    if (method === "POST" || method === "PUT") {
      // Include data in the request body for POST and PUT requests
      requestOptions.body = JSON.stringify(requestData || {});
    }

    const response = await fetch(`${CCDS_API_URL}${endpoint}`, requestOptions);

    // Check if the response is successful
    if (!response.ok) {
      const errorData = {
        status: response.status,
        message: `Network response was not ok: ${response.statusText}`,
      };
      console.error(errorData);
      return null;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data from CCDS API:", error);
    return null;
  }
};

/*
 * fetches TopCommunities from the CCDS API
 * @param stateSlug : string
 * @returns data : TopCommunitiesResponse
 */
export async function getTopCommunities(
  stateSlug: string
): Promise<TopCommunitiesResponse> {
  const response = await fetchData(
    `fam-communities/top_communities?care_type=assisted-living&state_slug=${stateSlug}`
  );

  return response;
}

/*
 * fetches StateInfo from the CCDS API
 * @param stateSlug : string
 * @param careTypeSlug : string
 * @returns data : StateInfoResponse
 */
export async function getStateInfo(
  stateSlug: string,
  careTypeSlug: string
): Promise<StateInfoResponse> {
  const response = await fetchData(
    `geo-meta/state_info?care_type=${careTypeSlug}&state_slug=${stateSlug}`
  );
  return response;
}

/*
 * fetches City Info from the CCDS API
 * @param stateSlug : string
 * @param careTypeSlug : string
 * @param citySlug : string
 * @returns data : CityInfoResponse
 */
export async function getCityInfo(
  stateSlug: string,
  citySlug: string,
  careTypeSlug: string,
  data: object = {}
): Promise<CityInfoResponse> {
  const response = await fetchData(
    `fam-communities/geo-search?state_slug=${stateSlug}&city_slug=${citySlug}&care_type=${careTypeSlug}&send_description=true`,
    undefined,
    "POST",
    data
  );
  return response;
}

/*
 * fetches City Communities from the CCDS API
 * @param stateSlug : string
 * @param careTypeSlug : string
 * @param citySlug : string
 * @returns data : CityInfoResponse
 */
export async function getCityCommunities(
  stateSlug: string,
  citySlug: string,
  careTypeSlug: string,
  data: object = {}
): Promise<CityCommunitiesResponse> {
  const response = await fetchData(
    `fam-communities/geo-search?state_slug=${stateSlug}&city_slug=${citySlug}&care_type=${careTypeSlug}`,
    undefined,
    "POST",
    data
  );
  return response;
}

/*
 * fetches Community from the CCDS API
 * @param careTypeSlug : string
 * @param stateSlug : string
 * @param citySlug : string
 * @param communitySlug : string
 * @returns data : CommunityResponse
 */
export async function getCommunity(
  careTypeSlug: string,
  stateSlug: string,
  citySlug: string,
  communitySlug: string
): Promise<Community> {
  const response = await fetchData(
    `fam-communities/community?care_type=${careTypeSlug}&state_slug=${stateSlug}&city_slug=${citySlug}&slug=${communitySlug}`
  );

  // Check if the response has communities and if so, return only the first one
  // If communities were found and there is at least one, return the first one
  if (
    response?.found &&
    response?.communities &&
    response?.communities?.length > 0
  ) {
    return response.communities[0]; // Return only the first community object
  }

  // If no communities are found, return the original response object

  return notFound();
}

/*
 * fetches Reviews from the CCDS API
 * @param google_place_id : string,
 * @returns data : reviews
 */
export async function getCommunityReviews(
  google_place_id: string
): Promise<CommunityReviews> {
  const response = await fetchData(
    `communities/reviews/?google_place_id=${google_place_id}&sort=date,desc`,
    undefined,
    "GET"
  );

  return response;
}

/*
 * fetches LeadApp Lead from the CCDS API
 * @param trusted_url : string,
 * @returns data : LeadResponse
 */
export async function getLeadgenappLead(
  certificate: string
): Promise<LeadResponse> {
  const fullData = await fetchData(
    `api/get/leadgenapp_lead?trusted_url=https://cert.trustedform.com/${certificate}`,
    process.env.CCDS_API_TOKEN
  );
  const response = fullData?.response?.data[0];

  return response;
}

/*
 * fetches data from the CCDS API
 * @param endpoint : string
 * @returns data : any
 */
export async function getAnotherEndpoint() {
  const response = await fetchData("another-endpoint");
}

/*
 * fetches state list from the CCDS API based on care type
  * @param careTypeSlug : string
  * @returns data : CareTypeStateList : {state_slug: string, state_name: string}[]
  *
*/
export async function getCareTypeStateList(
  careTypeSlug: string
): Promise<CareTypeStateList>{
  const response = await fetchData(
    `geo-meta/get-states?care_type=${careTypeSlug}&limit=100`,
    undefined,
    "GET"
  );
  return response;
}
