import { Community } from "@/types/common";
import CardCommunity from "@/components/card-community";

export default function CommunitiesList({
  communities,
  careType
}: {
  communities: Community[] | undefined; // Handle potential undefined value
  careType: string;
}) {
  if (!communities || communities.length === 0) {
    return (
      <div className="text-center py-6">
        <h2>No communities to show</h2>
      </div>
    );
  }

  return (
    <div className="mx-auto md:py-6 sm:px-6 md:px-8">
      {communities?.map((community: Community) => (
        <CardCommunity
          community={community}
          careType={careType}
          key={community.mapped_comm_uuid}
        />
      ))}
    </div>
  );
}
