import React from 'react';
// @TODO: Discover how to disable the no-unused-vars verification for ts interfaces
/* eslint-disable */
import Input, { InputProps, Validation } from '../Input';
/* eslint-enable */

const EMAIL_REGEX = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

const EmailInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
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
