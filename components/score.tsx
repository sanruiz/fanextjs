import React from "react";

type ScoreProps = {
  score: number;
};

const reviewSummaryTitle = [
  "Not Enough Reviews",
  "Most Loved",
  "Loved",
  "Good",
  "Average",
  "Below Average",
];

const Score = ({ score }: ScoreProps) => {
  const title = score >= 5 ? reviewSummaryTitle[5] : reviewSummaryTitle[score];

  return <div className="font-bold leading-4">{title}</div>;
};

export default Score;
