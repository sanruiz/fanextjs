import { Community } from '@/types/common';

export function sortCommunitiesByPrice(
  communities: Community[],
  sortOrder: 'ASC' | 'DESC' | 'RAT_ASC' | null
): Community[] {
  // Create a new array to avoid sorting in place
  const sortedCommunities = [...communities];

  if (sortOrder === null) return sortedCommunities;

  if (sortOrder === 'RAT_ASC') {
    return sortedCommunities.sort((a, b) => b.reviews.average_rating - a.reviews.average_rating);
  }

  return sortedCommunities.sort((a, b) => {
    const priceA = a.pricing?.community_average_price || 0;
    const priceB = b.pricing?.community_average_price || 0;

    return sortOrder === 'ASC' ? priceA - priceB : priceB - priceA;
  });
}
