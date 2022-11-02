import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import styles from '@/components/TextArea/TextArea.css';
import { ControlledInputProps } from '../Input';

type Size = 'large' | 'medium';

type Props = {
  description?: string;
  disabled?: boolean;
  id: string;
  invalidMessage?: string;
  label?: string | React.ReactNode;
  maxLength?: number;
  message?: string;
  onBlur?: (e: any) => void;
  placeholder?: string;
  size: Size;
  variablesClassName?: string;
  required?: boolean;
} & ControlledInputProps<string>;

const VALID = 'valid';
const INVALID = 'invalid';

const TextArea: React.FC<Props> = props => {
  const {
    description,
    disabled,
    id,
    invalidMessage,
    label,
    maxLength,
    message,
    onBlur,
    onChange,
    onValidationChange,
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
  const invalidMessageClass = 'textarea--message-invalid';
  const statusClass = hasStateTextArea ? `textarea--${validationState}` : '';
  const descriptionClass = 'textarea--description';
  const labelClass = 'textarea--label';
  const hasStateInvalid = validationState === INVALID;

  const hasValue = value => /\S/.test(value);

  const handleOnChange = e => {
    onChange(e);
    const value = e.target.value;
    const validField = hasValue(value);

    if (required) {
      setValid(validField);
      onValidationChange && onValidationChange(validField);
    } else {
      onValidationChange && onValidationChange(validField);
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
      <span
        className={classNames(
          styles[messageClass],
          hasStateInvalid && invalidMessage && styles[invalidMessageClass]
        )}
      >
        {hasStateInvalid && invalidMessage ? invalidMessage : message}
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

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [value]);

  return (
    <div className={classNames(variablesClassName)}>
      {getLabel()}
      {getDescription()}
      <textarea
        ref={textareaRef}
        {...textareaProps}
        className={classNames(styles.textarea, styles[sizeClass], styles[statusClass])}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        placeholder={placeholder}
        value={value}
      />
      {getMessage()}
    </div>
  );
};

TextArea.defaultProps = {
  size: 'large',
  onValidationChange: state => state
};

export default TextArea;
