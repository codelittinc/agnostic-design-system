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
  message?: string;
  name?: string;
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
  required?: boolean;
  size: Size;
  value?: string;
  validations: Validation[];
  variablesClassName?: string;
  withActionIcon?: boolean;
  withPrependSeparator?: boolean;
}

const EMAIL_REGEX = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

const EmailInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { validations, ...inputProps } = props;

  const emailValidations: Validation[] = [
    {
      type: 'RegExp',
      test: EMAIL_REGEX,
      invalidMessage: 'It needs to be a valid email.'
    },
    ...(validations || [])
  ];

  return <Input {...inputProps} ref={ref} validations={emailValidations} />;
});

export default EmailInput;
