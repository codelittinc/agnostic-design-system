import { useEffect, useState } from 'react';
import useGoogleServices from './useGoogleService';

export default function useMapsAutocomplete(
  apiKey: string
): {
  loading: boolean;
  service: google.maps.places.AutocompleteService | undefined;
  sessionToken: google.maps.places.AutocompleteSessionToken | undefined;
} {
  const { loading, google } = useGoogleServices(apiKey);

  const [service, setService] = useState<google.maps.places.AutocompleteService>();
  /**
   * this session token is used for billing purposes. https://developers.google.com/maps/documentation/javascript/places-autocomplete#session_tokens
   */
  const [sessionToken, setSessionToken] = useState<google.maps.places.AutocompleteSessionToken>();

  useEffect(() => {
    const initService = () => {
      if (google) {
        setService(new google.maps.places.AutocompleteService());
        setSessionToken(new google.maps.places.AutocompleteSessionToken());
      }
    };
    if (window) {
      initService();
    }
  }, [loading, google]);

  return { loading, service, sessionToken };
}
