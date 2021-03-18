import React, { useState } from 'react';
import classNames from 'classnames';

import styles from '@/components/TextArea/TextArea.css';

type Size = 'large' | 'medium';

interface Props {
  description?: string;
  disabled?: boolean;
  id: string;
  invalidMessage?: string;
  label?: string | React.ReactNode;
  message?: string;
  onBlur?: (e: any) => void;
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
    invalidMessage,
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
  const [validationState, setValidationState] = useState('');
  const [valid, setValid] = useState(!required);
  const sizeClass = `textarea--${size}`;
  const messageClass = 'textarea--message';
  const hasStateTextArea = validationState !== '';
  const messageValidationClass = hasStateTextArea ? `textarea--message-${validationState}` : '';
  const statusClass = hasStateTextArea ? `textarea--${validationState}` : '';
  const descriptionClass = 'textarea--description';
  const labelClass = 'textarea--label';

  const hasValue = value => /\S/.test(value);

  const handleOnChange = e => {
    onChange(e);
    const value = e.target.value;
    const validField = hasValue(value);

    if (required) {
      setValid(validField);
      onStateChange(validField);
    } else {
      onStateChange(validField);
    }
  };

  const handleOnBlur = e => {
    onBlur && onBlur(e);
    if (required) {
      const state = valid ? VALID : INVALID;
      setValidationState(state);
    }
  };

  const handleOnFocus = () => {
    hasStateTextArea && setValidationState('');
  };

  const getMessage = () => {
    return message || invalidMessage ? (
      <span className={classNames(styles[messageClass], styles[messageValidationClass])}>
        {validationState === INVALID && invalidMessage ? invalidMessage : message}
      </span>
    ) : (
      ''
    );
  };

  const getDescription = () => {
    return description ? (
      <span className={classNames(styles[descriptionClass])}>{description}</span>
    ) : (
      ''
    );
  };

  const getLabel = () => {
    return React.isValidElement(label) ? (
      label
    ) : label ? (
      <label htmlFor={id} className={classNames(styles[labelClass])}>
        {label}
      </label>
    ) : (
      ''
    );
  };

  return (
    <div className={classNames(variablesClassName)}>
      {getLabel()}
      {getDescription()}
      <textarea
        {...textareaProps}
        className={classNames(styles.textarea, styles[sizeClass], styles[statusClass])}
        disabled={disabled}
        id={id}
        onChange={handleOnChange}
        placeholder={placeholder}
        value={value}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
      />
      {getMessage()}
    </div>
  );
};

TextArea.defaultProps = {
  size: 'large',
  onStateChange: state => state
};

export default TextArea;
