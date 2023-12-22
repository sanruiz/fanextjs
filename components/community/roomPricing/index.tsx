"use client";
import TwoRoomIcon from "@/components/icons/roomprice/twoRoomIcon";
import SVGRightArrow from "@/components/icons/svgRightArrow";
import StudioRoomIcon from "@/components/icons/roomprice/studioRoomIcon";
import OneRoomIcon from "@/components/icons/roomprice/oneRoomIcon";
import FormattedPrice from "@/lib/auxilary/formattedPrice";
import ChevronUpCircle from "@/components/icons/chevron-up-circle";
import { useEffect, useState } from "react";
import { Community, PricingRoom } from "@/types/common";
import "./room-pricing.styles.css";
import { DEVICE_TYPES } from "@/lib/constants";
import { useLeadGenContext } from "@/providers/leadGen";

export default function RoomPricing({
  community,
  careType,
}: {
  community: Community;
  careType: string;
}) {
  const [deviceType, setDeviceType] = useState<string>(DEVICE_TYPES.mobile);

  const groupRoomCareType = (datos: any[] | undefined) => {
    if (!datos) return {};

    return datos?.reduce((groups, item) => {
      const roomCareType = item.room_care_type;

      if (!groups[roomCareType]) {
        groups[roomCareType] = [];
      }

      groups[roomCareType].push(item);

      return groups;
    }, {});
  };

  const groups = groupRoomCareType(community.src_room_fields?.pricings);
  const [activeTab, setActiveTab] = useState(Object.keys(groups)[0]);

  const roomIconsType = (roomType: string, width = 40, height = 40) => {
    switch (roomType) {
      case "Studio":
        return <StudioRoomIcon width={width} height={height} />;
      case "One Bedroom":
        return <OneRoomIcon width={width} height={height} />;
      case "Two Bedroom":
        return <TwoRoomIcon width={width} height={height} />;
      default:
        return <StudioRoomIcon width={width} height={height} />;
    }
  };

  const { isModalOpen, setIsModalOpen } = useLeadGenContext();
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const deviceType = isMobile ? DEVICE_TYPES.mobile : DEVICE_TYPES.desktop;
    setDeviceType(deviceType);
  }, [])

  return (
    <>
      {deviceType === DEVICE_TYPES.desktop && (
        <>
          <div className="flex justify-between border-b-[1px]">
            <h3 className="text-[1.75rem] leading-8 font-semibold">
              Room Pricing
            </h3>
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
            >
              {Object.keys(groups).map((key, index) => (
                <li className="me-2" role="presentation" key={index + key}>
                  <button
                    className={`inline-block px-6 py-4 text-base font-semibold leading-7 h-full bg-faGrayWhite rounded-t-[0.25rem] ${
                      activeTab === key
                        ? "border-[1px] border-b-4 border-b-white bg-white"
                        : ""
                    }  `}
                    id={`${key.replaceAll(" ", "")}-tab`}
                    data-tabs-target={`#${key.replaceAll(" ", "")}`}
                    type="button"
                    role="tab"
                    aria-controls={key.replaceAll(" ", "")}
                    aria-selected={index === 0}
                    onClick={() => setActiveTab(key)}
                  >
                    {key}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div id="default-tab-content">
            {Object.keys(groups).map((key, index) => (
              <div
                className={` my-6 py-8 rounded-lg ${
                  activeTab !== key ? "hidden" : ""
                } `}
                id={key.replaceAll(" ", "")}
                role="tabpanel"
                aria-labelledby={`${key.replaceAll(" ", "")}-tab`}
                key={index + key}
              >
                <div className="grid grid-cols-3 gap-2">
                  {groups[key].map((item: PricingRoom, index: number) => (
                    <div
                      className={`w-full flex justify-between items-center py-2 border-dotted border-faSilver cursor-pointer ${
                        index !== groups[key].length - 1 || index % 3 === 0
                          ? "border-r-[1px] pr-2"
                          : ""
                      } `}
                      key={index}
                      onClick={toggleModal}
                    >
                      <div className="flex items-center">
                        <div
                          className={
                            "flex items-center justify-center w-[5.31rem] h-[5.31rem]"
                          }
                        >
                          {roomIconsType(item.normalized_room_type, 56, 56)}
                        </div>
                        <div className="flex flex-col">
                          <span className={"text-base font-semibold"}>
                            {item.normalized_room_type}
                          </span>
                          <span className={"text-xs font-semibold leading-3"}>
                            Starting at
                          </span>
                          <FormattedPrice
                            className={"text-xl font-bold"}
                            style={{
                              lineHeight: "105.182%",
                            }}
                          >
                            {item.price_low}
                          </FormattedPrice>
                        </div>
                      </div>

                      <button className="underline flex items items-center justify-center text-faDavysGray text-sm font-semibold">
                        Get Your Price
                        <SVGRightArrow
                          width={10}
                          height={8}
                          stroke={"#525252"}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* <!--tabs--> */}

          <hr className="border-dotted border-faSilver my-6 p-0" />

          {/* <!--Personal Care Add-Ons--> */}
        </>
      )}
      {deviceType === DEVICE_TYPES.mobile && (
        <>
          <span
            className=" leading-8 font-semibold "
            style={{
              fontSize: "1.75rem",
            }}
          >
            Room Pricing
          </span>
          <div className="my-2">
            {Object.keys(groups).map((key, index) => (
              <details
                className={`room-pricing group flex flex-col p-2 border-solid border-faSilver border-t-[1px] ${
                  index !== Object.keys(groups).length - 1
                    ? ""
                    : "border-b-[1px]"
                }`}
                tabIndex={1}
                key={key + index}
                {...(index === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer items-center justify-between">
                  <span>{key}</span>
                  <ChevronUpCircle width={18} height={18} stroke="#AAAAAA" />
                </summary>
                <div className="flex flex-col items-center transition-all">
                  {groups[key].map((item: PricingRoom, index: number) => (
                    <div
                      className={`w-full flex justify-between items-center py-2 border-dotted border-faSilver  cursor-pointer${
                        index !== groups[key].length - 1 ? "border-b-[1px]" : ""
                      } `}
                      key={index}
                      onClick={toggleModal}
                    >
                      <div className="flex">
                        <div
                          className={
                            "flex items-center justify-center w-[3.9rem] h-[3.9rem]"
                          }
                        >
                          {roomIconsType(item.normalized_room_type)}
                        </div>
                        <div className="flex flex-col">
                          <span className={"text-base font-semibold"}>
                            {item.normalized_room_type}
                          </span>
                          <span className={"text-xs font-semibold leading-3"}>
                            Starting at
                          </span>
                          <FormattedPrice
                            className={"text-xl font-bold"}
                            style={{
                              lineHeight: "105.182%",
                            }}
                          >
                            {item.price_low}
                          </FormattedPrice>
                        </div>
                      </div>

                      <button className="underline flex items items-center justify-center text-faDavysGray text-sm font-semibold">
                        Get Pricing
                        <SVGRightArrow
                          width={10}
                          height={8}
                          stroke={"#525252"}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </>
      )}
    </>
  );
}
