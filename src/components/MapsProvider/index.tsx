import React from 'react';
import useMapsAutoComplete from '../../utils/hooks/useMapsAutoComplete';

export const MapsProviderContext = React.createContext<{
  apiKey?: string;
  loading: boolean;
  service?: google.maps.places.AutocompleteService;
  sessionToken?: google.maps.places.AutocompleteSessionToken;
}>({
  apiKey: undefined,
  loading: true,
  service: undefined,
  sessionToken: undefined
});

const MapsProvider = ({ apiKey, ...props }) => {
  const { loading, service, sessionToken } = useMapsAutoComplete(apiKey);

  return (
    <MapsProviderContext.Provider value={{ apiKey, loading, service, sessionToken }}>
      {props.children}
    </MapsProviderContext.Provider>
  );
};

export default MapsProvider;
