import React, { useContext, useState, useCallback, useLayoutEffect } from 'react';
import { MapsProviderContext } from '../MapsProvider';
import Dropdown from '../Dropdown';
import { debounce } from 'lodash';

interface Props {
  getListTitle: (selected: google.maps.places.AutocompletePrediction) => string;
  id: string;
  onChange: (
    suggestion?: google.maps.places.AutocompletePrediction,
    fullDataSuggestion?: google.maps.places.PlaceResult
  ) => void;
  placeholder?: string;
  selected: google.maps.places.AutocompletePrediction;
  variablesClassName?: string;
}

const AddressSearch: React.FC<Props> = props => {
  const { selected, onChange, id, placeholder, variablesClassName, getListTitle } = props;
  const [placesSuggestions, setPlacesSuggestions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const { loading, service: autocompleteService, sessionToken } = useContext(MapsProviderContext);
  const [suggestionSelected, setSuggestionSelected] =
    useState<google.maps.places.AutocompletePrediction>(selected);
  const [placeService, setPlaceService] = useState<google.maps.places.PlacesService>();

  const cleanSuggestions = () => {
    setPlacesSuggestions([]);
  };

  useLayoutEffect(() => {
    if (window.google) {
      const element = document.createElement('div');
      element.id = 'maps' + Math.random().toString();
      element.style.display = 'none';
      setPlaceService(new google.maps.places.PlacesService(element as any));
    }
  }, [window.google]);

  const handleClickSuggestion = suggestion => {
    setSuggestionSelected(suggestion);
    placeService &&
      placeService.getDetails(
        {
          placeId: suggestion.place_id,
          sessionToken: sessionToken
        },
        (place: google.maps.places.PlaceResult, status: google.maps.places.PlacesServiceStatus) => {
          if (status !== google.maps.places.PlacesServiceStatus.OK) return;

          onChange(suggestion, place);
        }
      );
    cleanSuggestions();
  };

  const getPrecitionsByValue = value => {
    autocompleteService &&
      autocompleteService.getPlacePredictions(
        { input: value, sessionToken: sessionToken },
        (
          predictions: google.maps.places.AutocompletePrediction[],
          status: google.maps.places.PlacesServiceStatus
        ) => {
          if (status !== google.maps.places.PlacesServiceStatus.OK) return;

          setPlacesSuggestions(predictions);
        }
      );
  };

  const debouncedValue = useCallback(
    debounce(value => getPrecitionsByValue(value), 500),
    [autocompleteService]
  );

  const handleChangeInput = e => {
    const newValue = e.target.value;

    newValue && debouncedValue(newValue);
  };

  return (
    <Dropdown<google.maps.places.AutocompletePrediction>
      editable
      onChange={item => {
        item && handleClickSuggestion(item);
      }}
      getListTitle={getListTitle}
      filterOptions={options => options}
      onInputChange={handleChangeInput}
      getItemKey={item => item.place_id}
      getItemLabel={item => item.description}
      getItemValue={item => item.description}
      options={placesSuggestions}
      id={id}
      selected={suggestionSelected}
      selectorText={placeholder}
      listItemCategory='simple'
      disabled={loading}
      variablesClassName={variablesClassName}
    />
  );
};

AddressSearch.defaultProps = {
  getListTitle: suggestion => suggestion.description
};

export default AddressSearch;
