import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import styles from '@/components/TextArea/TextArea.css';

type Size = 'large' | 'medium';

interface Props {
  description?: string;
  disabled?: boolean;
  id: string;
  label?: string;
  message?: string;
  onBlur?: () => void;
  onChange: (e: any) => void;
  onStateChange: (state: boolean) => void;
  placeholder?: string;
  size: Size;
  value?: string;
  variablesClassName?: string;
  required?: boolean;
}

const VALID = 'valid';
const INVALID = 'invalid';

const TextArea: React.FC<Props> = props => {
  const {
    description,
    disabled,
    id,
    label,
    message,
    onBlur,
    onChange,
    onStateChange,
    placeholder,
    size,
    value,
    variablesClassName,
    required,
    ...textareaProps
  } = props;
  const [stateTextArea, setStateTextArea] = useState('');
  const [stateChange, setStateChange] = useState(true);
  const sizeClass = `textarea--${size}`;
  const messageClass = 'textarea--message';
  const messageValidateClass = stateTextArea !== '' ? `textarea--message-${stateTextArea}` : '';
  const statusClass = stateTextArea !== '' ? `textarea--${stateTextArea}` : '';
  const descriptionClass = 'textarea--description';
  const labelClass = 'textarea--label';

  const validateRequired = value => value.match(new RegExp('.+'));

  const handleRequired = value => {
    validateRequired(value) ? setStateTextArea(VALID) : setStateTextArea(INVALID);
  };

  useEffect(() => {
    required && setStateChange(stateTextArea === VALID);
  }, [stateTextArea]);

  const handleOnChange = e => {
    onChange(e);
    required && handleRequired(e.target.value);
    onStateChange(stateChange);
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
  onStateChange: state => state
};

export default TextArea;
