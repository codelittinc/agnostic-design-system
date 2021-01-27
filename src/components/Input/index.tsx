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
  prepend?: React.ReactNode;
  withPrependSeparator?: boolean;
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
    prepend,
    withPrependSeparator,
    ...inputProps
  } = props;
  const [validationState, setValidationState] = useState('');
  const sizeClass = `input--${size}`;
  const messageValidateClass = `input--message-${validationState}`;
  const statusClass = `input--${validationState}`;

  const handleBlur = event => {
    onBlur && onBlur();
    setValidationState(getValidationState(event.target.value, validationRegex, isValid));
  };

  return (
    <div className={classNames(variablesClassName, styles.container)}>
      {label ? (
        <label className={classNames(styles['input--label'])} htmlFor={id}>
          {label}
        </label>
      ) : (
        ''
      )}
      {description ? (
        <span className={classNames(styles['input--description'])}>{description}</span>
      ) : (
        ''
      )}
      <div className={classNames(styles['input--container'])}>
        <input
          {...inputProps}
          className={classNames(
            styles.input,
            styles[sizeClass],
            styles[statusClass],
            !!prepend && !withPrependSeparator ? styles['input-with-prepend'] : '',
            withPrependSeparator ? styles['input-with-prepend-separator'] : ''
          )}
          disabled={disabled}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          onFocus={() => {
            setValidationState('');
            onFocus();
          }}
          onKeyDown={onKeyDown}
          onBlur={handleBlur}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          maxLength={limit}
        />
        {!!prepend && (
          <div
            className={classNames(
              styles['input--prepend'],
              withPrependSeparator ? styles['input--prepend-with-separator'] : ''
            )}
          >
            {prepend}
          </div>
        )}
      </div>
      {message || invalidMessage ? (
        <span className={classNames(styles['input--message'], styles[messageValidateClass])}>
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
  onFocus: () => {},
  validationRegex: '.*'
};

export default Input;
