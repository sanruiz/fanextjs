export type PlaceT = {
    address_components?: AddressComponent[];
    formatted_address?:  string;
    geometry?:           Geometry;
    place_id?:           string;
    html_attributions?:  any[];
}

export type AddressComponent = {
    long_name:  string;
    short_name: string;
    types:      string[];
}

export type Geometry = {
    location: Location;
}

export type Location = {
    lat: number;
    lng: number;
}