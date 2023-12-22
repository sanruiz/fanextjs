import { FilteredOptions } from '@/app/[caretype]/[state]/[city]/utils';
import CheckboxList from '../checkbox-list';

interface RatingFilterProps {
  selectedRating: RatingCategory | null;
  setSelectedRating: (rating: RatingCategory | null) => void;
}

export enum RatingCategory {
  MOST_LOVED = 'MOST_LOVED',
  LOVED = 'LOVED',
  GOOD = 'GOOD',
  AVERAGE = 'AVERAGE',
}

const RatingFilter: React.FC<RatingFilterProps> = ({
  selectedRating,
  setSelectedRating
}) => {

const onCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.currentTarget;
    if (checked) {
        setSelectedRating(value as RatingCategory);
    } else {
        setSelectedRating(null);
    }
};

  return (
    <div className='py-4 border-b'>
      <CheckboxList
        title='Resident Review Scores'
        options={FilteredOptions[0].residentReviewScores || []}
        onCheckboxClick={onCheckboxClick}
        selectedOptions={selectedRating ? [selectedRating] : undefined}
      />
    </div>
  );
};

export default RatingFilter;
