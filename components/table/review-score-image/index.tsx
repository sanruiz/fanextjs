import Image from "next/image";
import React from "react";
type ReviewScoreImageT = {
  data: {
    name: string;
    reviewScore: {
      score: number;
    };
    image: string;
  }[];
};
export default function ReviewScoreImage({ data }: ReviewScoreImageT) {
  return (
    <>
      {data.map((item, index) => (
        <td key={item.name + index} className="px-6 py-4">
          <div className="flex gap-2">
            {item.reviewScore.score >= 1 && (
              <div className="flex items-center justify-center">
                <p className="absolute pb-2 font-bold text-background1 text-lg">
                  {item.reviewScore.score}
                </p>
                <Image
                  src={"/iconHeart.svg"}
                  alt="heart icon"
                  width={50}
                  height={45}
                />
              </div>
            )}
            <div>
              <Image
                src="https://media.familyassets.com/community_images/6309b074-9515-415f-8e57-c13fd3ae7d5f/familyassets/main-e81f1cd679b2983b1c568c8458920e32.jpeg?format=auto&width=430&height=400"
                alt="house image"
                width={215}
                height={200}
              />
            </div>
          </div>
        </td>
      ))}
    </>
  );
}
