import { useEffect, useState } from 'react';

export const useMapsAutocomplete = (): [
  google.maps.places.AutocompleteService | undefined,
  google.maps.places.AutocompleteSessionToken | undefined
] => {
  const [service, setService] = useState<google.maps.places.AutocompleteService>();
  /**
   * this session token is used for billing purposes. https://developers.google.com/maps/documentation/javascript/places-autocomplete#session_tokens
   */
  const [sessionToken, setSessionToken] = useState<google.maps.places.AutocompleteSessionToken>();

  useEffect(() => {
    const initService = async () => {
      setService(new google.maps.places.AutocompleteService());
      setSessionToken(new google.maps.places.AutocompleteSessionToken());
    };
    initService();
  }, []);

  return [service, sessionToken];
};
