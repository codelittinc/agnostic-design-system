import React from 'react';
import Input from '../Input';

type Size = 'large' | 'medium';

interface Props {
  description?: string;
  disabled?: boolean;
  id: string;
  allowedCharsRegex: RegExp;
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
  validationRegex?: string;
  invalidMessage?: string;
  limit?: number;
  prepend?: React.ReactNode;
  withPrependSeparator?: boolean;
  actionIcon?: React.ReactNode;
  withActionIcon?: boolean;
  required?: boolean;
  onClickActionIcon: () => void;
  onStateChange?: (state: boolean) => void;
}

const EMAIL_REGEX = '([a-zA-Z0-9.-]+@[a-zA-Z0-9.]+)';

const EmailInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { ...inputProps } = props;

  return <Input {...inputProps} ref={ref} validationRegex={EMAIL_REGEX} />;
});

export default EmailInput;
