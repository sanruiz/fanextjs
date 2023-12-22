import React from "react";
type TextCellT = {
  text: string;
};
const TitleCell = ({ text }: TextCellT) => {
  return (
    <th
      scope="row"
      className="px-6 py-4 text-right font-bold whitespace-normal"
    >
      {text}
    </th>
  );
};

export default TitleCell;
