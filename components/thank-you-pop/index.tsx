import { Community } from "@/types/common";
import LogoIcon from "../icons/logo";
import SVGRightArrow from "../icons/svgRightArrow";
import Image from "next/image";

export default function ThankYouPop({
  onCloseModal,
  community,
}: {
  onCloseModal: () => void;
  community: Community;
}) {
  return (
    <div className="p-4 w-full h-full flex items-center justify-center">
      <div className="max-w-lg flex flex-col justify-center items-center">
        <Image
          src="/thankyou.svg"
          alt="thankyou"
          className="mb-5"
          width={510}
          height={225}
        />
        <div className=" thankyou-text mt-5 flex flex-col justify-center items-center">
          <p className="mt-4 mb-8 text-center text-primary text-[20px] leading-7 font-normal">
            Your review has been received and will be reviewed by our staff.
            Once approved, you can expect to see your review on our website in
            1-2 business days.
          </p>
          <button
            onClick={onCloseModal}
            className="flex p-4 items-center justify-center text-[#fff] transition-all duration-[0.4s] ease bg-secondary rounded font-semibold text-base leading-[26px] hover:bg-primary "
          >
            Return to {community.name}{" "}
            <SVGRightArrow width={16} height={12} stroke={"#fff"} />
          </button>
        </div>
      </div>
    </div>
  );
}
