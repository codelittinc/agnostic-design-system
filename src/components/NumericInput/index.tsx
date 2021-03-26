import React from 'react';
// @TODO: Discover how to disable the no-unused-vars verification for ts interfaces
/* eslint-disable */
import Input, { Filter, Size, Validation } from '../Input';
  /* eslint-enable */

interface Props {
  actionIcon?: React.ReactNode;
  description?: string;
  disabled?: boolean;
  filters?: Filter[];
  id: string;
  label?: string | React.ReactNode;
  limit?: number;
  max?: number;
  message?: string;
  onBlur?: () => void;
  onChange: (e: any) => void;
  onClickActionIcon: () => void;
  onFocus: () => void;
  onKeyDown?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onStateChange: (state: boolean) => void;
  placeholder?: string;
  prepend?: React.ReactNode;
  positive?: boolean;
  radix?: string;
  required?: boolean;
  scale: number;
  size: Size;
  value?: string;
  validations: Validation[];
  variablesClassName?: string;
  withActionIcon?: boolean;
  withPrependSeparator?: boolean;
}

const NumericInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { value, scale, max, radix, positive, ...inputProps } = props;
  const SCALE_REGEX = new RegExp(`^.+${radix}\\d{${scale + 1}}`);

  const isNumeric = num => !isNaN(num);

  const filters = [
    {
      type: 'RegExp',
      test: /[^\d.,-]/
    },
    {
      type: 'function',
      test: value => isNumeric(max) && value > max!
    },
    {
      type: 'function',
      test: value => scale && SCALE_REGEX.test(value)
    },
    {
      type: 'function',
      test: value => positive && value.lastIndexOf('-') !== -1
    }
  ];

  return <Input {...inputProps} ref={ref} value={value} filters={filters} />;
});

NumericInput.defaultProps = {
  size: 'large',
  onFocus: () => {},
  scale: 0
};

export default NumericInput;
