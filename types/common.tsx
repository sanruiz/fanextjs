export interface AssistedState {
  id: string;
  slug: string;
  name: string;
  description: string | "";
  seo: SEO;
  assistedCommunityState: AssistedCommunityState;
  assistedCities: City[];
  count: number;
}

interface SEO {
  metaDesc: string;
  title: string;
  opengraphTitle: string;
  opengraphUrl: string;
  opengraphDescription: string;
}

interface AssistedCommunityState {
  contents: string;
  detailedDescription: string;
  facilitiesInformation: string;
  fieldGroupName: string;
}

export interface CitiesState {
  count: number;
  list: City[];
}

export interface City {
  city: string;
  city_slug: string;
}

/*
 * types for the Community from CCDS API
 */
interface comunityProps {
  comunitiy: Community;
}

interface Comm {
  found: boolean;
  communities: Community[];
}

export interface StateInfoResponse {
  average_price: string;
  average_rating: string;
  care_type: string
  cities: CitiesState;
  communities: Community[];
  community_count: number;
  content_display_order: string[]
  descriptions: string[]
  long_state: string;
  region: string
  short_state: string;
  slug: string;
  state_capital: string
}

export interface Community {
  additional_care_types: string[];
  address_1: string;
  address_2?: string | null;
  amenities: Amenities;
  annual_data?:AnnualDatum;
  bot_script: string;
  care_type: string;
  city_slug: string;
  city: string;
  community_partner: CommunityPartner | null;
  community_url: string;
  content: string;
  corporate_name?: string | null;
  corporate_partner?: CorporatePartner;
  corporate_phone_number?: string;
  corporate?: Corporate;
  created?: string;
  deactivated: boolean;
  description?: string | "" | null;
  dma?: string;
  family_assets_text?: string;
  geom?: string;
  global_websites?: GlobalWebsite[];
  google_place_id: string;
  highlights: string[];
  history?: History;
  images: Images;
  location: Location;
  mapped_comm_uuid: string;
  modified?: string;
  name: string;
  nearby_churches_found?: number;
  nearby_churches?: Nearby[];
  nearby_communities?: NearbyCommunity[];
  nearby_hospitals_found?: number;
  nearby_hospitals?: Nearby[];
  nearby_preferred_communities?: NearbyCommunity[];
  phone?: string;
  preferred: boolean;
  pricing: Pricing;
  primary_care_type?: string;
  reviews: Reviews;
  slug: string;
  src_room_fields?: SrcRoomFields;
  state_slug: string;
  state: string;
  state_full_name: string;
  url?: string;
  zip: string;
}

export interface Amenities {
  [key: string]: string[] | undefined;
}

export interface CommunityPartner {
  elf_partner?: boolean | null;
  preferred?: boolean | null;
}

export interface Corporate {
  name: string | null;
  id: number | "" | null;
  url: string | null;
}

export interface CorporatePartner {
  cc_partner: boolean | null;
  tf_client: boolean | null;
  preferred: boolean | null;
}

export interface History {
  old_name: string | null;
  old_slug: string | null;
}

export interface Images {
  image_url: string;
  icon?: string | null;
  gallery?: string[];
}

export interface Location {
  lat: number;
  lon: number;
}

export enum Category {
  Churches = "churches",
  Hospitals = "hospitals",
}

export interface Nearby {
  distance: string;
  name: string;
  address: string;
  city_raw: string;
  state_raw: string;
  map_url: string;
  lat: string;
  lon: string;
  category: Category;
}

export interface NearbyCommunity {
  additional_care_types: string[];
  address_1: string;
  address_2?: string | null;
  care_type: string;
  city: string;
  community_url: string;
  highlights: string[];
  image_url: null | string;
  mapped_comm_uuid: string;
  name: string;
  preferred: boolean;
  pricing: Pricing;
  reviews: Reviews;
  state: string;
  zip: string;
}

export interface Pricing {
  average_monthly_price_within_25miles: number;
  average_price_dma: number;
  community_average_price: number;
  dma_max_price: number;
  dma_min_price: number;
  market?: string;
  max_price: number;
  min_price: number;
  statewide_average: number;
}
export interface CommunityReviews {
  mapped_comm_uuid: string
  found: string
  sort: string
  review_count: string
  average_rating: string
  score: string
  reviews_number: string
  review_category_count: number[]
  city_ranking: number
  google_place_id: string
  review_summary_text: string
  reviews: Review[]
}

export interface Review {
  reviewer_name: string
  source: string
  date: string
  rating_value: string
  review_text: string
  weighted_score: string
  review_source_link: string
}


