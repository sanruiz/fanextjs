import CheckIcon from "@/components/icons/checkIcon";

function AditionalCareTypes({ careTypes }: { careTypes: string[] }) {
  const careTypesSorted = [...careTypes].sort((a, b) => a.localeCompare(b));

  return (
    <div className="aditional-care-types">
      <ul className="flex flex-row md:flex-row flex-wrap m-0 p-0 ml-0 list-inside">
        {careTypesSorted.map((care_type: string) => (
          <li
            key={care_type}
            id={care_type}
            className="capitalize text-sm md:text-base mr-4 flex items-center font-openSans font-normal"
          >
            <CheckIcon width={14} height={16} className="mr-0.5" />
            {care_type.replace(/-/g, " ")}
          </li>
        ))}
      </ul>
      {/* <hr className="divider md:hidden" /> */}
    </div>
  );
}

export default AditionalCareTypes;