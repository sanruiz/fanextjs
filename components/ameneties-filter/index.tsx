import React, { Dispatch, SetStateAction } from 'react';
import { FilteredOptions } from '@/app/[caretype]/[state]/[city]/utils';
import CheckboxList from '../checkbox-list';

export type AmenitiesValues =
  | 'Pool'
  | 'Clubs Communities'
  | 'Beauty Barber'
  | 'Fitness Programs'
  | 'Pet Friendly'
  | 'Outdoor Areas'
  | 'Social Outings'
  | 'Housekeeping'
  | 'Activity Center'
  | 'Parking';

type AmenitiesFilterProps = {
  selectedAmenities: AmenitiesValues[] | null;
  setSelectedAmenities: Dispatch<SetStateAction<AmenitiesValues[]>>;
};

const AmenitiesFilter = ({
  selectedAmenities,
  setSelectedAmenities
}: AmenitiesFilterProps) => {
  const onCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.currentTarget;
    if (checked) {
      setSelectedAmenities((prevA) => [...prevA, value as AmenitiesValues]);
    } else {
      setSelectedAmenities((prevA) => prevA.filter((a) => a !== value));
    }
  };
  return (
    <div className='py-4 border-b'>
      <CheckboxList
        title='Amenities'
        options={FilteredOptions[0].amenities || []}
        onCheckboxClick={onCheckboxClick}
        selectedOptions={selectedAmenities?.length ? selectedAmenities as string[] : undefined}
      />
    </div>
  );
};

export default AmenitiesFilter;
