"use client"
import SVGRightArrow from "@/components/icons/svgRightArrow";
import { useLeadGenContext } from "@/providers/leadGen";

export default function PricingButton({
    customClass = ""
}: {
    customClass?: string
}) {
    const { isModalOpen, setIsModalOpen } = useLeadGenContext();
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <button
            onClick={toggleModal}
            className={`${customClass} bg-seafoam hover:bg-link items-center whitespace-nowrap justify-center py-3 px-5 rounded-md text-background1 capitalize text-base font-semibold ease-in-out duration-700`}
        >
            <span className="flex align-middle items-center justify-center capitalize">
                Get Personalized Pricing<SVGRightArrow width={14} height={13} />
            </span>
        </button>
    )
}