import { DATA_OPTIONS_COMPARE } from "@/app/thank-you/utils";
import Image from "next/image";
import React from "react";
import ContentNavy from "@/components/call-to-action/content-navy";
import ReviewScoreSection from "../review-score";
import ListSection from "@/components/table/list-section";
import TitleCell from "@/components/table/title-cell";
import PreferredBadgeImage from "@/components/table/preferred-badge-image-cell";
import InfoRow from "@/components/table/info-row";

export default function OptionsCompareTable() {
  return (
    <div className="container max-w-3xl px-8 w-full md:max-w-6xl mx-auto">
      <ContentNavy
        title={" Compare Your Options"}
        content={
          " See how the community you were looking at compares to nearby alternatives."
        }
        rounded={"rounded-t-lg"}
        textButton={"Download Checklist"}
      />
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <tbody className="bg-white">
            <tr className="border-b">
              <TitleCell text="" />
              <PreferredBadgeImage data={DATA_OPTIONS_COMPARE} />
            </tr>
            <tr className=" border-b font-bold">
              <TitleCell text="Name" />
              {DATA_OPTIONS_COMPARE.map((item, index) => (
                <td key={item.name + index} className="px-6 py-4 text-base">
                  {item.name}
                </td>
              ))}
            </tr>
            <tr className=" border-b">
              <TitleCell text="Address" />
              {DATA_OPTIONS_COMPARE.map((item, index) => (
                <td
                  key={item.name + index}
                  className="px-8 py-4 whitespace-normal"
                >
                  {item.address}
                </td>
              ))}
            </tr>
            <tr className="border-b">
              <TitleCell text="Review Score" />
              {DATA_OPTIONS_COMPARE.map((item, index) => (
                <td key={item.name + index} className="px-6 py-4">
                  <ReviewScoreSection item={item} />
                </td>
              ))}
            </tr>
            <tr className=" border-b">
              <TitleCell text="Monthly Price" />
              {DATA_OPTIONS_COMPARE.map((item, index) => (
                <td key={item.name + index} className="font-bold">
                  <InfoRow variant="large" value={item.monthlyPrice} />
                </td>
              ))}
            </tr>
            <tr className="border-b">
              <TitleCell text="Initial Community Fee" />
              {DATA_OPTIONS_COMPARE.map((item, index) => (
                <td key={item.name + index} className="font-bold">
                  <InfoRow value={item.initialFee} />
                </td>
              ))}
            </tr>
            <tr className="border-b">
              <TitleCell text="Cost Bracket for the Area ($$$)" />
              {DATA_OPTIONS_COMPARE.map((item, index) => (
                <td key={item.name + index} className="px-6 py-4">
                  <div className="flex justify-evenly">
                    <Image
                      src={item.costIcon}
                      alt="Cost Icon"
                      width={50}
                      height={50}
                    />
                  </div>
                </td>
              ))}
            </tr>
            <tr className="border-b">
              <TitleCell text="Availability" />
              {DATA_OPTIONS_COMPARE.map((item, index) => (
                <td key={item.name + index} className="font-semibold">
                  <InfoRow variant={"medium"} value={item.availability} />
                </td>
              ))}
            </tr>
            <tr className="border-b">
              <TitleCell text="Care Types" />
              {DATA_OPTIONS_COMPARE.map((item, index) => (
                <ListSection items={item.careTypes} key={index} />
              ))}
            </tr>
            <tr className="border-b">
              <TitleCell
                text="Caregiver to
                Patient Ratio"
              />
              {DATA_OPTIONS_COMPARE.map((item, index) => (
                <td key={item.name + index} className={"text-center"}>
                  <InfoRow value={item.caregiverToPatientRatio} />
                </td>
              ))}
            </tr>
            <tr className="border-b">
              <TitleCell text="Care Levels" />
              {DATA_OPTIONS_COMPARE.map((item, index) => (
                <ListSection items={item.careTypes} key={index} />
              ))}
            </tr>
            <tr className="border-b">
              <TitleCell text="Amenities" />
              {DATA_OPTIONS_COMPARE.map((item, index) => (
                <ListSection items={item.amenities} key={index} />
              ))}
            </tr>
          </tbody>
        </table>
      </div>
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
