import React from 'react';
import Input from '../Input';

type Size = 'large' | 'medium';

interface Props {
  description?: string;
  disabled?: boolean;
  id: string;
  label?: string;
  message?: string;
  onChange: (e: any) => void;
  onFocus: () => void;
  onKeyDown?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onBlur?: () => void;
  isValid?: (value) => boolean;
  placeholder?: string;
  size: Size;
  value?: string;
  variablesClassName?: string;
  validationRegex?: string;
  invalidMessage?: string;
  limit?: number;
  prepend?: React.ReactNode;
  withPrependSeparator?: boolean;
  actionIcon?: React.ReactNode;
  withActionIcon?: boolean;
  onClickActionIcon: () => void;
  scale?: number;
  min: number;
  max?: number;
  radix?: string;
}

const NumericInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { value, onChange, scale, min, max, radix, validationRegex, ...inputProps } = props;
  const MINUS_SIGNAL = '-';
  /* eslint-disable */
  const ONLY_NUMBERS_REGEX = /^-?[0-9,\.-]+$/;
  const customRegex = `^\\d+\\${radix}\\d{${scale}}$`
  /* eslint-enable */

  const limitValidation = value => {
    if (value === MINUS_SIGNAL) {
      return true;
    }

    if (Number(value) && Number(value) < min) {
      return false;
    }

    if (max && Number(value) > max) {
      return false;
    }

    return true;
  };

  const handleOnChange = e => {
    if (
      (e.target.value === '' || ONLY_NUMBERS_REGEX.test(e.target.value)) &&
      limitValidation(e.target.value)
    ) {
      onChange(e);
    }
  };

  return (
    <Input
      {...inputProps}
      ref={ref}
      value={value}
      onChange={handleOnChange}
      validationRegex={validationRegex || (scale && scale > 0 ? customRegex : '.*')}
    />
  );
});

NumericInput.defaultProps = {
  size: 'large',
  isValid: () => true,
  onFocus: () => {},
  min: 0
};

export default NumericInput;
