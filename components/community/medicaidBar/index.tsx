import MedicaidIcon from "@/components/icons/medicAidIcon";
import Link from "next/link";
import RightArrow from "@/components/icons/right-arrow";

export default function MedicAidBar({
  state,
  careType,
}: {
  state: String;
  careType: String;
}) {
  const linkInfo = {
    nursingHomes: {
      text: "Learn More",
      href: `/resources/government-resources/${state}-nursing-homes-medicaid-rules-information/`,
    },
    assistedLiving: {
      text: "Learn More",
      href: `/resources/government-resources/${state}-assisted-living-and-in-home-care-medicaid-waiver-information/`,
    },
  };

  let text;
  let href;

  switch (careType) {
    case "nursing-homes":
      text = linkInfo.nursingHomes.text;
      href = linkInfo.nursingHomes.href;
      break;
    default:
      text = linkInfo.assistedLiving.text;
      href = linkInfo.assistedLiving.href;
  }

  return (
    <>
      <hr className="border-t border-faSilver my-6 p-0" />
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center ">
          <div>
            <MedicaidIcon
              width={46}
              height={46}
              className="mb-4 mt-4 mr-4 md:mb-4"
            />
          </div>
          <div>
            <h3 className="my-0 text-2xl">Looking for Medicaid Options?</h3>
            <p className="leading-4">
              If you are using Medicaid to pay for senior living, your options
              are likely different.
            </p>
          </div>
        </div>
        <div className="font-openSans font-semibold text-sm text-faDavysGray pt-4 md:pt-0">
          <Link href={href}  className="text-faDavysGray">
            {text}
            <RightArrow
              width={10}
              height={8}
              stroke="faDavysGray"
              color="faSilver text-faDavysGray"
              className="inline stroke-slate-600 mr-2"
            />
          </Link>
        </div>
      </div>
      <hr className="border-t border-faSilver my-6 p-0" />
    </>
  );
}
