"use client";

import React, { useState, useEffect, Suspense, useRef } from "react";
import SortingSelector from "@/components/SortingSelector";
import PreferredFilter from "@/components/preferred-filter";
import CommunitiesList from "@/components/communities-list";
import RatingFilter from "@/components/rating-filter";
import { sortCommunitiesByPrice } from "./sorting";
import CommunityListFallback from "../community-list-fallback";
import { Community } from "@/types/common";
import { RATING_FILTERS } from "@/lib/constants";
import AmenitiesFilter, { AmenitiesValues } from "../ameneties-filter";
import Filter from "@/components/icons/filter";
import Order from "@/components/icons/order";
import Modal from "@/components/modal";
import { FilteredOptions } from "@/app/[caretype]/[state]/[city]/utils";

interface FilterSectionProps {
  initialCommunities: Community[];
  careType: string;
}

type FilterOption = {
  value: string;
  label: string;
};

type FilterCategory = {
  [key: string]: FilterOption[];
};

enum RatingCategory {
  MOST_LOVED = "MOST_LOVED",
  LOVED = "LOVED",
  GOOD = "GOOD",
  AVERAGE = "AVERAGE",
}

export default function FilterSection({
  initialCommunities,
  careType,
}: FilterSectionProps) {
  const initCommunities = useRef(initialCommunities);
  const [communities, setCommunities] = useState<Community[]>([]);
  const [sortOrder, setSortOrder] = useState<"ASC" | "DESC" | "RAT_ASC" | null>(null);
  const [showPreferred, setShowPreferred] = useState(false);
  const [selectedRating, setSelectedRating] = useState<RatingCategory | null>(null);
  const [amenities, setAmenities] = useState<AmenitiesValues[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<[FilterOption, React.SetStateAction<any>][]>([]);
  const [isSortOpen, setSortOpen] = useState(false);
  const [isFiltersOpen, setFiltersOpen] = useState(false);

  const toggleSort = () => setSortOpen(!isSortOpen);
  const toggleFilters = () => setFiltersOpen(!isFiltersOpen);

  useEffect(() => {
    let processedCommunities = initCommunities.current;
    let newAppliedFilters: [FilterOption, React.SetStateAction<any>][] = [];

    function getFilter(filterType: string, value: string): FilterOption | undefined {
      const category = FilteredOptions.find((category) => category.hasOwnProperty(filterType)) as FilterCategory | undefined;

      if (category) {
        const options: FilterOption[] = category[filterType];
        const foundOption = options.find((item) => item.value === value);

        return foundOption;
      }

      return undefined;
    }

    // Apply preferred filter
    if (showPreferred) {
      processedCommunities = processedCommunities.filter((c) => c.preferred);
      const preferredFilter = getFilter("filterBy", "preferred");
      if (preferredFilter) {
        newAppliedFilters.push([preferredFilter, setShowPreferred]);
      }
    }

    // Apply rating filter
    if (selectedRating) {
      const threshold = RATING_FILTERS[selectedRating];
      processedCommunities = processedCommunities.filter(
        (c) => c.reviews.average_rating >= threshold
      );
      const ratingFilter = getFilter("residentReviewScores", selectedRating);
      if (ratingFilter) {
        newAppliedFilters.push([ratingFilter, setSelectedRating]);
      }
    }
    // apply amenities filter
    if (amenities.length > 0) {
      processedCommunities = processedCommunities.filter((community) =>
        amenities.every((keyword) => community.highlights.includes(keyword))
      );
      amenities.forEach(amenity => {
        const amenityFilter = getFilter("amenities", amenity);
        if (amenityFilter) {
          newAppliedFilters.push([amenityFilter, setAmenities]);
        }
      });
    }

    // Sort by price
    processedCommunities = sortCommunitiesByPrice(
      processedCommunities,
      sortOrder
    );

    if (!sortOrder && !amenities.length && !selectedRating && !showPreferred) {
      setCommunities(initCommunities.current);
      setAppliedFilters([]);
      return;
    }

    setCommunities(processedCommunities);
    setAppliedFilters(newAppliedFilters);
  }, [sortOrder, showPreferred, selectedRating, amenities]);

  const handleSortChange = (
    newSortOrder: "ASC" | "DESC" | "RAT_ASC" | null
  ) => {
    setSortOrder(newSortOrder);
  };

  const removeFilter = (appliedFilter: [FilterOption, React.SetStateAction<any>]) => {
    const [filter] = appliedFilter;
    const updatedFilters = appliedFilters.filter(([existingFilter]) => existingFilter !== filter);
    setAppliedFilters(updatedFilters);
  };

  const AppliedFilters = ({
    appliedFilters
  }: {
    appliedFilters: [FilterOption, React.SetStateAction<any>][]
  }) => {
    return (
      appliedFilters.length ? (
        <div id="applied-filters" className="pt-4 block w-full">
          <h4 className='font-bold m-0 pb-1'>{`Applied filters (${appliedFilters.length})`}</h4>
          {appliedFilters.map((filter, index) => (
            <span
              key={index}
              className="inline-block mb-2 mr-2 px-8 py-2 text-sm leading-5 rounded-lg font-semibold bg-highlight hover:bg-background2 border border-navy text-primary"
            // onClick={() => removeFilter(filter)}
            >
              {/* {filter[0].label} &#x2715; */}
              {filter[0].label}
            </span>
          ))}
        </div>
      ) : null
    )
  }

  return (
    <div>
      <p className="text-xl">
        Showing <strong>{communities.length}</strong> communities
      </p>

      <div
        id="sort-filter"
        className="flex pt-4 md:hidden"
      >
        <button
          className="bg-navy text-lg text-highlight py-2 px-4 basis-2/4 border-r border-highlight flex items-center justify-between"
          onClick={toggleSort}
        >
          Sort
          <Order width={20} height={20} fill="#FFFFFF" />
        </button>
        <button
          className="bg-navy text-lg text-highlight py-2 px-4 basis-2/4 flex items-center justify-between"
          onClick={toggleFilters}
        >
          Filter
          <Filter width={24} height={24} fill="#FFFFFF" />
        </button>
      </div>
      <AppliedFilters appliedFilters={appliedFilters} />

      <div className="sm:flex w-full">
        <Modal isOpen={isSortOpen} onClose={toggleSort}>
          <SortingSelector
            sortOrder={sortOrder}
            onSortChange={handleSortChange}
          />
        </Modal>
        <Modal isOpen={isFiltersOpen} onClose={toggleFilters}>
          <PreferredFilter
            showPreferred={showPreferred}
            setShowPreferred={setShowPreferred} />
          <RatingFilter
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
          />
          <AmenitiesFilter
            setSelectedAmenities={setAmenities}
            selectedAmenities={amenities}
          />
        </Modal>
        <div className="hidden md:block md:w-2/5">
          {/* <h3>Sort by</h3> */}
          <SortingSelector
            sortOrder={sortOrder}
            onSortChange={handleSortChange}
          />
          <PreferredFilter
            showPreferred={showPreferred}
            setShowPreferred={setShowPreferred}
          />
          <RatingFilter
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
          />
          <AmenitiesFilter
            setSelectedAmenities={setAmenities}
            selectedAmenities={amenities}
          />
        </div>
        <div className="w-full">
          <Suspense fallback={<CommunityListFallback />}>
            <CommunitiesList communities={communities} careType={careType} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};