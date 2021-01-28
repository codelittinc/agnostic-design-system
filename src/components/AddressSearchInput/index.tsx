import React, { useContext, useEffect, useState } from 'react';
import styles from './AddressSearchInput.css';
import classnames from 'classnames';
import useMapsAutoComplete from './hooks/useMapsAutoComplete';
import Input from '../Input';
import List from '../List';

type Size = 'large' | 'medium';

interface Props {
  apiKey: string;
  clearable?: boolean;
  value: string;
  onChange: (data?: google.maps.places.AutocompletePrediction) => void;
  size: Size;
}

const ON_BLUR_DELAY = 500;

const AddressSearchInput: React.FC<Props> = props => {
  const { value, onChange } = props;
  const [initialValue, setInitialValue] = useState(props.value);

  useEffect(() => {
    setInitialValue(value);
  }, [value]);

  const [isSuggestionListOpen, setIsSuggestionListOpen] = useState(false);
  const [placesSuggestions, setPlacesSuggestions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const { loading, service: autocompleteService, sessionToken } = useContext(MapsProviderContext);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const hasSuggestions = placesSuggestions.length > 0;

  const cleanSuggestions = () => {
    setPlacesSuggestions([]);
    setIsSuggestionListOpen(false);
  };

  const handleClickSuggestion = (suggestion: google.maps.places.AutocompletePrediction) => {
    onChange(suggestion);
    cleanSuggestions();
  };

  const handleChangeInput = e => {
    setInitialValue(e.target.value);
    if (autocompleteService) {
      autocompleteService.getPlacePredictions(
        { input: e.target.value, sessionToken: sessionToken },
        (
          predictions: google.maps.places.AutocompletePrediction[],
          status: google.maps.places.PlacesServiceStatus
        ) => {
          if (status !== google.maps.places.PlacesServiceStatus.OK) return;

          setPlacesSuggestions(predictions);
          setIsSuggestionListOpen(true);
        }
      );
    }
  };

  const renderSuggestions = () => (
    <List<google.maps.places.AutocompletePrediction>
      size='large'
      options={placesSuggestions}
      onChange={item => {
        item && handleClickSuggestion(item);
      }}
      getItemKey={item => item.place_id}
      getItemLabel={item => item.description}
      getItemValue={item => item.description}
      variablesClassName={classnames(styles['suggestion-container'], {
        [styles.hover]: isInputHovered
      })}
      listItemCategory='simple'
      label=''
      id='search-suggestion-list'
    />
  );

  return (
    <div className={classnames(styles.container)}>
      <Input
        id='search-address'
        size='large'
        placeholder='Enter Address'
        value={initialValue}
        onChange={handleChangeInput}
        onFocus={() => setIsSuggestionListOpen(hasSuggestions)}
        onMouseEnter={() => setIsInputHovered(true)}
        onMouseLeave={() => setIsInputHovered(false)}
        onBlur={() => {
          setTimeout(() => {
            setIsSuggestionListOpen(false);
          }, ON_BLUR_DELAY);
        }}
        disabled={loading}
        variablesClassName={classnames(styles['address-search-input'], {
          [styles['address-search-input-list-opened']]: isSuggestionListOpen
        })}
      />
      {isSuggestionListOpen && renderSuggestions()}
    </div>
  );
};

AddressSearchInput.defaultProps = {
  clearable: true
};

const MapsProviderContext = React.createContext<{
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

export default AddressSearchInput;

export const MapsProvider = ({ apiKey, ...props }) => {
  const { loading, service, sessionToken } = useMapsAutoComplete(apiKey);

  return (
    <MapsProviderContext.Provider value={{ apiKey: apiKey, loading, service, sessionToken }}>
      {props.children}
    </MapsProviderContext.Provider>
  );
};
