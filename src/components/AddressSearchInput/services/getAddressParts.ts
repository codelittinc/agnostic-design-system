interface AddressParts {
  primaryAddress: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
}

export const hasStreetAddress = (suggestion: google.maps.places.AutocompletePrediction) =>
  suggestion.types.includes('street_address');

const isState = (addressComponent: google.maps.GeocoderAddressComponent) =>
  addressComponent.types.includes('administrative_area_level_1') &&
  addressComponent.types.includes('political');

const isCity = (addressComponent: google.maps.GeocoderAddressComponent) =>
  (addressComponent.types.includes('locality') && addressComponent.types.includes('political')) ||
  addressComponent.types.includes('postal_town');

const isRoute = (addressComponent: google.maps.GeocoderAddressComponent) =>
  addressComponent.types.includes('route');

const isStreetNumber = (addressComponent: google.maps.GeocoderAddressComponent) =>
  addressComponent.types.includes('street_number');

const isCountry = (addressComponent: google.maps.GeocoderAddressComponent) =>
  addressComponent.types.includes('country');

const getPrimaryAddress = (streetNumber: string | null, route: string | null): string | null => {
  const primaryAddress = [streetNumber, route].filter(Boolean).join(' ');
  return primaryAddress.trim() || null;
};

export const getAddressParts = (
  place: google.maps.places.PlaceResult,
  suggestion?: string
): AddressParts | null => {
  if (!place) return null;

  /* eslint-disable camelcase */
  const stateComp = place.address_components?.find(isState);
  const state = stateComp?.long_name || stateComp?.short_name || null;

  const cityComp = place.address_components?.find(isCity);
  const city = cityComp?.long_name || cityComp?.short_name || null;

  const countryComp = place.address_components?.find(isCountry);
  const country = countryComp?.short_name || countryComp?.long_name || null;

  const routeComp = place.address_components?.find(isRoute);
  const route = routeComp?.short_name || routeComp?.long_name || null;

  const streetNoComp = place.address_components?.find(isStreetNumber);
  const streetNo = streetNoComp?.short_name || streetNoComp?.long_name || null;

  const primaryAddress = suggestion || getPrimaryAddress(streetNo, route);

  return {
    city,
    country,
    primaryAddress,
    state
  };
};
