import React from 'react';
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
  onChange: () => void;
  placeholder?: string;
  size: Size;
  state?: State;
  value?: string;
  variablesClassName?: string;
}

const TextArea: React.FC<Props> = props => {
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
    ...textareaProps
  } = props;
  const sizeClass = `textarea--${size}`;
  const messageClass = 'textarea--message';
  const messageValidateClass = state ? `textarea--message-${state}` : '';
  const statusClass = state ? `textarea--${state}` : '';
  const descriptionClass = 'textarea--description';
  const labelClass = 'textarea--label';

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

TextArea.defaultProps = {
  size: 'large'
};

export default TextArea;
