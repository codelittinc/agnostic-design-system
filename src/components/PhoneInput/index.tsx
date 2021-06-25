import React from 'react';
import ExternalPhoneInput from 'react-phone-input-2';
import classNames from 'classnames';
import styles from '@/components/Input/Input.css';
import 'react-phone-input-2/lib/style.css';

export type Size = 'large' | 'medium';

interface Props {
  autoFormat?: boolean;
  country?: string;
  disabled?: boolean;
  disableDropdown?: boolean;
  enableSearch?: boolean;
  excludeCountries?: string[];
  hideLabel?: boolean;
  label?: string | React.ReactNode;
  onChange: (value: string) => void;
  onlyCountries?: string[];
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
    onChange,
    onlyCountries,
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
        disabled={disabled}
        disableDropdown={disableDropdown}
        enableSearch={enableSearch}
        inputClass={classNames(styles.input, styles[sizeClass], styles['input-with-prepend'])}
        excludeCountries={excludeCountries}
        onlyCountries={onlyCountries}
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
