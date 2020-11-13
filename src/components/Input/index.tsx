import React from 'react';
import classNames from 'classnames';

import styles from '@/components/Input/Input.css';

type Size = 'large' | 'medium';
type State = '' | 'valid' | 'invalid';

interface Props {
  description?: string;
  disabled?: boolean;
  label?: string;
  message?: string;
  onChange: () => void;
  placeholder?: string;
  state?: State;
  size: Size;
  value?: string;
  variablesClassName?: string;
}

const Input: React.FC<Props> = props => {
  const {
    description,
    disabled,
    label,
    onChange,
    message,
    placeholder,
    value,
    variablesClassName,
    size,
    state,
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
      {label ? <label className={classNames(styles[labelClass])}>{label}</label> : ''}
      {description ? (
        <span className={classNames(styles[descriptionClass])}>{description}</span>
      ) : (
        ''
      )}
      <input
        {...inputProps}
        className={classNames(styles.input, styles[sizeClass], styles[statusClass])}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
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
