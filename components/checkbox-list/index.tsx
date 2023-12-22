import { slugify } from '@/lib/auxilary/slugify';
import React from 'react';

type CheckboxListProps = {
  title?: string;
  options: { value: string; label: string }[];
  onCheckboxClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  useSingleCheckbox?: boolean;
  selectedOptions?: string[]; // Add prop for selected options
};

const CheckboxList: React.FC<CheckboxListProps> = ({
  title,
  options,
  onCheckboxClick,
  useSingleCheckbox = false,
  selectedOptions = [] // Default to an empty array
}) => {

  const handleCheckboxClick = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    onCheckboxClick(event);
  };

  return (
    <div>
      {title && <h4 className='font-bold m-0 pb-1'>{title}</h4>}
      {options.map((option, index) => (
        <div key={index}>
          <input
            className='w-4 h-4 mr-1'
            type={useSingleCheckbox ? "radio" : "checkbox"}
            value={option.value}
            id={`sort-box-${slugify(option.value)}`}
            name={`sort-box-${slugify(option.value)}`}
            onChange={(e) => handleCheckboxClick(e, option.value)}
            checked={selectedOptions.includes(option.value)}
          />
          <label htmlFor={`sort-box-${slugify(option.value)}`}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;
