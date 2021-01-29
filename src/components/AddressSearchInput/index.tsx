import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './AddressSearchInput.css';
import classnames from 'classnames';
import useMapsAutoComplete from './hooks/useMapsAutoComplete';
import Input from '../Input';
import List from '../List';
import useCurrentWindowSize from '@/utils/hooks/useWindowResize';

interface Props {
  apiKey: string;
  value: string;
  onChange: (data?: google.maps.places.AutocompletePrediction) => void;
}

const AddressSearchInput: React.FC<Props> = props => {
  const { value, onChange } = props;
  const [initialValue, setInitialValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [{ y, height }, setInputPosition] = useState({ y: 0, height: 0 });
  const { heightWindow, widthWindow } = useCurrentWindowSize();
  const [isSuggestionListOpen, setIsSuggestionListOpen] = useState(false);
  const [placesSuggestions, setPlacesSuggestions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const { loading, service: autocompleteService, sessionToken } = useContext(MapsProviderContext);
  const [
    suggestionSelected,
    setSuggestionSelected
  ] = useState<google.maps.places.AutocompletePrediction>();
  const [isInputHovered, setIsInputHovered] = useState(false);
  const hasSuggestions = placesSuggestions.length > 0;

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        isSuggestionListOpen &&
        listRef.current &&
        !listRef.current.contains(event.target)
      ) {
        setIsSuggestionListOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef, isSuggestionListOpen]);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      setInputPosition(inputRef.current.getBoundingClientRect());
    }
  }, [heightWindow, widthWindow]);

  useEffect(() => {
    setInitialValue(value);
  }, [value]);

  useEffect(() => {
    if (isSuggestionListOpen && listRef && listRef.current) {
      listRef.current.style.top = y + height + 'px';
    }
  }, [y, height, isSuggestionListOpen]);

  const cleanSuggestions = () => {
    setPlacesSuggestions([]);
    setIsSuggestionListOpen(false);
  };

  const handleClickSuggestion = (suggestion: google.maps.places.AutocompletePrediction) => {
    setSuggestionSelected(suggestion);
    suggestionSelected?.description !== suggestion.description
      ? onChange(suggestion)
      : setInitialValue(suggestion.description);

    cleanSuggestions();
  };

  const displaySuggestionList = () => {
    setIsSuggestionListOpen(true);
    if (inputRef && inputRef.current) {
      setInputPosition(inputRef.current.getBoundingClientRect());
    }
  };

  const handleChangeInput = e => {
    setInitialValue(e.target.value);

    if (autocompleteService && e.target.value) {
      autocompleteService.getPlacePredictions(
        { input: e.target.value, sessionToken: sessionToken },
        (
          predictions: google.maps.places.AutocompletePrediction[],
          status: google.maps.places.PlacesServiceStatus
        ) => {
          if (status !== google.maps.places.PlacesServiceStatus.OK) return;

          setPlacesSuggestions(predictions);
          displaySuggestionList();
        }
      );
    }
  };

  const renderSuggestions = () => (
    <List<google.maps.places.AutocompletePrediction>
      ref={listRef}
      size='large'
      options={placesSuggestions}
      onChange={item => {
        item && handleClickSuggestion(item);
      }}
      getItemKey={item => item.place_id}
      getItemLabel={item => item.description}
      getItemValue={item => item.description}
      variablesClassName={classnames(styles['address-search-list'], {
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
        ref={inputRef}
        id='search-address'
        size='large'
        placeholder='Enter Address'
        value={initialValue}
        onChange={handleChangeInput}
        onFocus={() => setIsSuggestionListOpen(hasSuggestions)}
        onMouseEnter={() => setIsInputHovered(true)}
        onMouseLeave={() => setIsInputHovered(false)}
        disabled={loading}
        variablesClassName={classnames(styles['address-search-input'])}
      />
      {isSuggestionListOpen && renderSuggestions()}
    </div>
  );
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
