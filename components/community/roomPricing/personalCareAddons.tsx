//Dynamic Icons
import PersonalCareIcon from "@/components/icons/roomprice/personalCareIcon";
import Medication from "@/components/icons/roomprice/medicationIcon";
import MealsIcon from "@/components/icons/roomprice/mealsIcon";
import Laundry from "@/components/icons/roomprice/laundryIcon";
import Housekeeping from "@/components/icons/roomprice/housekeepingIcon";



export default function PersonalCareAddons() {


  return (<>
    <div className="flex flex-col justify-between items-start py-4 md:flex-row">
      <div className="flex flex-col">
        <h3 className="text-2xl leading-8 font-semibold m-0 md:text-[1.75rem]">
          Personal Care Add-Ons
        </h3>
        <p className="text-base leading-normal font-normal text-faDimGray">
          This community offers a range of care levels depending
          on the customized needs of each resident.
        </p>
      </div>
      <div className="flex flex-col pt-4 md:items-end md:pt-0">
        <span className="text-base font-semibold ">
          Services Package Price Range:
        </span>
        <span className="text-2xl font-bold">Varies</span>
      </div>
    </div>
    <div className="grid grid-cols-2 place-items-center gap-y-4 md:grid-cols-5">
      <div className="flex flex-col items-center justify-center p-2 border-e border-faSilver w-full">
        <div className="h-20 w-20 flex items-center justify-center">
          <MealsIcon width={80} height={80} />
        </div>
        <span className="text-sm font-semibold leading-6 text-center ml-2">
          Meals
        </span>
      </div>

      <div className="flex flex-col items-center justify-center p-2 md:border-e border-faSilver w-full">
        <div className="h-20 w-20 flex items-center justify-center">
          <Housekeeping width={80} height={80} />
        </div>
        <span className="text-sm font-semibold leading-6 text-center ml-2">
          Housekeeping
        </span>
      </div>

      <div className="flex flex-col items-center justify-center p-2 border-e border-faSilver w-full">
        <div className="h-20 w-20 flex items-center justify-center">
          <Laundry width={80} height={80} />
        </div>
        <span className="text-sm font-semibold leading-6 text-center ml-2">
          Laundry
        </span>
      </div>

      <div className="flex flex-col items-center justify-center p-2 md:border-e border-faSilver w-full">
        <div className="h-20 w-20 flex items-center justify-center">
          <Medication width={80} height={80} />
        </div>
        <span className="text-sm font-semibold leading-6 text-center ml-2">
          Medication Assistance
        </span>
      </div>

      <div className="flex flex-col items-center justify-center p-2 border-e md:border-0 border-faSilver w-full">
        <div className="h-20 w-20 flex items-center justify-center">
          <PersonalCareIcon width={80} height={80} />
        </div>
        <span className="text-sm font-semibold leading-6 text-center ml-2">
          Personal Care Assistance
        </span>
      </div>
    </div>
  </>)

}