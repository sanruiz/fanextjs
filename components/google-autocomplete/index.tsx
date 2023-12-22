"use client";
import React, { Dispatch, SetStateAction, useRef } from "react";
import Autocomplete from "react-google-autocomplete";

function GoogleAutocomplete({
  defaultValue,
  setPlace,
}: {
    defaultValue?: string;
  setPlace: Dispatch<SetStateAction<any>>;
}) {
  const inputRef = useRef();

  return (
    <Autocomplete
      id="location-search"
      style={{ width: "100%", backgroundColor: "#F8F8F8" }}
      className="appearance-none focus-visible:outline-none  w-full py-1 px-2 bg-transparent placeholder:text-primary"
      ref={inputRef.current}
      apiKey={process.env.NEXT_PUBLIC_GEOCODE_API_KEY}
      onPlaceSelected={(selected) => {
        setPlace(selected);
      }}
      options={{
        types: ["geocode", "establishment"],
        componentRestrictions: { country: "us" }
      }}
      placeholder=""
      defaultValue={defaultValue}
    ></Autocomplete>
  );
}

export default GoogleAutocomplete;
