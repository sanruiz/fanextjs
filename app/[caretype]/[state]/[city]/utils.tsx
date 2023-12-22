export type FilteredOptionsT = {
  [key: string]: boolean;
  preferred: boolean;
  most_loved_only: boolean;
  loved_and_above: boolean;
  good_and_above: boolean;
  average_and_above: boolean;
};

type OptionT = {
  value: number;
  label: string;
};
export const SortedOptions: OptionT[] = [
  { value: 1, label: "All Communities" },
  { value: 2, label: "Assisted Living" },
  { value: 3, label: "Memory Care" },
  { value: 4, label: "Nursing Homes" },
  { value: 5, label: "Independent Living" },
];

export const FilteredOptions = [
  {
    pricing: [
      { value: "ASC", label: "Price (low to high)" },
      { value: "DESC", label: "Price (high to low)" },
      { value: "RAT_ASC", label: "Rating (high to low)" },
    ],

    filterBy: [{ value: "preferred", label: "Preferred Providers only" }],

    residentReviewScores: [
      { value: "MOST_LOVED", label: "Most Loved only" },
      { value: "LOVED", label: "Loved and above" },
      { value: "GOOD", label: "Good and above" },
      { value: "AVERAGE", label: "Average and above" },
    ],
    amenities: [
      { value: "Pool", label: "Pool" },
      { value: "Clubs & Communities", label: "Clubs & Communities" },
      { value: "Beauty & Barber", label: "Beauty & Barber" },
      { value: "Fitness Programs", label: "Fitness Programs" },
      { value: "Pet Friendly", label: "Pet Friendly" },
      { value: "Outdoor Areas", label: "Outdoor Areas" },
      { value: "Social Outings", label: "Social Outings" },
      { value: "Housekeeping", label: "Housekeeping" },
      { value: "Activity Center", label: "Activity Center" },
      { value: "Parking", label: "Parking" },
    ],
  },
];
