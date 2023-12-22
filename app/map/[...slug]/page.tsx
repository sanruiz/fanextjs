import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function Page() {
  const apiKey = process.env.NEXT_PUBLIC_GEOCODE_API_KEY || "";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <GoogleMapsEmbed
        apiKey={apiKey}
        height={800}
        width={800}
        mode="place"
        q="Brooklyn+Bridge,New+York,NY"
        style={""}
        allowfullscreen={false}
        loading="lazy"
      />
    </div>
  );
}
