import { DATA_OPTIONS_COMPARE } from "@/app/thank-you/utils";
import Image from "next/image";
import React from "react";
import ContentNavy from "@/components/call-to-action/content-navy";
import ReviewScoreSection from "@/components/review-score";
import InfoRow from "@/components/table/info-row";
import ListSection from "@/components/table/list-section";

export default function OptionCompareTableMobile() {
  return (
    <div className="container max-w-3xl px-8 w-full md:max-w-6xl mx-auto">
      <ContentNavy
        title={"Compare Your Options"}
        titleSize={"text-3xl"}
        content={
          " See how the community you were looking at compares to nearby alternatives."
        }
        contentSize={"text-xl"}
        rounded={"rounded-t-lg"}
        textButton={"Download Checklist"}
      />
      <table className=" overflow-x-auto w-full text-sm text-left">
        <tbody className="bg-white">
          {DATA_OPTIONS_COMPARE.map((item, index) => (
            <React.Fragment key={"fragment" + index}>
              <tr className="border-b border-t-0 font-bold flex flex-col">
                <td className="whitespace-normal p-0">
                  <div className="w-full border-t-8 border-navy">
                    <Image
                      src={item.image}
                      alt="house image"
                      width={900}
                      height={700}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-3xl font-semibold">{item.name}</p>
                    <div className="w-2/5 whitespace-normal font-light pb-4">
                      {item.address}
                    </div>
                    <ReviewScoreSection item={item} />
                  </div>
                </td>
              </tr>
              <tr className="border-b font-bold">
                <td className="whitespace-normal p-5">
                  <InfoRow
                    label="Monthly Price"
                    value={item.monthlyPrice}
                    variant="large"
                  />
                  <InfoRow label="Initial Fee" value={item.initialFee} />
                  <InfoRow label="Availability" value={item.availability} />
                </td>
              </tr>
              <tr className="border-b">
                <ListSection title="Care Types" items={item.careTypes} />
              </tr>
              <tr className="border-b">
                <ListSection title="Amenities" items={item.amenities} />
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <ContentNavy
        content={
          " Get this chart with additional checklist items you can print and use to take notes when you tour."
        }
        rounded={"rounded-b-lg"}
        textButton={"Download Checklist"}
      />
    </div>
  );
}
