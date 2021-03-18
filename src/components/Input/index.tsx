import React, { useState } from 'react';
import classNames from 'classnames';

import styles from '@/components/Input/Input.css';

import DefaultActionIcon from '@/assets/images/icons/web/close-icon.svg';
import { isValid, getInvalidMessage } from './validations';
import { matchesFilter } from './filters';

type Size = 'large' | 'medium';

export type Validation = {
  type: 'RegExp' | 'function';
  test: RegExp | Function;
  invalidMessage?: string;
};

export type Filter = {
  type: 'RegExp' | 'function';
  test: RegExp | Function;
};

interface Props {
  actionIcon?: React.ReactNode;
  description?: string;
  disabled?: boolean;
  filters?: Filter[];
  id: string;
  label?: string | React.ReactNode;
  limit?: number;
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
  required?: boolean;
  size: Size;
  value?: string;
  validations: Validation[];
  variablesClassName?: string;
  withActionIcon?: boolean;
  withPrependSeparator?: boolean;
}

const VALID = 'valid';
const INVALID = 'invalid';

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
    placeholder,
    size,
    value,
    variablesClassName,
    limit,
    prepend,
    withPrependSeparator,
    actionIcon,
    withActionIcon,
    onClickActionIcon,
    onStateChange,
    required,
    validations,
    filters,
    ...inputProps
  } = props;

  const [validationState, setValidationState] = useState('');
  const [invalidMessage, setInvalidMessage] = useState('');
  const [valid, setValid] = useState(null);

  const sizeClass = `input--${size}`;
  const prependSizeClass = `input--prepend-with-separator-${size}`;
  const messageValidateClass = `input--message-${validationState}`;
  const statusClass = `input--${validationState}`;

  const handleBlur = event => {
    onBlur && onBlur();
    if (typeof valid === 'boolean') {
      setValidationState(valid ? VALID : INVALID);
    }
    const invalidMessage = getInvalidMessage(event.target.value, validations, required);
    setInvalidMessage(invalidMessage);
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

  const handleChange = e => {
    const v = e.target.value;
    if (!matchesFilter(v, filters)) {
      onChange(e);
      const valid = isValid(e.target.value, validations, required);
      setValid(valid);
      onStateChange(valid);
    }
  };

  const getLabel = () => {
    return React.isValidElement(label) ? (
      label
    ) : label ? (
      <label className={classNames(styles['input--label'])} htmlFor={id}>
        {label}
      </label>
    ) : (
      ''
    );
  };

  const getDescription = () => {
    return description ? (
      <span className={classNames(styles['input--description'])}>{description}</span>
    ) : (
      ''
    );
  };

  const getMessage = () => {
    return message || invalidMessage ? (
      <span className={classNames(styles['input--message'], styles[messageValidateClass])}>
        {validationState === INVALID && invalidMessage ? invalidMessage : message}
      </span>
    ) : (
      ''
    );
  };

  return (
    <div className={classNames(variablesClassName, styles.container)}>
      {getLabel()}
      {getDescription()}
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
          onChange={handleChange}
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
              withPrependSeparator ? styles[prependSizeClass] : '',
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
      {getMessage()}
    </div>
  );
});

Input.defaultProps = {
  size: 'large',
  onFocus: () => {},
  onStateChange: state => state,
  onChange: e => e,
  validations: []
};

export default Input;
