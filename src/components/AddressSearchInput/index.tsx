import React from 'react';
import ClassNames from 'classnames';
import styles from '@/components/AddressSearchInput/AddressSearchInput.css';
import GooglePlacesAutoComplete from 'react-google-places-autocomplete';

type Size = 'large' | 'medium';

interface Props {
  apiKey: string;
  description?: string;
  disabled?: boolean;
  id: string;
  label?: string;
  minLengthAutocomplete?: number;
  noOptionsMessage?: () => string;
  onChange: () => void;
  placeholder?: string;
  size: Size;
  variablesClassName?: string;
}

const AddressSearchInput: React.FC<Props> = props => {
  const {
    apiKey,
    description,
    id,
    label,
    onChange,
    placeholder,
    size,
    variablesClassName,
    noOptionsMessage,
    ...addressSearchInputProps
  } = props;

  const labelSizeClass = `address-search-label--${size}`;
  const spanSizeClass = `address-search-label--${size}`;

  return (
    <div className={ClassNames(variablesClassName)}>
      {label ? (
        <label
          htmlFor={id}
          className={ClassNames(styles['address-search-label'], styles[labelSizeClass])}
        >
          {label}
        </label>
      ) : (
        ''
      )}
      {description ? (
        <span className={ClassNames(styles['address-search-description'], styles[spanSizeClass])}>
          {description}
        </span>
      ) : (
        ''
      )}
      <GooglePlacesAutoComplete
        apiKey={apiKey}
        selectProps={{
          className: styles['address-search-container'],
          classNamePrefix: 'address-search',
          onChange: onChange,
          placeholder: placeholder,
          id: id,
          noOptionsMessage: noOptionsMessage
        }}
        {...addressSearchInputProps}
      />
    </div>
  );
};

AddressSearchInput.defaultProps = {
  id: 'address-search-input',
  size: 'large'
};

export default AddressSearchInput;
