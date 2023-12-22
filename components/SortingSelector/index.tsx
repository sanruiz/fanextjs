import React from 'react';
import CheckboxList from '../checkbox-list';
import { FilteredOptions } from '@/app/[caretype]/[state]/[city]/utils';

interface SortingSelectorProps {
  sortOrder?: 'ASC' | 'DESC' | 'RAT_ASC' | null;
  onSortChange: (newSortOrder: 'ASC' | 'DESC' | 'RAT_ASC' | null) => void;
}

const SortingSelector: React.FC<SortingSelectorProps> = ({ sortOrder, onSortChange }) => {
  const onCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    // Toggle sort order on checkbox click
    const newSortOrder = value === sortOrder ? null : (value as 'ASC' | 'DESC' | 'RAT_ASC');
    onSortChange(newSortOrder);
  };

  return (
    <div className='py-4 border-b'>
      <CheckboxList
        title='Sort by'
        options={FilteredOptions[0].pricing || []}
        onCheckboxClick={onCheckboxClick}
        selectedOptions={sortOrder ? [sortOrder] : []}
      />
    </div>
  );
};

export default SortingSelector;
