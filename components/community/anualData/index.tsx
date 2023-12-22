"use client"

import ChevronUpCircle from "@/components/icons/chevron-up-circle";
import { Community, Ratings } from "@/types/common";
import { Dispatch, SetStateAction, useState } from "react";

export default function AnualData({ community }: { community: Community }) {
  const [showMoreAvailability, setShowMoreAvailability] = useState(false);
  const [showMoreRatings, setShowMoreRatings] = useState(false);
  const [showMoreIncidents, setShowMoreIncidents] = useState(false);
  const [showMoreStaffHours, setShowMoreStaffHours] = useState(false);
  const [showMoreStaffTurnover, setShowMoreStaffTurnover] = useState(false);

  if (!community?.annual_data || !community?.annual_data?.local) {
    return null;
  }

  const generateRatingElements = (
    values: Ratings,
    localValues: Ratings,
    showMore: boolean,
    setShowMore: Dispatch<SetStateAction<boolean>>
  ) => {
    const maxElementsToShow = 4;
    const itemsToDisplay = showMore ? Object.entries(values) : Object.entries(values).slice(0, maxElementsToShow);
    const elements = itemsToDisplay.map(([key, value]) => {
      if (key in localValues) {
        return (
          <div key={key} className="flex flex-wrap">
            <h4 className="font-bold capitalize mb-0 basis-full">
              {key.replace(/_/g, " ")}
            </h4>
            <div className="flex self-end">
              <span className="my-2 inline-block rounded-full bg-link px-6 pb-2 pt-2.5 text-lg font-bold uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out mr-3">
                {Math.round(value)}
              </span>
              <div className="text-center text-link flex flex-col justify-center">
                <span className="font-bold">{parseFloat(localValues[key].toFixed(1))}</span>
                <p className="text-xs font-bold ">Local Avg</p>
              </div>
            </div>
          </div>
        );
      }
      return null;
    });
    const showMoreButton = (Object.entries(values).length > maxElementsToShow) ? (
        <div key="showMoreAnualData" className="font-bold col-span-full text-link border-t border-t-link mt-8 pt-2 flex justify-center">
          <button className="flex flex-col items-center" onClick={() => setShowMore(!showMore)}>
            <span>{showMore ? "Less" : "More"}</span>
          <ChevronUpCircle width={18} height={18} stroke="#4F6CC4" className={`mt-1 transform ${showMore ? "rotate-0" : "rotate-180"}`} /></button>
        </div>
      ) : null;
    return <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 gap-x-12">{elements}</div>
      {showMoreButton}
    </>;
  };

  const translateYesNo = (input: "N" | "Y"): "No" | "Yes" => {
    return input === "N" ? "No" : "Yes";
  };

  const medicaidStartDate =
    new Date(
      community?.annual_data?.medicaid_start_date || ""
    ).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }) || "";
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      <section
        id="AnnualData"
        className="bg-grey-light max-w-full text-grey-dark"
      >
        <h4 className="font-montserrat font-extrabold text-sm/7 block my-0 uppercase">
          ANNUAL DATA
        </h4>
        <h3 className="font-montserrat font-semibold text-[2.125rem]/[2.25rem] my-0 block">
          {community.name}
        </h3>
        <hr className="my-6 block border-divider" />

        <div
          id="availability"
          className="overview-boxwhite px-4 py-12 shadow-lg rounded-lg bg-white wrapper font-openSans"
        >
          <h3 className="mt-0">Availability</h3>
          <p>
            Each community has a certified number of beds that are available.
          </p>
            {generateRatingElements(
              community.annual_data.availability,
              community.annual_data.local.availability,
              showMoreAvailability,
              setShowMoreAvailability
            )}
        </div>

        <div
          id="ratings"
          className="overview-boxwhite px-4 py-12 shadow-lg rounded-lg bg-white wrapper font-openSans"
        >
          <h3 className="mt-0">Ratings</h3>
          <p>
            User ratings are a trustworthy source of information about a
            community.
          </p>
            {generateRatingElements(
              community.annual_data.ratings,
              community.annual_data.local.ratings,
              showMoreRatings,
              setShowMoreRatings
            )}
        </div>

        <div
          id="incidents"
          className="overview-boxwhite px-4 py-12 shadow-lg rounded-lg bg-white wrapper font-openSans"
        >
          <h3 className="mt-0">Incidents</h3>
          <p>Incidents within a community must be reported and documented.</p>
            {generateRatingElements(
              community.annual_data.incidents,
              community.annual_data.local.incidents,
              showMoreIncidents,
              setShowMoreIncidents
            )}
        </div>

        <div
          id="staffHours"
          className="overview-boxwhite px-4 py-12 shadow-lg rounded-lg bg-white wrapper font-openSans"
        >
          <h3 className="mt-0">
            Staff Hours{" "}
            <small className="text-lg">(per resident per day)</small>
          </h3>
            {generateRatingElements(
              community.annual_data.staff_hours,
              community.annual_data.local.staff_hours,
              showMoreStaffHours,
              setShowMoreStaffHours
            )}
        </div>

        <div
          id="staffTurnover"
          className="overview-boxwhite px-4 py-12 shadow-lg rounded-lg bg-white wrapper font-openSans"
        >
          <h3 className="mt-0">
            Staff Turnover <small className="text-lg">(per year)</small>
          </h3>
            {generateRatingElements(
              community.annual_data.staff_turnover,
              community.annual_data.local.staff_turnover,
              showMoreStaffTurnover,
              setShowMoreStaffTurnover
            )}
        </div>

        <div
          id="details"
          className="overview-boxwhite px-4 py-12 shadow-lg rounded-lg bg-white wrapper font-openSans"
        >
          <h3 className="mt-0">Facility Details</h3>
          <ul className="grid md:grid-cols-2 grid-cols-1">
            <li>
              <h4 className="font-bold capitalize mb-0">Legal name</h4>
              <p>{community.annual_data?.legal_name}</p>
            </li>
            <li>
              <h4 className="font-bold capitalize mb-0">Ownership type</h4>
              <p>{community.annual_data?.ownership_type}</p>
            </li>
            <li>
              <h4 className="font-bold capitalize mb-0">
                Federal Provider Number
              </h4>
              <p>{community.annual_data?.federal_provider_number}</p>
            </li>
            <li>
              <h4 className="font-bold capitalize mb-0">
                Provider SSA county code
              </h4>
              <p>{community.annual_data?.provider_ssa_county_code}</p>
            </li>
            <li>
              <h4 className="font-bold capitalize mb-0">Certification</h4>
              <p>{community.annual_data?.certification}</p>
            </li>
            <li>
              <h4 className="font-bold capitalize mb-0">Medicaid start date</h4>
              <p>{medicaidStartDate}</p>
            </li>
            <li>
              <h4 className="font-bold capitalize mb-0">Type of council</h4>
              <p>{community.annual_data?.resident_and_family_council}</p>
            </li>
            <li>
              <h4 className="font-bold capitalize mb-0">
                Ownership change in last 12 months
              </h4>
              <p>
                {translateYesNo(
                  community.annual_data?.ownership_change_last_12_months || "N"
                )}
              </p>
            </li>
            <li>
              <h4 className="font-bold capitalize mb-0">
                Health inspection in last 2 years
              </h4>
              <p>
                {translateYesNo(
                  community.annual_data?.health_inspection_in_last_two_years ||
                  "N"
                )}
              </p>
            </li>
            <li>
              <h4 className="font-bold capitalize mb-0">Located in hospital</h4>
              <p>
                {translateYesNo(
                  community.annual_data?.located_in_hospital || "N"
                )}
              </p>
            </li>
            <li>
              <h4 className="font-bold capitalize mb-0">
                Continuing Care Retirement Community
              </h4>
              <p>{translateYesNo(community.annual_data?.ccrc || "N")}</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}