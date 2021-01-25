import React, { useState } from 'react';
import classNames from 'classnames';

import styles from '@/components/Input/Input.css';

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
}

const VALID = 'valid';
const INVALID = 'invalid';

const getValidationState = (value, validationRegex, isValid) => {
  const regex = new RegExp(validationRegex);

  return value.match(regex) && isValid(value) ? VALID : INVALID;
};

const Input: React.FC<Props> = props => {
  const {
    description,
    disabled,
    id,
    label,
    message,
    onChange,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    onBlur,
    onKeyDown,
    isValid,
    placeholder,
    size,
    value,
    variablesClassName,
    validationRegex,
    invalidMessage,
    limit,
    ...inputProps
  } = props;
  const [validationState, setValidationState] = useState('');
  const sizeClass = `input--${size}`;
  const messageClass = 'input--message';
  const messageValidateClass = validationState ? `input--message-${validationState}` : '';
  const statusClass = validationState ? `input--${validationState}` : '';
  const descriptionClass = 'input--description';
  const labelClass = 'input--label';

  const handleBlur = event => {
    onBlur && onBlur();
    setValidationState(getValidationState(event.target.value, validationRegex, isValid));
  };

  return (
    <div className={classNames(variablesClassName)}>
      {label ? (
        <label className={classNames(styles[labelClass])} htmlFor={id}>
          {label}
        </label>
      ) : (
        ''
      )}
      {description ? (
        <span className={classNames(styles[descriptionClass])}>{description}</span>
      ) : (
        ''
      )}
      <input
        {...inputProps}
        className={classNames(styles.input, styles[sizeClass], styles[statusClass])}
        disabled={disabled}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        onFocus={() => {
          setValidationState('');

          if (onFocus) {
            onFocus();
          }
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onKeyDown={onKeyDown}
        onBlur={handleBlur}
        maxLength={limit}
      />
      {message || invalidMessage ? (
        <span className={classNames(styles[messageClass], styles[messageValidateClass])}>
          {validationState === INVALID && invalidMessage ? invalidMessage : message}
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

Input.defaultProps = {
  size: 'large',
  isValid: () => true,
  validationRegex: '.*'
};

export default Input;
