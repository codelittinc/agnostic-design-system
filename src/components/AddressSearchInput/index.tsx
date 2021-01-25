import React, { useEffect, useRef, useState } from 'react';
import styles from './AddressSearchInput.css';
import classnames from 'classnames';
import { useMapsAutocomplete } from './hooks/useMapsAutocomplete';
import { hasStreetAddress } from './services/getAddressParts';
import { loadGoogleMapsLibrary } from '@/components/AddressSearchInput/utils/loadGoogleMapsLibrary';
import Input from '../Input';
import Button from '../Button';

type Size = 'large' | 'medium';

interface Props {
  apiKey: string;
  clearable?: boolean;
  onChange: (data?: Object) => void;
  size: Size;
  value: string;
}

const ON_BLUR_DELAY = 500;

const AddressSearchInput: React.FC<Props> = props => {
  const { apiKey, onChange, clearable } = props;
  loadGoogleMapsLibrary(apiKey);

  const [value, setValue] = useState(props.value);
  const [isSuggestionListOpen, setIsSuggestionListOpen] = useState(false);
  const [placesSuggestions, setPlacesSuggestions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [autocompleteService, sessionToken] = useMapsAutocomplete();
  const [
    selectedSuggestion,
    setSelectedSuggestion
  ] = useState<google.maps.places.AutocompletePrediction>();
  const [isInputHovered, setIsInputHovered] = useState(false);

  const clearBtnVisible = clearable && value.length > 0;
  const hasSuggestions = placesSuggestions.length > 0;

  useEffect(() => {
    if (!value || !autocompleteService || selectedSuggestion) return;

    autocompleteService.getPlacePredictions(
      { input: value, sessionToken: sessionToken },
      (
        predictions: google.maps.places.AutocompletePrediction[],
        status: google.maps.places.PlacesServiceStatus
      ) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK) return;

        setPlacesSuggestions(predictions);
        setSelectedSuggestion(undefined);
        setIsSuggestionListOpen(true);
      }
    );
  }, [value]);

  const cleanSuggestions = () => {
    setPlacesSuggestions([]);
    setIsSuggestionListOpen(false);
  };

  const handleClickSuggestion = (suggestion: google.maps.places.AutocompletePrediction) => {
    const suggestionDescription = hasStreetAddress(suggestion) ? '' : suggestion.description;

    setSelectedSuggestion(suggestion);
    cleanSuggestions();
    setValue(suggestionDescription);
  };

  const handleChangeInput = e => {
    onChange ? onChange() : setValue(e.target.value);
  };

  const handleClearInput = () => {
    setValue('');
    setSelectedSuggestion(undefined);
    onChange && onChange();
    cleanSuggestions();
  };

  const renderSuggestions = () => (
    <div
      ref={containerRef}
      className={classnames(styles['suggestion-container'], {
        [styles.hover]: isInputHovered
      })}
    >
      {placesSuggestions?.map(suggestion => (
        <div
          key={suggestion.place_id}
          className={styles['suggestion-item']}
          onClick={() => handleClickSuggestion(suggestion)}
        >
          <div>{suggestion.structured_formatting.main_text}</div>
          <div className={styles['secondary-text']}>
            {suggestion.structured_formatting.secondary_text}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      {clearBtnVisible && (
        <Button
          size='medium'
          onClick={handleClearInput}
          category='neutral'
          variablesClassName={classnames(styles['btn-clear'])}
          label='x'
        />
      )}
      <Input
        id='search-address'
        size='large'
        placeholder='Enter Address'
        value={value}
        onChange={handleChangeInput}
        onFocus={() => setIsSuggestionListOpen(hasSuggestions)}
        onMouseEnter={() => setIsInputHovered(true)}
        onMouseLeave={() => setIsInputHovered(false)}
        onBlur={() => {
          setTimeout(() => {
            setIsSuggestionListOpen(false);
          }, ON_BLUR_DELAY);
        }}
      />
      {isSuggestionListOpen && (
        <div className={styles['separator-container']}>
          <div className={styles.separator} />
        </div>
      )}
      {isSuggestionListOpen && renderSuggestions()}
    </div>
  );
};

AddressSearchInput.defaultProps = {
  clearable: true,
  value: ''
};

export default AddressSearchInput;
