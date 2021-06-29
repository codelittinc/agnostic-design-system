import React from 'react';
import ExternalPhoneInput from 'react-phone-input-2';
import classNames from 'classnames';
import styles from '@/components/Input/Input.css';
import 'react-phone-input-2/lib/style.css';
/* eslint-disable */
import { Size } from '../Input';
/* eslint-enable */
interface Props {
  autoFormat?: boolean;
  country?: string;
  disabled?: boolean;
  disableDropdown?: boolean;
  enableSearch?: boolean;
  excludeCountries?: string[];
  hideLabel?: boolean;
  label?: string | React.ReactNode;
  localNumber?: boolean;
  onChange: (value: string) => void;
  onlyCountries?: string[];
  placeholder?: string;
  preferredCountries?: string[];
  size: Size;
  value?: string;
}

const PhoneInput = (props: Props) => {
  const {
    autoFormat,
    country,
    disabled,
    disableDropdown,
    enableSearch,
    excludeCountries,
    hideLabel,
    label,
    localNumber,
    onChange,
    onlyCountries,
    placeholder,
    preferredCountries,
    size,
    value
  } = props;
  const sizeClass = `input--${size}`;

  const getLabel = () => {
    return React.isValidElement(label)
      ? label
      : label && (
          <label
            className={classNames(
              styles['input--label'],
              hideLabel && styles['input--label-hidden']
            )}
          >
            {label}
          </label>
        );
  };

  return (
    <>
      {getLabel()}
      <ExternalPhoneInput
        autoFormat={autoFormat}
        buttonStyle={localNumber ? { display: 'none' } : undefined}
        disabled={disabled}
        disableCountryCode={localNumber}
        disableDropdown={disableDropdown}
        enableSearch={enableSearch}
        inputClass={classNames(
          styles.input,
          styles[sizeClass],
          !localNumber && styles['input-with-prepend']
        )}
        excludeCountries={excludeCountries}
        onlyCountries={onlyCountries}
        placeholder={placeholder}
        preferredCountries={preferredCountries}
        country={country}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default PhoneInput;

PhoneInput.defaultProps = {
  size: 'large',
  onChange: e => e
};
