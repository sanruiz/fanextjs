"use client"

import { Amenities, Community } from "@/types/common";
import DynamicSVGIcon from "@/components/icons/dynamic-icon";
import Image from "next/image";
import ChevronDown from "@/components/icons/chevron-down";
import "./amenities.styles.css"
import { useEffect, useState } from "react";
import { DEVICE_TYPES } from "@/lib/constants";

export default function Amenities({
    community
}: {
    community: Community
}) {
    const [deviceType, setDeviceType] = useState<string>(DEVICE_TYPES.mobile);
    const Amenities: Amenities = community.amenities || {};

    const renderHighlight = (highlight: string | string[]) => {
        if (typeof highlight === 'string') {
            return (
                <DynamicSVGIcon
                    icon={highlight}
                    iconWidth={114}
                    iconHeight={114}
                    path="/amenities"
                    fallback="/amenities/quality"
                    loading={true}
                />
            );
        } else {
            const [src, label] = highlight;
            return (<div className="w-[114px] h-[114px] flex relative" ><Image src={src} alt={label} fill  /></div>);
        }
    };

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const deviceType = isMobile ? DEVICE_TYPES.mobile : DEVICE_TYPES.desktop;
        setDeviceType(deviceType);
    }, [])

    return (
        <section id="amenities" className="bg-grey-light max-w-full text-grey-dark">
            <div className="py-10 md:py-20 flex flex-col [&>*:last-child]:mb-0">
                <h4 className="font-montserrat font-extrabold text-sm/7 block my-0 uppercase">Amenities</h4>
                <h3 className="font-montserrat font-semibold text-[2.125rem]/[2.25rem] my-0 block">{community.name}</h3>
                <hr className="my-6 block border-divider" />

                <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-10 font-open-sans mb-10 md:mb-0">
                {community.highlights?.map((highlight, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="bg-white rounded-2xl py-2 mb-4 w-full flex items-center justify-center">
                            {renderHighlight(highlight)}
                        </div>
                        <h5 className="text-lg font-bold my-0 md:mb-10">{typeof highlight === 'string' ? highlight : highlight[1]}</h5>
                    </div>
                ))}
            </div>


                {Object.keys(Amenities).map((amenity: string) => (
                    <details className="amenities" key={amenity} {...(deviceType === DEVICE_TYPES.desktop ? {open: true} : {})}>
                        <summary className="flex flex-col">
                            <div className="flex gap-2 items-center">
                                <DynamicSVGIcon
                                    icon={amenity}
                                    iconWidth={27}
                                    iconHeight={27}
                                    fallback="/services"
                                />
                                <h4 className="font-montserrat font-semibold my-0 text-2xl/7">{amenity}</h4>
                                <ChevronDown width={23} height={25} color="#525252" className="mr-0 ml-auto arrow md:hidden" />
                            </div>
                            <hr className="my-6 block border-divider" />
                        </summary>
                        <div className="columns-1 md:columns-3 font-open-sans mb-10 font-medium">
                            {Amenities[amenity]?.map((service: string) => (
                                <p key={service} className="text-lg/7">{service}</p>
                            ))}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}