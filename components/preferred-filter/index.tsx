import { FilteredOptions } from '@/app/[caretype]/[state]/[city]/utils';
import React from 'react';
import CheckboxList from '../checkbox-list';

interface PreferredFilterProps {
  showPreferred: boolean;
  setShowPreferred: (show: boolean) => void;
}

const PreferredFilter: React.FC<PreferredFilterProps> = ({
  showPreferred,
  setShowPreferred
}) => {

  const onCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.checked = !showPreferred;
    setShowPreferred(!showPreferred);
  };

  return (
    <div className='py-4 border-b'>
      <CheckboxList
        title='Preferred Providers only'
        options={FilteredOptions[0].filterBy || []}
        onCheckboxClick={onCheckboxClick}
        selectedOptions={showPreferred ? ["preferred"] : undefined}
      />
    </div>
  );
};

export default PreferredFilter;
