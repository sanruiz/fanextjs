export const RANDOM_IMAGES = [
	"nursing_background.jpg",
	"default_facebook.jpg",
	"facebook2.png",
	"nurse_help.jpg",
	"background4.jpg",
	"facebook_two.jpg",
	"senior_couple_home.jpg",
	"senior1.jpg",
	"senior2.jpg",
	"senior3.jpg",
	"senior4.jpg",
];

export const CARE_TYPES_COLORS: { [key: string]: string } = {
	"assisted-living": "assisted",
	"home-care": "home_care",
	"nursing-homes": "nursing_homes",
	ccrc: "ccrc",
	"independent-living": "idp",
	"memory-care": "memory",
	"alzheimers-care": "alzheimers",
	"senior-living": "senior",
} as const;

enum RatingCategory {
	MOST_LOVED = "MOST_LOVED",
	LOVED = "LOVED",
	GOOD = "GOOD",
	AVERAGE = "AVERAGE",
}

type RatingThresholds = {
	[key in RatingCategory]: number;
};

export const RATING_FILTERS: RatingThresholds = {
	[RatingCategory.MOST_LOVED]: 8.5,
	[RatingCategory.LOVED]: 7,
	[RatingCategory.GOOD]: 6,
	[RatingCategory.AVERAGE]: 5,
};

export const REVIEW_CATEGORIES = ["Most Loved", "Loved", "Good", "Average", "Below Average"];

// Define the type for the phone numbers object
type PhoneNumbers = {
	NO_PARTNER_PHONE_NUMBER: string;
	PARTNER_PHONE_NUMBER: string;
	NO_PARTNER_PHONE_NUMBER_NH: string;
	NO_PARTNER_PHONE_NUMBER_HC: string;
	NO_PARTNER_PHONE_NUMBER_CCRC: string;
};

// Object of phone numbers
export const PHONE_NUMBERS: PhoneNumbers = {
	NO_PARTNER_PHONE_NUMBER: "1 (877) 618-0710", // Assisted Living, Memory Care and Independent Living Phone Number
	PARTNER_PHONE_NUMBER: "1 (844) 661-2445", // Care Changes Corporates Phone Number
	NO_PARTNER_PHONE_NUMBER_NH: "1 (844) 240-4458", // Nursing Home Phone Number
	NO_PARTNER_PHONE_NUMBER_HC: "1 (877) 415-6902", // Home Care Phone Number
	NO_PARTNER_PHONE_NUMBER_CCRC: "1 (844) 921-0259", // CCRC Phone Number
};

// Define the type for the care type phone numbers object
type CareTypePhoneNumbers = {
	[key: string]: string;
};

// Object of phone numbers by care type
export const CARE_TYPE_PHONE_NUMBERS: CareTypePhoneNumbers = {
	"assisted-living": "1 (877) 618-0710",
	"home-care": "1 (877) 415-6902",
	"nursing-homes": "1 (844) 240-4458",
	"continuing-care-retirement-communities": "1 (844) 921-0259",
	"independent-living": "1 (877) 618-0710",
	"memory-care": "1 (877) 618-0710",
};

export const DEVICE_TYPES: { [key: string]: string } = {
	desktop: "desktop",
	mobile: "mobile",
};
