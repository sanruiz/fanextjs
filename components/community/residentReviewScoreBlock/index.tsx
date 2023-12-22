import ResidentReviewScore from "@/components/residentReviewScore";
import { getCommunityReviews } from "@/lib/useApi";
import { Community } from "@/types/common";
import { REVIEW_CATEGORIES } from "@/lib/constants";

export default async function ResidentReviewScoreBlock({
  community,
}: {
  community: Community;
}) {
  const communityReviews = await getCommunityReviews(community.google_place_id);

  if (communityReviews?.found == "0" || communityReviews == null) {
    return (null);
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <section className="pt-16 md:pt-20 scroll-mt-40"  id="ResidentReviewScore">
          <div className="flex flex-col items-end md:flex-row justify-between md:pt-6">
            <ResidentReviewScore reviews={community?.reviews} />
            <div>
              #
              <span className="font-bold">
                {communityReviews?.city_ranking}{" "}
              </span>
              in {community.city}, {community.state}
            </div>
          </div>
          <hr className="border-t border-faSilver my-3 p-0" />

          <div className="Aggregated">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right">
                <caption className="text-lg font-bold text-left">
                  Aggregated reviews in this score
                </caption>
                <tbody className="">
                  {REVIEW_CATEGORIES.map((category, index) => {
                    const totalCount = Number(communityReviews?.review_count);
                    const count = communityReviews?.review_category_count[index];
                    const percentage =
                      count > 0 ? (count / totalCount) * 100 : 0;

                    return (
                      <tr key={category} className="border-b  last:border-b-0">
                        <th
                          scope="row"
                          className="py-2 flex justify-between w-full"
                        >
                          <span className="text-base font-normal font-openSans">
                            {category}
                          </span>
                          <span>{count}</span>
                        </th>
                        <td className="ps-4 py-2 w-2/3">
                          <div className="w-full bg-zinc-200 rounded-full h-4">
                            <div
                              className="bg-faDimGray h-4 rounded-full"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <hr className="border-t border-faSilver mt-3 p-0" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
