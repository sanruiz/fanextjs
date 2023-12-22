import { CCDS_API_URL } from "@/lib/useApi";

const endpoints: {
	endpoint: string;
	url: string;
}[] = [
	{
		endpoint: "maps",
		url: "https://maps.googleapis.com/maps/api/geocode/json",
	},
	{
		endpoint: "closest-city",
		url: `${CCDS_API_URL}fam-communities/get-closest-city`,
	},
	{
		endpoint: "autocomplete",
		url: `${CCDS_API_URL}fam-communities/location-autocomplete`,
	},
];

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const service = searchParams.get("get");

	if (!service) {
		return new Response(JSON.stringify({ message: "Invalid endpoint", status: 404 }));
	}

	const endpoint = endpoints.find((ep) => ep.endpoint === service);

	if (!endpoint) {
		return new Response(JSON.stringify({ message: "Invalid endpoint", status: 404 }));
	}

	const { url } = endpoint;
	const headers = new Headers({
		"Content-Type": "application/json",
		accept: "application/json",
	});

	const urlEndpoint = new URL(url);
	const urlParams = searchParams;
    urlParams.delete("get");

	try {
		if (service === "maps") {
			urlParams.set("key", process.env.NEXT_PUBLIC_GEOCODE_API_KEY as string);
		}
        urlEndpoint.search = urlParams.toString();

		const response = await fetch(urlEndpoint.toString(), {
			method: "GET",
			headers,
		});

		const data = await response.json();
		return new Response(JSON.stringify(data), {
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Error while making the request:", error);
		return new Response(JSON.stringify({ message: "Internal error", status: 500 }));
	}
}
