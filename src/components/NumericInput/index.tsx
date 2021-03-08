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
  placeholder?: string;
  size: Size;
  value?: string;
  variablesClassName?: string;
  invalidMessage?: string;
  limit?: number;
  prepend?: React.ReactNode;
  withPrependSeparator?: boolean;
  actionIcon?: React.ReactNode;
  withActionIcon?: boolean;
  onClickActionIcon: () => void;
  required?: boolean;
  scale: number;
  min: number;
  max?: number;
  radix?: string;
}

const NumericInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { value, onChange, scale, min, max, radix, ...inputProps } = props;
  const MINUS_SIGNAL = '-';
  /* eslint-disable */
  const ONLY_NUMBERS_REGEX = /^-?[0-9,\.-]+$/;
  const customRegex = `^\\d+(\\${radix}\\d{1,${scale}})?$`;
  const SCALE_REGEX = new RegExp(`^.+${radix}\\d{${scale+1}}`);
  /* eslint-enable */

  const isNewValueValid = newValue => {
    if (newValue === MINUS_SIGNAL) {
      return true;
    }

    if (Number(newValue) && Number(newValue) < min) {
      return false;
    }

    if (max && Number(newValue) > max) {
      return false;
    }

    if (scale > 0 && SCALE_REGEX.test(newValue)) {
      return false;
    }

    return true;
  };

  const handleOnChange = e => {
    const newValue = e.target.value;
    if ((newValue === '' || ONLY_NUMBERS_REGEX.test(newValue)) && isNewValueValid(newValue)) {
      onChange(e);
    }
  };

  return (
    <Input
      {...inputProps}
      ref={ref}
      value={value}
      onChange={handleOnChange}
      validationRegex={scale > 0 ? customRegex : '.*'}
    />
  );
});

NumericInput.defaultProps = {
  size: 'large',
  onFocus: () => {},
  min: 0,
  scale: 0
};

export default NumericInput;
