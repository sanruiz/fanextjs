import React from "react";

type OptionT = {
  value: number;
  label: string;
};

type SortDropdownProps = {
  options: OptionT[];
  selectedOption: number;
  onOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SortDropdown: React.FC<SortDropdownProps> = ({
  options,
  selectedOption,
  onOptionChange,
}) => (
  <div className="border-b border-black text-sm">
    <select
      className="w-full bg-transparent"
      value={selectedOption}
      onChange={onOptionChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SortDropdown;
