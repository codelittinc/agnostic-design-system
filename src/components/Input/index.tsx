import React from 'react';
import classNames from 'classnames';

import styles from '@/components/Input/Input.css';

type Size = 'large' | 'medium';
type State = '' | 'valid' | 'invalid';

interface Props {
  description?: string;
  disabled?: boolean;
  id: string;
  label?: string;
  message?: string;
  onChange: () => void;
  placeholder?: string;
  size: Size;
  state?: State;
  value?: string;
  variablesClassName?: string;
}

const Input: React.FC<Props> = props => {
  const {
    description,
    disabled,
    id,
    label,
    message,
    onChange,
    placeholder,
    size,
    state,
    value,
    variablesClassName,
    ...inputProps
  } = props;
  const sizeClass = `input--${size}`;
  const messageClass = 'input--message';
  const messageValidateClass = state ? `input--message-${state}` : '';
  const statusClass = state ? `input--${state}` : '';
  const descriptionClass = 'input--description';
  const labelClass = 'input--label';

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
      />
      {message ? (
        <span className={classNames(styles[messageClass], styles[messageValidateClass])}>
          {message}
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

Input.defaultProps = {
  size: 'large'
};

export default Input;
