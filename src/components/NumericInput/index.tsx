import React from 'react';
import Input, { InputProps } from '../Input';

type Props = {
  max?: number;
  positive?: boolean;
  radix?: string;
  scale?: number;
} & InputProps;

const NON_DIGITS_REGEX = new RegExp(/\D+/, 'g');

const isNumberBiggerThanMax = (radix, num, max) => {
  if (radix) {
    const splitNumbers = num.split(radix);
    const removedPlacementsNumber = splitNumbers[0].replace(NON_DIGITS_REGEX, '');
    const decimalValue = splitNumbers[1];
    const result = Number(`${removedPlacementsNumber}.${decimalValue || 0}`);
    return max < result;
  } else {
    const numberWithoutRadix = num.replace(NON_DIGITS_REGEX, '');
    return max < numberWithoutRadix;
  }
};

const NumericInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { value, scale, max, radix, positive, ...inputProps } = props;
  const SCALE_REGEX = new RegExp(`^.+${radix}\\d{${(scale || 0) + 1}}`);

  const filters = [
    {
      type: 'RegExp',
      test: /[^\d.,-]/
    },
    {
      type: 'function',
      test: value => scale && SCALE_REGEX.test(value)
    },
    {
      type: 'function',
      test: value => positive && value.lastIndexOf('-') !== -1
    },
    {
      type: 'function',
      test: value => isNumberBiggerThanMax(radix, value, max)
    }
  ] as InputProps['filters'];

  return <Input {...inputProps} ref={ref} value={value} filters={filters} />;
});

NumericInput.defaultProps = {
  size: 'large',
  onFocus: () => {},
  scale: 0
};

export default NumericInput;
