"use client";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { slugify } from "@/lib/auxilary/slugify";
import SVGDownArrow from "@/components/icons/svgDownArrow";
import SVGRightArrow from "@/components/icons/svgRightArrow";

export const SVGTarget = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.48 6.83 17.17 3.52 13 3.06V1H11V3.06C6.83 3.52 3.52 6.83 3.06 11H1V13H3.06C3.52 17.17 6.83 20.48 11 20.94V23H13V20.94C17.17 20.48 20.48 17.17 20.94 13H23V11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z"
      fill="#4F6CC4"
    />
  </svg>
);

// FormLabel.tsx
interface FormLabelProps {
  label: string;
  htmlFor: string;
}

type CustomError = Error & { message?: string };


export const FormLabel = ({ label, htmlFor }: FormLabelProps) => (
  <label
    className="font-montserrat font-extrabold uppercase text-sm tracking-widest"
    htmlFor={htmlFor}
  >
    {label}
  </label>
);

const getNearbyCommunitiesUrl = async (city: string, state: string, careType: string) => {

  city = slugify(city);

  state = slugify(state);

  // verify if city and state are valid
  if (!state) {
    throw new Error(`State "${state}" value is missing or invalid.`);
  }

  const apiUrl = `/api?get=closest-city&care_type=${careType}&state=${state}&city=${city}`;
  const res = await fetch(apiUrl);

  // Verify if the request was successful
  if (!res.ok) {
    throw new Error("Could not find communities in this area");
  }

  const { city_slug, found } = await res.json();

  // Verify if citySlug is valid
  let citySlug = "";
  if (city_slug && typeof city_slug === "string") {
    citySlug = `/${city_slug.replace(/ /g, "-")}`;
  }

  if (!found) {
    throw new Error("Could not find communities in this area");
  }

  return `https://www.familyassets.com/${careType}/${state}${citySlug}`;
};

