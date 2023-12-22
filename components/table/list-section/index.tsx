import React from "react";
type ListSectionT = {
  title?: string;
  items: string[];
};

const ListSection = ({ title, items }: ListSectionT) => {
  return (
    <td className="p-5 sm:align-top">
      <p className="font-bold whitespace-normal">{title}</p>
      <ul className="list-disc text-left text-link px-6 py-4">
        {items.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
    </td>
  );
};

export default ListSection;
