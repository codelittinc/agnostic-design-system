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
  onStateChange: (state: boolean) => void;
  required?: boolean;
}

const VALID = 'valid';
const INVALID = 'invalid';

const getValidationState = valid => (valid ? VALID : INVALID);

const matchesRegex = (value, validationRegex) => {
  const regex = new RegExp(validationRegex);
  return value.match(regex);
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
    onStateChange,
    required,
    ...inputProps
  } = props;
  const [validationState, setValidationState] = useState('');
  const sizeClass = `input--${size}`;
  const messageValidateClass = `input--message-${validationState}`;
  const statusClass = `input--${validationState}`;

  const validate = (event, callback) => {
    const newValue = event.target.value;
    const hasValue = matchesRegex(newValue, '.+');
    const matchesValidationRegex = matchesRegex(newValue, validationRegex || '.*');
    if (required && validationRegex) {
      const valid = hasValue && matchesValidationRegex;
      callback(valid);
    } else if (validationRegex) {
      callback(matchesValidationRegex);
    } else if (required) {
      callback(hasValue);
    }
  };

  const handleBlur = event => {
    onBlur && onBlur();
    validate(event, valid => {
      setValidationState(getValidationState(valid));
    });
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
    onChange(e);
    validate(e, valid => {
      onStateChange(valid);
    });
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
  onFocus: () => {},
  onStateChange: state => state
};

export default Input;