export default function Searchblock({
  careType = "assisted-living"
}: {
  careType: string
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [defaultValue, setDefaultValue] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [careTypeState, setCareType] = useState<string>(careType);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onChangeLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const url = await getNearbyCommunitiesUrl(city, state, careTypeState);
      window.location.assign(url);
    } catch (error) {
      setErrorMessage((error as CustomError)?.message || "An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  const onChangeCareType = (e: ChangeEvent<HTMLSelectElement>) => {
    setCareType(e.target.value);
    setErrorMessage(null);
  };

  const onClickResultItem = ({ city, state_full }: { city: string; state_full: string }) => {
    setLocationValue(`${city}, ${state_full}`);
    setCity(city);
    setState(state_full);
    setResults([]);
    setErrorMessage(null);
  };

  const setLocationValue = (value: string) => {
    const $input: HTMLInputElement | null = document.querySelector("#location-search");
    $input && ($input.value = value);
    setDefaultValue(`${value}`);
  }

  const getLocation = async () => {
    setErrorMessage(null);
    setCity("");
    setState("");
    if (!navigator.geolocation) { } else {
      navigator.geolocation.getCurrentPosition((position) => getLocationSuccess(position), getLocationError)
    }
  };

  function getAddressFromCoordinates(lat: number, lng: number) {
    const autocompleteFieldId = "location-search"; // Replace with the actual ID of your autocomplete field
    const autocompleteField = document.querySelector(`#${autocompleteFieldId}`) as HTMLInputElement;
    let cityName: string = "", stateName: string = "";
    let cityFound = false, stateFound = false;
    const cityTypes: string[] = ['locality', 'administrative_area_level_3'];
    fetch(`/api?get=maps&latlng=${lat},${lng}`).then(data => data.json()).then((res) => {
      const addressComponents = res.results[0].address_components
      for (let i = 0; i < addressComponents.length; i++) {
        const typeList = addressComponents[i].types;
        for (let j = 0; j < typeList.length; j++) {
          if (cityTypes.includes(typeList[j])) {
            cityName = addressComponents[i].long_name;
            cityFound = true
            setCity(cityName);
          } else if (typeList[j] == 'administrative_area_level_1') {
            stateName = addressComponents[i].long_name;
            stateFound = true
            setState(stateName);
          }
          if (cityFound && stateFound)
            break
        }
        if (cityFound && stateFound)
          break
      }
      if (autocompleteField) {
        autocompleteField.value = `${cityName}, ${stateName}`;
        setDefaultValue(`${cityName}, ${stateName}`);
      }
    }
    ).catch((error) => {
      throw new Error("Error fetching address:", error);
    });
  }

  function getLocationSuccess(position: GeolocationPosition) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    getAddressFromCoordinates(lat, lng);
  }

  function getLocationError() {
    console.log('Geolocation error!')
  }

  const SubmitButton = ({ isLoading }: { isLoading: boolean }) => (
    <button
      disabled={isLoading || careTypeState.length < 1}
      className="bg-seafoam hover:bg-link px-5 py-4 text-sm leading-5 rounded-md font-semibold text-background1 w-full ease-in-out duration-700 disabled:opacity-50 disabled:hover:bg-seafoam disabled:cursor-not-allowed"
    >
      <span className="flex align-middle items-center justify-center capitalize">
        {isLoading ? "Loading..." : "Find what you need"}
        <SVGRightArrow width={16} height={14} />
      </span>
    </button>
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ipRequest = await fetch('https://ipapi.co/json/');
        const ipResponse = await ipRequest.json();
        const city: string | null = ("city" in ipResponse) ? ipResponse.city : null;
        const region: string | null = ("region" in ipResponse) ? ipResponse.region : null;
        if (city && region) {
          const address = `${city}, ${region}`;
          setDefaultValue(address);
          setCity(city);
          setState(region);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [])

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedSearchTerm) {
        try {
          const response = await fetch(
            `/api?get=autocomplete&search_query=${debouncedSearchTerm}`
          );
          const data = await response.json();
          setResults(data.autocomplete_results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        setResults([]);
      }
    };

    fetchData();

  }, [debouncedSearchTerm])

  return (
    <div className="w-full bg-primary p-10 py-16">
      <div className="container mx-auto max-w-3xl bg-background1 p-6 rounded-md">
        <h2>Find more types of care on FamilyAssets</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form onSubmit={onSubmit}>
          <div className="columns-1 md:grid md:grid-cols-2 pt-10">
            <fieldset>
              <FormLabel
                label="What are you looking for?"
                htmlFor="care-type-select"
              />
              <div className="relative mb-6 border-b-2 border-primary bg-transparent cursor-pointer">
                <select
                  className="appearance-none focus-visible:outline-none  w-full py-1 px-2 bg-transparent"
                  name="care-type-select"
                  id="care-type-select"
                  onChange={onChangeCareType}
                  value={careTypeState}
                >
                  <option
                    value="no-care-type"
                    className="text-cyan-800"
                  >
                    Select community type or resource
                  </option>
                  <option value="assisted-living">
                    Assisted Living
                  </option>
                  <option value="memory-care">
                    Memory Care
                  </option>
                  <option value="independent-living">
                    Independent Living
                  </option>
                  <option value="nursing-homes">
                    Nursing Homes
                  </option>
                  <option value="home-care">
                    Home Care
                  </option>
                  <option value="continuing-care-retirement-communities">
                    Continuing care retirement communities
                  </option>
                </select>
                <span className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2">
                  <SVGDownArrow width={22} height={22} />
                </span>
              </div>
            </fieldset>

            <fieldset>
              <FormLabel
                label="WHERE ARE YOU LOOKING?"
                htmlFor="location-search"
              />
              <div className="relative mb-6 border-b-2 border-primary bg-transparent cursor-pointer">
                <input
                  id="location-search"
                  type="text"
                  name="location"
                  defaultValue={defaultValue}
                  onChange={onChangeLocation}
                  className="appearance-none focus-visible:outline-none  w-full py-1 px-2 bg-transparent placeholder:text-primary"
                />
                <span
                  className="absolute right-0 top-0 bottom-0 flex items-center px-2"
                  onClick={getLocation}
                >
                  <SVGTarget />
                </span>
                <ul className="absolute left-0 right-0 top-full flex flex-col drop-shadow-md">
                  {results.map(({ city, state, state_full }: { city: string; state: string; state_full: string }, index: number) => (
                    <li key={`${index}-${city}-${state}`} className="bg-background1 p-2">
                      <button onClick={() => onClickResultItem({ city, state_full })}>
                        {`${city}, ${state_full}`}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </fieldset>
          </div>
          <SubmitButton isLoading={isLoading} />
        </form>
      </div>
    </div>
  );
}
