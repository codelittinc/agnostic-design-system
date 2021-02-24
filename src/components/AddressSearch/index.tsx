import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './AddressSearch.css';
import classnames from 'classnames';
import Input from '../Input';
import List from '../List';
import { MapsProviderContext } from '../MapsProvider';

interface Props {
  onChange: (data?: google.maps.places.AutocompletePrediction) => void;
  inputId: string;
  dropdownId: string;
  placeholder?: string;
  value: string;
  variablesClassName?: string;
}

const AddressSearchInput: React.FC<Props> = props => {
  const { value, onChange, inputId, dropdownId, placeholder, variablesClassName } = props;
  const [initialValue, setInitialValue] = useState(value);
  const [clearable, setClearable] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [{ height }, setInputPosition] = useState({ height: 0 });
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
    setInitialValue(value);
  }, [value]);

  useEffect(() => {
    initialValue.length > 0 ? setClearable(true) : handleClearInput();
  }, [initialValue]);

  useEffect(() => {
    if (isSuggestionListOpen && listRef && listRef.current) {
      listRef.current.style.top = height + 'px';
    }
  }, [height, isSuggestionListOpen]);

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

  const handleClearInput = () => {
    setInitialValue('');
    setClearable(false);
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
      variablesClassName={classnames(
        styles['address-search-list'],
        {
          [styles.hover]: isInputHovered
        },
        variablesClassName
      )}
      listItemCategory='simple'
      label=''
      id={dropdownId}
    />
  );

  return (
    <div className={classnames(variablesClassName, styles['address-search-container'])}>
      <Input
        ref={inputRef}
        id={inputId}
        size='large'
        placeholder={placeholder}
        value={initialValue}
        onChange={handleChangeInput}
        onFocus={() => setIsSuggestionListOpen(hasSuggestions)}
        onMouseEnter={() => setIsInputHovered(true)}
        onMouseLeave={() => setIsInputHovered(false)}
        disabled={loading}
        variablesClassName={classnames(styles['address-search-input'], variablesClassName)}
        withActionIcon={clearable}
        onClickActionIcon={handleClearInput}
      />
      {isSuggestionListOpen && renderSuggestions()}
    </div>
  );
};

export default AddressSearchInput;
