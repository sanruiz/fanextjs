import { getCommunityReviews } from "@/lib/useApi";
import { Community } from "@/types/common";
import ReviewsShow from "./reviewsShow";

export default async function ReviewsBlock({
  community,
}: {
  community: Community;
}) {
  const communityReviews = await getCommunityReviews(community.google_place_id);

  if (communityReviews?.found == "0" || communityReviews == null) {
    return null;
  }

  return (
    <ReviewsShow communityReviews={communityReviews} community={community} />
  );
}
