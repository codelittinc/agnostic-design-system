import React, { useState } from 'react';
import classNames from 'classnames';

import styles from '@/components/TextArea/TextArea.css';

type Size = 'large' | 'medium';
type State = '' | 'valid' | 'invalid';

interface Props {
  description?: string;
  disabled?: boolean;
  id: string;
  label?: string;
  message?: string;
  onBlur?: () => void;
  onChange: (e: any) => void;
  placeholder?: string;
  size: Size;
  state?: State;
  value?: string;
  variablesClassName?: string;
  required?: boolean;
}

const TextArea: React.FC<Props> = props => {
  const {
    description,
    disabled,
    id,
    label,
    message,
    onBlur,
    onChange,
    placeholder,
    size,
    state,
    value,
    variablesClassName,
    required,
    ...textareaProps
  } = props;
  const [stateTextArea, setStateTextArea] = useState(state);
  const sizeClass = `textarea--${size}`;
  const messageClass = 'textarea--message';
  const messageValidateClass = stateTextArea !== '' ? `textarea--message-${stateTextArea}` : '';
  const statusClass = stateTextArea !== '' ? `textarea--${stateTextArea}` : '';
  const descriptionClass = 'textarea--description';
  const labelClass = 'textarea--label';

  const validateRequired = value => {
    const regex = new RegExp('.+');
    return value.match(regex);
  };

  const handleRequired = value => {
    validateRequired(value) ? setStateTextArea('valid') : setStateTextArea('invalid');
  };

  const handleOnChange = e => {
    onChange(e);
    required && handleRequired(e.target.value);
  };

  const handleOnBlur = e => {
    onBlur && onBlur();
    required && handleRequired(e.target.value);
  };

  return (
    <div className={classNames(variablesClassName)}>
      {label ? (
        <label htmlFor={id} className={classNames(styles[labelClass])}>
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
      <textarea
        {...textareaProps}
        className={classNames(styles.textarea, styles[sizeClass], styles[statusClass])}
        disabled={disabled}
        id={id}
        onChange={handleOnChange}
        placeholder={placeholder}
        value={value}
        onBlur={handleOnBlur}
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

TextArea.defaultProps = {
  size: 'large',
  state: ''
};

export default TextArea;