export interface Reviews {
  city_count?: number;
  average_rating: number;
  review_count: number;
  reviews_number: number;
  score: number;
}

export interface LeadResponse {
  soldID: string;
  id: string;
  contractID: string;
  price: string;
  cherry: string;
  returned: string;
  dateSold: string;
  leadID: string;
  campaignID: string;
  isTest: string;
  lead_score: string;
  requestID: string;
  pingID: string;
  jornayaLeadID: string;
  trustedform_cert_id: string;
  createdOn: string;
  first_name: string;
  last_name: string;
  phone_home: string;
  email_address: string;
  zip_code: string;
  returnStatus: string;
  returnReasonID: string;
  buyerID: string;
  affiliateID: string;
  offerID: string;
  verticalID: string;
  buyerName: string;
  contractName: string;
  affiliateName: string;
  campaignName: string;
  offerName: string;
  verticalName: string;
  returnReason: string;
}

export interface TopCommunitiesResponse {
  limit: number;
  offset: number;
  found: number;
  communities: Community[];
}

export interface CityInfoResponse {
  start_date: string | null;
  end_date: string | null;
  sort: string;
  limit: number;
  offset: number;
  found: number;
  communities: Community[];
  total_highlights: string[];
  total_corporates: string[];
  bot_script: string;
  ip_city_name: string | null;
  ip_state_name: string | null;
  city_info: CityInfo;
}

export interface CityInfo {
  found: boolean;
  message: string;
  city_id: number;
  city: string;
  city_slug: string;
  state_slug: string;
  state: string;
  long_state: string;
  description: string;
  care_type: string;
  statistics: string | null;
  content_display_order: string[];
}
export interface CityCommunitiesResponse {
  start_date: any;
  end_date: any;
  sort: string;
  limit: number;
  offset: number;
  found: number;
  communities: Community[];
  total_highlights: string[];
  total_corporates: string[];
  bot_script: string;
  ip_city_name: any;
  ip_state_name: any;
}

/**** Comunity Detail */
export interface CommunityResponse {
  found: boolean;
  communities: Community[];
}

export interface GlobalWebsite {
  hostname: string;
  updated_by: string;
  active: boolean;
  id: number;
  created_date: string;
  updated_date: string;
  created_by: string;
  community_uri_pattern: string;
}

export interface PricingRoom {
  room_type_name: string | null | "";
  sqft_low: string | null;
  sqft_high: string | null;
  source: string;
  bathrooms: number;
  price_low: number;
  room_care_type: string;
  room_privacy: string;
  normalized_room_type: string;
  price_duration: string;
  id: number;
  bathroom_type: string;
  price_high: number | null;
  room_type: string;
}

export interface SrcRoomFields {
  community_fees: CommunityFees;
  pricings: PricingRoom[];
}

export interface CommunityFees {
  monthly_rent_includes: string | null;
  pet_fee: string | null;
  total_rooms_units: string | null;
  occupancy_percent: string | null;
  respite_care_per_day: string | null;
  additional_care_fee_range: string | null;
  additional_occupant: string | null;
  community_fee_move_in: string | null;
}

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export interface AnnualDatum {
  mapped_comm_uuid:                    string;
  created_on:                          Date;
  updated_on:                          Date;
  fam_mapped_key:                      string;
  google_place_id:                     string;
  federal_provider_number:             string;
  legal_name:                          string;
  ownership_type:                      string;
  provider_ssa_county_code:            string;
  certification:                       string;
  medicaid_start_date:                 string;
  resident_and_family_council:         string;
  ownership_change_last_12_months:     "N"|"Y";
  health_inspection_in_last_two_years: "N"|"Y";
  located_in_hospital:                 "N"|"Y";
  ccrc:                                "N"|"Y";
  ratings:                             Ratings;
  availability:                        Availability;
  incidents:                           Incidents;
  staff_turnover:                      StaffTurnover;
  staff_hours:                         StaffHours;
  local:                               Local;
}

export interface Availability {
  [key: string]: number;
}

export interface Incidents {
  [key: string]: number;

}

export interface Local {
  "ratings":        Ratings;
  "availability":   Availability;
  "incidents":      Incidents;
  "staff_turnover": StaffTurnover;
  "staff_hours":    StaffHours;
}

export interface Ratings {
  [key: string]: number;
}

export interface StaffHours {
  [key: string]: number;
}

export interface StaffTurnover {
  [key: string]: number;
}


export interface CareTypeStateList {
  states: CareTypeState[]
}

export interface CareTypeState {
  state_slug: string
  short_state: string
  long_state: string
}