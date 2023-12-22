'use client'
import { Community, Nearby } from "@/types/common";
import { useState } from "react";
import ChevronDown from "@/components/icons/chevron-down";
import SVGHospitals from "@/components/icons/hospitals";
export default function Hospitals({ community }: { community: Community }) {
    const [showMore, setShowMore] = useState(false);
    return (
        (community?.nearby_hospitals_found && community?.nearby_hospitals_found) ?
            <section id="hospitals" className="container mx-auto max-w-6xl text-grey-dark px-4 pt-10 md:pt-20 flex flex-col">
                <div className="flex gap-2 items-center">
                    <SVGHospitals width={27} height={27} color="#525252" />
                    <h4 className="font-montserrat font-semibold my-0 text-xl/6">Hospitals</h4>
                </div>
                <hr className="my-6 block border-divider" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 font-open-sans mb-6">
                    {(community?.nearby_hospitals_found && community?.nearby_hospitals_found <= 3) ?
                        community.nearby_hospitals?.map(hospital => (
                            <div key={hospital?.name} className="text-lg/6">
                                <p><strong className="underline">{hospital?.name}</strong></p>
                                <p>{hospital?.address}</p>
                                <p><strong>Distance:</strong> {hospital?.distance}</p>
                            </div>
                        )) : community?.nearby_hospitals?.slice(0, 3).map(hospital => (
                            <div key={hospital?.name} className="text-lg/7">
                                <p><strong className="underline">{hospital?.name}</strong></p>
                                <p>{hospital?.address}</p>
                                <p><strong>Distance:</strong> {hospital?.distance}</p>
                            </div>
                        )
                    )}
                    {showMore ? community?.nearby_hospitals?.slice(3).map(hospital => (
                        <div key={hospital?.name} className="text-lg/7">
                            <p><strong className="underline">{hospital?.name}</strong></p>
                            <p>{hospital?.address}</p>
                            <p><strong>Distance:</strong> {hospital?.distance}</p>
                        </div>
                    )) : ''}
                </div>
                {(community?.nearby_hospitals_found && community?.nearby_hospitals_found > 3) ?
                    <button className="underline self-start flex items-center font-medium" onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Show less" : "Show more"}
                        <ChevronDown width={23} height={25} color="#525252" className={`${showMore ? "transform rotate-180" : ""}`} />
                    </button>
                : ''}
            </section>
            : ''
    )
}