import React, { useEffect, useState } from "react";
import "./pricing-compared.styles.css";
import { Community } from "@/types/common";
import FormattedPrice from "@/lib/auxilary/formattedPrice";
import PricingButton from "@/components/community/pricingButton";

const PricingCompared = ({
  community,
  careType,
}: {
  community: Community;
  careType: String;
}) => {
  function calculatePricePercentage(community: Community) {
    const min = parseFloat(community.pricing.dma_min_price.toString());
    const max = parseFloat(community.pricing.dma_max_price.toString());
    const average = parseFloat(community.pricing.average_price_dma.toString());

    const numCount = average - min;
    const totalCount = max - min;

    const pricePercentage =
      totalCount !== 0 ? (numCount / totalCount) * 100 : 0;

    return Math.ceil(pricePercentage);
  }

  const pricePercentage = calculatePricePercentage(community);
  const priceStyles: React.CSSProperties & { "--price-percentage": string } = {
    "--price-percentage": `${pricePercentage}%`,
  };

  return (
    <div className="overview-boxwhite px-4 py-12 shadow-lg rounded-lg bg-white wrapper font-openSans">
      <div id="local-avg" className="boxwhite-common">
        <div className="">
          <div className="m-0 flex justify-between items-center mb-2 xl:pt-2 pb-2">
            <h2 className="text-3xl leading-8 font-semibold m-0">
              Pricing Compared
            </h2>
            <PricingButton customClass="hidden md:flex"></PricingButton>
          </div>
        </div>

        {community?.pricing?.min_price && community.pricing.min_price > 0 && (
          <>
            <div className="h-px bg-faSilver"></div>
            <p className="text-base leading-[1.125rem] font-semibold m-0 mt-2 mb-3 font-montserrat">
              {community.name}
            </p>

            <div className="flex flex-col gap-6 py-3 mt-2 md:flex-row md:justify-between md:items-end">
              <div className="w-full md:w-1/2">
                <div className="flex justify-between mb-4 px-4">
                  <span className="text-xss leading-[1.8rem] font-openSans font-semibold text-faDimGray relative vline extended_vline md:text-[1.13rem]">
                    Lower
                  </span>
                  <span className="text-xss leading-[1.8rem]  font-openSans font-semibold text-faDimGray relative vline extended_vline md:text-[1.13rem]">
                    Higher
                  </span>
                </div>
                <div
                  className="w-full bg-gray-200 rounded-full h-2.5 p-px relative"
                  style={priceStyles}
                >
                  <div
                    className="bg-stone-600 h-2 rounded-full"
                    style={{ width: `var(--price-percentage)` }}
                  ></div>
                  <span
                    className={`text-base leading-6 font-bold absolute vline vilne_price md:text-3xl md:leading-7 pricing`}
                  >
                    <FormattedPrice>
                      {community.pricing.min_price || 0}
                    </FormattedPrice>
                  </span>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-base leading-[1.8rem] font-bold md:text-[1.8rem] md:leading-[3.1rem]">
                    <FormattedPrice>
                      {community.pricing.dma_min_price || 0}
                    </FormattedPrice>
                  </span>
                  <span className="font-openSans font-semibold text-faDimGray md:text-2xl text-center md:leading-[3.1rem]">
                    Starting Price
                  </span>
                  <span className="text-base leading-[1.8rem] font-bold md:text-[1.8rem] md:leading-[3.1rem]">
                    <FormattedPrice>
                      {community.pricing.dma_max_price || 0}
                    </FormattedPrice>
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-xss md:text-[0.91rem] font-openSans text-right font-semibold leading-10 text-faDimGray">
                  Starting price
                </p>
                <ul className="">
                  <li className="text-sm font-semibo flex justify-between border-b border-dashed border-gray-300">
                    <span className="text-base font-semibold leading-10 text-faDimGray md:text-[1.46rem]">
                      Within 25 Miles
                    </span>
                    <span className="text-base font-bold leading-10 md:text-[1.46rem]">
                      <FormattedPrice>
                        {community.pricing
                          .average_monthly_price_within_25miles || 0}
                      </FormattedPrice>
                    </span>
                  </li>
                  <li className="text-sm font-semibo flex justify-between border-b border-dashed border-gray-300">
                    <span className="text-base font-semibold leading-10 text-faDimGray md:text-[1.46rem]">
                      In {community.pricing.market}
                    </span>
                    <span className="text-base font-bold leading-10 md:text-[1.46rem]">
                      <FormattedPrice>
                        {community.pricing.statewide_average || 0}
                      </FormattedPrice>
                    </span>
                  </li>
                  <li className="text-sm font-semibo flex justify-between">
                    <span className="text-base font-semibold leading-10 text-faDimGray md:text-[1.46rem]">
                      In {community.state}
                    </span>
                    <span className="text-base font-bold leading-10 md:text-[1.46rem]">
                      $6,500
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
        <div className={"mt-10 pb-3 md:hidden"}>
          <PricingButton customClass="w-full"></PricingButton>
        </div>
      </div>
    </div>
  );
};

export default PricingCompared;
