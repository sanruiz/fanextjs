import React from "react";
import HelpInformationIcon from "@/components/help-information-icon";
import Score from "@/components/score";
import Heart from "@/components/heart";

type ReviewScoreSectionT = {
  item: {
    reviewScore: {
      icon?: string;
      score: number;
      text: string;
      isInfoCircle?: boolean;
    };
  };
};

export default function ReviewScoreSection({ item }: ReviewScoreSectionT) {
  return (
    <div className="flex gap-2 items-center">
      {item.reviewScore.score >= 1 && (
        <div className="pr-2">
          <Heart size="small" variant="bgBlue">
            {item.reviewScore.score}
          </Heart>
        </div>
      )}
      <div>
        <div className="flex gap-1">
          <p className="text-xs">{item.reviewScore.text}</p>
          {item.reviewScore.isInfoCircle && (
            <HelpInformationIcon text="Resident Review Score is calculated from the reviews and other custom metrics gathered on this community." />
          )}
        </div>
        <Score score={item.reviewScore.score} />
      </div>
    </div>
  );
}
