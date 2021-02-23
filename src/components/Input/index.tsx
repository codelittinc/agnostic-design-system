import React, { useState } from 'react';
import classNames from 'classnames';

import styles from '@/components/Input/Input.css';

import DefaultActionIcon from '@/assets/images/icons/web/close-icon.svg';

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
}

const VALID = 'valid';
const INVALID = 'invalid';

const getValidationState = (value, validationRegex, isValid) => {
  const regex = new RegExp(validationRegex);

  return value.match(regex) && isValid(value) ? VALID : INVALID;
};

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
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
    actionIcon,
    withActionIcon,
    onClickActionIcon,
    ...inputProps
  } = props;
  const [validationState, setValidationState] = useState('');
  const sizeClass = `input--${size}`;
  const messageValidateClass = `input--message-${validationState}`;
  const statusClass = `input--${validationState}`;

  const handleBlur = event => {
    onBlur && onBlur();
    if (validationRegex) {
      setValidationState(getValidationState(event.target.value, validationRegex, isValid));
    }
  };

  const getActionIcon = actionIcon => {
    return actionIcon ? (
      <>{actionIcon}</>
    ) : (
      <DefaultActionIcon
        className={classNames(styles['input--action-icon'])}
        height='8'
        width='8'
      />
    );
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
          ref={ref}
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

        {withActionIcon && (
          <div
            className={classNames(styles['input--action-icon-container'])}
            onClick={onClickActionIcon}
          >
            {getActionIcon(actionIcon)}
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
});

Input.defaultProps = {
  size: 'large',
  isValid: () => true,
  onFocus: () => {}
};

export default Input;
