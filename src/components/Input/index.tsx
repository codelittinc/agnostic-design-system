import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from '@/components/Input/Input.css';
import DefaultActionIcon from '@/assets/images/icons/web/close-icon.svg';
import { isValid, getInvalidMessage } from './validations';
import { matchesFilter } from './filters';
import ReactInputMask from 'react-input-mask';

export type Size = 'large' | 'medium';

export type Validation = {
  type: 'RegExp' | 'function';
  test: RegExp | Function;
  invalidMessage?: string;
};

export type Filter = {
  type: 'RegExp' | 'function';
  test: RegExp | Function;
};

export interface Props {
  actionIcon?: React.ReactNode;
  autoComplete?: string;
  description?: string;
  disabled?: boolean;
  filters?: Filter[];
  hideLabel?: boolean;
  id: string;
  inputType?: string;
  label?: string | React.ReactNode;
  limit?: number;
  mask?: string;
  message?: string;
  name?: string;
  onBlur?: () => void;
  onChange: (e: any) => void;
  onClickActionIcon?: () => void;
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
  validations?: Validation[];
  variablesClassName?: string;
  withActionIcon?: boolean;
  withPrependSeparator?: boolean;
}

const VALID = 'valid';
const INVALID = 'invalid';

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    actionIcon,
    autoComplete,
    description,
    disabled,
    filters,
    hideLabel,
    id,
    inputType,
    label,
    limit,
    mask,
    message,
    name,
    onBlur,
    onChange,
    onClickActionIcon,
    onFocus,
    onMouseEnter,
    onMouseLeave,
    onKeyDown,
    onStateChange,
    placeholder,
    prepend,
    required,
    size,
    value,
    variablesClassName,
    validations,
    withPrependSeparator,
    withActionIcon,
    ...inputProps
  } = props;

  const [validationState, setValidationState] = useState('');
  const [invalidMessage, setInvalidMessage] = useState('');
  const initialValidState = required ? false : validations && !(validations.length > 0);
  const [valid, setValid] = useState(initialValidState);
  const sizeClass = `input--${size}`;
  const hasValidationState = validationState !== '';
  const prependSizeClass = `input--prepend-with-separator-${size}`;
  const messageValidateClass = hasValidationState ? `input--message-${validationState}` : '';
  const statusClass = hasValidationState ? `input--${validationState}` : '';
  const enableInitialValidation = value && validations && (required || validations.length > 0);

  const enableValueValidation = value => {
    return required || (validations && validations.length > 0 && value);
  };

  useEffect(() => {
    if (enableInitialValidation) {
      const valid = isValid(value, validations, required);
      setValid(valid);
      onStateChange(valid);
      setValidationState(valid ? VALID : INVALID);
    }
  }, []);

  const handleBlur = event => {
    onBlur && onBlur();
    if (enableValueValidation(value)) {
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
    const newValue = e.target.value;

    if (!matchesFilter(newValue, filters)) {
      onChange(e);
      const valid = isValid(newValue, validations, required);
      setValid(valid);
      onStateChange(valid);
      if (enableValueValidation(newValue)) {
        setValidationState(valid ? VALID : INVALID);
      }
    }
  };

  const getLabel = () => {
    return React.isValidElement(label) ? (
      label
    ) : label ? (
      <label
        className={classNames(styles['input--label'], hideLabel && styles['input--label-hidden'])}
        htmlFor={id}
      >
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
    if (message || invalidMessage) {
      return validationState === INVALID && invalidMessage ? invalidMessage : message;
    }
    return '';
  };

  const displayInput = () => {
    const getAttr = value => {
      return mask ? undefined : value;
    };

    return (
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
        name={name}
        placeholder={placeholder}
        maxLength={limit}
        type={inputType}
        onKeyDown={onKeyDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        autoComplete={getAttr(autoComplete)}
        onChange={getAttr(handleChange)}
        value={getAttr(value || '')}
        onFocus={getAttr(() => {
          setValidationState('');
          onFocus();
        })}
        onBlur={getAttr(handleBlur)}
      />
    );
  };

  const displayMaskedInput = mask => {
    return (
      <ReactInputMask
        autoComplete={autoComplete}
        id={id}
        mask={mask}
        name={id}
        onChange={handleChange}
        onFocus={() => {
          setValidationState('');
          onFocus();
        }}
        onBlur={handleBlur}
        required={false}
        value={value || ''}
      >
        {() => displayInput()}
      </ReactInputMask>
    );
  };

  return (
    <div className={classNames(variablesClassName, styles.container)}>
      {getLabel()}
      {getDescription()}
      <div className={classNames(styles['input--container'])}>
        {mask ? displayMaskedInput(mask) : displayInput()}
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
      <span className={classNames(styles['input--message'], styles[messageValidateClass])}>
        {getMessage()}
      </span>
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
