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
  defaultMask?: string;
  disabled?: boolean;
  disableDropdown?: boolean;
  enableSearch?: boolean;
  excludeCountries?: string[];
  hideLabel?: boolean;
  label?: string | React.ReactNode;
  localNumber?: boolean;
  masks?: Record<string, string>;
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
    defaultMask = '(...) ...-....',
    disabled,
    disableDropdown,
    enableSearch,
    excludeCountries,
    hideLabel,
    label,
    localNumber,
    masks,
    onChange,
    onlyCountries,
    placeholder,
    preferredCountries,
    size,
    value
  } = props;

  // Check if we should use customized mask or use the default mask
  const derivedDefaultMask = (masks && country && masks[country]) || defaultMask;
  // We need to force a re-render when masks change, otherwise they wont apply correctly
  const key = `${country}-${derivedDefaultMask}-${localNumber}`;
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
        alwaysDefaultMask={localNumber}
        autoFormat={autoFormat}
        buttonStyle={localNumber ? { display: 'none' } : undefined}
        defaultMask={derivedDefaultMask}
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
        key={key}
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
