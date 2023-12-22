import { BreadcrumbItem } from "@/types/common";

export function generateBreadcrumb({
	careType,
	state,
	city,
	community,
}: {
	careType: {
		name: string;
		slug: string;
	};
	state?: {
		name: string;
		slug: string;
	};
	city?: {
		name: string;
		slug: string;
	};
	community?: {
		name: string;
	};
}): BreadcrumbItem[] {
	const shortCareTypeName = shortCCRC(careType.name);
	const breadcrumbItems: BreadcrumbItem[] = [
		{
			name: "Home",
			href: "/",
		},
		{
			name: `${shortCareTypeName}`,
			href: `/${careType.slug}`,
		},
	];
	state &&
		breadcrumbItems.push({
			name: `${shortCareTypeName} ${state.name}`,
			href: `/${careType.slug}/${state.slug}`,
		});
    city &&
		state &&
		breadcrumbItems.push({
			name: `${shortCareTypeName} ${city.name}`,
			href: `/${careType.slug}/${state.slug}/${city.slug}`,
		});
    community &&
		breadcrumbItems.push({
			name: `${shortCareTypeName} ${community.name}`,
		});
	return breadcrumbItems;
}

function shortCCRC(name: string) {
	return name === "Continuing Care Retirement Communities" ? "CCRC" : name;
}