'use client';
import { useEffect } from 'react';
import { Community } from "@/types/common";
import { sendGTMEvent } from "@next/third-parties/google";

export default function GtagEvent({ community }: { community: Community }) {
    useEffect(() => {
        const eventParameters = {
            content_type: "Community Page",
            primary_care_type: community.care_type,
            additional_care_types: community.additional_care_types.join(", "),
            corporate: `${community.corporate_name}|${community.corporate?.id}|${community.corporate?.url}`,
            corporate_partner: `  | ${community.corporate_partner?.cc_partner ? 'CC' : ' '} | ${community.corporate_partner?.tf_client ? 'TF' : ' '}`,
            community_rating: community.reviews.average_rating.toFixed(1)
        };
        sendGTMEvent( { event:"visited_page", value: eventParameters});
    }, [community]); // Dependencies array ensures the effect runs only when the community prop changes

    return null; // No need to render anything
}